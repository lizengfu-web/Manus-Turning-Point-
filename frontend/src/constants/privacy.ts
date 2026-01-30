/**
 * 隐私协议相关常量
 */

export const PRIVACY_AGREEMENT_KEY = 'privacy_agreement_agreed'
export const PRIVACY_AGREEMENT_VERSION = '1.0.0'
export const PRIVACY_AGREEMENT_TIMESTAMP_KEY = 'privacy_agreement_timestamp'

/**
 * 检查用户是否已同意隐私协议
 */
export function hasAgreedPrivacyPolicy(): boolean {
  try {
    const agreed = localStorage.getItem(PRIVACY_AGREEMENT_KEY)
    return agreed === 'true'
  } catch {
    return false
  }
}

/**
 * 保存用户隐私协议同意状态
 */
export function savePrivacyPolicyAgreement(): void {
  try {
    localStorage.setItem(PRIVACY_AGREEMENT_KEY, 'true')
    localStorage.setItem(
      PRIVACY_AGREEMENT_TIMESTAMP_KEY,
      new Date().toISOString()
    )
  } catch (error) {
    console.error('Failed to save privacy policy agreement:', error)
  }
}

/**
 * 清除隐私协议同意状态
 */
export function clearPrivacyPolicyAgreement(): void {
  try {
    localStorage.removeItem(PRIVACY_AGREEMENT_KEY)
    localStorage.removeItem(PRIVACY_AGREEMENT_TIMESTAMP_KEY)
  } catch (error) {
    console.error('Failed to clear privacy policy agreement:', error)
  }
}

/**
 * 获取隐私协议同意时间
 */
export function getPrivacyPolicyAgreementTime(): string | null {
  try {
    return localStorage.getItem(PRIVACY_AGREEMENT_TIMESTAMP_KEY)
  } catch {
    return null
  }
}
