import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Input, Button } from '@tarojs/components'
import { useState, useEffect, useRef } from 'react'
import { COZE_WELCOME_MESSAGE, COZE_CONFIG, MOCK_RESPONSES } from './data'
import './index.scss'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export default function Layoff() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollViewRef = useRef<any>(null)
  const messageIdRef = useRef(0)

  Taro.setNavigationBarTitle({
    title: '职场维权咨询'
  })

  // 初始化：页面加载时发送开场白
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: `msg-${messageIdRef.current++}`,
      role: 'assistant',
      content: COZE_WELCOME_MESSAGE,
      timestamp: Date.now()
    }
    setChatMessages([welcomeMessage])
    
    // 延迟滚动到底部
    setTimeout(() => {
      scrollToBottom()
    }, 300)
  }, [])

  // 滚动到底部
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTop()
    }
  }

  // 处理发送消息
  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      Taro.showToast({ title: '请输入问题', icon: 'none' })
      return
    }

    try {
      setLoading(true)

      // 添加用户消息
      const userMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        role: 'user',
        content: inputValue.trim(),
        timestamp: Date.now()
      }
      setChatMessages(prev => [...prev, userMessage])
      setInputValue('')

      // 延迟滚动
      setTimeout(() => scrollToBottom(), 100)

      // 调用 Coze API 或使用模拟回复
      await callCozeAPI(userMessage.content)
    } finally {
      setLoading(false)
    }
  }

  // 调用 Coze API
  const callCozeAPI = async (userContent: string) => {
    try {
      // 如果配置了 Coze API，则调用真实 API；否则使用模拟回复
      if (COZE_CONFIG.apiKey && COZE_CONFIG.botId) {
        // 实际 Coze API 调用逻辑
        const response = await fetch(COZE_CONFIG.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COZE_CONFIG.apiKey}`
          },
          body: JSON.stringify({
            bot_id: COZE_CONFIG.botId,
            user_id: 'user_' + Date.now(),
            stream: false,
            auto_save_history: true,
            messages: [
              {
                role: 'user',
                content: userContent
              }
            ]
          })
        })

        if (!response.ok) {
          throw new Error(`API 错误: ${response.status}`)
        }

        const data = await response.json()
        const assistantContent = data.messages?.[0]?.content || '抱歉，我暂时无法回答您的问题。'

        const assistantMessage: ChatMessage = {
          id: `msg-${messageIdRef.current++}`,
          role: 'assistant',
          content: assistantContent,
          timestamp: Date.now()
        }
        setChatMessages(prev => [...prev, assistantMessage])
      } else {
        // 使用模拟回复（演示模式）
        setTimeout(() => {
          const randomResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
          const assistantMessage: ChatMessage = {
            id: `msg-${messageIdRef.current++}`,
            role: 'assistant',
            content: randomResponse,
            timestamp: Date.now()
          }
          setChatMessages(prev => [...prev, assistantMessage])
          scrollToBottom()
        }, 800)
      }

      // 延迟滚动
      setTimeout(() => scrollToBottom(), 100)
    } catch (error: any) {
      Taro.showToast({
        title: error.message || '请求失败',
        icon: 'none'
      })

      // 显示错误消息
      const errorMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        role: 'assistant',
        content: '抱歉，我暂时无法处理您的请求。请稍后重试。',
        timestamp: Date.now()
      }
      setChatMessages(prev => [...prev, errorMessage])
    }
  }

  // 处理输入框回车
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <View className='layoff-page'>
      {/* 页面头部 */}
      <View className='chat-header'>
        <View className='header-content'>
          <Text className='header-icon'>⚖️</Text>
          <View className='header-text'>
            <Text className='header-title'>{COZE_CONFIG.agentName}</Text>
            <Text className='header-status'>在线</Text>
          </View>
        </View>
      </View>

      {/* 聊天消息区域 */}
      <ScrollView
        className='chat-messages'
        scrollY
        scrollIntoView='bottom'
        ref={scrollViewRef}
      >
        {chatMessages.map((msg) => (
          <View key={msg.id} className={`message-wrapper ${msg.role}`}>
            {msg.role === 'assistant' && (
              <View className='message-avatar'>
                <Text>⚖️</Text>
              </View>
            )}
            <View className={`message-bubble ${msg.role}`}>
              <Text className='message-text'>{msg.content}</Text>
              <Text className='message-time'>
                {new Date(msg.timestamp).toLocaleTimeString('zh-CN', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </Text>
            </View>
            {msg.role === 'user' && (
              <View className='message-avatar user'>
                <Text>👤</Text>
              </View>
            )}
          </View>
        ))}

        {loading && (
          <View className='message-wrapper assistant'>
            <View className='message-avatar'>
              <Text>⚖️</Text>
            </View>
            <View className='message-bubble assistant loading'>
              <View className='typing-indicator'>
                <View className='dot'></View>
                <View className='dot'></View>
                <View className='dot'></View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* 输入框区域 */}
      <View className='chat-input-area'>
        <View className='input-wrapper'>
          <Input
            className='chat-input'
            type='text'
            placeholder='输入您的问题...'
            value={inputValue}
            onInput={(e) => setInputValue(e.detail.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            placeholderStyle='color: #999;'
          />
          <Button
            className='send-button'
            onClick={handleSendMessage}
            disabled={loading || !inputValue.trim()}
          >
            {loading ? '...' : '发送'}
          </Button>
        </View>
        <Text className='input-hint'>
          💡 提示：提供更多信息（如入职时间、月薪等）可获得更准确的建议
        </Text>
      </View>
    </View>
  )
}
