import Taro from '@tarojs/taro';

const BASE_URL = 'http://192.168.31.20:8080/api'; // 本地调试地址

export const request = async (options: any) => {
  const { url, method = 'GET', data, header = {} } = options;
  
  // 从本地缓存获取 token
  const token = Taro.getStorageSync('token');
  if (token) {
    header['Authorization'] = `Bearer ${token}`;
  }

  try {
    const res = await Taro.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        ...header,
      },
    });

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return res.data;
    } else {
      throw new Error(res.data.message || '请求失败');
    }
  } catch (error) {
    Taro.showToast({
      title: error.message || '网络请求失败',
      icon: 'none',
    });
    throw error;
  }
};
