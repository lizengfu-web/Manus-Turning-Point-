import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

export default function Index() {
  const navigateToGuide = () => {
    Taro.navigateTo({ url: '/pages/guide/index' });
  };

  return (
    <View className='index-page'>
      <View className='header'>
        <Text className='title'>转角驿站</Text>
        <Text className='subtitle'>职场转折的温暖驿站</Text>
      </View>

      <View className='login-card'>
        <Text className='login-tip'>欢迎来到转角驿站</Text>
      </View>

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
