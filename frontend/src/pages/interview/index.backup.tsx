import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

interface InterviewSession {
  id: number
  title: string
  description: string
  icon: string
  difficulty: 'easy' | 'medium' | 'hard'
  duration: number // 分钟
  questionCount: number
}

const interviewSessions: InterviewSession[] = [
  {
    id: 1,
    title: '自我介绍',
    description: '学习如何在面试中进行有效的自我介绍',
    icon: '👤',
    difficulty: 'easy',
    duration: 5,
    questionCount: 3
  },
  {
    id: 2,
    title: '职业发展规划',
    description: '讨论你的职业目标和发展方向',
    icon: '🎯',
    difficulty: 'medium',
    duration: 10,
    questionCount: 5
  },
  {
    id: 3,
    title: '技能展示',
    description: '展示你的专业技能和工作经验',
    icon: '💼',
    difficulty: 'medium',
    duration: 15,
    questionCount: 6
  },
  {
    id: 4,
    title: '压力面试',
    description: '应对高难度的压力面试问题',
    icon: '⚡',
    difficulty: 'hard',
    duration: 20,
    questionCount: 8
  },
  {
    id: 5,
    title: '行为面试',
    description: '回答基于行为的面试问题（STAR 法则）',
    icon: '🌟',
    difficulty: 'medium',
    duration: 15,
    questionCount: 7
  },
  {
    id: 6,
    title: '技术面试',
    description: '准备技术相关的面试问题',
    icon: '💻',
    difficulty: 'hard',
    duration: 25,
    questionCount: 10
  }
]

const difficultyColors: Record<string, string> = {
  easy: '#10b981',
  medium: '#f59e0b',
  hard: '#ef4444'
}

const difficultyLabels: Record<string, string> = {
  easy: '简单',
  medium: '中等',
  hard: '困难'
}

