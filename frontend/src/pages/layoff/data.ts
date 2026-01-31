/**
 * 裁员咨询页面数据源
 */

/**
 * Coze 智能体开场白
 */
export const COZE_WELCOME_MESSAGE = `您好！作为职场维权卫士，我可以为您解答与劳动权益相关的各类问题。您可以就以下方面提问：

## 常见咨询问题类型：

### 1. 裁员 / 解除劳动合同相关
- 公司裁员是否合法？
- 公司解除劳动合同的理由是否正当？
- 我能获得多少经济补偿？
- 公司没有提前通知就裁员怎么办？

### 2. 薪资与福利相关
- 公司拖欠工资如何维权？
- 加班费如何计算和追讨？
- 绩效工资被克扣怎么办？
- 年休假未休如何补偿？

### 3. 劳动合同相关
- 劳动合同条款是否合理？
- 公司要求签订不平等协议怎么办？
- 竞业限制条款是否有效？

### 4. 工作条件与权益
- 公司强制加班是否合法？
- 公司单方面调岗降薪怎么办？
- 公司未缴纳社保如何处理？

### 5. 维权程序相关
- 如何申请劳动仲裁？
- 需要准备哪些证据？
- 劳动仲裁流程和时效？

## 您可以这样提问：
- "公司要裁员，我工作了 3 年，月薪 1 万，能获得多少补偿？"
- "公司拖欠我两个月工资，我该怎么办？"
- "公司没有提前通知就解除劳动合同，是否违法？"
- "我加班了但公司不给加班费，如何维权？"

## 建议您提供的关键信息：
为了给您更准确的建议，最好能提供：
- 入职时间（精确到月份）
- 月薪及薪资构成
- 公司给出的具体理由
- 是否有书面通知或相关文件

您可以直接提出您遇到的具体问题，我会根据您的情况提供专业分析和建议。

⚠️ **重要提醒**：以上法律建议仅供参考，不构成正式法律意见。具体案件请咨询线下执业律师或当地劳动仲裁部门。`;

/**
 * Coze 智能体配置（stream_run API 模式）
 * 注意：请在下方填入您的真实 Token 和 Project ID
 */
export const COZE_CONFIG = {
  // 您需要填入自己的 Coze 凭证
  token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhMmQ5ZWNiLTcwYTMtNDNhYS1hYjhkLTJkYWM3MWMzNDIyYSJ9.eyJpc3MiOiJodHRwczovL2FwaS5jb3plLmNuIiwiYXVkIjpbImMzRnhzVEd0VW80WDFwR0x4OVJkRmQ3bmg3TU1sYnBHIl0sImV4cCI6ODIxMDI2Njg3Njc5OSwiaWF0IjoxNzY5NjkyOTEwLCJzdWIiOiJzcGlmZmU6Ly9hcGkuY296ZS5jbi93b3JrbG9hZF9pZGVudGl0eS9pZDo3NjAwNzY5NzQ5OTkxMDMwODEwIiwic3JjIjoiaW5ib3VuZF9hdXRoX2FjY2Vzc190b2tlbl9pZDo3NjAwNzczMTc1ODYwNzg5MjQ4In0.omkF_PwGEUHzt8SRKt7CZVbaINyFfZfQVE4AtqOeX1E6UYWdGOrsiT4sRE1FlnjysrfwOMJiR7wqMzy3L4LXZjbpc7oa1hcA0wDUvQKO1w3AkIXHevu5z-MuH6UMLpWEkwhYZpcp766rxWJbQwrqVe_FQlaTzGpQmr48LhRefxVZYGoPKyLAYInY3aqd9NIWyHSAJYowFolERx56GdSNCKL8bUykAsigXOKD6kfLjeVfrGyHp3z8-Ry4EsLLRCq9xpgwCys7co92nWf0rp_JQKshwygsBcJhfyq8uoxbvo8jWKlYVBWJYDNafHrr02DQu0Yyn3Uvse0zt_IBtYkSKQ', // 在此填入您的 Coze Token
  projectId: '7600759893704048649', // 示例 project_id，应根据实际情况修改
  apiEndpoint: 'https://jcp33s7bqh.coze.site/stream_run',
  agentName: '转角卫士·职场维权助手'
};

/**
 * 生成 session_id（用于维持对话上下文）
 */
export const generateSessionId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let sessionId = '';
  for (let i = 0; i < 20; i++) {
    sessionId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return sessionId;
};

/**
 * 模拟回复（用于演示，实际应调用 Coze API）
 */
export const MOCK_RESPONSES = [
  '根据《劳动合同法》第四十一条，企业进行经济性裁员时，应当提前30天通知员工或支付1个月工资作为代通知金。如果公司没有提前通知，您可以要求支付代通知金。',
  '经济补偿金的计算标准是：按照员工在本单位工作的年限，每满一年支付一个月工资。六个月以上不满一年的，按一年计算；不满六个月的，支付半个月工资。最多支付12个月工资。',
  '裁员程序通常包括：制定裁员方案 → 提前30天通知工会 → 通知员工 → 进行协商 → 办理离职手续。任何环节违反程序都可能导致裁员无效。',
  '在裁员过程中，您有权了解裁员原因、获得书面通知、进行协商、获得经济补偿、办理社保转移等权利。这些权利受法律保护。',
  '与公司谈判时，建议准备好相关证据（工作年限证明、工资条、绩效评估等），了解法律规定的最低补偿标准，必要时可咨询律师。',
  '裁员后，企业应当为您办理社保转移手续。公积金可以申请提取或转移到新公司。如果公司拒绝办理，您可以向相关部门投诉。',
  '如果您认为裁员违法，可以向当地劳动部门投诉或申请劳动仲裁。仲裁申请应在争议发生之日起一年内提出。',
  '加班费的计算标准是：平时加班按150%支付，周末加班按200%支付，法定节假日加班按300%支付。如果公司不支付，您可以申请仲裁追讨。'
];
