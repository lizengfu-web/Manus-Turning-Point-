import Taro from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

export const GUIDES_DATA = [
  {
    id: 'unemployment-claim',
    title: '失业保险金申领攻略',
    desc: '手把手教你如何在线申领失业金，包括所需材料和流程。',
    tag: '政策解读',
    content: `### 1. 申领条件
- 失业前用人单位和本人已经缴纳失业保险费满一年；
- 非因本人意愿中断就业（如被辞退、合同到期等）；
- 已经进行失业登记，并有求职要求。

### 2. 申领渠道
- **线上办理**：可以通过“电子社保卡”小程序、国家社会保险公共服务平台或当地人社部门官网/APP办理。
- **线下办理**：携带身份证、社保卡前往参保地社保经办机构。

### 3. 领取期限
- 累计缴费满1年不足5年的，领取期限最长为12个月；
- 满5年不足10年的，最长为18个月；
- 10年以上的，最长为24个月。

### 4. 待遇标准
失业保险金标准通常为当地最低工资标准的80%-90%。领取期间，社保基金会代缴基本医疗保险费，个人无需缴纳。`
  },
  {
    id: 'unemployment-calc',
    title: '失业金领取计算器',
    desc: '输入缴费年限，快速估算你可以领取的失业金总额及期限。',
    tag: '实用工具',
    isTool: true,
    path: '/pages/guide/calculator/index'
  },
  {
    id: 'social-security-strategy',
    title: '个人就业缴社保攻略',
    desc: '自由职业、灵活就业如何自己交社保？最全省钱攻略。',
    tag: '办事指南',
    isTool: true,
    path: '/pages/guide/social-security/index'
  },
  {
    id: 'unemployment-subsidy',
    title: '失业补助金与临时生活补助',
    desc: '针对不符合失业金领取条件的人员，还有哪些补助可以领？',
    tag: '福利补贴',
    content: `### 什么是失业补助金？
失业补助金是针对领取失业保险金期满仍未就业的失业人员，以及不符合领取失业保险金条件的参保失业人员发放的临时性补贴。

### 申领条件
- 领取失业保险金期满仍未就业的失业人员；
- 不符合领取失业保险金条件的参保失业人员（如缴费不满一年或主动辞职）。

### 补贴标准
具体标准由各地区根据实际情况确定，通常低于失业保险金。

### 注意事项
失业补助金只能申领一次，领取期间不享受失业保险其他待遇（如代缴医保）。`
  },
  {
    id: 'skill-subsidy',
    title: '技能提升补贴申领指南',
    desc: '在职或失业期间考取职业资格证书，最高可领2000元。',
    tag: '技能提升',
    content: `### 补贴对象
依法参加失业保险，累计缴纳失业保险费36个月（部分地区放宽至12个月）及以上的企业职工或领取失业金人员。

### 补贴标准
- **初级（五级）**：1000元
- **中级（四级）**：1500元
- **高级（三级）**：2000元

### 申领流程
取得证书之日起12个月内，通过当地人社部门官网或APP在线申请。`
  },
  {
    id: 'startup-loan',
    title: '创业担保贷款政策',
    desc: '想创业资金不足？了解一下政府贴息的创业担保贷款。',
    tag: '创业支持',
    content: `### 贷款对象
城镇登记失业人员、就业困难人员、复员转业军人、高校毕业生等。

### 贷款额度
- **个人**：最高可申请20万元。
- **合伙创业**：可根据合伙人数适当提高贷款额度。

### 贴息政策
政府将按规定给予贴息支持，个人只需承担较低比例的利息。

### 申请条件
除助学贷款、扶贫贷款、住房贷款、购车贷款、5万元以下小额消费贷款（含信用卡分期）外，申请人及其配偶应无其他贷款记录。`
  }
];

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
