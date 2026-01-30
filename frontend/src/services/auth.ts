import Taro from '@tarojs/taro';
import { request } from '../utils/request';

export const login = async () => {
  try {
    const { code } = await Taro.login();
    const res = await request({
      url: '/auth/login',
      method: 'POST',
      data: { code },
    });

    if (res.success) {
      Taro.setStorageSync('token', res.token);
      Taro.setStorageSync('userId', res.userId);
      Taro.setStorageSync('openid', res.openid);
      return res;
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
