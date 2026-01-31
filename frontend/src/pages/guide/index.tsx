import Taro from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import { GUIDES_DATA } from './data';
import './index.scss';

export default function Guide() {
  const handleNavigate = (item) => {
    if (item.isTool) {
      Taro.navigateTo({ url: item.path });
    } else {
      Taro.navigateTo({ url: `/pages/guide/detail/index?id=${item.id}` });
    }
  };

  return (
    <View className='guide-page'>
      <View className='header'>
        <Text className='title'>政策指南</Text>
        <Text className='subtitle'>为您解读最新的就业扶持政策</Text>
      </View>

      <ScrollView scrollY className='guide-list'>
        {GUIDES_DATA.map((item) => (
          <View key={item.id} className='guide-item' onClick={() => handleNavigate(item)}>
            <View className='guide-tag'>{item.tag}</View>
            <Text className='guide-title'>{item.title}</Text>
            <Text className='guide-desc'>{item.desc}</Text>
            <View className='guide-footer'>
              <Text className='read-more'>{item.isTool ? '立即使用' : '查看详情'}</Text>
              <Text className='arrow'>→</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
