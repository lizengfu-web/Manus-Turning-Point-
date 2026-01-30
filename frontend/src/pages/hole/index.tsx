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

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      setLoading(true)
      const data = await getPostList()
      setPosts(data)
    } catch (error: any) {
      Taro.showToast({
        title: error.message || '加载失败',
        icon: 'none'
      })
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
      Taro.showToast({
        title: '请先登录',
        icon: 'none'
      })
      return
    }
    Taro.navigateTo({
      url: `/pages/webview/index?url=/hole/create`
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

  if (loading) {
    return (
      <View className='hole-page'>
        <View className='loading'>加载中...</View>
      </View>
    )
  }

  return (
    <View className='hole-page'>
      <View className='header'>
        <View className='header-content'>
          <Text className='title'>树洞</Text>
          <Text className='subtitle'>倾诉你的心声，我们在这里倾听</Text>
        </View>
        <Button className='create-btn' onClick={handleCreatePost}>
          发布
        </Button>
      </View>

      <ScrollView className='post-list' scrollY>
        {posts.map((post: any) => (
          <View
            key={post.id}
            className='post-card'
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
              <View className='stat-item'>
                <Text className='stat-icon'>👍</Text>
                <Text className='stat-count'>{post.likes || 0}</Text>
              </View>
              <View className='stat-item'>
                <Text className='stat-icon'>💬</Text>
                <Text className='stat-count'>{post.comments || 0}</Text>
              </View>
            </View>
          </View>
        ))}

        {posts.length === 0 && (
          <View className='empty'>
            <Text>还没有帖子，快来发布第一条吧！</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}
