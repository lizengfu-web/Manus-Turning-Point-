import Taro, { useRouter } from '@tarojs/taro';
import { View, Text, RichText } from '@tarojs/components';
import { GUIDES_DATA } from '../data';
import './index.scss';

export default function GuideDetail() {
  const router = useRouter();
  const { id } = router.params;
  
  const guide = GUIDES_DATA.find(item => item.id === id);

  Taro.setNavigationBarTitle({
    title: guide?.title || '指南详情'
  });

  if (!guide) {
    return (
      <View className='detail-page'>
        <Text>未找到相关内容</Text>
      </View>
    );
  }

  // 简单的 Markdown 转 HTML 处理
  const formatContent = (content: string) => {
    if (!content) return '';
    return content
      .replace(/### (.*)/g, '<h3 class="detail-h3">$1</h3>')
      .replace(/- (.*)/g, '<li class="detail-li">$1</li>')
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <View className='detail-page'>
      <View className='detail-header'>
        <View className='detail-tag'>{guide.tag}</View>
        <Text className='detail-title'>{guide.title}</Text>
      </View>
      <View className='detail-content'>
        <RichText nodes={formatContent(guide.content || '')} />
      </View>
      <View className='detail-footer'>
        <Text className='disclaimer'>* 政策具有时效性，具体请以当地人社部门最新公告为准。</Text>
      </View>
    </View>
  );
}
