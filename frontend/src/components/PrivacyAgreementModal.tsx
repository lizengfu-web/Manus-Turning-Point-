import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { useState } from 'react'
import './PrivacyAgreementModal.scss'

interface PrivacyAgreementModalProps {
  visible: boolean
  onAgree: () => void
  onDisagree: () => void
}

export default function PrivacyAgreementModal({
  visible,
  onAgree,
  onDisagree
}: PrivacyAgreementModalProps) {
  const [scrolled, setScrolled] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleScroll = (e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.detail
    // 当滚动到底部时，允许同意
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setScrolled(true)
    }
  }

  const handleAgree = () => {
    if (!scrolled) {
      Taro.showToast({
        title: '请先阅读完整协议',
        icon: 'none'
      })
      return
    }
    if (!agreed) {
      Taro.showToast({
        title: '请勾选同意协议',
        icon: 'none'
      })
      return
    }
    onAgree()
  }

  if (!visible) {
    return null
  }

  return (
    <View className="privacy-modal-overlay">
      <View className="privacy-modal">
        {/* 标题 */}
        <View className="privacy-modal-header">
          <Text className="privacy-modal-title">用户隐私协议</Text>
          <Text className="privacy-modal-subtitle">请阅读并同意以下条款</Text>
        </View>

        {/* 协议内容 */}
        <ScrollView
          className="privacy-modal-content"
          scrollY
          onScroll={handleScroll}
        >
          <View className="privacy-content-text">
            <View className="privacy-section">
              <Text className="privacy-section-title">1. 隐私保护承诺</Text>
              <Text className="privacy-section-content">
                转角驿站（以下简称"本应用"）尊重并保护所有用户的隐私。我们承诺按照本隐私协议的规定收集、使用和保护您的个人信息。
              </Text>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">2. 信息收集</Text>
              <Text className="privacy-section-content">
                本应用收集以下信息：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 微信账户信息（昵称、头像、OpenID）</Text>
                <Text className="privacy-list-item">• 个人资料（省份、城市、工作年限）</Text>
                <Text className="privacy-list-item">• 使用行为数据（浏览记录、点赞、评论）</Text>
                <Text className="privacy-list-item">• 设备信息（设备型号、操作系统版本）</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">3. 信息使用</Text>
              <Text className="privacy-section-content">
                我们收集的信息将用于以下目的：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 提供和改进应用服务</Text>
                <Text className="privacy-list-item">• 个性化内容推荐</Text>
                <Text className="privacy-list-item">• 用户身份验证和账户安全</Text>
                <Text className="privacy-list-item">• 数据分析和统计</Text>
                <Text className="privacy-list-item">• 法律合规和纠纷解决</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">4. 信息保护</Text>
              <Text className="privacy-section-content">
                本应用采取以下措施保护您的个人信息：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 使用加密技术传输敏感数据</Text>
                <Text className="privacy-list-item">• 限制员工访问个人信息</Text>
                <Text className="privacy-list-item">• 定期安全审计和更新</Text>
                <Text className="privacy-list-item">• 遵守国家数据保护法规</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">5. 信息共享</Text>
              <Text className="privacy-section-content">
                除以下情况外，本应用不会与第三方共享您的个人信息：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 获得您的明确同意</Text>
                <Text className="privacy-list-item">• 法律要求或政府部门要求</Text>
                <Text className="privacy-list-item">• 与服务提供商共享（受保密协议约束）</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">6. 用户权利</Text>
              <Text className="privacy-section-content">
                您有权：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 访问和查看您的个人信息</Text>
                <Text className="privacy-list-item">• 更正不准确的个人信息</Text>
                <Text className="privacy-list-item">• 删除您的个人信息</Text>
                <Text className="privacy-list-item">• 撤回同意</Text>
                <Text className="privacy-list-item">• 获取个人信息副本</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">7. 数据保留</Text>
              <Text className="privacy-section-content">
                我们仅在必要期间内保留您的个人信息。当信息不再需要时，我们将安全删除或匿名处理。
              </Text>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">8. 未成年人保护</Text>
              <Text className="privacy-section-content">
                本应用不向未满 18 岁的未成年人收集个人信息。如发现收集了未成年人的信息，我们将立即删除。
              </Text>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">9. 协议更新</Text>
              <Text className="privacy-section-content">
                本应用可能会不定期更新本隐私协议。更新后的协议将在应用内发布，您继续使用应用即表示同意更新后的协议。
              </Text>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">10. 联系我们</Text>
              <Text className="privacy-section-content">
                如您对本隐私协议有任何疑问或建议，请通过以下方式联系我们：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 邮箱：support@manus.im</Text>
                <Text className="privacy-list-item">• 微信公众号：转角驿站</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">11. 服务条款</Text>
              <Text className="privacy-section-content">
                使用本应用即表示您同意遵守以下服务条款：
              </Text>
              <View className="privacy-list">
                <Text className="privacy-list-item">• 您承诺提供真实、准确的个人信息</Text>
                <Text className="privacy-list-item">• 您不得发布违法、骚扰、诽谤或商业宣传内容</Text>
                <Text className="privacy-list-item">• 您不得进行任何形式的网络攻击或滥用</Text>
                <Text className="privacy-list-item">• 本应用保留删除违规内容和禁用账户的权利</Text>
                <Text className="privacy-list-item">• 本应用对用户因违反本条款造成的损失不承担责任</Text>
              </View>
            </View>

            <View className="privacy-section">
              <Text className="privacy-section-title">12. 免责声明</Text>
              <Text className="privacy-section-content">
                本应用按"现状"提供服务。我们不保证服务不会中断或不会出现错误。在任何情况下，本应用及其所有者、员工、代理人不对任何间接、附带、特殊或后果性损害负责。
              </Text>
            </View>

            <View className="privacy-section privacy-section-last">
              <Text className="privacy-section-content">
                最后更新时间：2026 年 1 月 29 日
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* 底部操作 */}
        <View className="privacy-modal-footer">
          {/* 同意复选框 */}
          <View className="privacy-checkbox-group">
            <View
              className={`privacy-checkbox ${agreed ? 'checked' : ''}`}
              onClick={() => setAgreed(!agreed)}
            >
              {agreed && <Text className="privacy-checkbox-icon">✓</Text>}
            </View>
            <Text className="privacy-checkbox-label">
              我已阅读并同意《用户隐私协议》和《服务条款》
            </Text>
          </View>

          {/* 按钮组 */}
          <View className="privacy-button-group">
            <Button
              className="privacy-button privacy-button-cancel"
              onClick={onDisagree}
            >
              不同意
            </Button>
            <Button
              className={`privacy-button privacy-button-agree ${
                scrolled && agreed ? 'enabled' : 'disabled'
              }`}
              onClick={handleAgree}
              disabled={!scrolled || !agreed}
            >
              同意并继续
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}
