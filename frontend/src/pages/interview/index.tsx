import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Input, Button } from '@tarojs/components'
import { useState, useEffect, useRef } from 'react'
import { INTERVIEW_WELCOME_MESSAGE, COZE_CONFIG, MOCK_RESPONSES, generateSessionId } from './data'
import './index.scss'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

const STORAGE_KEYS = {
  CHAT_HISTORY: 'interview_chat_history',
  SESSION_ID: 'interview_session_id'
}

export default function Interview() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const messageIdRef = useRef(0)
  const sessionIdRef = useRef<string>('')

  Taro.setNavigationBarTitle({
    title: '模拟面试'
  })

  // 初始化：页面加载时恢复历史记录或显示开场白
  useEffect(() => {
    loadChatHistory()
  }, [])

  // 加载聊天历史记录
  const loadChatHistory = async () => {
    try {
      // 尝试从本地存储恢复 session_id
      const savedSessionId = await Taro.getStorage({
        key: STORAGE_KEYS.SESSION_ID
      }).catch(() => null)

      if (savedSessionId?.data) {
        sessionIdRef.current = savedSessionId.data
      } else {
        // 生成新的 session_id
        sessionIdRef.current = generateSessionId()
        await Taro.setStorage({
          key: STORAGE_KEYS.SESSION_ID,
          data: sessionIdRef.current
        })
      }

      // 尝试从本地存储恢复聊天记录
      const savedHistory = await Taro.getStorage({
        key: STORAGE_KEYS.CHAT_HISTORY
      }).catch(() => null)

      if (savedHistory?.data && Array.isArray(savedHistory.data) && savedHistory.data.length > 0) {
        // 恢复历史记录
        setChatMessages(savedHistory.data)
        // 更新 messageIdRef 以确保新消息 ID 不重复
        messageIdRef.current = savedHistory.data.length
      } else {
        // 首次进入，显示开场白
        const welcomeMessage: ChatMessage = {
          id: `msg-${messageIdRef.current++}`,
          role: 'assistant',
          content: INTERVIEW_WELCOME_MESSAGE,
          timestamp: Date.now()
        }
        setChatMessages([welcomeMessage])
        // 保存初始历史记录
        await saveChatHistory([welcomeMessage])
      }
    } catch (error) {
      console.error('加载聊天历史失败:', error)
      // 如果加载失败，显示开场白
      const welcomeMessage: ChatMessage = {
        id: `msg-${messageIdRef.current++}`,
        role: 'assistant',
        content: INTERVIEW_WELCOME_MESSAGE,
        timestamp: Date.now()
      }
      setChatMessages([welcomeMessage])
    }
  }

  // 保存聊天历史记录到本地存储
  const saveChatHistory = async (messages: ChatMessage[]) => {
    try {
      await Taro.setStorage({
        key: STORAGE_KEYS.CHAT_HISTORY,
        data: messages
      })
    } catch (error) {
      console.error('保存聊天历史失败:', error)
    }
  }

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
    // 计算滚动高度（简单估算：每条消息约 100px）
    const estimatedHeight = chatMessages.length * 100 + (loading ? 100 : 0)
    setScrollTop(estimatedHeight)
  }

  // 处理发送消息
  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      Taro.showToast({ title: '请输入您的问题', icon: 'none' })
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

      const updatedMessages = [...chatMessages, userMessage]
      setChatMessages(updatedMessages)
      setInputValue('')

      // 调用 Coze API
      await callCozeAPI(userMessage.content, updatedMessages)
    } finally {
      setLoading(false)
    }
  }

  // 调用 Coze stream_run API（使用 Taro.request）
  const callCozeAPI = async (userContent: string, currentMessages: ChatMessage[]) => {
    try {
      // 如果配置了 Token，则调用真实 API；否则使用模拟回复
      if (COZE_CONFIG.token) {
        // 强制中文回复的提示词前缀
        const chinesePrompt = `请用中文回答。${userContent}`

        // 构建请求体
        const requestBody = {
          content: {
            query: {
              prompt: [
                {
                  type: 'text',
                  content: {
                    text: chinesePrompt
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

            // 处理流式响应数据
            assistantContent = parseCozeStreamResponse(data)
          } else {
            throw new Error(`API 返回错误: ${response.statusCode}`)
          }

          // 如果没有获取到内容，使用默认回复
          if (!assistantContent.trim()) {
            assistantContent = '感谢您的提问。我已收到您的问题，正在为您准备面试指导。'
          }

          const assistantMessage: ChatMessage = {
            id: `msg-${messageIdRef.current++}`,
            role: 'assistant',
            content: assistantContent,
            timestamp: Date.now()
          }

          const updatedMessages = [...currentMessages, assistantMessage]
          setChatMessages(updatedMessages)

          // 保存更新后的聊天历史
          await saveChatHistory(updatedMessages)
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

            const updatedMessages = [...currentMessages, assistantMessage]
            setChatMessages(updatedMessages)

            // 保存更新后的聊天历史
            saveChatHistory(updatedMessages)

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

      const updatedMessages = [...currentMessages, errorMessage]
      setChatMessages(updatedMessages)

      // 保存包含错误消息的历史记录
      await saveChatHistory(updatedMessages)
    }
  }

  // 解析 Coze 流式响应数据
  const parseCozeStreamResponse = (data: any): string => {
    try {
      console.log('原始响应数据:', JSON.stringify(data).substring(0, 500))

      // 如果是字符串，尝试分行解析
      if (typeof data === 'string') {
        const lines = data.split('\n').filter(line => line.trim())
        let extractedContent = ''
        let hasFoundAnswer = false

        for (const line of lines) {
          // 处理 "data:" 前缀的行
          if (line.startsWith('data:')) {
            try {
              const jsonStr = line.substring(5).trim()
              const parsed = JSON.parse(jsonStr)
              console.log('解析的 JSON:', JSON.stringify(parsed).substring(0, 300))

              // 多层级提取 answer 字段
              if (parsed.content?.answer) {
                extractedContent += parsed.content.answer
                hasFoundAnswer = true
              } else if (parsed.answer) {
                extractedContent += parsed.answer
                hasFoundAnswer = true
              } else if (parsed.message?.answer) {
                extractedContent += parsed.message.answer
                hasFoundAnswer = true
              } else if (parsed.data?.answer) {
                extractedContent += parsed.data.answer
                hasFoundAnswer = true
              }
            } catch (e) {
              // 忽略解析失败的行
              console.error('JSON 解析失败:', e)
            }
          }
        }

        if (hasFoundAnswer) {
          return extractedContent.trim()
        }
        return extractedContent.trim() || ''
      }

      // 如果是对象，直接提取（多层级尝试）
      if (data && typeof data === 'object') {
        // 尝试多个可能的路径
        const possiblePaths = [
          data.content?.answer,
          data.answer,
          data.message?.answer,
          data.message,
          data.data?.answer,
          data.data?.content?.answer,
          data.text,
          data.reply,
          data.response
        ]

        for (const path of possiblePaths) {
          if (path && typeof path === 'string' && path.trim()) {
            console.log('提取到内容:', path.substring(0, 100))
            return path.trim()
          }
        }
      }

      console.warn('未能提取到有效内容')
      return ''
    } catch (error) {
      console.error('解析响应失败:', error)
      return ''
    }
  }

  // 处理输入框回车
  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  // 清空聊天记录（可选功能）
  const clearChatHistory = async () => {
    Taro.showModal({
      title: '清空面试记录',
      content: '确定要清空所有面试记录吗？此操作不可撤销。',
      success: async (res) => {
        if (res.confirm) {
          try {
            await Taro.removeStorage({
              key: STORAGE_KEYS.CHAT_HISTORY
            })

            // 重新显示开场白
            const welcomeMessage: ChatMessage = {
              id: `msg-0`,
              role: 'assistant',
              content: INTERVIEW_WELCOME_MESSAGE,
              timestamp: Date.now()
            }
            setChatMessages([welcomeMessage])
            messageIdRef.current = 1

            Taro.showToast({
              title: '面试记录已清空',
              icon: 'success'
            })
          } catch (error) {
            console.error('清空面试记录失败:', error)
          }
        }
      }
    })
  }

  return (
    <View className='interview-page'>
      {/* 页面头部 */}
      <View className='chat-header'>
        <View className='header-content'>
          <View className='header-icon'>🌟</View>
          <View className='header-text'>
            <Text className='header-title'>AI 面试官</Text>
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
            <View className={`message-avatar ${msg.role}`}>
              {msg.role === 'user' ? '👤' : '🌟'}
            </View>
            <View className='message-bubble'>
              <Text className='message-text'>{msg.content}</Text>
              <Text className='message-time'>
                {new Date(msg.timestamp).toLocaleTimeString('zh-CN')}
              </Text>
            </View>
          </View>
        ))}

        {/* 加载指示器 */}
        {loading && (
          <View className='message-wrapper assistant'>
            <View className='message-avatar assistant'>🌟</View>
            <View className='message-bubble loading'>
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
            placeholder='输入您的问题或岗位信息...'
            placeholderStyle='color: #999;'
            value={inputValue}
            onInput={(e) => setInputValue(e.detail.value)}
            onKeyDown={handleInputKeyDown}
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
        <Text className='input-hint'>
          💡 提示：告诉我您的目标岗位和公司，我会为您进行针对性的面试指导
        </Text>
      </View>
    </View>
  )
}
