import { View, Text, Button, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'
import { wxLogin, logout, getUserInfo, updateUserInfo } from '@/api/auth'
import { useState, useEffect } from 'react'
import PrivacyAgreementModal from '@/components/PrivacyAgreementModal'
import { hasAgreedPrivacyPolicy, savePrivacyPolicyAgreement } from '@/constants/privacy'
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

  // 加载用户信息
  useEffect(() => {
    if (user) {
      loadUserInfo()
    }
  }, [user])

  const loadUserInfo = async () => {
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
      Taro.showToast({
        title: error.message || '加载用户信息失败',
        icon: 'none'
      })
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
        const { code } = await Taro.login()
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
          console.log('[Profile] User denied profile access')
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
        const { code: newCode } = await Taro.login()
        loginCode = newCode
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
          console.log('[Profile] User denied profile access')
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
    setEditForm({
      ...editForm,
      [field]: value
    })
  }

  const handleSaveEdit = async () => {
    try {
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
      Taro.showToast({
        title: error.message || '更新失败',
        icon: 'none'
      })
    } finally {
      setLoading(false)
    }
  }

  const navigateToWebView = (path: string) => {
    if (!user) {
      Taro.showToast({
        title: '请先登录',
        icon: 'none'
      })
      return
    }
    Taro.navigateTo({
      url: `/pages/webview/index?url=${path}`
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
      <View className='header'>
        {user ? (
          <View className='user-info'>
            {userInfo.avatarUrl ? (
              <Image
                className='avatar'
                src={userInfo.avatarUrl}
                mode='aspectFill'
              />
            ) : (
              <View className='avatar-placeholder'>
                <Text>👤</Text>
              </View>
            )}
            <Text className='nickname'>{userInfo.nickName || '用户'}</Text>
            <Text className='openid'>ID: {userInfo.openId}</Text>
            <Text className='role'>{userInfo.userType === 'admin' ? '管理员' : '普通用户'}</Text>
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
        <View className='menu-list'>
          {/* 个人信息编辑区域 */}
          <View className='menu-section'>
            <View className='section-header'>
              <Text className='section-title'>个人信息</Text>
              <Button 
                className='edit-btn'
                onClick={() => {
                  if (isEditing) {
                    setEditForm({
                      nickName: userInfo.nickName || '',
                      province: userInfo.province || '',
                      city: userInfo.city || '',
                      workYears: userInfo.workYears || 0,
                    })
                  }
                  setIsEditing(!isEditing)
                }}
              >
                {isEditing ? '取消' : '编辑'}
              </Button>
            </View>

            {isEditing ? (
              <View className='edit-form'>
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
                  <Input
                    className='form-input'
                    value={editForm.province}
                    placeholder='请输入省份'
                    onInput={(e) => handleEditChange('province', e.detail.value)}
                  />
                </View>

                <View className='form-group'>
                  <Text className='form-label'>所在城市</Text>
                  <Input
                    className='form-input'
                    value={editForm.city}
                    placeholder='请输入城市'
                    onInput={(e) => handleEditChange('city', e.detail.value)}
                  />
                </View>

                <View className='form-group'>
                  <Text className='form-label'>工作年限</Text>
                  <Input
                    className='form-input'
                    type='number'
                    value={String(editForm.workYears)}
                    placeholder='请输入工作年限'
                    onInput={(e) => handleEditChange('workYears', parseInt(e.detail.value) || 0)}
                  />
                </View>

                <Button 
                  className='save-btn'
                  onClick={handleSaveEdit}
                  disabled={loading}
                >
                  {loading ? '保存中...' : '保存修改'}
                </Button>
              </View>
            ) : (
              <View className='info-display'>
                <View className='info-item'>
                  <Text className='info-label'>昵称</Text>
                  <Text className='info-value'>{userInfo.nickName || '未设置'}</Text>
                </View>
                <View className='info-item'>
                  <Text className='info-label'>OpenID</Text>
                  <Text className='info-value'>{userInfo.openId}</Text>
                </View>
                <View className='info-item'>
                  <Text className='info-label'>所在省份</Text>
                  <Text className='info-value'>{userInfo.province || '未设置'}</Text>
                </View>
                <View className='info-item'>
                  <Text className='info-label'>所在城市</Text>
                  <Text className='info-value'>{userInfo.city || '未设置'}</Text>
                </View>
                <View className='info-item'>
                  <Text className='info-label'>工作年限</Text>
                  <Text className='info-value'>{userInfo.workYears || 0} 年</Text>
                </View>
              </View>
            )}
          </View>

          {/* 我的内容 */}
          <View className='menu-section'>
            <Text className='section-title'>我的内容</Text>
            <View
              className='menu-item'
              onClick={() => navigateToWebView('/profile/posts')}
            >
              <Text className='menu-icon'>📝</Text>
              <Text className='menu-label'>我的帖子</Text>
              <Text className='menu-arrow'>›</Text>
            </View>
            <View
              className='menu-item'
              onClick={() => navigateToWebView('/profile/favorites')}
            >
              <Text className='menu-icon'>⭐</Text>
              <Text className='menu-label'>我的收藏</Text>
              <Text className='menu-arrow'>›</Text>
            </View>
            <View
              className='menu-item'
              onClick={() => navigateToWebView('/profile/notifications')}
            >
              <Text className='menu-icon'>🔔</Text>
              <Text className='menu-label'>通知中心</Text>
              <Text className='menu-arrow'>›</Text>
            </View>
          </View>

          {/* 设置 */}
          <View className='menu-section'>
            <Text className='section-title'>设置</Text>
            <View
              className='menu-item'
              onClick={() => navigateToWebView('/profile/settings')}
            >
              <Text className='menu-icon'>⚙️</Text>
              <Text className='menu-label'>账号设置</Text>
              <Text className='menu-arrow'>›</Text>
            </View>
            <View
              className='menu-item'
              onClick={() => navigateToWebView('/about')}
            >
              <Text className='menu-icon'>ℹ️</Text>
              <Text className='menu-label'>关于我们</Text>
              <Text className='menu-arrow'>›</Text>
            </View>
          </View>

          {/* 退出登录 */}
          <View className='menu-section'>
            <Button className='logout-btn' onClick={handleLogout}>
              退出登录
            </Button>
          </View>
        </View>
      )}
    </View>
    </>
  )
}
