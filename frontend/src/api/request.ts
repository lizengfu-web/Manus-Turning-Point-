import Taro from '@tarojs/taro';
import { API_BASE_URL, REQUEST_TIMEOUT, TOKEN_KEY } from './config';

interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  header?: any;
  showLoading?: boolean;
  loadingText?: string;
}

interface Response<T = any> {
  code: number;
  data: T;
  message: string;
}

/**
 * 网络请求封装
 */
export async function request<T = any>(options: RequestOptions): Promise<T> {
  const {
    url,
    method = 'GET',
    data,
    header = {},
    showLoading = false,
    loadingText = '加载中...'
  } = options;

  // 显示加载提示
  if (showLoading) {
    Taro.showLoading({ title: loadingText, mask: true });
  }

  try {
    // 获取 token
    const token = Taro.getStorageSync(TOKEN_KEY);

    // 确保路径拼接正确
    const requestUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

    // 发起请求
    const response = await Taro.request({
      url: requestUrl,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
        ...header
      },
      timeout: REQUEST_TIMEOUT
    });

    // 隐藏加载提示
    if (showLoading) {
      Taro.hideLoading();
    }

    const result = response.data as any;
    
    // 处理响应
    if (response.statusCode === 200) {
      // 适配后端返回格式：{ success: true, data: { ... } } 或 { code: 200, data: { ... } }
      if (result.success === true || result.code === 0 || result.code === 200) {
        return result.data;
      } else if (result.code === 401) {
        // 未登录或 token 失效
        Taro.removeStorageSync(TOKEN_KEY);
        Taro.showToast({
          title: '请先登录',
          icon: 'none',
          duration: 2000
        });
        // 跳转到登录页
        setTimeout(() => {
          Taro.reLaunch({ url: '/pages/index/index' });
        }, 2000);
        throw new Error('未登录');
      } else {
        Taro.showToast({
          title: result.message || '请求失败',
          icon: 'none',
          duration: 2000
        });
        throw new Error(result.message || '请求失败');
      }
    } else {
      Taro.showToast({
        title: '网络请求失败',
        icon: 'none',
        duration: 2000
      });
      throw new Error('网络请求失败');
    }
  } catch (error: any) {
    // 隐藏加载提示
    if (showLoading) {
      Taro.hideLoading();
    }

    // 处理错误
    console.error('API 请求错误:', error);
    
    if (error.errMsg) {
      if (error.errMsg.includes('timeout')) {
        const timeoutError = new Error('请求超时，请检查网络');
        throw timeoutError;
      } else if (error.errMsg.includes('fail')) {
        // 提供更详细的错误信息
        let errorMsg = '网络连接失败';
        if (error.errMsg.includes('request:fail')) {
          errorMsg = '无法连接到服务器，请检查：\n1. 网络连接\n2. 服务器地址配置\n3. 微信开发者工具中关闭域名校验';
        }
        const failError = new Error(errorMsg);
        throw failError;
      }
    }

    throw error;
  }
}

/**
 * GET 请求
 */
export function get<T = any>(url: string, data?: any, showLoading = false): Promise<T> {
  return request<T>({ url, method: 'GET', data, showLoading });
}

/**
 * POST 请求
 */
export function post<T = any>(url: string, data?: any, showLoading = false): Promise<T> {
  return request<T>({ url, method: 'POST', data, showLoading });
}

/**
 * PUT 请求
 */
export function put<T = any>(url: string, data?: any, showLoading = false): Promise<T> {
  return request<T>({ url, method: 'PUT', data, showLoading });
}

/**
 * DELETE 请求
 */
export function del<T = any>(url: string, data?: any, showLoading = false): Promise<T> {
  return request<T>({
    url,
    method: 'DELETE',
    data,
    showLoading
  });
}

/**
 * tRPC 请求封装（支持 mutation）
 */
export async function trpcMutation<T = any>(procedure: string, input: any, showLoading = false): Promise<T> {
  if (showLoading) {
    Taro.showLoading({ title: '加载中...', mask: true });
  }

  try {
    const token = Taro.getStorageSync(TOKEN_KEY);
    
    // tRPC 使用 batch 格式
    const response = await Taro.request({
      url: `${API_BASE_URL}/api/trpc/${procedure}?batch=1`,
      method: 'POST',
      data: { "0": input },
      header: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
      timeout: REQUEST_TIMEOUT
    });

    if (showLoading) {
      Taro.hideLoading();
    }

    if (response.statusCode === 200) {
      const result = response.data as any;
      // tRPC batch 响应格式是数组
      if (Array.isArray(result) && result[0]) {
        const firstResult = result[0];
        if (firstResult.result && firstResult.result.data) {
          return firstResult.result.data.json || firstResult.result.data;
        } else if (firstResult.error) {
          throw new Error(firstResult.error.message || '请求失败');
        }
      }
      return result;
    } else {
      throw new Error(`HTTP ${response.statusCode}`);
    }
  } catch (error: any) {
    if (showLoading) {
      Taro.hideLoading();
    }
    console.error('tRPC 请求错误:', error);
    throw error;
  }
}