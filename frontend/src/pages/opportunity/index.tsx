import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { OPPORTUNITIES_DATA, SUGGESTIONS, PITFALLS } from './data'
import './index.scss'

export default function Opportunity() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  Taro.setNavigationBarTitle({
    title: '副业机会'
  })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
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

  return (
    <ScrollView className='opportunity-page' scrollY>
      {/* 页面头部 */}
      <View className='page-header'>
        <Text className='page-title'>副业机会</Text>
        <Text className='page-subtitle'>发现适合你的灵活就业机会</Text>
      </View>

      {/* 副业卡片列表 */}
      <View className='opportunities-container'>
        {OPPORTUNITIES_DATA.map((item) => (
          <View
            key={item.id}
            className={`opportunity-card ${expandedId === item.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(item.id)}
          >
            {/* 卡片头部 */}
            <View className='card-header'>
              <View className='title-section'>
                <Text className='opportunity-title'>{item.title}</Text>
                <Text className='opportunity-desc'>{item.description}</Text>
              </View>
              {item.isRecommended && (
                <View className='recommended-badge'>推荐</View>
              )}
            </View>

            {/* 标签 */}
            <View className='tags-row'>
              {item.tags.map((tag, index) => (
                <Text key={index} className='tag'>
                  {tag}
                </Text>
              ))}
            </View>

            {/* 三维指标卡片 */}
            <View className='metrics-row'>
              <View className='metric-card difficulty'>
                <Text className='metric-label'>难度</Text>
                <Text className='metric-value' style={{ color: getDifficultyColor(item.difficulty) }}>
                  {getDifficultyLabel(item.difficulty)}
                </Text>
              </View>
              <View className='metric-card income'>
                <Text className='metric-label'>收入</Text>
                <Text className='metric-value'>{item.income}</Text>
              </View>
              <View className='metric-card time'>
                <Text className='metric-label'>时间</Text>
                <Text className='metric-value'>{item.timeCommitment}</Text>
              </View>
            </View>

            {/* 展开详情 */}
            {expandedId === item.id && (
              <View className='card-details'>
                {item.details && (
                  <View className='detail-section'>
                    <Text className='detail-title'>详情</Text>
                    <Text className='detail-text'>{item.details}</Text>
                  </View>
                )}
                {item.requirements && item.requirements.length > 0 && (
                  <View className='detail-section'>
                    <Text className='detail-title'>要求</Text>
                    {item.requirements.map((req, index) => (
                      <Text key={index} className='detail-item'>• {req}</Text>
                    ))}
                  </View>
                )}
                {item.tips && item.tips.length > 0 && (
                  <View className='detail-section'>
                    <Text className='detail-title'>建议</Text>
                    {item.tips.map((tip, index) => (
                      <Text key={index} className='detail-item'>• {tip}</Text>
                    ))}
                  </View>
                )}
              </View>
            )}

            {/* 展开/收起指示器 */}
            <View className='expand-indicator'>
              <Text className='expand-arrow'>{expandedId === item.id ? '▲' : '▼'}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* 建议部分 */}
      <View className='suggestions-section'>
        <View className='section-header'>
          <Text className='section-icon'>💡</Text>
          <Text className='section-title'>{SUGGESTIONS[0]}</Text>
        </View>
        <View className='suggestions-list'>
          {SUGGESTIONS.slice(1).map((suggestion, index) => (
            <Text key={index} className='suggestion-item'>
              {suggestion}
            </Text>
          ))}
        </View>
      </View>

      {/* 避坑指南部分 */}
      <View className='pitfalls-section'>
        <View className='section-header'>
          <Text className='section-icon'>⚠️</Text>
          <Text className='section-title'>{PITFALLS[0]}</Text>
        </View>
        <View className='pitfalls-list'>
          {PITFALLS.slice(1).map((pitfall, index) => (
            <Text key={index} className={`pitfall-item ${pitfall.startsWith('✅') ? 'positive' : ''}`}>
              {pitfall}
            </Text>
          ))}
        </View>
      </View>

      {/* 底部间距 */}
      <View className='page-footer' />
    </ScrollView>
  )
}
