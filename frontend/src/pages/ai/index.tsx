import { useState, useEffect } from 'react'
import { View, Text, Input, Button, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { sendMessage } from '../../services/chat'
import './index.scss'

export default function AI() {
  const [messages, setMessages] = useState<{ role: string, content: string }[]>([
    { role: 'bot', content: '你好！我是转角驿站的 AI 助手，有什么可以帮你的吗？' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!inputValue.trim() || loading) return

    const userMsg = { role: 'user', content: inputValue }
    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setLoading(true)

    try {
      const res = await sendMessage(inputValue)
      if (res.success) {
        setMessages(prev => [...prev, { role: 'bot', content: res.reply }])
      } else {
        Taro.showToast({ title: res.message || '发送失败', icon: 'none' })
      }
    } catch (error) {
      Taro.showToast({ title: '网络错误', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='ai-page'>
      <ScrollView className='chat-window' scrollY scrollWithAnimation>
        {messages.map((msg, index) => (
          <View key={index} className={`message-item ${msg.role}`}>
            <View className='content'>{msg.content}</View>
          </View>
        ))}
        {loading && <View className='message-item bot'><View className='content'>正在思考...</View></View>}
      </ScrollView>
      
      <View className='input-area'>
        <Input 
          className='input' 
          value={inputValue} 
          onInput={(e) => setInputValue(e.detail.value)}
          placeholder='输入消息...'
          confirmType='send'
          onConfirm={handleSend}
        />
        <Button className='send-btn' onClick={handleSend} disabled={loading}>发送</Button>
      </View>
    </View>
  )
}
