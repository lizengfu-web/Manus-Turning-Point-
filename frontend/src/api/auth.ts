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
    
    // 使用标准 HTTP POST 请求
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/miniprogram/login`,
      method: 'POST',
      data: params,
      header: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('[wxLogin] Response status:', response.statusCode);
    console.log('[wxLogin] Response data:', response.data);
    
    if (response.statusCode === 200 && response.data.success) {
      const result = response.data.data;
      
      // 保存 token 和用户信息
      Taro.setStorageSync(TOKEN_KEY, result.token);
      Taro.setStorageSync(USER_INFO_KEY, result.user);
      
      console.log('[wxLogin] Login successful');
      return result;
    } else {
      const errorMsg = response.data.error || '登录失败';
      console.error('[wxLogin] Login failed:', errorMsg);
      throw new Error(errorMsg);
    }
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

    const response = await Taro.request({
      url: `${API_BASE_URL}/api/miniprogram/user`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.statusCode === 200 && response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.error || '获取用户信息失败');
    }
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

    const response = await Taro.request({
      url: `${API_BASE_URL}/api/miniprogram/user/update`,
      method: 'POST',
      data: userInfo,
      header: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.statusCode === 200 && response.data.success) {
      // 更新本地存储
      const updatedUser = response.data.data;
      Taro.setStorageSync(USER_INFO_KEY, updatedUser);
      return updatedUser;
    } else {
      throw new Error(response.data.error || '编辑用户信息失败');
    }
  } catch (error: any) {
    console.error('编辑用户信息错误:', error);
    throw error;
  }
}
