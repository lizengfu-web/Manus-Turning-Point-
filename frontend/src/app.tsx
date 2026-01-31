import { PropsWithChildren } from 'react'
import Taro, { useLaunch, useError } from '@tarojs/taro'
import './app.scss'

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('App launched.');
    
    // 针对微信开发者工具的特定系统错误进行全局拦截
    if (process.env.TARO_ENV === 'weapp') {
      Taro.onError((error) => {
        if (error.includes('webapi_getwxaasyncsecinfo:fail')) {
          console.warn('[System Compatibility] Intercepted WeChat SystemError:', error);
          // 静默处理，不弹出红屏报错
          return;
        }
        console.error('App Error:', error);
      });
    }
  });

  useError((error) => {
    if (error.includes('webapi_getwxaasyncsecinfo:fail')) {
      return;
    }
    console.error('Global Error:', error);
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
