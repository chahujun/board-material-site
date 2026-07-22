# CRM 后端部署指南（Vercel KV 版）

## 只需 1 步：在 Vercel 开通 KV 数据库

### 操作步骤

1. 打开你的 Vercel 项目：https://vercel.com → 选择 board-material-site
2. 点击顶部 **Storage** 标签
3. 点击 **Create Database**
4. 选择 **KV** (Upstash Redis)
5. 数据库名称随便填，如 `crm-db`
6. 区域选默认即可
7. 点击 **Create**
8. 创建完成后，Vercel 会自动把环境变量注入到你的项目中：
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
9. 无需手动配置任何环境变量！

### 额外配置（可选）

如果你想修改 CRM 登录密码，在 Vercel → Settings → Environment Variables 添加：

| 变量名 | 默认值 | 说明 |
|--------|-------|------|
| `CRM_ADMIN_USERNAME` | `admin` | CRM 登录用户名 |
| `CRM_ADMIN_PASSWORD` | `admin123` | CRM 登录密码（建议修改） |

如果不添加，默认使用 admin / admin123。

### 重新部署

在 Vercel 面板点击 **Redeploy**，等部署完成。

### 访问 CRM 后台

```
https://board-material-site.vercel.app/admin
```

默认登录：admin / admin123

## 完成！无需注册任何外部服务，无需运行 SQL 脚本，无需手动复制 API 密钥。

## 功能说明

### 询盘接收
- 网站所有产品页面的询盘表单自动提交到 /api/inquiry
- 询盘数据存入 Vercel KV (Redis)
- 询盘自动标记为 "new" 状态

### CRM 后台功能
- **仪表盘**: 总询盘数、转化率、7天趋势、热门国家/品类
- **询盘列表**: 按状态筛选、关键词搜索、分页
- **询盘详情**: 客户信息、产品需求、跟进时间线
- **状态管理**: New → Contacted → Quoted → Sample → Negotiation → Won/Lost
- **优先级标记**: High / Normal / Low
- **跟进记录**: 记录每次沟通方式、摘要、下一步行动
- **快捷操作**: 一键发邮件、拨打电话、打开 WhatsApp

## 数据存储说明
- 数据存储在 Vercel KV (Upstash Redis) 中
- 免费层: 10,000 commands/day, 256MB storage
- 足够存储数万条询盘数据
- 数据格式: JSON in Redis (key-value + sorted sets)
