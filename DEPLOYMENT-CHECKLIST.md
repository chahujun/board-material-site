# 部署清单 — OneStopBuildly 内容站

## 部署前检查

- [x] npm run build 通过
- [x] 全部 17 个路由返回 200
- [x] sitemap.xml 正确生成
- [x] robots.txt 声明 sitemap
- [x] JSON-LD 结构化数据注入
- [x] 品牌名 OneStopBuildly 全站统一
- [x] LOGO SVG 渲染正确
- [x] CTA 指向 onestopbuildly.com/inquiry
- [x] Git 初始提交完成

## 部署步骤

### 1. 创建 GitHub 仓库
- 登录 GitHub
- New repository → 名称为 `onestopbuildly-content`
- Private（私有）
- 不要勾选 README/gitignore（已有）

### 2. 推送代码
```bash
cd /workspace/board-material-site
git remote add origin https://github.com/YOUR_USERNAME/onestopbuildly-content.git
git branch -M main
git push -u origin main
```

### 3. Vercel 部署
- 登录 vercel.com
- Add New Project → Import `onestopbuildly-content`
- Framework: Next.js（自动检测）
- 直接点 Deploy
- 等待 1-2 分钟构建完成

### 4. 绑定域名（NameSilo）
- Vercel 项目 → Settings → Domains → Add Domain
- 输入你的域名（如 `materials.onestopbuildly.com` 或新域名）
- 到 NameSilo DNS 管理：
  - 添加 CNAME 记录: `materials` → `cname.vercel-dns.com`
  - 或 A 记录: `@` → `76.76.21.21`
- 等 DNS 生效（5-30 分钟）
- Vercel 自动签发 SSL

### 5. 更新站点配置
- 编辑 `lib/seo.ts`
- 把 `url` 改为真实域名
- 把 `inquiryUrl` 确认指向主站询盘页
- 把 `contactEmail` 改为真实邮箱
- git push 自动触发 Vercel 重新部署

### 6. Google Search Console
- 添加新站点
- 提交 sitemap.xml URL
- 申请索引首页

## 部署后内容计划

### 第 1 周
- [ ] 替换首页 hero 图片为真实板材产品图
- [ ] 替换产品页 placeholder 图片为真实产品图
- [ ] 替换博客文章封面图
- [ ] 确认真实邮箱和电话

### 第 2-4 周
- [ ] 每周发布 2-3 篇长尾内容文章
- [ ] 在 Google Search Console 监控收录情况
- [ ] 文末 CTA 导流到主站询盘页

### 第 5-6 周
- [ ] 整理数据（收录数、关键词排名、询盘点击）
- [ ] 准备给老板的汇报简报
