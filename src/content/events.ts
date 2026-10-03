import type { AssociationEvent } from "@/types/content";

export const events: AssociationEvent[] = Array.from({ length: 6 }, (_, index) => ({
  slug: `event-${index + 1}`,
  title: `活动${["一", "二", "三", "四", "五", "六"][index]}`,
  number: String(index + 1).padStart(2, "0"),
  status: index < 3 ? "upcoming" : "past",
  category: "活动分类待补充",
  date: index < 3 ? "日期待定" : "日期待补充",
  location: "地点待补充",
  summary: "活动介绍待补充，更多内容敬请期待。",
  image: null,
  paragraphs: ["活动内容待补充……", "活动安排、参与方式及相关说明待补充……"],
  registrationUrl: null,
  publishedAt: null,
  sourceUrl: null,
}));
