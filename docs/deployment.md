# GitHub 私有仓库与 Vercel 部署

以下步骤由你自行操作。项目已包含 README、`.gitignore` 与依赖锁定文件。

## 1. 创建空的私有仓库

登录 GitHub，打开 <https://github.com/new>。

1. 选择你的个人账号或学联组织。
2. 仓库名建议 `copenhagen-cssa`。
3. Visibility 选择 **Private**。
4. 不勾选初始化 README、`.gitignore` 或 License，本地已经有项目文件。
5. 点击 Create repository，复制仓库地址。

官方说明：<https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository>。

## 2. 连接并上传本地项目

在终端逐条执行。先将 URL 中的 `YOUR_USERNAME` 替换为 GitHub 用户名或组织名；如果仓库名不同，也一起修改。

```bash
cd /Users/zsh/GITHUBPROJECTS/AIAI/cssacph

git init
git branch -M main

git add .
git status
git commit -m "Initial website for Copenhagen CSSA"

git remote add origin https://github.com/YOUR_USERNAME/copenhagen-cssa.git
git push -u origin main
```

`git status` 用来确认提交内容。`node_modules`、`.next` 和本地环境文件已被忽略，视频与图片会随项目提交。

如果 Git 提示身份未配置，为此仓库设置你的真实身份，再重新执行 commit：

```bash
git config user.name "你的名字"
git config user.email "你的 GitHub 邮箱"
```

如 push 提示身份验证，请使用已配置的 GitHub 登录方式、GitHub CLI 或 SSH；GitHub HTTPS 不接受账号密码作为 Git 密码。不要把访问令牌放进项目文件或 remote URL。官方帮助：<https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github>。

## 3. 在 Vercel 导入

登录 <https://vercel.com/new>：

1. 连接 GitHub，并授权访问刚才的私有仓库。
2. 找到 `copenhagen-cssa`，点击 Import。
3. Framework Preset 确认是 **Next.js**。
4. Root Directory 使用项目根目录 `./`。
5. 保留框架默认设置，Build Command 为 `npm run build`，Output Directory 无需手填；当前版本不需要环境变量。
6. 在设置中选用 Node.js **22.x**，然后点击 Deploy。
7. 构建完成后，打开 Vercel 提供的 `*.vercel.app` 地址。

Vercel 原生支持 Next.js：<https://vercel.com/docs/frameworks/full-stack/nextjs>。
GitHub 导入与权限说明：<https://vercel.com/docs/git/vercel-for-github>。

个人私有仓库可以连接 Vercel。组织所有的私有仓库受 Vercel 套餐与团队权限限制，请按导入页提示选择适合学联的账号或团队。

**仓库私有控制的是代码访问权限。网站访问权限由 Vercel 的 Deployment Protection 单独控制。** 希望官网公开访问时，在项目设置中检查 Production 部署的保护设置。

官方访问保护说明：<https://vercel.com/docs/deployment-protection>。

## 4. 以后更新内容

在本地修改 `src/content/` 或页面，预览满意后：

```bash
npm run check
git add .
git commit -m "Update website content"
git push
```

仓库与 Vercel 连接后，推送到生产分支会触发新部署。暂时使用 Vercel 域名即可，购买与配置自有域名可以之后再做。
