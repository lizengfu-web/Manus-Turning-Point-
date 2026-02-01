import { View, Text, Button, Image, Input, Picker, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'
import { wxLogin, logout, getUserInfo, updateUserInfo } from '@/api/auth'
import { useState, useEffect, useMemo } from 'react'
import PrivacyAgreementModal from '@/components/PrivacyAgreementModal'
import { hasAgreedPrivacyPolicy, savePrivacyPolicyAgreement } from '@/constants/privacy'
import { getProvinceList, getCityListByProvince } from '@/pages/guide/calculator/data'
import './index.scss'

export default function Profile() {
  const { user, setUser, clearUser } = useUserStore()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [pendingLogin, setPendingLogin] = useState<{ code: string; userInfo: any } | null>(null)
  const [userInfo, setUserInfo] = useState({
    nickName: '',
    avatarUrl: '',
    openId: '',
    userType: '',
    province: '',
    city: '',
    workYears: 0,
  })
  const [editForm, setEditForm] = useState({
    nickName: '',
    province: '',
    city: '',
    workYears: 0,
  })
  const [unreadMessages, setUnreadMessages] = useState(0)

  // 获取省份列表
  const provinceList = useMemo(() => getProvinceList(), [])
  
  // 根据选中的省份获取城市列表
  const cityList = useMemo(() => {
    const selectedProvince = provinceList.find(p => p.name === editForm.province)
    if (selectedProvince) {
      return getCityListByProvince(selectedProvince.key)
    }
    return []
  }, [editForm.province, provinceList])

  // 直辖市列表
  const municipalCities = ['北京', '上海', '天津', '重庆']

  // 加载用户信息
  useEffect(() => {
    if (user) {
      loadUserInfo()
      // 模拟未读消息数
      setUnreadMessages(2)
    }
  }, [user])

  const loadUserInfo = async (retryCount = 0) => {
    try {
      setLoading(true)
      const info = await getUserInfo()
      setUserInfo(info)
      setEditForm({
        nickName: info.nickName || '',
        province: info.province || '',
        city: info.city || '',
        workYears: info.workYears || 0,
      })
    } catch (error: any) {
      console.error('加载用户信息错误:', error)
      
      // 如果是网络错误且重试次数少于 2 次，尝试静默重试
      if (error.message === '网络请求失败' && retryCount < 2) {
        console.log(`[Profile] 网络请求失败，正在进行第 ${retryCount + 1} 次重试...`)
        setTimeout(() => loadUserInfo(retryCount + 1), 1000)
        return
      }

      // 如果最终还是失败，且没有本地缓存，则给予友好提示
      // 注意：getUserInfo 内部已经处理了本地缓存降级，如果走到这里说明本地也没有缓存
      console.log('[Profile] 网络连接失败，将使用离线模式')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async () => {
    try {
      console.log('[Profile] Starting login...')
      
      // 检查是否已同意隐私协议
      if (!hasAgreedPrivacyPolicy()) {
        console.log('[Profile] User has not agreed to privacy policy, showing modal')
        
        let loginRes;
        try {
          loginRes = await Taro.login();
        } catch (e) {
          console.error('[Profile] Taro.login System Error:', e);
          throw new Error('微信登录服务暂时不可用');
        }
        
        const { code } = loginRes;
        console.log('[Profile] Got code:', code?.substring(0, 10) + '...')
        
        // 尝试获取用户信息（可能会失败，但不影响登录）
        let userProfileInfo = {
          nickName: '微信用户',
          avatarUrl: ''
        }
        
        try {
          const { userInfo } = await Taro.getUserProfile({
            desc: '用于完善用户资料'
          })
          userProfileInfo = {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl
          }
          console.log('[Profile] Got user profile')
        } catch (e) {
          // 用户拒绝授权，使用默认值
          console.log('[Profile] User denied profile access or System Error')
        }
        
        // 保存登录信息，等待用户同意隐私协议
        setPendingLogin({ code, userInfo: userProfileInfo })
        setShowPrivacyModal(true)
        return
      }
      
      // 用户已同意隐私协议，直接登录
      await performLogin()
    } catch (error: any) {
      console.error('[Profile] Login error:', error)
      Taro.showToast({
        title: error.message || '登录失败',
        icon: 'none',
        duration: 3000
      })
    }
  }

  const performLogin = async (code?: string, userProfileInfo?: any) => {
    try {
      let loginCode = code
      let loginUserInfo = userProfileInfo
      
      if (!loginCode) {
        console.log('[Profile] Getting new code...')
        let loginRes;
        try {
          loginRes = await Taro.login();
        } catch (e) {
          console.error('[Profile] Taro.login System Error:', e);
          throw new Error('微信登录服务暂时不可用');
        }
        loginCode = loginRes.code
        console.log('[Profile] Got code:', loginCode?.substring(0, 10) + '...')
        
        // 尝试获取用户信息
        loginUserInfo = {
          nickName: '微信用户',
          avatarUrl: ''
        }
        
        try {
          const { userInfo } = await Taro.getUserProfile({
            desc: '用于完善用户资料'
          })
          loginUserInfo = {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl
          }
          console.log('[Profile] Got user profile')
        } catch (e) {
          console.log('[Profile] User denied profile access or System Error')
        }
      }

      console.log('[Profile] Calling wxLogin...')
      const result = await wxLogin({
        code: loginCode,
        userInfo: loginUserInfo
      })

      console.log('[Profile] Login successful')
      setUser(result.user)
      Taro.showToast({
        title: '登录成功',
        icon: 'success'
      })
    } catch (error: any) {
      console.error('[Profile] Login error:', error)
      Taro.showToast({
        title: error.message || '登录失败',
        icon: 'none',
        duration: 3000
      })
    }
  }

  const handlePrivacyAgree = async () => {
    try {
      console.log('[Profile] User agreed to privacy policy')
      // 保存同意状态
      savePrivacyPolicyAgreement()
      setShowPrivacyModal(false)
      
      // 继续登录流程
      if (pendingLogin) {
        await performLogin(pendingLogin.code, pendingLogin.userInfo)
        setPendingLogin(null)
      }
    } catch (error: any) {
      console.error('[Profile] Error handling privacy agreement:', error)
      Taro.showToast({
        title: '处理协议失败',
        icon: 'none'
      })
    }
  }

  const handlePrivacyDisagree = () => {
    console.log('[Profile] User disagreed to privacy policy')
    setShowPrivacyModal(false)
    setPendingLogin(null)
    Taro.showToast({
      title: '您已拒绝隐私协议，无法继续登录',
      icon: 'none'
    })
  }

  const handleLogout = async () => {
    try {
      const { confirm } = await Taro.showModal({
        title: '提示',
        content: '确定要退出登录吗？'
      })

      if (confirm) {
        logout()
        clearUser()
        Taro.showToast({
          title: '已退出登录',
          icon: 'success'
        })
      }
    } catch (error) {
      // 用户取消
    }
  }

  const handleEditChange = (field: string, value: any) => {
    if (field === 'province') {
      // 当选择省份时，重置城市
      setEditForm({
        ...editForm,
        [field]: value,
        city: ''
      })
      
      // 如果是直辖市，自动设置城市
      if (municipalCities.includes(value)) {
        setEditForm(prev => ({
          ...prev,
          city: value
        }))
      }
    } else {
      setEditForm({
        ...editForm,
        [field]: value
      })
    }
  }

  const handleSaveEdit = async () => {
    try {
      // 验证必填字段
      if (!editForm.nickName.trim()) {
        Taro.showToast({
          title: '昵称不能为空',
          icon: 'none'
        })
        return
      }

      if (!editForm.province) {
        Taro.showToast({
          title: '请选择省份',
          icon: 'none'
        })
        return
      }

      if (!editForm.city) {
        Taro.showToast({
          title: '请选择城市',
          icon: 'none'
        })
        return
      }

      setLoading(true)
      const updated = await updateUserInfo({
        nickName: editForm.nickName,
        province: editForm.province,
        city: editForm.city,
        workYears: editForm.workYears,
      })
      
      setUserInfo(updated)
      setIsEditing(false)
      
      Taro.showToast({
        title: '信息更新成功',
        icon: 'success'
      })
    } catch (error: any) {
      console.error('保存用户信息错误:', error)
      Taro.showToast({
        title: error.message || '更新失败',
        icon: 'none'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleNavigate = (path: string) => {
    if (!user) {
      Taro.showToast({
        title: '请先登录',
        icon: 'none'
      })
      return
    }
    Taro.navigateTo({
      url: path
    })
  }

  return (
    <>
      <PrivacyAgreementModal
        visible={showPrivacyModal}
        onAgree={handlePrivacyAgree}
        onDisagree={handlePrivacyDisagree}
      />
      <View className='profile-page'>
        <ScrollView scrollY className='profile-scroll'>
          <View className='header'>
            {user ? (
              <View className='user-info'>
                <Image
                  className='avatar'
                  src={userInfo.avatarUrl || '/assets/default-avatar.png'}
                  mode='aspectFill'
                />
                <View className='user-details'>
                  <Text className='nickname'>{userInfo.nickName || '用户'}</Text>
                  <Text className='location'>{userInfo.province} {userInfo.city || '未设置'}</Text>
                </View>
                <Button className='edit-btn' onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? '取消' : '编辑'}
                </Button>
              </View>
            ) : (
              <View className='login-prompt'>
                <Text className='prompt-text'>登录后体验更多功能</Text>
                <Button className='login-btn' onClick={handleLogin}>
                  微信登录
                </Button>
              </View>
            )}
          </View>

          {user && (
            <>
              {/* 编辑模式 */}
              {isEditing ? (
                <View className='edit-form-section'>
                  <View className='form-group'>
                    <Text className='form-label'>昵称</Text>
                    <Input
                      className='form-input'
                      value={editForm.nickName}
                      placeholder='请输入昵称'
                      onInput={(e) => handleEditChange('nickName', e.detail.value)}
                    />
                  </View>

                  <View className='form-group'>
                    <Text className='form-label'>所在省份</Text>
                    <Picker
                      mode='selector'
                      range={provinceList}
                      rangeKey='name'
                      value={provinceList.findIndex(p => p.name === editForm.province)}
                      onChange={(e) => {
                        const selectedProvince = provinceList[e.detail.value]
                        handleEditChange('province', selectedProvince.name)
                      }}
                    >
                      <View className={`picker-select ${!editForm.province ? 'placeholder' : ''}`}>
                        <Text>{editForm.province || '请选择省份'}</Text>
                        <Text className='picker-arrow'>▼</Text>
                      </View>
                    </Picker>
                  </View>

                  <View className='form-group'>
                    <Text className='form-label'>所在城市</Text>
                    <Picker
                      mode='selector'
                      range={cityList}
                      rangeKey='name'
                      value={cityList.findIndex(c => c.name === editForm.city)}
                      onChange={(e) => {
                        const selectedCity = cityList[e.detail.value]
                        handleEditChange('city', selectedCity.name)
                      }}
                      disabled={!editForm.province}
                    >
                      <View className={`picker-select ${!editForm.city ? 'placeholder' : ''} ${!editForm.province ? 'disabled' : ''}`}>
                        <Text>{editForm.city || (editForm.province ? '请选择城市' : '请先选择省份')}</Text>
                        <Text className='picker-arrow'>▼</Text>
                      </View>
                    </Picker>
                  </View>

                  <View className='form-group'>
                    <Text className='form-label'>工作年限</Text>
                    <Input
                      className='form-input'
                      type='number'
                      value={String(editForm.workYears)}
                      placeholder='请输入工作年限'
                      onInput={(e) => handleEditChange('workYears', Number(e.detail.value))}
                    />
                  </View>

                  <Button 
                    className='save-btn' 
                    onClick={handleSaveEdit}
                    loading={loading}
                    disabled={loading}
                  >
                    保存修改
                  </Button>
                </View>
              ) : (
                <>
                  {/* 功能菜单 */}
                  <View className='menu-section'>
                    <View className='menu-item' onClick={() => handleNavigate('/pages/profile/posts/index')}>
                      <View className='menu-icon'>📝</View>
                      <View className='menu-content'>
                        <Text className='menu-title'>我的帖子</Text>
                        <Text className='menu-desc'>查看我在心声驿站发布的帖子</Text>
                      </View>
                      <Text className='menu-arrow'>›</Text>
                    </View>

                    <View className='menu-item' onClick={() => handleNavigate('/pages/profile/collections/index')}>
                      <View className='menu-icon'>⭐</View>
                      <View className='menu-content'>
                        <Text className='menu-title'>我的收藏</Text>
                        <Text className='menu-desc'>收藏的精选帖子和内容</Text>
                      </View>
                      <Text className='menu-arrow'>›</Text>
                    </View>

                    <View className='menu-item' onClick={() => handleNavigate('/pages/profile/messages/index')}>
                      <View className='menu-icon'>💬</View>
                      <View className='menu-content'>
                        <Text className='menu-title'>消息</Text>
                        <Text className='menu-desc'>别人给我的评论和互动</Text>
                      </View>
                      {unreadMessages > 0 && (
                        <View className='unread-badge'>
                          <Text>{unreadMessages}</Text>
                        </View>
                      )}
                      <Text className='menu-arrow'>›</Text>
                    </View>

                    <View className='menu-item' onClick={() => handleNavigate('/pages/profile/feedback/index')}>
                      <View className='menu-icon'>💡</View>
                      <View className='menu-content'>
                        <Text className='menu-title'>意见反馈</Text>
                        <Text className='menu-desc'>告诉我们你的想法和建议</Text>
                      </View>
                      <Text className='menu-arrow'>›</Text>
                    </View>
                  </View>

                  {/* 底部信息 */}
                  <View className='footer-section'>
                    <View className='app-info'>
                      <Text className='app-name'>转角驿站</Text>
                      <Text className='app-version'>v1.0.0</Text>
                      <Text className='app-desc'>职场转角的温暖驿站</Text>
                    </View>

                    <Button className='logout-btn' onClick={handleLogout}>
                      退出登录
                    </Button>
                  </View>
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </>
  )
}
