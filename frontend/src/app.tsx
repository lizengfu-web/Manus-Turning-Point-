import { PropsWithChildren } from 'react'
import Taro, { useLaunch, useError } from '@tarojs/taro'
import './app.scss'

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('App launched.');
    
    // 针对微信开发者工具的特定系统错误进行全局拦截
    if (process.env.TARO_ENV === 'weapp') {
      try {
        Taro.onError((error) => {
          if (typeof error === 'string' && error.includes('webapi_getwxaasyncsecinfo:fail')) {
            console.warn('[System Compatibility] Intercepted WeChat SystemError in onError:', error);
            return;
          }
          console.error('App Error:', error);
        });
      } catch (e) {
        console.warn('Failed to set Taro.onError');
      }
    }
  });

  // 使用 React 错误边界的思想，虽然这里是 Taro App 入口
  // 确保系统级错误不中断渲染
  useError((error) => {
    if (typeof error === 'string' && error.includes('webapi_getwxaasyncsecinfo:fail')) {
      console.warn('[System Compatibility] Intercepted WeChat SystemError in useError:', error);
      return;
    }
    console.error('Global Error:', error);
  });

  return children;
}

export default App;
