# 内容维护说明

## 最常用的文件

| 内容                                   | 文件                                               |
| -------------------------------------- | -------------------------------------------------- |
| 学联名称、介绍、邮箱、公众号、首屏素材 | `src/content/site.ts`                              |
| 近期与往期活动                         | `src/content/events.ts`                            |
| 成员与部门                             | `src/content/team.ts`                              |
| 新生指南章节与正文                     | `src/content/guide.ts`                             |
| 首页标题与栏目文案                     | `src/app/page.tsx`、`src/components/home/hero.tsx` |
| 颜色、字号、间距与响应式规则           | `src/app/globals.css`                              |
| 网站文字标识                           | `src/components/layout/brand.tsx`                  |

图片放在 `public/images/`，内容里写 `/images/文件名.jpg`，省略 `public`。优先使用本地图片，避免外部图片变更、失效或未经授权。

## 填写成员

编辑 `src/content/team.ts`，把当前生成的四个占位对象替换成实际数组。例如：

```ts
export const team: TeamMember[] = [
  {
    id: "member-1",
    name: "实际姓名",
    role: "实际职务",
    university: "实际学校 / 专业",
    photo: "/images/member-1.jpg",
  },
];
```

没有资料时保留 `null`，页面自动显示占位文字。建议人像图比例接近 4:5。部门名称与职责也在这个文件中。

## 填写活动

编辑 `src/content/events.ts`。当前六条记录均为占位，前三条归入近期活动，后三条归入往期回顾。替换为实际活动数组：

```ts
export const events: AssociationEvent[] = [
  {
    slug: "your-event-slug",
    title: "实际活动名称",
    number: "01",
    status: "upcoming",
    category: "实际分类",
    date: "实际日期与时间（注明时区）",
    location: "实际地点",
    summary: "一句简短的活动介绍。",
    image: "/images/your-event.jpg",
    paragraphs: ["第一段正文。", "第二段正文。"],
    registrationUrl: null,
  },
];
```

- `slug` 必须唯一，建议使用小写英文字母、数字和短横线。对应 `/events/your-event-slug`。
- `status` 为 `upcoming`（近期）或 `past`（往期）。
- `image: null` 会显示编号占位。
- `registrationUrl: null` 会显示“报名信息待公布”。填入完整的 `https://...` 报名链接后，近期活动详情页显示报名按钮。
- 修改活动后重新构建或推送到已连接 Vercel 的仓库，静态详情页会更新。

## 联系方式与二维码

在 `src/content/site.ts` 中填写：

```ts
email: "真实学联邮箱",
wechatName: "实际公众号名称",
wechatQr: "/images/wechat-qr.png",
```

未填写时保持 `null`，不会显示伪造联系方式或产生无效发送行为。二维码建议使用清晰、带白色留边的原图。

## 首屏影像

当前使用本地 `public/videos/nyhavn.mp4` 与 `public/images/nyhavn-poster.jpg`。可以替换成学联自有影像，再同步更新 `site.hero` 的出处。视频建议静音、约 10 秒、H.264 MP4，使用匹配的静态封面。

## 正式上线

先填写真实的组织名称、介绍、成员、活动与联系方式，并确认照片使用已获授权。当前为草稿版本，`src/app/layout.tsx` 的元数据设置了 `robots: { index: false, follow: false }`。内容确认后改为 `true`，允许搜索引擎收录；这不会限制访问权限。

日常修改后执行 `npm run check`，检查通过再由维护者提交和推送代码。
