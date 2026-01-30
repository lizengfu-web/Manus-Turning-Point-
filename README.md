# Turning Point (转角驿站) - 微信小程序项目

本项目是基于 `unemployment-support-app` 开发的微信小程序，旨在为职场转折期的用户提供温暖的缓冲站。

## 技术栈

- **前端**: Taro 3.6.38 (React + TypeScript)
- **后端**: SpringBoot 3.2.1 (Java 17)
- **数据库**: MySQL
- **集成服务**: 微信登录认证、Coze API (AI 助手)

## 目录结构

- `frontend/`: Taro 前端项目
- `backend/`: SpringBoot 后端项目

## 本地运行调试指南

### 1. 环境准备

- Node.js >= 18
- Java 17
- MySQL 8.0
- 微信开发者工具

### 2. 后端配置与运行

1.  **数据库准备**:
    - 创建数据库 `turning_point`。
    - 执行 `backend/src/main/resources/schema.sql` 中的脚本初始化表结构。
2.  **配置文件**:
    - 修改 `backend/src/main/resources/application.yml` 中的数据库连接信息。
    - 配置微信小程序的 `appid` 和 `secret`。
    - 配置 Coze API 的 `key` 和 `bot-id`。
3.  **启动后端**:
    - 在 `backend` 目录下执行: `./mvnw spring-boot:run` (或使用 IDE 运行 `ApiApplication`)。

### 3. 前端配置与运行

1.  **安装依赖**:
    - 在 `frontend` 目录下执行: `pnpm install`。
2.  **启动开发服务器**:
    - 执行: `pnpm dev:weapp`。
3.  **微信开发者工具调试**:
    - 打开微信开发者工具，选择“导入项目”。
    - 选择 `frontend/dist` 目录。
    - 在工具设置中开启“不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书”。

## 核心功能说明

- **微信登录**: 通过 `wx.login` 获取 code，后端换取 openid 并管理用户信息。
- **AI 助手**: 集成 Coze API，提供职场咨询、心理疏导等 AI 对话功能。
- **跨平台**: 基于 Taro 开发，可一套代码编译为微信小程序、H5 及 App。
