# Copenhagen CSSA

哥本哈根学联官网。基于 Next.js App Router、React 和 TypeScript，使用静态预渲染页面，支持中文、英语和丹麦语，适配桌面与移动端。可通过 GitHub 导入 Vercel 部署，无需数据库、后台服务或环境变量。

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
    [locale]/           zh / en / da 三语路由与页面布局
      about/            学联介绍、部门与团队
      events/[slug]/    活动回顾、列表与详情
      guide/            新生指南
      contact/          联系方式
      join/             招新条件、流程与报名入口
  components/
    layout/             导航、品牌标识与页脚
    home/               首页首屏与指南入口
    events/             学联动态、活动卡片、筛选与照片回顾
    about/              成员展示
    contact/            社群卡片与微信复制按钮
    ui/                 共用标题与页面介绍
  content/              网站内容，优先在这里修改
  i18n/                 语言配置、路由工具与三语文案
  types/                内容类型
public/
  images/               本地图片
  videos/               首屏动态视频
docs/                   内容维护与部署说明
```

## 内容维护

站点已使用正式名称与徽标，并加入四个部门及职责、学联活动照片、新生社群、合作联系方式、官方账号与留学手册。六篇公众号文章已整理为三篇活动记录、招新公告、中秋动态及组织介绍，包含原文配图、合作邮箱、微信公众号二维码和官方招新报名表。成员资料继续保留占位，参照 [内容维护说明](docs/content-guide.md) 填写。各条内容的发布日期、来源与分类见 [内容来源](docs/content-sources.md)。

页面展示不依赖远程媒体地址。首屏使用本地新港实景视频，支持静音循环、减少动态偏好与加载失败时的静态封面。字体采用系统无衬线字体，苹果设备优先使用系统字体，无需下载字体文件。

语言入口分别为 `/zh`、`/en`、`/da`。导航栏选择语言后保留当前页面，所有站内导航保留所选语言。各语言页面在构建时生成 HTML；根地址及旧的无语言前缀地址自动跳转至中文版本。

## GitHub 与 Vercel

具体步骤和需要手动执行的 Git 命令见 [GitHub 与 Vercel 部署指南](docs/deployment.md)。当前目录尚未初始化 Git；仓库创建、commit、push 与部署由维护者自行操作。

## 素材

首屏影像来源、授权及处理记录见 [素材来源](docs/assets.md)。参考网站只用于布局与信息结构研究，没有使用其代码、标识、成员资料或活动内容。
