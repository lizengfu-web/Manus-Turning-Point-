import { get } from './request';

export interface Opportunity {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  income: string;
  timeRequired: string;
  tags: string[];
}

/**
 * 获取副业机会列表
 */
export function getOpportunityList() {
  return get<Opportunity[]>('/api/trpc/opportunity.list');
}

/**
 * 获取推荐机会
 */
export function getRecommendedOpportunities() {
  return get<Opportunity[]>('/api/trpc/opportunity.recommended');
}
