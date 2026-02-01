import Taro from '@tarojs/taro'
import { View, Text, Textarea, Button, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import { createPost } from '@/api/hole'
import { useUserStore } from '@/store/user'
import './index.scss'

type PostCategory = 'vent' | 'help' | 'share' | 'positive'

const MOODS = ['😊', '😢', '😤', '😍', '🤔', '😎', '🥰', '💪']
const CATEGORIES: { value: PostCategory; label: string; emoji: string }[] = [
  { value: 'vent', label: '吐槽', emoji: '💬' },
  { value: 'help', label: '求助', emoji: '🆘' },
  { value: 'share', label: '分享', emoji: '📢' },
  { value: 'positive', label: '正能量', emoji: '⭐' }
]

export default function HoleCreate() {
  const { user } = useUserStore()
  const [content, setContent] = useState('')
  const [selectedMood, setSelectedMood] = useState('😊')
  const [selectedCategory, setSelectedCategory] = useState<PostCategory>('vent')
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [loading, setLoading] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')

  Taro.setNavigationBarTitle({
    title: '发布心声'
  })

  // 检查用户是否已登录
  if (!user) {
    return (
      <View className='create-page'>
        <View className='login-prompt'>
          <Text className='prompt-icon'>🔐</Text>
          <Text className='prompt-text'>请先登录后再发布</Text>
          <Button
            className='login-btn'
            onClick={() => {
              Taro.navigateBack()
            }}
          >
            返回
          </Button>
        </View>
      </View>
    )
  }

  const handleAddTag = () => {
    if (tagInput.trim() && tags.length < 5) {
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!content.trim()) {
      Taro.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }

    if (content.trim().length > 5000) {
      Taro.showToast({
        title: '内容不能超过 5000 字',
        icon: 'none'
      })
      return
    }

    setLoading(true)
    try {
      const postData = {
        content: content.trim(),
        category: selectedCategory,
        tags,
        mood: selectedMood,
        isAnonymous
      }
      console.log('[HoleCreate] 准备发布帖子，数据:', postData)
      
      await createPost(postData)

      Taro.showToast({
        title: '发布成功',
        icon: 'success'
      })

      setTimeout(() => {
        Taro.navigateBack()
      }, 1500)
    } catch (error: any) {
      console.error('[HoleCreate] 发布失败:', error)
      let errorMsg = error.message || '发布失败，请稍后重试'
      if (error.message === '网络请求失败') {
        errorMsg = '网络连接失败，请检查网络设置'
      } else if (error.message === '请求超时，请检查网络') {
        errorMsg = '请求超时，请检查网络连接'
      }
      Taro.showToast({
        title: errorMsg,
        icon: 'none',
        duration: 3000
      })
    } finally {
      setLoading(false)
    }
  }

  const contentLength = content.length

  return (
    <View className='create-page'>
      <ScrollView scrollY className='create-container'>
        {/* 心情选择 */}
        <View className='section'>
          <Text className='section-title'>选择心情</Text>
          <View className='mood-selector'>
            {MOODS.map((mood) => (
              <View
                key={mood}
                className={`mood-item ${selectedMood === mood ? 'active' : ''}`}
                onClick={() => setSelectedMood(mood)}
              >
                <Text className='mood-emoji'>{mood}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 分类选择 */}
        <View className='section'>
          <Text className='section-title'>选择分类</Text>
          <View className='category-selector'>
            {CATEGORIES.map((cat) => (
              <View
                key={cat.value}
                className={`category-item ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                <Text className='category-emoji'>{cat.emoji}</Text>
                <Text className='category-label'>{cat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 内容输入 */}
        <View className='section'>
          <View className='input-header'>
            <Text className='section-title'>倾诉内容</Text>
            <Text className='char-count'>
              {contentLength}/5000
            </Text>
          </View>
          <Textarea
            className='content-input'
            placeholder='在这里倾诉你的心声，我们在这里倾听...'
            value={content}
            onInput={(e) => setContent(e.detail.value)}
            maxlength={5000}
          />
        </View>

        {/* 标签输入 */}
        <View className='section'>
          <Text className='section-title'>添加标签</Text>
          <View className='tag-input-group'>
            <Textarea
              className='tag-input'
              placeholder='输入标签，最多 5 个'
              value={tagInput}
              onInput={(e) => setTagInput(e.detail.value)}
              maxlength={20}
            />
            <Button
              className='tag-add-btn'
              onClick={handleAddTag}
              disabled={tags.length >= 5}
            >
              添加
            </Button>
          </View>
          {tags.length > 0 && (
            <View className='tags-display'>
              {tags.map((tag, index) => (
                <View key={index} className='tag-badge'>
                  <Text className='tag-text'>#{tag}</Text>
                  <Text
                    className='tag-remove'
                    onClick={() => handleRemoveTag(index)}
                  >
                    ✕
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* 匿名发布 */}
        <View className='section'>
          <View className='anonymous-toggle'>
            <Text className='section-title'>匿名发布</Text>
            <View
              className={`toggle-switch ${isAnonymous ? 'on' : 'off'}`}
              onClick={() => setIsAnonymous(!isAnonymous)}
            >
              <View className='toggle-dot' />
            </View>
          </View>
          <Text className='anonymous-tip'>
            {isAnonymous ? '✓ 您的身份将被隐藏' : '✗ 您的昵称将被显示'}
          </Text>
        </View>

        {/* 提交按钮 */}
        <View className='submit-section'>
          <Button
            className='submit-btn'
            onClick={handleSubmit}
            disabled={loading || !content.trim()}
            loading={loading}
          >
            {loading ? '发布中...' : '发布心声'}
          </Button>
          <Button
            className='cancel-btn'
            onClick={() => Taro.navigateBack()}
            disabled={loading}
          >
            取消
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}
