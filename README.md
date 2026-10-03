# Copenhagen CSSA

哥本哈根学联官网。基于 Next.js App Router、React 和 TypeScript，使用静态预渲染页面，适配桌面与移动端。可通过 GitHub 导入 Vercel 部署，无需数据库、后台服务或环境变量。

## 本地开发

使用 Node.js 22 或更高版本。

```bash
npm ci
npm run dev
```

打开 <http://localhost:3000>。

```bash
npm run lint       # 代码规范
npm run typecheck  # 类型检查
npm run format    # 统一格式化
npm run build      # 生产构建
npm start          # 本地运行生产版本
```

## 项目结构

```text
src/
  app/                  页面路由、全局样式、元数据
    about/              学联介绍、部门与团队
    events/[slug]/      活动列表与详情
    guide/              新生指南
    contact/            联系方式
    join/               招新公告入口
  components/
    layout/             导航、品牌标识与页脚
    home/               首页首屏与指南入口
    events/             活动卡片与筛选
    about/              成员展示
    contact/            社群卡片与微信复制按钮
    ui/                 共用标题与页面介绍
  content/              网站内容，优先在这里修改
  types/                内容类型
public/
  images/               本地图片
  videos/               首屏动态视频
docs/                   内容维护与部署说明
```

## 内容维护

站点已使用正式名称与徽标，并加入新生社群、二手交易群、合作联系方式、公众号、小红书二维码与留学手册。成员、部门与活动暂保留占位，参照 [内容维护说明](docs/content-guide.md) 填写。公众号文章的录入清单见 [内容来源](docs/content-sources.md)。

页面展示不依赖远程媒体地址。首屏使用本地新港实景视频，支持静音循环、暂停、减少动态偏好与加载失败时的静态封面。

## GitHub 与 Vercel

具体步骤和需要手动执行的 Git 命令见 [GitHub 与 Vercel 部署指南](docs/deployment.md)。当前目录尚未初始化 Git；仓库创建、commit、push 与部署由维护者自行操作。

## 素材

首屏影像来源、授权及处理记录见 [素材来源](docs/assets.md)。参考网站只用于布局与信息结构研究，没有使用其代码、标识、成员资料或活动内容。
