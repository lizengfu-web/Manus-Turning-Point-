/**
 * 首页功能模块配置
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  backgroundColor: string;
  iconBackgroundColor: string;
  route: string;
  routeType: 'navigateTo' | 'switchTab';
}

export const FEATURES: Feature[] = [
  {
    id: 'guide',
    title: '政策指南',
    description: '失业金计算、申领攻略、社保指导',
    icon: '📖',
    tags: ['计算器', '攻略'],
    backgroundColor: '#fff8f0',
    iconBackgroundColor: '#fef3c7',
    route: '/pages/guide/index',
    routeType: 'navigateTo'
  },
  {
    id: 'opportunity',
    title: '副业机会',
    description: '灵活就业、创业指导、技能变现',
    icon: '💼',
    tags: ['兼职', '创业'],
    backgroundColor: '#fef3f3',
    iconBackgroundColor: '#fed7aa',
    route: '/pages/opportunity/index',
    routeType: 'switchTab'
  },
  {
    id: 'hole',
    title: '心声驿站',
    description: '倾诉烦恼、获得支持、分享经验',
    icon: '💬',
    tags: ['社区', '支持'],
    backgroundColor: '#f3f0ff',
    iconBackgroundColor: '#e9d5ff',
    route: '/pages/hole/index',
    routeType: 'switchTab'
  },
  {
    id: 'interview',
    title: '模拟面试',
    description: 'AI 面试官、实战训练、技能提升',
    icon: '🌟',
    tags: ['面试', '训练'],
    backgroundColor: '#f0f9ff',
    iconBackgroundColor: '#bfdbfe',
    route: '/pages/interview/index',
    routeType: 'navigateTo'
  },
  {
    id: 'layoff',
    title: '维权卫士',
    description: '法律权益、补偿计算、权益保护',
    icon: '⚖️',
    tags: ['法律', '权益'],
    backgroundColor: '#f0fdf4',
    iconBackgroundColor: '#bbf7d0',
    route: '/pages/layoff/index',
    routeType: 'navigateTo'
  },
];
