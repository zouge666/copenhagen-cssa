# 内容维护说明

## 最常用的文件

| 内容                                     | 文件                                                        |
| ---------------------------------------- | ----------------------------------------------------------- |
| 中文学联名称、介绍、公众号、首屏素材     | `src/content/site.ts`                                       |
| 活动记录与详情                           | `src/content/events.ts`                                     |
| 成员与部门                               | `src/content/team.ts`                                       |
| 新生指南章节与正文                       | `src/content/guide.ts`、`src/content/guide-translations.ts` |
| 社群管理员、外联部合作微信、小红书二维码 | `src/content/contact.ts`                                    |
| 招新条件、流程、部门要求与报名表         | `src/content/join.ts`                                       |
| 三语首页标题、导航与栏目文案             | `src/i18n/dictionaries/zh.ts`、`en.ts`、`da.ts`             |
| 往期活动照片                             | `src/content/memories.ts`、`public/images/memories/`        |
| 颜色、字号、间距与响应式规则             | `src/app/globals.css`                                       |
| 网站文字标识                             | `src/components/layout/brand.tsx`                           |

图片放在 `public/images/`，内容里写 `/images/文件名.jpg`，省略 `public`。优先使用本地图片，避免外部图片变更、失效或未经授权。

学联动态在 `src/content/updates.ts` 维护；关于学联的详细介绍在 `src/content/association.ts` 维护。

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

编辑 `src/content/events.ts`。当前已录入 BII 参访、2026迎新会邀请函和 Buddy Program 2026 三条真实记录，均为往期。新增活动可参照以下结构：

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
    publishedAt: "2026-10-01",
    sourceUrl: "https://mp.weixin.qq.com/s/实际文章链接",
  },
];
```

- `slug` 必须唯一，建议使用小写英文字母、数字和短横线。对应 `/zh/events/your-event-slug`，英语、丹麦语版本分别以 `/en`、`/da` 开头。
- `status` 为 `upcoming`（近期）或 `past`（往期）。
- `publishedAt` 使用实际文章发布日期（如 `2026-10-01`），列表自动从新到旧排序；没有日期时保留 `null`，显示在最后。`date` 单独记录活动举办时间。
- `sourceUrl` 填原文地址，详情页会显示原文入口；联系信息与招新内容分别维护在 `contact.ts` 与 `join.ts`，不录入活动列表。
- `image: null` 会显示编号占位。
- `registrationUrl: null` 会显示“报名信息待公布”。填入完整的 `https://...` 报名链接后，近期活动详情页显示报名按钮。
- 修改活动后重新构建或推送到已连接 Vercel 的仓库，静态详情页会更新。

活动可以增加 `schedule`（时间与说明数组）及 `gallery`（图片地址、宽、高数组）。三语活动安排分别放入 `translations.en.schedule` 和 `translations.da.schedule`。`galleryIsChinese: true` 会在原始海报前显示中文素材说明。往期活动不显示报名按钮。

## 招新与学联动态

招新公告及官方报名表地址、公告发布日期、截止日期在 `src/content/join.ts` 的 `recruitment` 更新。申请条件、流程与各部门要求分别维护中文、英语、丹麦语版本。截止时间按原文显示，未推断时区。招新截止后，应同步调整加入我们页面的报名入口与动态摘要，或替换为下一届信息。

`src/content/updates.ts` 保存招新与节日问候，按发布日期从新到旧展示。站内页面使用 `external: false`，原文入口使用 `external: true`。招新、联系信息与节日祝福不进入活动列表。

## 联系方式与二维码

公众号搜索名称在 `src/content/site.ts` 的 `wechatName` 更新。官方 logo 在 `logo` 更新；浏览器图标对应 `src/app/[locale]/icon.jpg`。

当前联系页使用公众号搜索名称、微信公众号二维码、小红书完整二维码、合作邮箱与真实社群管理员微信。公众号二维码和邮箱在 `src/content/site.ts` 的 `wechatQr`、`email` 更新。社群、外联部联系方式及小红书图片在 `src/content/contact.ts` 更新。二维码应使用清晰、带白色留边的原图，注意区分微信与小红书。

留学手册入口和章节导览在 `src/content/guide.ts` 更新，手册共建菜单路径也在这个文件。

## 首屏影像

首屏与整体设计已定版，未经用户明确要求不替换。当前使用本地 `public/videos/nyhavn.mp4` 与 `public/images/nyhavn-poster.jpg`。如用户明确要求替换成学联自有影像，再同步更新 `site.hero` 的出处。视频建议静音、约 10 秒、H.264 MP4，使用匹配的静态封面。

## 语言与部门

网站支持 `/zh`（中文）、`/en`（英语）、`/da`（丹麦语）。通用文字在 `src/i18n/dictionaries/` 中维护，三份文案使用同一 TypeScript 类型，缺少字段时检查会报错。学联名称下方显示当前语言的组织全称。

部门名称和职责在 `src/content/team.ts` 以 `zh`、`en`、`da` 三个字段维护，不包含人数。成员姓名不会自动翻译。活动中文资料使用原有字段；英语、丹麦语正文可在活动对象的 `translations.en`、`translations.da` 中分别填写 `title`、`category`、`date`、`location`、`summary` 和 `paragraphs`。没有译文时保留中文原文。

照片相册在 `src/content/memories.ts` 维护，标题、说明和图片替代文字在三语文案的 `gallery` 中同步修改。相册保留提供的原图，内嵌中文标注不改写，点击可查看完整图片。留学手册、招新原文及公众号名称保持原始内容，英语和丹麦语页面注明原文为中文。

## 正式上线

先填写真实成员资料，核对现有内容，并按实际情况更新近期活动。当前为草稿版本，`src/app/[locale]/layout.tsx` 的元数据设置了 `robots: { index: false, follow: false }`。内容确认后改为 `true`，允许搜索引擎收录；这不会限制访问权限。

日常修改后执行 `npm run check`，检查通过再由维护者提交和推送代码。
