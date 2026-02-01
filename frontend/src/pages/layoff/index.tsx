import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Input, Button } from '@tarojs/components'
import { useState, useEffect, useRef } from 'react'
import { COZE_WELCOME_MESSAGE, COZE_CONFIG, MOCK_RESPONSES, generateSessionId } from './data'
import { useUserStore } from '@/store/user'
import { isLoggedIn } from '@/api/auth'
import './index.scss'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

const STORAGE_KEYS = {
  CHAT_HISTORY: 'layoff_chat_history',
  SESSION_ID: 'layoff_session_id'
}

export default function Layoff() {
  const { user } = useUserStore()
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollIntoViewId, setScrollIntoViewId] = useState('')
  const messageIdRef = useRef(0)
  const sessionIdRef = useRef<string>('')

  Taro.setNavigationBarTitle({
    title: '职场维权咨询'
  })

  // 初始化：页面加载时恢复历史记录或显示开场白
  useEffect(() => {
    loadChatHistory()
  }, [])

  // 当消息列表更新时，自动滚动到下部
  useEffect(() => {
    if (chatMessages.length > 0) {
      const lastMessage = chatMessages[chatMessages.length - 1]
      // 使用 scroll-into-view 滚动到最后一条消息
      setScrollIntoViewId(lastMessage.id)
      // 同时设置一个超大的 scrollTop 值作为备选
      setTimeout(() => {
        setScrollTop(999999)
      }, 50)
    }
  }, [chatMessages])

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
        // 延迟滚动到下部
        setTimeout(() => {
          const lastMessage = savedHistory.data[savedHistory.data.length - 1]
          setScrollIntoViewId(lastMessage.id)
          setScrollTop(999999)
        }, 100)
      } else {
        // 首次进入，显示开场白
        const welcomeMessage: ChatMessage = {
          id: `msg-${messageIdRef.current++}`,
          role: 'assistant',
          content: COZE_WELCOME_MESSAGE,
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
        content: COZE_WELCOME_MESSAGE,
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

  // 处理发送消息
  const handleSendMessage = async () => {
    if (!isLoggedIn()) {
      Taro.showModal({
        title: '提示',
        content: '你需要登录后才能使用维权咨询功能，是否立即登录？',
        confirmText: '微信登录',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            handleAutoLogin()
          }
        }
      })
      return
    }

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

          if (response.statusCode === 200) {
            // 解析响应数据
            const responseText = parseCozeStreamResponse(response.data)

            if (responseText && responseText.trim()) {
              // 添加 AI 回复消息
              const aiMessage: ChatMessage = {
                id: `msg-${messageIdRef.current++}`,
                role: 'assistant',
                content: responseText.trim(),
                timestamp: Date.now()
              }

              const finalMessages = [...currentMessages, aiMessage]
              setChatMessages(finalMessages)
              await saveChatHistory(finalMessages)
            } else {
              // 如果解析失败，显示兜底回复
              const fallbackMessage: ChatMessage = {
                id: `msg-${messageIdRef.current++}`,
                role: 'assistant',
                content: '感谢您的提问。我已收到您的问题，正在为您准备详细的法律分析和建议。',
                timestamp: Date.now()
              }

              const finalMessages = [...currentMessages, fallbackMessage]
              setChatMessages(finalMessages)
              await saveChatHistory(finalMessages)
            }
          } else {
            throw new Error(`API 返回错误: ${response.statusCode}`)
          }
        } catch (error) {
          console.error('Taro.request 错误:', error)
          Taro.showToast({
            title: '网络请求失败，请稍后重试',
            icon: 'none'
          })
        }
      } else {
        // 演示模式：使用模拟回复
        const mockReply = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
        const aiMessage: ChatMessage = {
          id: `msg-${messageIdRef.current++}`,
          role: 'assistant',
          content: mockReply,
          timestamp: Date.now()
        }

        const finalMessages = [...currentMessages, aiMessage]
        setChatMessages(finalMessages)
        await saveChatHistory(finalMessages)
      }
    } catch (error) {
      console.error('Coze API 错误:', error)
      Taro.showToast({
        title: '发生错误，请稍后重试',
        icon: 'none'
      })
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

      return ''
    } catch (error) {
      console.error('解析响应失败:', error)
      return ''
    }
  }

  // 自动触发微信登录
  const handleAutoLogin = async () => {
    try {
      const loginRes = await Taro.login()
      const { code } = loginRes
      if (!code) {
        throw new Error('获取登录凭证失败')
      }

      const { wxLogin } = await import('@/api/auth')
      const result = await wxLogin({
        code,
        userInfo: {
          nickName: '微信用户',
          avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
        }
      })

      if (result) {
        Taro.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500
        })
      }
    } catch (error: any) {
      console.error('自动登录失败:', error)
      if (error.message && error.message.includes('用户拒绝')) {
        // 用户主动拒绝登录，不显示错误提示
        return
      }
      Taro.showToast({
        title: error.message || '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  }

  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  // 清空聊天记录（可选功能）
  const clearChatHistory = async () => {
    Taro.showModal({
      title: '清空咨询记录',
      content: '确定要清空所有咨询记录吗？此操作不可撤销。',
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
              content: COZE_WELCOME_MESSAGE,
              timestamp: Date.now()
            }
            setChatMessages([welcomeMessage])
            messageIdRef.current = 1

            Taro.showToast({
              title: '咨询记录已清空',
              icon: 'success'
            })
          } catch (error) {
            console.error('清空咨询记录失败:', error)
          }
        }
      }
    })
  }

  return (
    <View className='layoff-page'>
      {/* 页面头部 */}
      <View className='chat-header'>
        <View className='header-content'>
          <View className='header-icon'>⚖️</View>
          <View className='header-text'>
            <Text className='header-title'>转角卫士·职场维权助手</Text>
            <Text className='header-status'>在线</Text>
          </View>
        </View>
      </View>

      {/* 聊天消息区域 */}
      <ScrollView
        className='chat-messages'
        scrollY
        scrollTop={scrollTop}
        scrollIntoView={scrollIntoViewId}
        scrollWithAnimation
      >
        {chatMessages.map((msg) => (
          <View key={msg.id} id={msg.id} className={`message-wrapper ${msg.role}`}>
            <View className={`message-avatar ${msg.role}`}>
              {msg.role === 'user' ? '👤' : '⚖️'}
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
            <View className='message-avatar assistant'>⚖️</View>
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
            placeholder='输入您的问题...'
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
          💡 提示：为获得更准确的建议，请提供入职时间、月薪等关键信息
        </Text>
      </View>
    </View>
  )
}
