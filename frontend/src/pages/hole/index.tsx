import { View, Text, ScrollView, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { getPostList } from '@/api/hole'
import { useUserStore } from '@/store/user'
import './index.scss'

export default function Hole() {
  const { user } = useUserStore()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async (retryCount = 0) => {
    try {
      setLoading(true)
      setError(null)
      const data = await getPostList()
      setPosts(data.posts || data || [])
    } catch (error: any) {
      console.error('[Hole] 加载帖子列表失败:', error)
      
      // 如果是网络错误且重试次数少于 1 次，尝试静默重试
      if (error.message === '网络请求失败' && retryCount < 1) {
        console.log('[Hole] 网络请求失败，正在静默重试...')
        setTimeout(() => loadPosts(retryCount + 1), 1500)
        return
      }
      
      // 如果最终还是失败，仅记录错误但不弹窗，展示空状态
      setError('暂时无法连接服务器')
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  const navigateToDetail = (id: number) => {
    Taro.navigateTo({
      url: `/pages/webview/index?url=/hole/${id}`
    })
  }

  const handleCreatePost = () => {
    if (!user) {
      Taro.showModal({
        title: '提示',
        content: '你需要登录后才能发布帖子，是否立即登录？',
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
    Taro.navigateTo({
      url: `/pages/hole/create/index`
    })
  }

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
        return
      }
      Taro.showToast({
        title: error.message || '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  }

  const handleLikePost = (postId: number) => {
    if (!user) {
      Taro.showModal({
        title: '提示',
        content: '你需要登录后才能点赞，是否立即登录？',
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
    console.log('点赞了帖子:', postId)
  }

  const handleCommentPost = (postId: number) => {
    if (!user) {
      Taro.showModal({
        title: '提示',
        content: '你需要登录后才能评论，是否立即登录？',
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
    Taro.navigateTo({
      url: `/pages/webview/index?url=/hole/${postId}/comment`
    })
  }

  const formatTime = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour

    if (diff < minute) {
      return '刚刚'
    } else if (diff < hour) {
      return `${Math.floor(diff / minute)}分钟前`
    } else if (diff < day) {
      return `${Math.floor(diff / hour)}小时前`
    } else {
      return `${Math.floor(diff / day)}天前`
    }
  }

  const handleRetry = () => {
    loadPosts()
  }

  if (loading) {
    return (
      <View className='hole-page'>
        <View className='loading-state'>
          <Text className='loading-icon'>⏳</Text>
          <Text className='loading-text'>加载中...</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='hole-page'>
      <View className='header'>
        <View className='header-content'>
          <Text className='title'>心声驿站</Text>
          <Text className='subtitle'>倾诰你的心声，我们在这里倾听</Text>
        </View>
        <Button className='create-btn' onClick={handleCreatePost}>
          发布
        </Button>
      </View>

      <ScrollView className='post-list' scrollY>
        {error && (
          <View className='error-state'>
            <Text className='error-icon'>🌐</Text>
            <Text className='error-text'>{error}</Text>
            <Button className='retry-btn' onClick={handleRetry}>
              重新加载
            </Button>
          </View>
        )}

        {!error && posts.length === 0 && (
          <View className='empty-state'>
            <Text className='empty-icon'>📝</Text>
            <Text className='empty-text'>还没有帖子，快来发布第一条吧！</Text>
          </View>
        )}

        {posts.map((post: any) => {
          const getPostType = () => {
            const content = post.content?.toLowerCase() || ''
            if (content.includes('求助') || content.includes('求推荐')) return 'help'
            if (content.includes('正能量') || content.includes('加油')) return 'positive'
            if (content.includes('分享')) return 'share'
            return 'vent'
          }
          const postType = getPostType()
          return (
            <View
              key={post.id}
              className={`post-card type-${postType}`}
              onClick={() => navigateToDetail(post.id)}
            >
              <View className='post-header'>
                <Text className='author'>{post.author || '匿名用户'}</Text>
                <Text className='time'>{formatTime(post.createdAt)}</Text>
              </View>

              <Text className='post-content'>{post.content}</Text>

              {post.tags && post.tags.length > 0 && (
                <View className='tags'>
                  {post.tags.map((tag: string, index: number) => (
                    <Text key={index} className='tag'>
                      #{tag}
                    </Text>
                  ))}
                </View>
              )}

              <View className='post-footer'>
                <View className='stat-item' onClick={(e) => {
                  e.stopPropagation()
                  handleLikePost(post.id)
                }}>
                  <Text className='stat-icon'>👍</Text>
                  <Text className='stat-count'>{post.likes || 0}</Text>
                </View>
                <View className='stat-item' onClick={(e) => {
                  e.stopPropagation()
                  handleCommentPost(post.id)
                }}>
                  <Text className='stat-icon'>💬</Text>
                  <Text className='stat-count'>{post.comments || 0}</Text>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
