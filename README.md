# 我的博客

- 网址：https://yang7834.github.io
- 后台：https://yang7834.github.io/admin

一个不需要服务器、不需要域名、不需要备案的个人博客。由 Astro 搭建，托管在 GitHub Pages，用 Sveltia CMS 在线写文章。

---

## 怎么进后台写文章

### 第一步：生成一个 GitHub 密钥（只需做一次）

1. 打开 https://github.com/settings/tokens
2. 点 **Generate new token** → **Generate new token (classic)**
3. **Note** 随便填个名字，比如「博客后台」
4. **Expiration** 选一个时长（建议 90 天，到期再重新生成一次即可）
5. 勾选 **repo** 这一整项（这是关键，给仓库读写权限）
6. 拉到最下面点 **Generate token**
7. **复制**那串 `ghp_` 开头的密钥 —— 它只显示这一次，请先复制保存好

### 第二步：登录后台

1. 打开 https://yang7834.github.io/admin
2. 点 **Sign in with Token**（用密钥登录）
3. 粘贴刚才复制的密钥，登录

> 密钥会保存在你的浏览器里，下次同一浏览器打开后台不用重新输；换浏览器或换设备才需要再输一次。

### 第三步：写文章

1. 左侧点 **博客文章**
2. 点 **新建** 按钮
3. 填写：
   - **标题**：文章标题（中文即可）
   - **网址标识**：文章网址最后一段，用小写英文或拼音、短横线连接，例如 `hello-world`
   - **简介**：一句话简介
   - **日期**：发布日期
   - **标签**：可以加几个，如 `随笔`、`技术`
   - **正文**：文章内容（支持 Markdown）
4. 点 **保存**（Save）
5. 保存后会自动提交到 GitHub，约 **1~2 分钟**后文章自动上线

---

## 以后怎么更新

- 写新文章：打开后台 → 新建 → 保存
- 改旧文章：打开后台 → 点进文章 → 编辑 → 保存
- 删文章：打开后台 → 点进文章 → 删除

---

## 想改网站本身（进阶）

网站代码都在这个仓库里。本地改完推上去就会自动更新：

```bash
npm install        # 第一次先装依赖
npm run dev        # 本地预览
npm run build      # 构建
git push           # 推上去自动发布
```

主要文件：

- `src/content/blog/` — 文章（Markdown 文件）
- `src/pages/` — 页面（首页、文章页、关于页）
- `src/styles/global.css` — 全局样式（黑白简约）
- `public/admin/config.yml` — 后台配置
- `.github/workflows/deploy.yml` — 自动部署脚本
