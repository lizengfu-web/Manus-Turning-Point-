import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { getIdentityList } from '@/constants/userIdentity';
import './IdentitySelector.scss';

interface IdentitySelectorProps {
  visible: boolean;
  onSelect: (identityKey: string) => void;
  onCancel: () => void;
  currentIdentity?: string;
}

export default function IdentitySelector({
  visible,
  onSelect,
  onCancel,
  currentIdentity
}: IdentitySelectorProps) {
  const identityList = getIdentityList();

  if (!visible) return null;

  const handleSelect = (identityKey: string) => {
    onSelect(identityKey);
  };

  return (
    <View className='identity-selector-overlay'>
      <View className='identity-selector-modal'>
        <View className='modal-header'>
          <Text className='modal-title'>选择您的身份</Text>
          <Text className='modal-subtitle'>这将帮助我们为您推送更符合的建议和寄语</Text>
        </View>

        <View className='identity-list'>
          {identityList.map((identity) => (
            <View
              key={identity.key}
              className={`identity-card ${currentIdentity === identity.key ? 'selected' : ''}`}
              onClick={() => handleSelect(identity.key)}
              style={{ borderLeftColor: identity.color }}
            >
              <View className='card-header'>
                <Text className='identity-icon'>{identity.icon}</Text>
                <View className='identity-info'>
                  <Text className='identity-name'>{identity.name}</Text>
                  <Text className='identity-desc'>{identity.description}</Text>
                </View>
              </View>
              {currentIdentity === identity.key && (
                <View className='selected-badge'>✓</View>
              )}
            </View>
          ))}
        </View>

        <View className='modal-footer'>
          <Button className='btn-cancel' onClick={onCancel}>
            取消
          </Button>
          <Button className='btn-confirm' onClick={() => {
            if (currentIdentity) {
              handleSelect(currentIdentity);
            }
          }}>
            确认
          </Button>
        </View>
      </View>
    </View>
  );
}
