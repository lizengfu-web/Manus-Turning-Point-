# 转角驿站小程序

基于 Taro 3.x 开发的微信小程序版本，采用渐进式迁移方案。

## 项目简介

转角驿站是一个为失业人群提供支持和帮助的平台，包括：
- 政策指南（失业金计算、申领攻略）
- 副业机会（灵活就业、创业孵化）
- 树洞社区（倾诉心声、互相鼓励）
- 个人中心（设置、通知）

## 技术栈

- **框架**: Taro 3.6.23
- **UI 库**: Taro Components
- **状态管理**: Zustand
- **语言**: TypeScript
- **样式**: SCSS
- **构建工具**: Webpack 5

## 项目结构

```
miniprogram/
├── config/                 # Taro 配置文件
│   ├── index.ts           # 主配置
│   ├── dev.ts             # 开发环境配置
│   └── prod.ts            # 生产环境配置
├── src/
│   ├── api/               # API 接口封装
│   │   ├── config.ts      # API 配置
│   │   ├── request.ts     # 请求封装
│   │   ├── auth.ts        # 认证接口
│   │   ├── hole.ts        # 树洞接口
│   │   └── opportunity.ts # 机会接口
│   ├── components/        # 通用组件
│   ├── pages/             # 页面
│   │   ├── index/         # 首页（原生）
│   │   ├── opportunity/   # 机会列表（原生）
│   │   ├── hole/          # 树洞列表（原生）
│   │   ├── profile/       # 我的页面（原生）
│   │   └── webview/       # WebView 页面
│   ├── store/             # 状态管理
│   │   └── user.ts        # 用户状态
│   ├── utils/             # 工具函数
│   ├── assets/            # 静态资源
│   ├── app.tsx            # 应用入口
│   ├── app.config.ts      # 应用配置
│   └── app.scss           # 全局样式
├── package.json
├── project.config.json    # 微信小程序配置
└── tsconfig.json          # TypeScript 配置
```

## 开发环境要求

### 必需软件

1. **Node.js** >= 16.x
   ```bash
   node -v
   ```

2. **微信开发者工具**
   - 下载地址: https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
   - 版本要求: 最新稳定版

3. **Taro CLI**
   ```bash
   npm install -g @tarojs/cli@3.6.23
   ```

### 推荐软件

- **VS Code** + Taro 插件
- **Git**

## 快速开始

### 1. 安装依赖

```bash
cd miniprogram
npm install
```

### 2. 配置后端 API

编辑 `src/api/config.ts`，修改 API 地址：

```typescript
export const API_BASE_URL = 'https://your-api-domain.com';
export const WEB_BASE_URL = 'https://your-web-domain.com';
```

**开发阶段重要提示**：
1. 在微信开发者工具中，点击右上角「详情」
2. 在「本地设置」中勾选：
   - ✅ 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
   - ✅ 启用调试模式

### 3. 配置小程序 AppID

编辑 `project.config.json`，替换 `appid`：

```json
{
  "appid": "your-appid-here"
}
```

### 4. 启动开发服务器

```bash
npm run dev:weapp
```

### 5. 打开微信开发者工具

1. 打开微信开发者工具
2. 选择"导入项目"
3. 项目目录选择 `miniprogram/dist`
4. AppID 填写你的小程序 AppID

## 开发指南

### 页面开发

#### 原生页面（首页、列表页）

原生页面使用 Taro 组件开发，性能最优：

```tsx
import { View, Text } from '@tarojs/components';
import './index.scss';

export default function MyPage() {
  return (
    <View className='my-page'>
      <Text>Hello World</Text>
    </View>
  );
}
```

#### WebView 页面（详情页）

详情页使用 WebView 加载 Web 应用：

```tsx
import Taro from '@tarojs/taro';

// 跳转到 WebView 页面
Taro.navigateTo({
  url: `/pages/webview/index?url=/guide`
});
```

### API 调用

```typescript
import { get, post } from '@/api/request';

// GET 请求
const data = await get('/api/endpoint');

// POST 请求
const result = await post('/api/endpoint', { key: 'value' });
```

### 状态管理

```typescript
import { useUserStore } from '@/store/user';

function MyComponent() {
  const { user, setUser } = useUserStore();
  
  return <View>{user?.nickName}</View>;
}
```

## 构建和发布

### 构建生产版本

```bash
npm run build:weapp
```

### 上传到微信平台

1. 在微信开发者工具中打开项目
2. 点击"上传"按钮
3. 填写版本号和项目备注
4. 上传成功后，在微信公众平台提交审核

## 后端 API 适配

### 1. 添加小程序登录接口

后端需要添加小程序登录接口：

```typescript
// server/routers.ts
miniprogram: router({
  login: publicProcedure
    .input(z.object({
      code: z.string(),
      userInfo: z.object({
        nickName: z.string(),
        avatarUrl: z.string()
      }).optional()
    }))
    .mutation(async ({ input }) => {
      // 1. 使用 code 换取 openid 和 session_key
      const wxResult = await fetch(
        `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${input.code}&grant_type=authorization_code`
      );
      
      // 2. 查询或创建用户
      const user = await db.findOrCreateUser(wxResult.openid, input.userInfo);
      
      // 3. 生成 token
      const token = generateToken(user.id);
      
      return { token, user };
    })
})
```

### 2. 配置域名白名单

在微信公众平台配置服务器域名：
- request 合法域名: `https://your-api-domain.com`
- uploadFile 合法域名: `https://your-api-domain.com`
- downloadFile 合法域名: `https://your-api-domain.com`

### 3. 确保 HTTPS

小程序要求所有网络请求必须使用 HTTPS。

## 常见问题

### 1. 编译失败

**问题**: `Cannot find module '@tarojs/xxx'`

**解决**: 
```bash
rm -rf node_modules
npm install
```

### 2. 真机预览白屏

**问题**: 开发工具正常，真机预览白屏

**解决**:
- 检查 API 域名是否配置白名单
- 检查是否使用了 HTTPS
- 查看真机调试日志

### 3. WebView 无法加载

**问题**: WebView 页面显示"网页加载失败"

**解决**:
- 检查 WebView 域名是否配置白名单
- 确保 Web 应用支持移动端访问
- 检查网络连接

### 4. 登录失败

**问题**: 提示"登录失败"

**解决**:
- 检查 AppID 和 AppSecret 是否正确
- 确认后端登录接口已实现
- 查看后端日志

## 性能优化

### 1. 图片优化

- 使用 WebP 格式
- 压缩图片大小
- 使用 CDN 加速

### 2. 代码分包

```javascript
// app.config.ts
export default {
  subpackages: [
    {
      root: 'pages/admin',
      pages: ['index']
    }
  ]
}
```

### 3. 按需加载

- 延迟加载非首屏内容
- 使用虚拟列表优化长列表

## 调试技巧

### 1. 控制台日志

```typescript
console.log('Debug info:', data);
```

### 2. 真机调试

1. 微信开发者工具 → 预览 → 真机调试
2. 手机扫码
3. 查看真机日志

### 3. 网络请求调试

微信开发者工具 → 调试器 → Network

## 团队协作

### Git 工作流

```bash
# 创建功能分支
git checkout -b feature/xxx

# 提交代码
git add .
git commit -m "feat: add xxx feature"

# 推送到远程
git push origin feature/xxx

# 创建 Pull Request
```

### 代码规范

- 使用 TypeScript
- 遵循 ESLint 规则
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

## 联系方式

- 项目地址: https://github.com/your-repo
- 问题反馈: https://github.com/your-repo/issues

## 许可证

MIT
