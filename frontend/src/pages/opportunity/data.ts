/**
 * 副业机会数据源
 */

export interface OpportunityItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  income: string;
  timeCommitment: string;
  isRecommended: boolean;
  details?: string;
  requirements?: string[];
  tips?: string[];
}

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 1,
    title: '内容创作（小红书/抖音）',
    description: '分享生活、知识或经验，通过流量变现',
    tags: ['自媒体', '创意', '灵活'],
    difficulty: 'easy',
    income: '500-5000元/月',
    timeCommitment: '2-4小时/天',
    isRecommended: true,
    details: '在小红书、抖音等平台分享内容，通过点赞、评论和分享获得收益。',
    requirements: ['有创意思维', '能持续产出内容', '了解平台规则'],
    tips: ['坚持垂直领域', '定期更新内容', '与粉丝互动']
  },
  {
    id: 2,
    title: '虚拟助手（远程客服/行政）',
    description: '为企业提供远程行政或客服支持',
    tags: ['远程工作', '稳定', '责任'],
    difficulty: 'medium',
    income: '2000-4000元/月',
    timeCommitment: '4-6小时/天',
    isRecommended: true,
    details: '通过远程方式为企业或个人提供客服、行政等支持工作。',
    requirements: ['沟通能力强', '细心负责', '有电脑和网络'],
    tips: ['选择正规平台', '建立专业形象', '准时交付任务']
  },
  {
    id: 3,
    title: '在线翻译',
    description: '翻译文档、视频、网页等内容',
    tags: ['语言', '专业', '灵活'],
    difficulty: 'medium',
    income: '1500-6000元/月',
    timeCommitment: '2-5小时/天',
    isRecommended: true,
    details: '利用语言优势，为企业或个人翻译各类内容，按字数或项目计费。',
    requirements: ['掌握两种以上语言', '表达准确', '有翻译经验优先'],
    tips: ['建立专业档案', '从小项目开始', '积累客户评价']
  },
  {
    id: 4,
    title: '数据标注/AI 训练',
    description: '为 AI 模型标注数据，参与 AI 训练',
    tags: ['数据', '简单', '灵活'],
    difficulty: 'easy',
    income: '800-3000元/月',
    timeCommitment: '1-3小时/天',
    isRecommended: false,
    details: '通过标注图片、文本、音频等数据，帮助 AI 模型学习和优化。',
    requirements: ['细心', '能按规则操作', '有耐心'],
    tips: ['选择正规平台', '了解标注规则', '保护数据隐私']
  },
  {
    id: 5,
    title: '在线教学/辅导',
    description: '教授学生学科知识或技能',
    tags: ['教育', '专业', '稳定'],
    difficulty: 'medium',
    income: '2000-8000元/月',
    timeCommitment: '3-6小时/天',
    isRecommended: true,
    details: '通过在线平台教授学生各类学科或技能，按课时计费。',
    requirements: ['专业知识扎实', '表达清晰', '有教学经验'],
    tips: ['获得相关证书', '建立学生口碑', '定期更新教学方法']
  },
  {
    id: 6,
    title: '写作/文案创意',
    description: '为企业或个人撰写文案、文章、脚本等',
    tags: ['创意', '写作', '灵活'],
    difficulty: 'medium',
    income: '1000-5000元/月',
    timeCommitment: '2-4小时/天',
    isRecommended: true,
    details: '利用写作能力为品牌、企业或个人创作各类文案和内容。',
    requirements: ['文笔好', '理解力强', '创意思维'],
    tips: ['建立作品集', '了解市场需求', '与客户沟通清晰']
  },
  {
    id: 7,
    title: '设计/视频剪辑',
    description: '设计海报、视频剪辑、UI 设计等',
    tags: ['设计', '创意', '专业'],
    difficulty: 'hard',
    income: '2000-10000元/月',
    timeCommitment: '3-6小时/天',
    isRecommended: true,
    details: '利用设计或视频剪辑技能，为企业或个人创作视觉内容。',
    requirements: ['掌握设计工具', '审美能力强', '有作品集'],
    tips: ['持续学习新工具', '建立专业品牌', '参加设计竞赛']
  }
];

/**
 * 副业建议数据
 */
export const SUGGESTIONS = [
  '💡 针对您的建议',
  '✨ 优先选择能学习业知识的副业',
  '✨ 利用学生身份获取优惠和资源',
  '✨ 积累作品和案例，为职业发展加分',
  '✨ 避免过度兼职影响学业和身体',
  '✨ 副业经验可优化为职业竞争力'
];

/**
 * 避坑指南数据
 */
export const PITFALLS = [
  '⚠️ 避坑指南',
  '❌ 避免需要先支付费用的"培训"或"加盟"项目',
  '❌ 谨慎"日赚千元"等过度承诺的广告',
  '❌ 不要相信"刷单"或"兼职"的诈骗话术',
  '❌ 选择有口碑的正规平台',
  '✅ 从小项目开始，逐步积累经验和评价'
];
