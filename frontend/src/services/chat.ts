import { request } from '../utils/request';
import Taro from '@tarojs/taro';

export const sendMessage = async (message: string) => {
  const userId = Taro.getStorageSync('userId');
  return request({
    url: '/chat/send',
    method: 'POST',
    data: {
      userId,
      message,
    },
  });
};
