import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

interface ConsultationItem {
  id: number
  title: string
  description: string
  icon: string
  category: 'legal' | 'compensation' | 'procedure' | 'rights'
}

const consultationItems: ConsultationItem[] = [
  {
    id: 1,
    title: '裁员法律权益',
    description: '了解你在裁员中的法律权益和保护',
    icon: '⚖️',
    category: 'legal'
  },
  {
    id: 2,
    title: '经济补偿金计算',
    description: '如何计算应得的经济补偿金',
    icon: '💰',
    category: 'compensation'
  },
  {
    id: 3,
    title: '裁员程序和流程',
    description: '企业裁员的标准程序和注意事项',
    icon: '📋',
    category: 'procedure'
  },
  {
    id: 4,
    title: '员工权利保护',
    description: '了解你在裁员中的各项权利',
    icon: '🛡️',
    category: 'rights'
  },
  {
    id: 5,
    title: '谈判技巧',
    description: '与公司谈判补偿的有效技巧',
    icon: '🤝',
    category: 'legal'
  },
  {
    id: 6,
    title: '社保和公积金处理',
    description: '裁员后社保和公积金如何处理',
    icon: '📊',
    category: 'compensation'
  }
]

export default function Layoff() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ConsultationItem['category']>('all')
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: '你好！我是转角驿站的裁员咨询助手。我可以帮助你了解裁员相关的法律权益、补偿计算、程序流程等。请告诉我你想咨询的问题。'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  const filteredItems = selectedCategory === 'all' 
    ? consultationItems 
    : consultationItems.filter(item => item.category === selectedCategory)

  const handleItemClick = (item: ConsultationItem) => {
    Taro.navigateTo({
      url: `/pages/webview/index?url=/layoff/${item.id}`
    })
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      Taro.showToast({ title: '请输入问题', icon: 'none' })
      return
    }

    try {
      setLoading(true)
      
      // 添加用户消息
      const userMessage = inputValue
      setChatMessages(prev => [...prev, { role: 'user', content: userMessage }])
      setInputValue('')

      // 模拟 AI 回复（实际应该调用后端 API）
      setTimeout(() => {
        const responses = [
          '根据《劳动合同法》，企业进行经济性裁员时，应当提前30天通知员工或支付1个月工资作为代通知金。',
          '经济补偿金的计算标准是：按照员工在本单位工作的年限，每满一年支付一个月工资，最多支付12个月工资。',
          '裁员程序通常包括：制定裁员方案 → 通知工会 → 通知员工 → 协商 → 办理离职手续。',
          '在裁员过程中，你有权了解裁员原因、获得书面通知、进行协商、获得经济补偿等权利。',
          '与公司谈判时，建议准备好相关证据（工作年限证明、工资条等），了解法律规定的最低补偿标准。',
          '裁员后，企业应当为你办理社保转移手续，公积金可以申请提取或转移。'
        ]
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        setChatMessages(prev => [...prev, { role: 'assistant', content: randomResponse }])
      }, 800)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='layoff-page'>
      {!showChat ? (
        <>
          {/* 页面头部 */}
          <View className='layoff-header'>
            <Text className='layoff-title'>裁员咨询</Text>
            <Text className='layoff-subtitle'>了解你的权利，保护你的权益</Text>
          </View>

          {/* 分类筛选 */}
          <ScrollView className='category-filter' scrollX>
            <View className='category-item' onClick={() => setSelectedCategory('all')}>
              <Text className={selectedCategory === 'all' ? 'active' : ''}>全部</Text>
            </View>
            <View className='category-item' onClick={() => setSelectedCategory('legal')}>
              <Text className={selectedCategory === 'legal' ? 'active' : ''}>法律权益</Text>
            </View>
            <View className='category-item' onClick={() => setSelectedCategory('compensation')}>
              <Text className={selectedCategory === 'compensation' ? 'active' : ''}>补偿计算</Text>
            </View>
            <View className='category-item' onClick={() => setSelectedCategory('procedure')}>
              <Text className={selectedCategory === 'procedure' ? 'active' : ''}>程序流程</Text>
            </View>
            <View className='category-item' onClick={() => setSelectedCategory('rights')}>
              <Text className={selectedCategory === 'rights' ? 'active' : ''}>权利保护</Text>
            </View>
          </ScrollView>

          {/* 咨询项目列表 */}
          <ScrollView className='consultation-list' scrollY>
            {filteredItems.map(item => (
              <View
                key={item.id}
                className='consultation-card'
                onClick={() => handleItemClick(item)}
              >
                <View className='card-header'>
                  <Text className='card-icon'>{item.icon}</Text>
                  <View className='card-title-group'>
                    <Text className='card-title'>{item.title}</Text>
                    <Text className='card-description'>{item.description}</Text>
                  </View>
                </View>
                <Text className='card-arrow'>→</Text>
              </View>
            ))}
          </ScrollView>

          {/* 浮动按钮 */}
          <View className='floating-buttons'>
            <Button className='chat-button' onClick={() => setShowChat(true)}>
              💬 AI 咨询
            </Button>
          </View>
        </>
      ) : (
        <>
          {/* AI 聊天界面 */}
          <View className='chat-header'>
            <Text className='chat-title'>AI 裁员咨询助手</Text>
            <Button className='close-button' onClick={() => setShowChat(false)}>✕</Button>
          </View>

          <ScrollView className='chat-messages'>
            {chatMessages.map((msg, index) => (
              <View key={index} className={`message ${msg.role}`}>
                <View className='message-content'>
                  <Text>{msg.content}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* 输入框 */}
          <View className='chat-input-area'>
            <View className='input-wrapper'>
              <input
                type='text'
                className='chat-input'
                placeholder='输入你的问题...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={loading}
              />
              <Button
                className='send-button'
                onClick={handleSendMessage}
                disabled={loading || !inputValue.trim()}
              >
                {loading ? '...' : '发送'}
              </Button>
            </View>
          </View>
        </>
      )}
    </View>
  )
}
