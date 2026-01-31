import Taro from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

export default function Guide() {
  const guides = [
    {
      title: '失业保险金申领攻略',
      desc: '手把手教你如何在线申领失业金，包括所需材料和流程。',
      tag: '政策解读',
      content: '1. 申领条件：失业前用人单位和本人已经缴纳失业保险费满一年；非因本人意愿中断就业；已经进行失业登记，并有求职要求。\n2. 申领渠道：可以通过“电子社保卡”小程序、国家社会保险公共服务平台或当地人社部门官网办理。\n3. 领取期限：累计缴费满1年不足5年的，领取期限最长为12个月；满5年不足10年的，最长为18个月；10年以上的，最长为24个月。'
    },
    {
      title: '失业补助金与临时生活补助',
      desc: '针对不符合失业金领取条件的人员，还有哪些补助可以领？',
      tag: '福利补贴',
      content: '失业补助金是针对领取失业保险金期满仍未就业的失业人员，以及不符合领取失业保险金条件的参保失业人员发放的临时性补贴。具体标准由各地区根据实际情况确定。'
    },
    {
      title: '技能提升补贴申领指南',
      desc: '在职或失业期间考取职业资格证书，最高可领2000元。',
      tag: '技能提升',
      content: '参保职工取得初级（五级）、中级（四级）、高级（三级）职业资格证书或职业技能等级证书的，可分别申领1000元、1500元、2000元的技能提升补贴。'
    },
    {
      title: '创业担保贷款政策',
      desc: '想创业资金不足？了解一下政府贴息的创业担保贷款。',
      tag: '创业支持',
      content: '符合条件的个人可申请最高20万元的创业担保贷款。合伙创业的，可根据合伙人数适当提高贷款额度。政府将按规定给予贴息支持。'
    }
  ];

  const handleDetail = (guide) => {
    Taro.showModal({
      title: guide.title,
      content: guide.content,
      showCancel: false,
      confirmText: '我知道了'
    });
  };

  return (
    <View className='guide-page'>
      <View className='header'>
        <Text className='title'>政策指南</Text>
        <Text className='subtitle'>为您解读最新的就业扶持政策</Text>
      </View>

      <ScrollView scrollY className='guide-list'>
        {guides.map((item, index) => (
          <View key={index} className='guide-item' onClick={() => handleDetail(item)}>
            <View className='guide-tag'>{item.tag}</View>
            <Text className='guide-title'>{item.title}</Text>
            <Text className='guide-desc'>{item.desc}</Text>
            <View className='guide-footer'>
              <Text className='read-more'>查看详情</Text>
              <Text className='arrow'>→</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
