import { get, post } from './request';

export interface PointTransaction {
  id: number;
  userId: number;
  points: number;
  type: 'EARN' | 'CONSUME';
  description: string;
  createdAt: string;
}

export interface UserPointsInfo {
  totalPoints: number;
  level: number;
}

/**
 * 每日打卡
 */
export function dailyCheckIn() {
  return post<{ success: boolean; message: string; currentPoints: number; currentLevel: number }>('/api/points/checkin', {});
}

/**
 * 获取积分交易明细
 */
export function getPointTransactions() {
  return get<PointTransaction[]>('/api/points/transactions');
}

// TODO: 邀请好友接口 (待后端实现)
// export function inviteFriend(invitedOpenid: string) {
//   return post<{ success: boolean; message: string; currentPoints: number }>('/api/points/invite', { invitedOpenid });
// }

/**
 * 消耗 AI 面试积分
 */
export function consumeAiInterviewPoints(userId: number) {
  return post<{ success: boolean; message: string }>("/api/points/consumeAiInterview", { userId });
}
