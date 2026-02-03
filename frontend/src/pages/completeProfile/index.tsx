import Taro from '@tarojs/taro'
import { View, Text, Input, Button, ScrollView, Picker } from '@tarojs/components'
import { useState, useEffect } from 'react'
import { useUserStore } from '@/store/user'
import './index.scss'

// 预设的职业列表
const OCCUPATIONS = [
  '开发',
  '产品',
  '设计',
  '运营',
  '写作',
  '运维',
  '其它'
]

// 预设的身份状态列表
const IDENTITIES = [
  '正常在班中',
  '远程工作者',
  '自由职业者',
  '独立开发者',
  '斜杠青年',
  '数字游民',
  '外包团队',
  'HR'
]

// 预设的城市列表
const CITIES = [
  '海外',
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '成都',
  '西安',
  '厦门',
  '武汉',
  '长沙',
  '苏州',
  '郑州',
  '南京',
  '云南',
  '海南',
  '大理',
  '其他'
]

export default function CompleteProfile() {
  const { user } = useUserStore()
  const [occupation, setOccupation] = useState('')
  const [occupationIndex, setOccupationIndex] = useState(0)
  const [occupationCustom, setOccupationCustom] = useState('')
  const [occupationMode, setOccupationMode] = useState<'select' | 'custom'>('select')

  const [identity, setIdentity] = useState('')
  const [identityIndex, setIdentityIndex] = useState(0)
  const [identityCustom, setIdentityCustom] = useState('')
  const [identityMode, setIdentityMode] = useState<'select' | 'custom'>('select')

  const [city, setCity] = useState('')
  const [cityIndex, setCityIndex] = useState(0)
  const [cityCustom, setCityCustom] = useState('')
  const [cityMode, setCityMode] = useState<'select' | 'custom'>('select')

  const [loading, setLoading] = useState(false)

  Taro.setNavigationBarTitle({
    title: '完善个人信息'
  })

  // 处理职业选择
  const handleOccupationChange = (e: any) => {
    const index = e.detail.value
    setOccupationIndex(index)
    setOccupation(OCCUPATIONS[index])
    setOccupationMode('select')
  }

  // 处理身份选择
  const handleIdentityChange = (e: any) => {
    const index = e.detail.value
    setIdentityIndex(index)
    setIdentity(IDENTITIES[index])
    setIdentityMode('select')
  }

  // 处理城市选择
  const handleCityChange = (e: any) => {
    const index = e.detail.value
    setCityIndex(index)
    setCity(CITIES[index])
    setCityMode('select')
  }

  // 切换职业输入模式
  const toggleOccupationMode = () => {
    if (occupationMode === 'select') {
      setOccupationMode('custom')
      setOccupationCustom(occupation)
    } else {
      setOccupationMode('select')
      setOccupation(OCCUPATIONS[occupationIndex])
    }
  }

  // 切换身份输入模式
  const toggleIdentityMode = () => {
    if (identityMode === 'select') {
      setIdentityMode('custom')
      setIdentityCustom(identity)
    } else {
      setIdentityMode('select')
      setIdentity(IDENTITIES[identityIndex])
    }
  }

  // 切换城市输入模式
  const toggleCityMode = () => {
    if (cityMode === 'select') {
      setCityMode('custom')
      setCityCustom(city)
    } else {
      setCityMode('select')
      setCity(CITIES[cityIndex])
    }
  }

  // 处理提交
  const handleSubmit = async () => {
    // 验证必填项
    const finalOccupation = occupationMode === 'custom' ? occupationCustom : occupation
    const finalIdentity = identityMode === 'custom' ? identityCustom : identity
    const finalCity = cityMode === 'custom' ? cityCustom : city

    if (!finalOccupation.trim()) {
      Taro.showToast({ title: '请选择或输入职业', icon: 'none' })
      return
    }

    if (!finalIdentity.trim()) {
      Taro.showToast({ title: '请选择或输入身份状态', icon: 'none' })
      return
    }

    if (!finalCity.trim()) {
      Taro.showToast({ title: '请选择或输入城市', icon: 'none' })
      return
    }

    setLoading(true)

    try {
      // 调用后端 API 更新用户信息
      const response = await Taro.request({
        url: 'http://192.168.31.20:8080/api/auth/user/updateProfile',
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        data: {
          openid: user?.openId || '',
          occupation: finalOccupation,
          identity: finalIdentity,
          city: finalCity
        }
      })

      if (response.statusCode === 200) {
        const data = response.data as any
        if (data.success) {
          Taro.showToast({ title: '个人信息已更新', icon: 'success' })
          // 延迟后返回上一页
          setTimeout(() => {
            Taro.navigateBack()
          }, 1500)
        } else {
          Taro.showToast({ title: data.message || '更新失败', icon: 'none' })
        }
      } else {
        Taro.showToast({ title: '网络请求失败', icon: 'none' })
      }
    } catch (error: any) {
      console.error('更新用户信息失败:', error)
      Taro.showToast({ title: error.message || '更新失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView scrollY className="complete-profile-container">
      <View className="profile-header">
        <Text className="header-title">完善个人信息</Text>
        <Text className="header-subtitle">社区将根据您的以下选择为您推荐相关内容</Text>
      </View>

      {/* 职业选择 */}
      <View className="section">
        <Text className="section-title">职业</Text>
        {occupationMode === 'select' ? (
          <View>
            <Picker
              mode="selector"
              range={OCCUPATIONS}
              value={occupationIndex}
              onChange={handleOccupationChange}
            >
              <View className="picker-trigger">
                <Text className="picker-value">{occupation || '请选择职业'}</Text>
              </View>
            </Picker>
            <Button
              className="toggle-mode-btn"
              size="mini"
              onClick={toggleOccupationMode}
            >
              自定义输入
            </Button>
          </View>
        ) : (
          <View>
            <Input
              className="custom-input"
              placeholder="请输入您的职业"
              value={occupationCustom}
              onInput={(e) => setOccupationCustom(e.detail.value)}
            />
            <Button
              className="toggle-mode-btn"
              size="mini"
              onClick={toggleOccupationMode}
            >
              选择预设
            </Button>
          </View>
        )}
      </View>

      {/* 身份状态选择 */}
      <View className="section">
        <Text className="section-title">身份状态</Text>
        {identityMode === 'select' ? (
          <View>
            <Picker
              mode="selector"
              range={IDENTITIES}
              value={identityIndex}
              onChange={handleIdentityChange}
            >
              <View className="picker-trigger">
                <Text className="picker-value">{identity || '请选择身份状态'}</Text>
              </View>
            </Picker>
            <Button
              className="toggle-mode-btn"
              size="mini"
              onClick={toggleIdentityMode}
            >
              自定义输入
            </Button>
          </View>
        ) : (
          <View>
            <Input
              className="custom-input"
              placeholder="请输入您的身份状态"
              value={identityCustom}
              onInput={(e) => setIdentityCustom(e.detail.value)}
            />
            <Button
              className="toggle-mode-btn"
              size="mini"
              onClick={toggleIdentityMode}
            >
              选择预设
            </Button>
          </View>
        )}
      </View>

      {/* 城市选择 */}
      <View className="section">
        <Text className="section-title">城市</Text>
        {cityMode === 'select' ? (
          <View>
            <Picker
              mode="selector"
              range={CITIES}
              value={cityIndex}
              onChange={handleCityChange}
            >
              <View className="picker-trigger">
                <Text className="picker-value">{city || '请选择城市'}</Text>
              </View>
            </Picker>
            <Button
              className="toggle-mode-btn"
              size="mini"
              onClick={toggleCityMode}
            >
              自定义输入
            </Button>
          </View>
        ) : (
          <View>
            <Input
              className="custom-input"
              placeholder="请输入您的城市"
              value={cityCustom}
              onInput={(e) => setCityCustom(e.detail.value)}
            />
            <Button
              className="toggle-mode-btn"
              size="mini"
              onClick={toggleCityMode}
            >
              选择预设
            </Button>
          </View>
        )}
      </View>

      {/* 提交按钮 */}
      <View className="button-group">
        <Button
          className="submit-btn"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading}
        >
          {loading ? '更新中...' : '下一步'}
        </Button>
      </View>
    </ScrollView>
  )
}
