import { post, get } from './request';
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

// 本地存储的用户信息缓存 key
const LOCAL_USER_CACHE_KEY = 'local_user_cache';

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
  Taro.removeStorageSync(LOCAL_USER_CACHE_KEY);
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

    try {
      // 尝试从服务器获取
      const userInfo = await get('/auth/user', null, false);
      // 获取成功，保存到本地缓存
      Taro.setStorageSync(LOCAL_USER_CACHE_KEY, userInfo);
      return userInfo;
    } catch (networkError) {
      // 网络请求失败，尝试使用本地缓存
      console.warn('[getUserInfo] 网络请求失败，尝试使用本地缓存:', networkError);
      const cachedInfo = Taro.getStorageSync(LOCAL_USER_CACHE_KEY);
      if (cachedInfo) {
        console.log('[getUserInfo] 使用本地缓存的用户信息');
        return cachedInfo;
      }
      // 如果本地也没有缓存，则抛出错误
      throw networkError;
    }
  } catch (error: any) {
    console.error('[getUserInfo] 获取用户信息错误:', error);
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

    try {
      // 尝试从服务器更新
      const updatedUser = await post('/auth/user/update', userInfo, false);
      // 更新成功，保存到本地缓存和存储
      Taro.setStorageSync(USER_INFO_KEY, updatedUser);
      Taro.setStorageSync(LOCAL_USER_CACHE_KEY, updatedUser);
      return updatedUser;
    } catch (networkError) {
      // 网络请求失败，使用本地降级方案
      console.warn('[updateUserInfo] 网络请求失败，使用本地存储降级方案:', networkError);
      
      // 获取当前存储的用户信息
      const currentUser = Taro.getStorageSync(USER_INFO_KEY) || {};
      
      // 合并新的用户信息
      const updatedUser = {
        ...currentUser,
        ...userInfo
      };
      
      // 保存到本地存储和缓存
      Taro.setStorageSync(USER_INFO_KEY, updatedUser);
      Taro.setStorageSync(LOCAL_USER_CACHE_KEY, updatedUser);
      
      console.log('[updateUserInfo] 已保存到本地存储，待网络恢复后将同步到服务器');
      return updatedUser;
    }
  } catch (error: any) {
    console.error('[updateUserInfo] 编辑用户信息错误:', error);
    throw error;
  }
}

/**
 * 同步本地用户信息到服务器（用于网络恢复后的数据同步）
 */
export async function syncUserInfoToServer() {
  try {
    const token = Taro.getStorageSync(TOKEN_KEY);
    if (!token) {
      return;
    }

    const cachedInfo = Taro.getStorageSync(LOCAL_USER_CACHE_KEY);
    if (!cachedInfo) {
      return;
    }

    // 尝试同步到服务器
    const syncedUser = await post('/auth/user/update', cachedInfo, false);
    
    // 同步成功，更新本地存储
    Taro.setStorageSync(USER_INFO_KEY, syncedUser);
    Taro.setStorageSync(LOCAL_USER_CACHE_KEY, syncedUser);
    
    console.log('[syncUserInfoToServer] 用户信息已成功同步到服务器');
  } catch (error: any) {
    console.warn('[syncUserInfoToServer] 同步失败:', error);
    // 同步失败不抛出错误，允许应用继续运行
  }
}
