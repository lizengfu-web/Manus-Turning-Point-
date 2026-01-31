import Taro from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

export default function SocialSecurity() {
  Taro.setNavigationBarTitle({
    title: '个人缴社保攻略'
  });

  const strategies = [
    {
      title: '1. 参保身份选择',
      content: '灵活就业人员可以参加"企业职工基本养老保险"和"职工基本医疗保险"。相比城乡居民社保，待遇更高但费用也更高。'
    },
    {
      title: '2. 缴费基数怎么选？',
      content: '通常在当地上年度全口径城镇单位就业人员平均工资的60%至300%之间自主选择。建议：经济压力大选60%，想以后养老金多选更高基数。'
    },
    {
      title: '3. 线上办理流程',
      content: '打开微信/支付宝 -> 搜索"城市服务" -> "社保" -> "灵活就业缴费"。或下载当地人社官方APP办理。'
    },
    {
      title: '4. 医保断缴的影响',
      content: '医保断缴超过3个月，通常会有3-6个月的待遇等待期，期间无法报销医疗费。建议优先保证医保连续缴纳。'
    },
    {
      title: '5. 别忘了领补贴',
      content: '如果你是就业困难人员（如4050人员），可以申请"灵活就业社保补贴"，通常能返还缴纳费用的2/3。'
    }
  ];

  return (
    <View className='strategy-page'>
      <View className='header'>
        <Text className='title'>灵活就业参保攻略</Text>
        <Text className='subtitle'>自由职业者如何规划社保缴纳</Text>
      </View>

      <ScrollView scrollY className='content-list'>
        {strategies.map((item, index) => (
          <View key={index} className='strategy-card'>
            <Text className='card-title'>{item.title}</Text>
            <Text className='card-content'>{item.content}</Text>
          </View>
        ))}
        
        <View className='action-card'>
          <Text className='action-title'>常用缴费入口</Text>
          <View className='btn-group'>
            <View className='mini-btn'>电子社保卡</View>
            <View className='mini-btn'>国家医保局</View>
            <View className='mini-btn'>本地人社局</View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