export default function Interview() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all')
  const [currentSession, setCurrentSession] = useState<InterviewSession | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [sessionQuestions, setSessionQuestions] = useState<Array<{ question: string; tips: string[] }>>([])
  const [recording, setRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)

  const filteredSessions = selectedDifficulty === 'all'
    ? interviewSessions
    : interviewSessions.filter(session => session.difficulty === selectedDifficulty)

  const handleStartSession = (session: InterviewSession) => {
    // 模拟生成问题
    const questions = generateQuestions(session.id, session.questionCount)
    setSessionQuestions(questions)
    setCurrentSession(session)
    setCurrentQuestion(0)
    setRecording(false)
    setRecordingTime(0)
  }

  const generateQuestions = (sessionId: number, count: number) => {
    const questionBank: Record<number, Array<{ question: string; tips: string[] }>> = {
      1: [
        {
          question: '请用 2-3 分钟介绍一下你自己',
          tips: ['包括你的基本信息', '突出你的核心竞争力', '说明你为什么适合这个职位']
        },
        {
          question: '你的工作经历中最有成就感的项目是什么？',
          tips: ['使用 STAR 法则', '强调你的贡献和成果', '说明学到的经验']
        },
        {
          question: '你为什么离开上一份工作？',
          tips: ['保持积极态度', '避免批评前公司', '说明你的成长和新的目标']
        }
      ],
      2: [
        {
          question: '你的职业目标是什么？',
          tips: ['明确具体的目标', '说明如何实现', '与公司的发展方向相关']
        },
        {
          question: '你认为自己在 5 年后会是什么样子？',
          tips: ['展示你的雄心', '说明具体的发展路径', '与职位相关']
        },
        {
          question: '你如何看待职业发展中的挑战？',
          tips: ['展示学习态度', '说明应对方法', '强调持续成长']
        },
        {
          question: '你想在我们公司学到什么？',
          tips: ['表现出对公司的了解', '说明具体的学习目标', '展示你的热情']
        },
        {
          question: '你如何平衡工作和生活？',
          tips: ['展示时间管理能力', '说明你的优先级', '强调工作效率']
        }
      ],
      3: [
        {
          question: '请介绍一个你最引以为豪的项目',
          tips: ['详细描述项目背景', '说明你的具体角色', '强调成果和影响']
        },
        {
          question: '你如何处理工作中的复杂问题？',
          tips: ['说明你的问题解决方法', '举具体例子', '强调逻辑思维']
        },
        {
          question: '你的技能中哪些最适合这个职位？',
          tips: ['列举相关技能', '举例说明应用', '与职位要求匹配']
        },
        {
          question: '你如何学习新技能？',
          tips: ['说明学习方法', '举例说明成果', '强调持续学习']
        },
        {
          question: '你在团队中的角色是什么？',
          tips: ['说明你的贡献', '强调协作能力', '举具体例子']
        },
        {
          question: '你遇到过的最大挑战是什么？',
          tips: ['说明挑战的背景', '说明你如何应对', '强调学到的经验']
        }
      ],
      4: [
        {
          question: '为什么我们应该雇用你而不是其他候选人？',
          tips: ['突出你的独特优势', '说明你的价值', '避免自大']
        },
        {
          question: '你如何应对失败？',
          tips: ['举具体例子', '说明学到的经验', '强调改进和成长']
        },
        {
          question: '你如何处理与同事的冲突？',
          tips: ['说明你的沟通方式', '强调团队合作', '举具体例子']
        },
        {
          question: '你的弱点是什么？',
          tips: ['诚实但积极', '说明改进方法', '避免关键职位要求']
        },
        {
          question: '你如何在压力下工作？',
          tips: ['说明你的应对方法', '举例说明成果', '强调稳定性']
        },
        {
          question: '你对我们公司的了解有多少？',
          tips: ['说明你的研究', '提出相关问题', '展示真诚兴趣']
        },
        {
          question: '你期望的薪资是多少？',
          tips: ['做好市场调研', '根据经验合理定价', '保持灵活']
        },
        {
          question: '你有什么问题要问我们？',
          tips: ['准备好问题', '展示你的兴趣', '问关于职位和公司的问题']
        }
      ],
      5: [
        {
          question: '请描述一个你解决复杂问题的经历',
          tips: ['使用 STAR 法则', '说明情境、任务、行动、结果', '强调你的思考过程']
        },
        {
          question: '你如何在团队中推动创新？',
          tips: ['举具体例子', '说明你的贡献', '强调团队合作']
        },
        {
          question: '请讲述一个你从失败中学到的经历',
          tips: ['诚实地说明失败', '强调学到的经验', '说明改进措施']
        },
        {
          question: '你如何处理时间压力和多任务工作？',
          tips: ['说明你的优先级管理', '举具体例子', '强调效率']
        },
        {
          question: '请描述一个你展现领导力的情况',
          tips: ['说明你的影响力', '举具体例子', '强调团队成果']
        },
        {
          question: '你如何与不同风格的人合作？',
          tips: ['说明你的适应能力', '举具体例子', '强调沟通技巧']
        },
        {
          question: '请讲述一个你改进流程或系统的经历',
          tips: ['说明原始问题', '说明你的改进方案', '强调成果']
        }
      ],
      6: [
        {
          question: '请解释你最熟悉的技术或框架',
          tips: ['说明基本原理', '举实际应用例子', '说明优缺点']
        },
        {
          question: '你如何解决一个复杂的技术问题？',
          tips: ['说明你的调试方法', '举具体例子', '强调问题解决能力']
        },
        {
          question: '请设计一个系统来解决这个问题',
          tips: ['说明你的设计思路', '讨论权衡方案', '考虑可扩展性']
        },
        {
          question: '你如何保证代码质量？',
          tips: ['说明你的最佳实践', '讨论测试策略', '强调代码审查']
        },
        {
          question: '请讲述一个你优化性能的经历',
          tips: ['说明原始问题', '说明你的优化方案', '强调性能提升']
        },
        {
          question: '你如何学习新的技术？',
          tips: ['说明你的学习方法', '举具体例子', '强调实践能力']
        },
        {
          question: '你在开源项目中的贡献是什么？',
          tips: ['说明你的参与项目', '说明你的贡献', '强调学习收获']
        },
        {
          question: '你如何处理技术债务？',
          tips: ['说明你的认识', '说明处理方法', '强调平衡']
        },
        {
          question: '请讲述一个你解决并发问题的经历',
          tips: ['说明问题的复杂性', '说明你的解决方案', '强调深度理解']
        },
        {
          question: '你对系统设计的理解是什么？',
          tips: ['说明关键概念', '举实际例子', '讨论权衡']
        }
      ]
    }

    return questionBank[sessionId]?.slice(0, count) || []
  }

  const handleStartRecording = () => {
    setRecording(true)
    setRecordingTime(0)
    
    // 模拟计时
    const timer = setInterval(() => {
      setRecordingTime(prev => prev + 1)
    }, 1000)
    
    setTimeout(() => {
      clearInterval(timer)
      setRecording(false)
      Taro.showToast({ title: '已保存你的回答', icon: 'success' })
    }, 30000) // 30 秒后自动停止
  }

  const handleStopRecording = () => {
    setRecording(false)
    Taro.showToast({ title: '已保存你的回答', icon: 'success' })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < sessionQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setRecording(false)
      setRecordingTime(0)
    } else {
      handleFinishSession()
    }
  }

  const handleFinishSession = () => {
    Taro.showModal({
      title: '完成面试',
      content: '恭喜！你已完成本次模拟面试。系统将生成你的表现评估报告。',
      confirmText: '查看报告',
      cancelText: '返回',
      success: (res) => {
        if (res.confirm) {
          Taro.navigateTo({
            url: `/pages/webview/index?url=/interview/${currentSession?.id}/report`
          })
        } else {
          setCurrentSession(null)
        }
      }
    })
  }

  if (currentSession && sessionQuestions.length > 0) {
    const question = sessionQuestions[currentQuestion]
    const progress = ((currentQuestion + 1) / sessionQuestions.length) * 100

    return (
      <View className='interview-session'>
        {/* 进度条 */}
        <View className='progress-bar'>
          <View className='progress-fill' style={{ width: `${progress}%` }}></View>
        </View>

        {/* 页面头部 */}
        <View className='session-header'>
          <Button className='back-button' onClick={() => setCurrentSession(null)}>◀</Button>
          <Text className='session-title'>{currentSession.title}</Text>
          <Text className='question-counter'>
            {currentQuestion + 1}/{sessionQuestions.length}
          </Text>
        </View>

        {/* 问题内容 */}
        <ScrollView className='question-content'>
          <View className='question-box'>
            <Text className='question-number'>问题 {currentQuestion + 1}</Text>
            <Text className='question-text'>{question.question}</Text>

            {/* 提示信息 */}
            <View className='tips-section'>
              <Text className='tips-title'>💡 回答提示</Text>
              {question.tips.map((tip, index) => (
                <View key={index} className='tip-item'>
                  <Text className='tip-text'>• {tip}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* 录音区域 */}
          <View className='recording-section'>
            <Text className='recording-title'>请开始你的回答</Text>
            <Text className='recording-subtitle'>点击下方按钮开始录音（最长 30 秒）</Text>

            <View className='recording-display'>
              {recording ? (
                <>
                  <View className='recording-indicator'>
                    <View className='pulse'></View>
                    <Text>录音中...</Text>
                  </View>
                  <Text className='recording-time'>
                    {Math.floor(recordingTime / 60)}:{String(recordingTime % 60).padStart(2, '0')}
                  </Text>
                </>
              ) : (
                <Text className='recording-prompt'>点击下方按钮开始</Text>
              )}
            </View>

            {/* 录音按钮 */}
            <View className='recording-buttons'>
              {!recording ? (
                <Button className='record-button' onClick={handleStartRecording}>
                  🎤 开始录音
                </Button>
              ) : (
                <Button className='stop-button' onClick={handleStopRecording}>
                  ⏹️ 停止录音
                </Button>
              )}
            </View>
          </View>
        </ScrollView>

        {/* 底部操作按钮 */}
        <View className='session-footer'>
          <Button
            className='next-button'
            onClick={handleNextQuestion}
            disabled={recording}
          >
            {currentQuestion === sessionQuestions.length - 1 ? '完成面试' : '下一题'}
          </Button>
        </View>
      </View>
    )
  }

  return (
    <View className='interview-page'>
      {/* 页面头部 */}
      <View className='interview-header'>
        <Text className='interview-title'>模拟面试</Text>
        <Text className='interview-subtitle'>通过实战练习提升你的面试技能</Text>
      </View>

      {/* 难度筛选 */}
      <ScrollView className='difficulty-filter' scrollX>
        <View className='filter-item' onClick={() => setSelectedDifficulty('all')}>
          <Text className={selectedDifficulty === 'all' ? 'active' : ''}>全部</Text>
        </View>
        <View className='filter-item' onClick={() => setSelectedDifficulty('easy')}>
          <Text className={selectedDifficulty === 'easy' ? 'active' : ''}>简单</Text>
        </View>
        <View className='filter-item' onClick={() => setSelectedDifficulty('medium')}>
          <Text className={selectedDifficulty === 'medium' ? 'active' : ''}>中等</Text>
        </View>
        <View className='filter-item' onClick={() => setSelectedDifficulty('hard')}>
          <Text className={selectedDifficulty === 'hard' ? 'active' : ''}>困难</Text>
        </View>
      </ScrollView>

      {/* 面试课程列表 */}
      <ScrollView className='session-list' scrollY>
        {filteredSessions.map(session => (
          <View
            key={session.id}
            className='session-card'
            onClick={() => handleStartSession(session)}
          >
            <View className='card-header'>
              <Text className='card-icon'>{session.icon}</Text>
              <View className='card-info'>
                <Text className='card-title'>{session.title}</Text>
                <Text className='card-description'>{session.description}</Text>
              </View>
            </View>

            <View className='card-meta'>
              <View className='meta-item'>
                <Text className='meta-label'>难度</Text>
                <Text
                  className='meta-value difficulty'
                  style={{ color: difficultyColors[session.difficulty] }}
                >
                  {difficultyLabels[session.difficulty]}
                </Text>
              </View>
              <View className='meta-item'>
                <Text className='meta-label'>时长</Text>
                <Text className='meta-value'>{session.duration} 分钟</Text>
              </View>
              <View className='meta-item'>
                <Text className='meta-label'>题目</Text>
                <Text className='meta-value'>{session.questionCount} 题</Text>
              </View>
            </View>

            <View className='card-action'>
              <Text className='action-text'>开始练习 →</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
