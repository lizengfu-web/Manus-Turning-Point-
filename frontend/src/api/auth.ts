import { post } from './request';
import Taro from '@tarojs/taro';
import { TOKEN_KEY, USER_INFO_KEY, API_BASE_URL } from './config';

export interface LoginParams {
  code: string;
  userInfo?: {
    nickName: string;
    avatarUrl: string;
  };
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    openId: string;
    nickName: string;
    avatarUrl: string;
    userType: string;
  };
}

/**
 * 微信登录
 */
export async function wxLogin(params: LoginParams): Promise<LoginResponse> {
  try {
    console.log('[wxLogin] Starting login with code:', params.code?.substring(0, 10) + '...');
    console.log('[wxLogin] API_BASE_URL:', API_BASE_URL);
    
    // 使用封装好的 request 工具类
    const result = await post<LoginResponse>('/auth/login', params, true);
    
    // 保存 token 和用户信息
    Taro.setStorageSync(TOKEN_KEY, result.token);
    Taro.setStorageSync(USER_INFO_KEY, result.user);
    
    console.log('[wxLogin] Login successful');
    return result;
  } catch (error: any) {
    console.error('[wxLogin] Error:', error);
    throw error;
  }
}

/**
 * 获取当前用户信息
 */
export function getCurrentUser() {
  return Taro.getStorageSync(USER_INFO_KEY);
}

/**
 * 退出登录
 */
export function logout() {
  Taro.removeStorageSync(TOKEN_KEY);
  Taro.removeStorageSync(USER_INFO_KEY);
  Taro.reLaunch({ url: '/pages/index/index' });
}

/**
 * 检查是否已登录
 */
export function isLoggedIn(): boolean {
  const token = Taro.getStorageSync(TOKEN_KEY);
  return !!token;
}

/**
 * 获取用户信息
 */
export async function getUserInfo() {
  try {
    const token = Taro.getStorageSync(TOKEN_KEY);
    if (!token) {
      throw new Error('未登录');
    }

    return await get('/auth/user', null, true);
  } catch (error: any) {
    console.error('获取用户信息错误:', error);
    throw error;
  }
}

/**
 * 编辑用户信息
 */
export async function updateUserInfo(userInfo: {
  nickName?: string;
  avatarUrl?: string;
  userType?: string;
  province?: string;
  city?: string;
  workYears?: number;
}) {
  try {
    const token = Taro.getStorageSync(TOKEN_KEY);
    if (!token) {
      throw new Error('未登录');
    }

    const updatedUser = await post('/auth/user/update', userInfo, true);
    Taro.setStorageSync(USER_INFO_KEY, updatedUser);
    return updatedUser;
  } catch (error: any) {
    console.error('编辑用户信息错误:', error);
    throw error;
  }
}
