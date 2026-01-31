import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, Input, Picker, Button } from '@tarojs/components';
import { updateUserInfo, getCurrentUser } from '../../../api/auth';
import { PROVINCES, getCitiesByProvince, MUNICIPALITIES } from '../../../constants/provinces';
import './index.scss';

const EditProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>({
    nickName: '',
    avatarUrl: '',
    province: '',
    city: '',
    workYears: 0
  });

  const [cities, setCities] = useState<string[]>([]);
  const [selectedProvinceIdx, setSelectedProvinceIdx] = useState(0);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedYearIdx, setSelectedYearIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const workYearsOptions = Array.from({ length: 51 }, (_, i) => `${i}年`);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = () => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUserInfo(currentUser);
      
      // 初始化省份索引
      const provinceIdx = PROVINCES.indexOf(currentUser.province || '');
      setSelectedProvinceIdx(provinceIdx >= 0 ? provinceIdx : 0);
      
      // 初始化城市列表和索引
      const provinceName = currentUser.province || PROVINCES[0];
      const citiesList = getCitiesByProvince(provinceName);
      setCities(citiesList);
      
      const cityIdx = citiesList.indexOf(currentUser.city || '');
      setSelectedCityIdx(cityIdx >= 0 ? cityIdx : 0);
      
      // 初始化工作年限索引
      const yearIdx = currentUser.workYears || 0;
      setSelectedYearIdx(yearIdx);
    }
  };

  const handleAvatarUpload = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera']
      });

      if (res.tempFilePaths.length > 0) {
        const tempFile = res.tempFilePaths[0];
        // 这里可以上传到服务器，暂时使用本地路径
        setUserInfo({
          ...userInfo,
          avatarUrl: tempFile
        });
        Taro.showToast({
          title: '头像已更新',
          icon: 'success',
          duration: 1500
        });
      }
    } catch (error) {
      console.error('选择图片失败:', error);
    }
  };

  const handleUseWechatAvatar = async () => {
    try {
      const userProfile = await Taro.getUserProfile({
        desc: '用于更新头像'
      });
      
      setUserInfo({
        ...userInfo,
        avatarUrl: userProfile.userInfo.avatarUrl,
        nickName: userProfile.userInfo.nickName
      });
      
      Taro.showToast({
        title: '已使用微信头像',
        icon: 'success',
        duration: 1500
      });
    } catch (error) {
      console.error('获取微信头像失败:', error);
    }
  };

  const handleProvinceChange = (e: any) => {
    const idx = e.detail.value;
    setSelectedProvinceIdx(idx);
    
    const selectedProvince = PROVINCES[idx];
    const newCities = getCitiesByProvince(selectedProvince);
    setCities(newCities);
    setSelectedCityIdx(0);
    
    setUserInfo({
      ...userInfo,
      province: selectedProvince,
      city: newCities[0] || ''
    });
  };

  const handleCityChange = (e: any) => {
    const idx = e.detail.value;
    setSelectedCityIdx(idx);
    setUserInfo({
      ...userInfo,
      city: cities[idx] || ''
    });
  };

  const handleWorkYearsChange = (e: any) => {
    const idx = e.detail.value;
    setSelectedYearIdx(idx);
    setUserInfo({
      ...userInfo,
      workYears: idx
    });
  };

  const handleSave = async () => {
    if (!userInfo.nickName.trim()) {
      Taro.showToast({
        title: '请输入昵称',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    setLoading(true);
    try {
      await updateUserInfo(userInfo);
      Taro.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1500
      });
      
      setTimeout(() => {
        Taro.navigateBack();
      }, 1500);
    } catch (error: any) {
      console.error('保存失败:', error);
      Taro.showToast({
        title: '保存失败，已保存到本地',
        icon: 'none',
        duration: 1500
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="edit-profile-container">
      <View className="edit-header">
        <Text className="edit-title">编辑个人信息</Text>
      </View>

      <View className="edit-content">
        {/* 头像部分 */}
        <View className="avatar-section">
          <View className="avatar-label">头像</View>
          <View className="avatar-container">
            <Image
              src={userInfo.avatarUrl || '/assets/default-avatar.png'}
              className="avatar-image"
              mode="aspectFill"
            />
          </View>
          <View className="avatar-actions">
            <Button
              className="avatar-btn upload-btn"
              onClick={handleAvatarUpload}
            >
              上传头像
            </Button>
            <Button
              className="avatar-btn wechat-btn"
              onClick={handleUseWechatAvatar}
            >
              使用微信头像
            </Button>
          </View>
        </View>

        {/* 昵称 */}
        <View className="form-group">
          <Text className="form-label">昵称</Text>
          <Input
            className="form-input"
            placeholder="请输入昵称"
            value={userInfo.nickName}
            onInput={(e) => setUserInfo({ ...userInfo, nickName: e.detail.value })}
            maxLength={20}
          />
        </View>

        {/* 省份 */}
        <View className="form-group">
          <Text className="form-label">所在地（省份）</Text>
          <Picker
            mode="selector"
            range={PROVINCES}
            value={selectedProvinceIdx}
            onChange={handleProvinceChange}
          >
            <View className="picker-trigger">
              <Text>{userInfo.province || '请选择省份'}</Text>
              <Text className="picker-arrow">›</Text>
            </View>
          </Picker>
        </View>

        {/* 城市 */}
        <View className="form-group">
          <Text className="form-label">所在地（城市）</Text>
          <Picker
            mode="selector"
            range={cities}
            value={selectedCityIdx}
            onChange={handleCityChange}
          >
            <View className="picker-trigger">
              <Text>{userInfo.city || '请选择城市'}</Text>
              <Text className="picker-arrow">›</Text>
            </View>
          </Picker>
        </View>

        {/* 工作年限 */}
        <View className="form-group">
          <Text className="form-label">工作年限</Text>
          <Picker
            mode="selector"
            range={workYearsOptions}
            value={selectedYearIdx}
            onChange={handleWorkYearsChange}
          >
            <View className="picker-trigger">
              <Text>{workYearsOptions[selectedYearIdx]}</Text>
              <Text className="picker-arrow">›</Text>
            </View>
          </Picker>
        </View>
      </View>

      {/* 保存按钮 */}
      <View className="edit-footer">
        <Button
          className="save-btn"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? '保存中...' : '保存修改'}
        </Button>
      </View>
    </View>
  );
};

export default EditProfile;
