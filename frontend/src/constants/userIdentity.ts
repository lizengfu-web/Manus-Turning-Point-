/**
 * 用户身份类型及个性化寄语数据库
 */

export interface IdentityType {
  key: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  quotes: string[];
}

export const identityTypes: Record<string, IdentityType> = {
  recent_graduate: {
    key: 'recent_graduate',
    name: '应届毕业生',
    description: '初入职场，需要职业启蒙',
    icon: '🎓',
    color: '#10b981',
    quotes: [
      '学习和成长是最好的投资。',
      '每一个职场新人都曾迷茫过，这很正常。',
      '你的第一份工作不一定是最好的，但一定是最有价值的。',
      '别急着成功，先学会如何工作。',
      '职场就像一场长跑，而不是短跑。',
      '坚持和耐心会让你在职场中脱颖而出。',
      '犯错是学习的最好方式，不要害怕失败。',
      '找到自己的节奏，不要盲目跟风。',
      '你的热情和努力会被看见。',
      '从小事做起，积累经验，成就大事。'
    ]
  },
  short_term: {
    key: 'short_term',
    name: '短期失业者',
    description: '短暂调整期，寻找新机遇',
    icon: '🔄',
    color: '#3b82f6',
    quotes: [
      '失业不是终点，而是转折点。',
      '这个时期是重新审视自己的好机会。',
      '休息是为了更好地出发。',
      '每一次失业都是一次重生的机会。',
      '不要被暂时的挫折打倒，更好的机会在前方。',
      '利用这段时间提升自己，投资自己的未来。',
      '失业期间最珍贵的是时间，好好利用它。',
      '你的价值不由工作定义，而由你的能力定义。',
      '这个时期会让你变得更强大。',
      '坚持和信心会带你走出困境。'
    ]
  },
  long_term: {
    key: 'long_term',
    name: '长期失业者',
    description: '长期调整期，需要心理建设',
    icon: '💪',
    color: '#f59e0b',
    quotes: [
      '长期失业不是你的错，是时代的考验。',
      '坚持不懈的人最终都会成功。',
      '这段经历会成为你最宝贵的财富。',
      '不要放弃，每一天都是新的希望。',
      '你比你想象的更强大。',
      '困难只是暂时的，未来是光明的。',
      '利用这段时间完成那些一直想做的事。',
      '心态决定一切，保持积极很重要。',
      '你的坚持会被看见，机会会来临。',
      '这不是失败，这是人生的另一种可能。'
    ]
  },
  career_transition: {
    key: 'career_transition',
    name: '职业转型者',
    description: '探索新方向，开启新篇章',
    icon: '🚀',
    color: '#8b5cf6',
    quotes: [
      '转型是勇气的表现，也是智慧的选择。',
      '改变永远不会太晚，只要你有决心。',
      '新的开始总是充满挑战，但也充满机遇。',
      '你的过往经验是你最大的优势。',
      '转型是为了找到更适合自己的道路。',
      '不要害怕从零开始，每个成功者都曾如此。',
      '你的多元经历会让你与众不同。',
      '转型的过程中，坚持和学习最重要。',
      '新领域等待着你的创新和热情。',
      '这一步的勇气会改变你的人生轨迹。'
    ]
  }
};

/**
 * 获取用户身份信息
 */
export function getIdentityInfo(identityKey: string): IdentityType | null {
  return identityTypes[identityKey] || null;
}

/**
 * 根据身份获取随机寄语
 */
export function getRandomQuoteByIdentity(identityKey: string): string {
  const identity = identityTypes[identityKey];
  if (!identity) return '你很棒，继续加油！';
  const quotes = identity.quotes;
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * 获取所有身份列表
 */
export function getIdentityList() {
  return Object.values(identityTypes);
}
