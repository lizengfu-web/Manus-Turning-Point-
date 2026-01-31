import Taro from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/user';
import { wxLogin, getCurrentUser, isLoggedIn } from '@/api/auth';
import IdentitySelector from '@/components/IdentitySelector';
import { getIdentityInfo, getRandomQuoteByIdentity, getIdentityList } from '@/constants/userIdentity';
import './index.scss';

export default function Index() {
  const { user, setUser } = useUserStore();
  const [userIdentity, setUserIdentity] = useState<string | null>(null);
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [showIdentitySelector, setShowIdentitySelector] = useState(false);
  const [selectedIdentity, setSelectedIdentity] = useState<string | null>(null);

  useEffect(() => {
    // 检查登录状态和身份
    if (isLoggedIn()) {
      const currentUser = getCurrentUser();
      setUser(currentUser);
      
      // 从本地存储获取身份
      const savedIdentity = Taro.getStorageSync('user_identity');
      if (savedIdentity) {
        setUserIdentity(savedIdentity);
        updateQuote(savedIdentity);
      } else if (currentUser) {
        // 如果已登录但未设置身份，显示选择器
        setShowIdentitySelector(true);
      }
    } else {
      // 未登录时显示默认寄语
      setQuote('失业不是终点，而是转折点。每一个停顿，都是为了更好的起跑。');
    }
  }, []);

  // 更新寄语
  const updateQuote = (identityKey: string) => {
    const newQuote = getRandomQuoteByIdentity(identityKey);
    setQuote(newQuote);
  };

  // 微信登录
  const handleLogin = async () => {
    try {
      setLoading(true);

      let loginRes;
      try {
        loginRes = await Taro.login();
      } catch (e: any) {
        console.error('Taro.login System Error:', e);
        throw new Error('微信登录服务暂时不可用，请稍后再试');
      }

      const { code } = loginRes;
      if (!code) throw new Error('获取登录凭证失败');

      const result = await wxLogin({
        code,
        userInfo: {
          nickName: '微信用户',
          avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
        }
      });

      setUser(result.user);
      
      // 检查是否已有身份，如果没有则显示选择器
      const savedIdentity = Taro.getStorageSync('user_identity');
      if (!savedIdentity) {
        setShowIdentitySelector(true);
      }

      Taro.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      });
    } catch (error: any) {
      console.error('登录失败:', error);
      Taro.showToast({
        title: error.message || '登录失败',
        icon: 'none',
        duration: 2000
      });
    } finally {
      setLoading(false);
    }
  };

  // 处理身份选择
  const handleIdentitySelect = (identityKey: string) => {
    setUserIdentity(identityKey);
    Taro.setStorageSync('user_identity', identityKey);
    updateQuote(identityKey);
    setShowIdentitySelector(false);
    
    Taro.showToast({
      title: '身份设置成功',
      icon: 'success',
      duration: 1500
    });
  };

  // 打开身份选择器
  const openIdentitySelector = () => {
    setSelectedIdentity(userIdentity);
    setShowIdentitySelector(true);
  };

  const identityInfo = userIdentity ? getIdentityInfo(userIdentity) : null;

  const navigateToGuide = () => {
    Taro.navigateTo({ url: '/pages/guide/index' });
  };

  return (
    <View className='index-page'>
      <IdentitySelector
        visible={showIdentitySelector}
        currentIdentity={selectedIdentity || userIdentity}
        onSelect={handleIdentitySelect}
        onCancel={() => setShowIdentitySelector(false)}
      />

      {/* 顶部导航栏 */}
      <View className='top-bar'>
        <View className='bar-left'>
          <Text className='app-title'>转角驿站</Text>
          <Text className='app-subtitle'>职场转折的温暖驿站</Text>
        </View>
        <View className='bar-right'>
          <Button className='icon-btn' onClick={() => Taro.navigateTo({ url: '/pages/profile/index' })}>
            ⚙️
          </Button>
          <Button className='icon-btn' onClick={() => Taro.switchTab({ url: '/pages/profile/index' })}>
            →
          </Button>
        </View>
      </View>

      {/* 用户卡片 */}
      {user && userIdentity && identityInfo ? (
        <View className='user-card' style={{ background: identityInfo.color }}>
          <View className='card-left'>
            <Text className='identity-icon'>{identityInfo.icon}</Text>
            <View className='card-info'>
              <Text className='identity-name'>{identityInfo.name}</Text>
              <Text className='identity-desc'>{identityInfo.description}</Text>
            </View>
          </View>
          <Button className='modify-btn' onClick={openIdentitySelector}>
            修改 →
          </Button>
        </View>
      ) : user ? (
        <View className='user-card setup-card'>
          <View className='card-left'>
            <Text className='setup-icon'>👤</Text>
            <View className='card-info'>
              <Text className='identity-name'>完善身份信息</Text>
              <Text className='identity-desc'>选择身份，获取个性化建议</Text>
            </View>
          </View>
          <Button className='modify-btn' onClick={openIdentitySelector}>
            设置 →
          </Button>
        </View>
      ) : (
        <View className='login-card'>
          <Text className='login-tip'>登录后查看个性化推荐</Text>
          <Button
            className='login-btn'
            onClick={handleLogin}
            loading={loading}
            disabled={loading}
          >
            {loading ? '登录中...' : '微信登录'}
          </Button>
        </View>
      )}

      {/* 今日寄语卡片 */}
      <View className='quote-card'>
        <View className='quote-header'>
          <Text className='quote-icon'>💡</Text>
          <Text className='quote-label'>今日寄语</Text>
        </View>
        <Text className='quote-text'>{quote}</Text>
      </View>

      {/* 功能网格 */}
      <View className='feature-grid'>
        <View className='feature-item' onClick={navigateToGuide}>
          <View className='feature-icon'>📖</View>
          <Text className='feature-title'>政策指南</Text>
          <Text className='feature-desc'>失业金计算、申领攻略</Text>
        </View>
        <View className='feature-item' onClick={() => Taro.navigateTo({ url: '/pages/layoff/index' })}>
          <View className='feature-icon'>⚖️</View>
          <Text className='feature-title'>裁员咨询</Text>
          <Text className='feature-desc'>法律权益、补偿计算</Text>
        </View>
        <View className='feature-item' onClick={() => Taro.navigateTo({ url: '/pages/interview/index' })}>
          <View className='feature-icon'>🎤</View>
          <Text className='feature-title'>模拟面试</Text>
          <Text className='feature-desc'>面试训练、技能提升</Text>
        </View>
        <View className='feature-item' onClick={() => Taro.switchTab({ url: '/pages/opportunity/index' })}>
          <View className='feature-icon'>💼</View>
          <Text className='feature-title'>副业机会</Text>
          <Text className='feature-desc'>灵活就业、创业孵化</Text>
        </View>
        <View className='feature-item' onClick={() => Taro.switchTab({ url: '/pages/hole/index' })}>
          <View className='feature-icon'>💬</View>
          <Text className='feature-title'>树洞</Text>
          <Text className='feature-desc'>倾诉心声、互相鼓励</Text>
        </View>
        <View className='feature-item' onClick={() => Taro.switchTab({ url: '/pages/profile/index' })}>
          <View className='feature-icon'>👤</View>
          <Text className='feature-title'>我的</Text>
          <Text className='feature-desc'>个人中心、设置</Text>
        </View>
      </View>
    </View>
  );
}
