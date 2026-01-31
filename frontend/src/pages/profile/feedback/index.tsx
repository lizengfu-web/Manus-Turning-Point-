import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Textarea, Button } from '@tarojs/components';
import './index.scss';

const Feedback: React.FC = () => {
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [loading, setLoading] = useState(false);

  const feedbackTypes = [
    { value: 'suggestion', label: '功能建议' },
    { value: 'bug', label: '问题反馈' },
    { value: 'experience', label: '体验优化' },
    { value: 'other', label: '其他' }
  ];

  const handleSubmit = async () => {
    if (!feedbackText.trim()) {
      Taro.showToast({
        title: '请输入反馈内容',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    setLoading(true);
    try {
      // 这里应该调用 API 提交反馈
      // 暂时使用模拟提交
      await new Promise(resolve => setTimeout(resolve, 1000));

      Taro.showToast({
        title: '感谢你的反馈！',
        icon: 'success',
        duration: 2000
      });

      // 清空表单
      setFeedbackText('');
      setFeedbackType('suggestion');

      // 返回上一页
      setTimeout(() => {
        Taro.navigateBack();
      }, 2000);
    } catch (error: any) {
      console.error('提交反馈失败:', error);
      Taro.showToast({
        title: '提交失败，请重试',
        icon: 'none',
        duration: 1500
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFeedbackText('');
  };

  return (
    <View className="feedback-container">
      <View className="feedback-header">
        <Text className="feedback-title">意见反馈</Text>
        <Text className="feedback-subtitle">您的建议对我们很重要</Text>
      </View>

      <View className="feedback-content">
        {/* 反馈类型 */}
        <View className="form-group">
          <Text className="form-label">反馈类型</Text>
          <View className="type-selector">
            {feedbackTypes.map(type => (
              <View
                key={type.value}
                className={`type-option ${feedbackType === type.value ? 'active' : ''}`}
                onClick={() => setFeedbackType(type.value)}
              >
                <Text>{type.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 反馈内容 */}
        <View className="form-group">
          <Text className="form-label">反馈内容</Text>
          <Textarea
            className="feedback-textarea"
            placeholder="请详细描述您的想法或遇到的问题..."
            value={feedbackText}
            onInput={(e) => setFeedbackText(e.detail.value)}
            maxLength={1000}
            showConfirmBar={false}
          />
          <View className="char-count">
            {feedbackText.length}/1000
          </View>
        </View>

        {/* 提示信息 */}
        <View className="tips-box">
          <Text className="tips-title">💡 提示：</Text>
          <Text className="tips-content">
            • 请尽可能详细地描述您的建议或问题
          </Text>
          <Text className="tips-content">
            • 我们会认真阅读每一条反馈
          </Text>
          <Text className="tips-content">
            • 感谢您对我们的支持！
          </Text>
        </View>
      </View>

      {/* 操作按钮 */}
      <View className="feedback-footer">
        <Button
          className="clear-btn"
          onClick={handleClear}
        >
          清空
        </Button>
        <Button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? '提交中...' : '提交反馈'}
        </Button>
      </View>
    </View>
  );
};

export default Feedback;
