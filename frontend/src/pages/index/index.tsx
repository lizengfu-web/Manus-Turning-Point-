import Taro from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/user';
import { wxLogin, getCurrentUser, isLoggedIn } from '@/api/auth';
import './index.scss';

export default function Index() {
  const { user, setUser } = useUserStore();
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const quotes = [
    '失业不是终点，而是转折点。每一个停顿，都是为了更好的起跑。',
    '你的价值不由工作定义。这个时期，是重新认识自己的机会。',
    '很多成功的人，都曾经历过失业。这不是失败，这是成长的代价。',
    '焦虑是正常的，但它不会改变现状。不如把精力投入到能改变的事情上。',
    '失业期间最珍贵的不是金钱，而是时间。好好利用它。'
  ];

  useEffect(() => {
    // 随机选择一条寄语
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);

    // 检查登录状态
    if (isLoggedIn()) {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    }
  }, []);

  // 微信登录（使用新的授权方式）
  const handleLogin = async () => {
    try {
      setLoading(true);

      // 获取微信登录 code
      const { code } = await Taro.login();

      if (!code) {
        throw new Error('获取登录凭证失败');
      }

      // 调用后端登录接口（匿名登录）
      const result = await wxLogin({
        code,
        userInfo: {
          nickName: '微信用户',
          avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
        }
      });

      setUser(result.user);

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

  // 跳转到指南页
  const navigateToGuide = () => {
    Taro.navigateTo({
      url: '/pages/guide/index'
    });
  };

  return (
    <View className='index-page'>
      {/* Header */}
      <View className='header'>
        <Text className='title'>转角驿站</Text>
        <Text className='subtitle'>职场转折的温暖驿站</Text>
      </View>

      {/* User Card */}
      {user ? (
        <View className='user-card'>
          <View className='user-info'>
            <Image className='avatar' src={user.avatarUrl} />
            <View className='info'>
              <Text className='name'>{user.nickName}</Text>
              <Text className='type'>{getUserTypeLabel(user.userType)}</Text>
            </View>
          </View>
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

      {/* Quote Card */}
      <View className='quote-card'>
        <View className='quote-icon'>💡</View>
        <View className='quote-content'>
          <Text className='quote-label'>今日寄语</Text>
          <Text className='quote-text'>{quote}</Text>
        </View>
      </View>

      {/* Feature Grid */}
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

function getUserTypeLabel(userType: string): string {
  const labels: Record<string, string> = {
    'short_term': '短期失业者',
    'long_term': '长期失业者',
    'recent_graduate': '应届毕业生',
    'career_transition': '职业转型者'
  };
  return labels[userType] || '用户';
}
