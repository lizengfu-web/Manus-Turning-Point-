import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import './index.scss';

export default function Calculator() {
  const [years, setYears] = useState('');
  const [minWage, setMinWage] = useState('2420'); 
  const [result, setResult] = useState<any>(null);

  Taro.setNavigationBarTitle({
    title: '失业金计算器'
  });

  const calculate = () => {
    const y = parseFloat(years);
    const wage = parseFloat(minWage);

    if (isNaN(y) || y < 1) {
      Taro.showToast({ title: '缴费需满1年', icon: 'none' });
      return;
    }

    let months = 0;
    if (y >= 1 && y < 2) months = 3;
    else if (y >= 2 && y < 3) months = 6;
    else if (y >= 3 && y < 4) months = 9;
    else if (y >= 4 && y < 5) months = 12;
    else if (y >= 5 && y < 10) months = 18;
    else if (y >= 10) months = 24;

    const monthlyAmount = wage * 0.9; 
    const total = monthlyAmount * months;

    setResult({
      months,
      monthlyAmount: monthlyAmount.toFixed(2),
      total: total.toFixed(2)
    });
  };

  return (
    <View className='calc-page'>
      <View className='card'>
        <View className='card-title'>失业金计算器</View>
        
        <View className='input-group'>
          <Text className='label'>累计缴费年限 (年)</Text>
          <Input 
            className='input' 
            type='digit' 
            placeholder='请输入年限，如 5.5' 
            value={years} 
            onInput={(e) => setYears(e.detail.value)} 
          />
        </View>

        <View className='input-group'>
          <Text className='label'>当地最低工资标准 (元/月)</Text>
          <Input 
            className='input' 
            type='number' 
            placeholder='请输入当地标准' 
            value={minWage} 
            onInput={(e) => setMinWage(e.detail.value)} 
          />
        </View>

        <Button className='calc-btn' onClick={calculate}>开始计算</Button>
      </View>

      {result && (
        <View className='result-card'>
          <View className='result-title'>计算结果</View>
          <View className='result-item'>
            <Text className='res-label'>可领取期限</Text>
            <Text className='res-value'>{result.months} 个月</Text>
          </View>
          <View className='result-item'>
            <Text className='res-label'>预计每月领取</Text>
            <Text className='res-value'>¥ {result.monthlyAmount}</Text>
          </View>
          <View className='result-item highlight'>
            <Text className='res-label'>预计总额</Text>
            <Text className='res-value'>¥ {result.total}</Text>
          </View>
          <View className='tips'>
            * 注：计算结果仅供参考。领取期间社保基金将为您代缴医保，您可正常享受医保待遇。
          </View>
        </View>
      )}
    </View>
  );
}
