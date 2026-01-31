import React, { useState, useMemo } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Slider, Button, Picker } from '@tarojs/components';
import { getProvinceList, getCityListByProvince, getMinWageByCity } from './data';
import './index.scss';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [selectedProvince, setSelectedProvince] = useState('beijing');
  const [selectedCity, setSelectedCity] = useState('beijing');
  const [yearsOfPayment, setYearsOfPayment] = useState(1);
  const [customMinWage, setCustomMinWage] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);

  Taro.setNavigationBarTitle({
    title: '失业金计算器'
  });

  // 获取省份列表
  const provinceList = useMemo(() => getProvinceList(), []);
  
  // 获取当前省份的城市列表
  const cityList = useMemo(() => getCityListByProvince(selectedProvince), [selectedProvince]);

  // 获取当前选中的最低工资标准
  const currentMinWage = useMemo(() => {
    if (customMinWage !== null) return customMinWage;
    return getMinWageByCity(selectedProvince, selectedCity);
  }, [selectedProvince, selectedCity, customMinWage]);

  // 处理省份变化
  const handleProvinceChange = (e: any) => {
    const provinceKey = provinceList[e.detail.value].key;
    setSelectedProvince(provinceKey);
    // 重置城市选择为该省的第一个城市
    const newCityList = getCityListByProvince(provinceKey);
    if (newCityList.length > 0) {
      setSelectedCity(newCityList[0].key);
    }
    setResult(null);
  };

  // 处理城市变化
  const handleCityChange = (e: any) => {
    const cityKey = cityList[e.detail.value].key;
    setSelectedCity(cityKey);
    setResult(null);
  };

  // 计算失业金
  const calculate = () => {
    let months = 0;

    if (yearsOfPayment >= 1 && yearsOfPayment < 2) months = 2;
    else if (yearsOfPayment >= 2 && yearsOfPayment < 3) months = 4;
    else if (yearsOfPayment >= 3 && yearsOfPayment < 4) months = 6;
    else if (yearsOfPayment >= 4 && yearsOfPayment < 5) months = 9;
    else if (yearsOfPayment >= 5 && yearsOfPayment < 10) months = 12;
    else if (yearsOfPayment >= 10) months = 24;

    const monthlyAmount = Math.round(currentMinWage * 0.9);
    const total = monthlyAmount * months;

    setResult({
      months,
      monthlyAmount,
      total,
      provinceName: provinceList.find(p => p.key === selectedProvince)?.name,
      cityName: cityList.find(c => c.key === selectedCity)?.name
    });
  };

  const renderCalculatorTab = () => (
    <View className='tab-content'>
      {/* 省市选择区域 */}
      <View className='section'>
        <Text className='section-title'>选择地区</Text>
        <View className='location-picker'>
          <Picker
            mode='selector'
            range={provinceList}
            rangeKey='name'
            value={provinceList.findIndex(p => p.key === selectedProvince)}
            onChange={handleProvinceChange}
          >
            <View className='picker-item'>
              <Text className='picker-text'>{provinceList.find(p => p.key === selectedProvince)?.name}</Text>
              <Text className='picker-arrow'>▼</Text>
            </View>
          </Picker>

          <Picker
            mode='selector'
            range={cityList}
            rangeKey='name'
            value={cityList.findIndex(c => c.key === selectedCity)}
            onChange={handleCityChange}
          >
            <View className='picker-item'>
              <Text className='picker-text'>{cityList.find(c => c.key === selectedCity)?.name}</Text>
              <Text className='picker-arrow'>▼</Text>
            </View>
          </Picker>
        </View>
      </View>

      {/* 当前最低工资标准显示 */}
      <View className='section'>
        <View className='wage-info'>
          <Text className='wage-label'>当前最低工资标准</Text>
          <Text className='wage-value'>¥{currentMinWage}/月</Text>
        </View>
      </View>

      {/* 缴费年限滑块 */}
      <View className='section'>
        <View className='slider-header'>
          <Text className='section-title'>累计缴费年限</Text>
          <Text className='slider-value'>{yearsOfPayment} 年</Text>
        </View>
        <Slider
          className='year-slider'
          min={1}
          max={10}
          value={yearsOfPayment}
          onChange={(e) => {
            setYearsOfPayment(e.detail.value);
            setResult(null);
          }}
        />
        <View className='slider-labels'>
          <Text>1年</Text>
          <Text>10年+</Text>
        </View>
      </View>

      {/* 计算按钮 */}
      <View className='section button-section'>
        <Button className='calc-btn' onClick={calculate}>
          计算失业金
        </Button>
      </View>

      {/* 结果展示 */}
      {result && (
        <View className='result-section'>
          <View className='result-card'>
            <View className='result-main'>
              <Text className='result-label'>月度失业金</Text>
              <Text className='result-amount'>¥{result.monthlyAmount.toLocaleString()}</Text>
            </View>
            <View className='result-split'>
              <View className='result-item'>
                <Text className='item-label'>可领取月数</Text>
                <Text className='item-value'>{result.months} 月</Text>
              </View>
              <View className='result-item'>
                <Text className='item-label'>总计金额</Text>
                <Text className='item-value'>¥{result.total.toLocaleString()}</Text>
              </View>
            </View>
          </View>

          <View className='tips-box'>
            <Text className='tips-icon'>💡</Text>
            <Text className='tips-text'>提示：失业金计算基于{result.provinceName}{result.cityName}2024年数据，具体金额以当地社保部门公布为准。</Text>
          </View>
        </View>
      )}
    </View>
  );

  const renderApplicationTab = () => (
    <View className='tab-content'>
      <View className='info-section'>
        <Text className='section-title'>失业金申领流程</Text>
        <View className='steps'>
          <View className='step'>
            <View className='step-number'>1</View>
            <View className='step-content'>
              <Text className='step-title'>准备材料</Text>
              <Text className='step-desc'>身份证、户口本、解除劳动合同证明等</Text>
            </View>
          </View>
          <View className='step'>
            <View className='step-number'>2</View>
            <View className='step-content'>
              <Text className='step-title'>前往社保部门</Text>
              <Text className='step-desc'>携带材料到当地失业保险经办机构</Text>
            </View>
          </View>
          <View className='step'>
            <View className='step-number'>3</View>
            <View className='step-content'>
              <Text className='step-title'>填写申请表</Text>
              <Text className='step-desc'>完整填写失业保险待遇申请表</Text>
            </View>
          </View>
          <View className='step'>
            <View className='step-number'>4</View>
            <View className='step-content'>
              <Text className='step-title'>审核与发放</Text>
              <Text className='step-desc'>通常7个工作日内审核，通过后按月发放</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderFAQTab = () => (
    <View className='tab-content'>
      <View className='faq-section'>
        <Text className='section-title'>常见问题</Text>
        <View className='faq-list'>
          <View className='faq-item'>
            <Text className='faq-q'>Q: 失业金领取有时间限制吗？</Text>
            <Text className='faq-a'>A: 失业金最长可领取24个月，需在失业后60天内申领，逾期视为自动放弃。</Text>
          </View>
          <View className='faq-item'>
            <Text className='faq-q'>Q: 领取失业金期间能找工作吗？</Text>
            <Text className='faq-a'>A: 可以。找到工作后应主动告知社保部门，停止领取失业金。</Text>
          </View>
          <View className='faq-item'>
            <Text className='faq-q'>Q: 失业金和社保有什么关系？</Text>
            <Text className='faq-a'>A: 领取失业金期间，社保基金代缴医保和养老保险，您可正常享受医保待遇。</Text>
          </View>
          <View className='faq-item'>
            <Text className='faq-q'>Q: 如何查询失业金申领进度？</Text>
            <Text className='faq-a'>A: 可通过当地社保官网、12333热线或微信小程序查询。</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className='calculator-page'>
      {/* 顶部标签栏 */}
      <View className='tab-bar'>
        <Button
          className={`tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          📊 计算器
        </Button>
        <Button
          className={`tab-btn ${activeTab === 'application' ? 'active' : ''}`}
          onClick={() => setActiveTab('application')}
        >
          📋 申领
        </Button>
        <Button
          className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          ❓ 常见问题
        </Button>
      </View>

      {/* 标签页内容 */}
      {activeTab === 'calculator' && renderCalculatorTab()}
      {activeTab === 'application' && renderApplicationTab()}
      {activeTab === 'faq' && renderFAQTab()}
    </View>
  );
}
