import { View, Text, ScrollView, Picker } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect, useMemo } from 'react'
import { getOpportunityList } from '@/api/opportunity'
import './index.scss'

type SortType = 'default' | 'income' | 'difficulty'
type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard'

export default function Opportunity() {
  const [opportunities, setOpportunities] = useState([])
  const [loading, setLoading] = useState(true)
  
  // 筛选和排序状态
  const [sortType, setSortType] = useState<SortType>('default')
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all')
  const [searchKeyword, setSearchKeyword] = useState('')

  useEffect(() => {
    loadOpportunities()
  }, [])

  const loadOpportunities = async () => {
    try {
      setLoading(true)
      const data = await getOpportunityList()
      setOpportunities(data)
    } catch (error: any) {
      Taro.showToast({
        title: error.message || '加载失败',
        icon: 'none'
      })
    } finally {
      setLoading(false)
    }
  }

  // 筛选和排序逻辑
  const filteredAndSortedOpportunities = useMemo(() => {
    let result = [...opportunities]

    // 1. 难度筛选
    if (difficultyFilter !== 'all') {
      result = result.filter((item: any) => item.difficulty === difficultyFilter)
    }

    // 2. 关键词搜索（标题或描述）
    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase()
      result = result.filter((item: any) => 
        item.title?.toLowerCase().includes(keyword) || 
        item.description?.toLowerCase().includes(keyword) ||
        item.tags?.some((tag: string) => tag.toLowerCase().includes(keyword))
      )
    }

    // 3. 排序
    if (sortType === 'difficulty') {
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 }
      result.sort((a: any, b: any) => 
        difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      )
    } else if (sortType === 'income') {
      // 按收入排序（假设收入格式为 "¥1000-3000/月"）
      result.sort((a: any, b: any) => {
        const getIncomeValue = (income: string) => {
          const match = income.match(/\d+/)
          return match ? parseInt(match[0]) : 0
        }
        return getIncomeValue(b.income) - getIncomeValue(a.income)
      })
    }

    return result
  }, [opportunities, difficultyFilter, searchKeyword, sortType])

  const navigateToDetail = (id: number) => {
    Taro.navigateTo({
      url: `/pages/webview/index?url=/opportunity/${id}`
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: '#10b981',
      medium: '#f59e0b',
      hard: '#ef4444'
    }
    return colors[difficulty] || '#6b7280'
  }

  const getDifficultyLabel = (difficulty: string) => {
    const labels = {
      easy: '简单',
      medium: '中等',
      hard: '困难'
    }
    return labels[difficulty] || difficulty
  }

  // 处理排序选择
  const handleSortChange = (e) => {
    const sortOptions: SortType[] = ['default', 'income', 'difficulty']
    setSortType(sortOptions[e.detail.value])
  }

  // 处理难度筛选
  const handleDifficultyChange = (e) => {
    const difficultyOptions: DifficultyFilter[] = ['all', 'easy', 'medium', 'hard']
    setDifficultyFilter(difficultyOptions[e.detail.value])
  }

  if (loading) {
    return (
      <View className='opportunity-page'>
        <View className='loading'>加载中...</View>
      </View>
    )
  }

  const sortOptions = ['默认排序', '收入从高到低', '难度从低到高']
  const difficultyOptions = ['全部难度', '简单', '中等', '困难']

  return (
    <ScrollView className='opportunity-page' scrollY>
      <View className='header'>
        <Text className='title'>副业机会</Text>
        <Text className='subtitle'>发现适合你的灵活就业机会</Text>
      </View>

      {/* 筛选和排序工具栏 */}
      <View className='filter-bar'>
        <View className='filter-item'>
          <Picker 
            mode='selector' 
            range={difficultyOptions}
            onChange={handleDifficultyChange}
          >
            <View className='picker'>
              <Text className='picker-text'>
                {difficultyOptions[['all', 'easy', 'medium', 'hard'].indexOf(difficultyFilter)]}
              </Text>
              <Text className='picker-arrow'>▼</Text>
            </View>
          </Picker>
        </View>

        <View className='filter-item'>
          <Picker 
            mode='selector' 
            range={sortOptions}
            onChange={handleSortChange}
          >
            <View className='picker'>
              <Text className='picker-text'>
                {sortOptions[['default', 'income', 'difficulty'].indexOf(sortType)]}
              </Text>
              <Text className='picker-arrow'>▼</Text>
            </View>
          </Picker>
        </View>
      </View>

      {/* 结果统计 */}
      <View className='result-count'>
        <Text>共 {filteredAndSortedOpportunities.length} 个机会</Text>
      </View>

      <View className='opportunity-list'>
        {filteredAndSortedOpportunities.map((item: any) => (
          <View
            key={item.id}
            className='opportunity-card'
            onClick={() => navigateToDetail(item.id)}
          >
            <View className='card-header'>
              <Text className='opportunity-title'>{item.title}</Text>
              {item.isRecommended && (
                <View className='recommended-badge'>推荐</View>
              )}
            </View>

            <Text className='opportunity-desc'>{item.description}</Text>

            <View className='card-meta'>
              <View className='meta-item'>
                <Text className='meta-label'>难度</Text>
                <Text
                  className='meta-value'
                  style={{ color: getDifficultyColor(item.difficulty) }}
                >
                  {getDifficultyLabel(item.difficulty)}
                </Text>
              </View>

              <View className='meta-item'>
                <Text className='meta-label'>收入</Text>
                <Text className='meta-value income'>{item.income}</Text>
              </View>

              <View className='meta-item'>
                <Text className='meta-label'>时间</Text>
                <Text className='meta-value'>{item.timeCommitment}</Text>
              </View>
            </View>

            {item.tags && item.tags.length > 0 && (
              <View className='tags'>
                {item.tags.map((tag: string, index: number) => (
                  <Text key={index} className='tag'>
                    {tag}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {filteredAndSortedOpportunities.length === 0 && (
        <View className='empty'>
          <Text>暂无符合条件的机会</Text>
        </View>
      )}
    </ScrollView>
  )
}
