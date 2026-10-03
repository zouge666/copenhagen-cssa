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
