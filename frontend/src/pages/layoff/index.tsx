import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Input, Button } from '@tarojs/components'
import { useState, useEffect, useRef } from 'react'
import { COZE_WELCOME_MESSAGE, COZE_CONFIG, MOCK_RESPONSES, generateSessionId } from './data'
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
  const [scrollTop, setScrollTop] = useState(0)
  const messageIdRef = useRef(0)
  const sessionIdRef = useRef<string>('')

  Taro.setNavigationBarTitle({
    title: '职场维权咨询'
  })

  // 初始化：页面加载时发送开场白和生成 session_id
  useEffect(() => {
    // 生成 session_id 用于维持对话上下文
    sessionIdRef.current = generateSessionId()

    const welcomeMessage: ChatMessage = {
      id: `msg-${messageIdRef.current++}`,
      role: 'assistant',
      content: COZE_WELCOME_MESSAGE,
      timestamp: Date.now()
    }
    setChatMessages([welcomeMessage])
  }, [])

  // 当消息更新时自动滚动到底部
  useEffect(() => {
    // 延迟滚动以确保 DOM 已更新
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 100)
    return () => clearTimeout(timer)
  }, [chatMessages, loading])

  // 滚动到底部
  const scrollToBottom = () => {
    // 计算滚动高度（简单估算：每条消息约 80px）
    const estimatedHeight = chatMessages.length * 100 + (loading ? 100 : 0)
    setScrollTop(estimatedHeight)
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

      // 调用 Coze API
      await callCozeAPI(userMessage.content)
    } finally {
      setLoading(false)
    }
  }

  // 调用 Coze stream_run API（使用 Taro.request）
  const callCozeAPI = async (userContent: string) => {
    try {
      // 如果配置了 Token，则调用真实 API；否则使用模拟回复
      if (COZE_CONFIG.token) {
        // 构建请求体
        const requestBody = {
          content: {
            query: {
              prompt: [
                {
                  type: 'text',
                  content: {
                    text: userContent
                  }
                }
              ]
            }
          },
          type: 'query',
          session_id: sessionIdRef.current,
          project_id: COZE_CONFIG.projectId
        }

        // 使用 Taro.request 调用 API（小程序环境兼容）
        try {
          const response = await Taro.request({
            url: COZE_CONFIG.apiEndpoint,
            method: 'POST',
            header: {
              'Authorization': `Bearer ${COZE_CONFIG.token}`,
              'Content-Type': 'application/json'
            },
            data: requestBody,
            timeout: 30000
          })

          // 解析响应
          let assistantContent = ''

          if (response.statusCode === 200) {
            const data = response.data as any

            // 根据 Coze API 的响应格式提取内容
            if (typeof data === 'string') {
              // 如果是字符串，尝试解析 JSON
              try {
                const parsed = JSON.parse(data)
                assistantContent = parsed.content || parsed.message || parsed.text || data
              } catch {
                assistantContent = data
              }
            } else if (data.content) {
              assistantContent = data.content
            } else if (data.message) {
              assistantContent = data.message
            } else if (data.text) {
              assistantContent = data.text
            } else {
              assistantContent = JSON.stringify(data)
            }
          } else {
            throw new Error(`API 返回错误: ${response.statusCode}`)
          }

          // 如果没有获取到内容，使用默认回复
          if (!assistantContent.trim()) {
            assistantContent = '感谢您的提问。我已收到您的问题，正在为您分析相关的法律条款和建议。'
          }

          const assistantMessage: ChatMessage = {
            id: `msg-${messageIdRef.current++}`,
            role: 'assistant',
            content: assistantContent,
            timestamp: Date.now()
          }
          setChatMessages(prev => [...prev, assistantMessage])
        } catch (requestError: any) {
          console.error('Taro.request 错误:', requestError)
          throw new Error(requestError.message || '网络请求失败')
        }
      } else {
        // 使用模拟回复（演示模式）
        await new Promise(resolve => {
          setTimeout(() => {
            const randomResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
            const assistantMessage: ChatMessage = {
              id: `msg-${messageIdRef.current++}`,
              role: 'assistant',
              content: randomResponse,
              timestamp: Date.now()
            }
            setChatMessages(prev => [...prev, assistantMessage])
            resolve(null)
          }, 800)
        })
      }
    } catch (error: any) {
      console.error('Coze API 错误:', error)

      Taro.showToast({
        title: error.message || '请求失败',
        icon: 'none',
        duration: 2000
      })

      // 显示错误消息
      const errorMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        role: 'assistant',
        content: '抱歉，我暂时无法处理您的请求。请检查网络连接或稍后重试。',
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
        scrollTop={scrollTop}
        scrollWithAnimation
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
