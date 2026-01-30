import Taro from '@tarojs/taro'
import { API_BASE_URL } from './config'

export interface CozeMessage {
  role: 'user' | 'assistant'
  content: string
  type?: 'text' | 'image' | 'file'
}

export interface CozeResponse {
  conversationId: string
  messageId: string
  content: string
  type: 'text' | 'image' | 'file'
  timestamp: number
}

/**
 * 创建新的 Coze 对话
 */
export const createCozeConversation = async (): Promise<string> => {
  try {
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/coze/conversation`,
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: {}
    })

    if (response.statusCode === 200 && response.data.conversationId) {
      return response.data.conversationId
    }

    throw new Error(response.data?.message || '创建对话失败')
  } catch (error: any) {
    console.error('创建 Coze 对话失败:', error)
    throw new Error(`创建对话失败: ${error.message}`)
  }
}

/**
 * 发送消息到 Coze 智能体
 */
export const sendCozeMessage = async (
  conversationId: string,
  message: string,
  botId?: string
): Promise<CozeResponse> => {
  try {
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/coze/message`,
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        conversationId,
        message,
        botId
      },
      timeout: 30000
    })

    if (response.statusCode === 200 && response.data.content) {
      return {
        conversationId: response.data.conversationId || conversationId,
        messageId: response.data.messageId || '',
        content: response.data.content,
        type: response.data.type || 'text',
        timestamp: Date.now()
      }
    }

    throw new Error(response.data?.message || '发送消息失败')
  } catch (error: any) {
    console.error('发送 Coze 消息失败:', error)
    throw new Error(`发送消息失败: ${error.message}`)
  }
}

/**
 * 获取对话历史
 */
export const getCozeConversationHistory = async (
  conversationId: string
): Promise<CozeMessage[]> => {
  try {
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/coze/conversation/${conversationId}`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })

    if (response.statusCode === 200 && Array.isArray(response.data.messages)) {
      return response.data.messages
    }

    throw new Error(response.data?.message || '获取对话历史失败')
  } catch (error: any) {
    console.error('获取 Coze 对话历史失败:', error)
    throw new Error(`获取对话历史失败: ${error.message}`)
  }
}

/**
 * 清空对话历史
 */
export const clearCozeConversation = async (
  conversationId: string
): Promise<void> => {
  try {
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/coze/conversation/${conversationId}`,
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      }
    })

    if (response.statusCode !== 200) {
      throw new Error(response.data?.message || '清空对话失败')
    }
  } catch (error: any) {
    console.error('清空 Coze 对话失败:', error)
    throw new Error(`清空对话失败: ${error.message}`)
  }
}

/**
 * 获取 Coze 智能体列表
 */
export const getCozeAgents = async (): Promise<Array<{ id: string; name: string; description: string }>> => {
  try {
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/coze/agents`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })

    if (response.statusCode === 200 && Array.isArray(response.data.agents)) {
      return response.data.agents
    }

    throw new Error(response.data?.message || '获取智能体列表失败')
  } catch (error: any) {
    console.error('获取 Coze 智能体列表失败:', error)
    throw new Error(`获取智能体列表失败: ${error.message}`)
  }
}
