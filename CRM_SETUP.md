# CRM 后端部署指南

## 1. 注册 Supabase

1. 访问 https://supabase.com 注册免费账号
2. 创建新项目（选择离你最近的区域）
3. 等待项目初始化完成

## 2. 运行数据库建表脚本

1. 在 Supabase 控制台点击 "SQL Editor"
2. 新建 Query
3. 复制粘贴 `supabase-schema.sql` 的全部内容
4. 点击 Run 执行
5. 确认 4 张表创建成功: inquiries, follow_ups, admin_users, notification_logs

## 3. 获取 API 密钥

在 Supabase 控制台: Settings → API

需要复制以下 3 个值:

```
Project URL:        https://xxxxx.supabase.co
anon public key:    eyJxxxxxx... (公开密钥，前端使用)
service_role key:   eyJxxxxxx... (服务端密钥，绕过 RLS，保密！)
```

## 4. 设置 Vercel 环境变量

在 Vercel 项目设置: Settings → Environment Variables

添加以下 5 个变量:

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Supabase 项目 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJxxxxxx...` | 公开密钥 |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJxxxxxx...` | 服务端密钥（保密） |
| `CRM_ADMIN_USERNAME` | `admin` | CRM 登录用户名 |
| `CRM_ADMIN_PASSWORD` | `你的密码` | CRM 登录密码（建议修改默认的 admin123） |

## 5. 重新部署

在 Vercel 上重新部署项目（环境变量需要 Redeploy 才生效）

## 6. 访问 CRM 后台

部署完成后访问:
```
https://board-material-site.vercel.app/admin
```

默认登录:
- 用户名: `admin`
- 密码: `admin123`

**首次登录后请立即修改密码！**

## 7. 功能说明

### 询盘接收
- 网站所有产品页面的询盘表单会自动提交到 `/api/inquiry`
- 询盘数据存入 Supabase `inquiries` 表
- 询盘自动标记为 "new" 状态

### CRM 后台功能
- **仪表盘**: 总询盘数、转化率、7天趋势、热门国家/品类
- **询盘列表**: 按状态筛选、关键词搜索、分页
- **询盘详情**: 客户信息、产品需求、跟进时间线
- **状态管理**: New → Contacted → Quoted → Sample → Negotiation → Won/Lost
- **优先级标记**: High / Normal / Low
- **跟进记录**: 记录每次沟通方式、摘要、下一步行动
- **快捷操作**: 一键发邮件、拨打电话、打开 WhatsApp

### 数据库表结构
- `inquiries` — 询盘主表
- `follow_ups` — 跟进记录表
- `admin_users` — 管理员表
- `notification_logs` — 通知日志表

## 8. 安全说明

- Supabase RLS (Row Level Security) 已启用:
  - 匿名用户只能 INSERT 询盘（不能读取）
  - 只有管理员可以查询/修改/删除数据
- CRM 后台使用 Cookie 认证，24小时过期
- service_role key 仅在服务端使用，不会暴露给前端

## 9. 后续可选扩展

- 接入 Resend / SMTP 实现询盘邮件通知
- 接入 Supabase Auth 替代简单密码认证
- 添加询盘导出 Excel 功能
- 添加客户去重和合并功能
- 添加询盘自动分配功能（多业务员场景）
