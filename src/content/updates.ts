import type { LocalizedText } from "@/i18n/config";
import { recruitment } from "./join";

type AssociationUpdate = {
  id: string;
  publishedAt: string;
  title: LocalizedText;
  summary: LocalizedText;
  image: string;
  imageShape: "portrait" | "landscape" | "recruitment";
  coverTitle?: LocalizedText;
  href: string;
  external: boolean;
};
export const updates: AssociationUpdate[] = [
  {
    id: "recruitment-2026",
    publishedAt: recruitment.publishedAt,
    title: {
      zh: "2026 哥哈学联招新",
      en: "Join the CSSA team in 2026",
      da: "Bliv en del af CSSA's team i 2026",
    },
    summary: {
      zh: "四个部门开放申请。了解部门职责、申请条件与线上面试流程，报名截止时间为10月19日23:59。",
      en: "Apply to one or more of our four departments. Read the responsibilities, eligibility and interview process. Applications close on 19 October at 23:59.",
      da: "Søg én eller flere af vores fire afdelinger. Læs om opgaver, krav og samtaleforløb. Ansøgningsfristen er den 19. oktober kl. 23:59.",
    },
    image: "/images/updates/recruitment-2026.webp",
    imageShape: "recruitment",
    coverTitle: { zh: "我们招新啦", en: "We’re recruiting", da: "Bliv en del af holdet" },
    href: "/join",
    external: false,
  },
  {
    id: "mid-autumn-2026",
    publishedAt: "2026-09-25",
    title: {
      zh: "哥哈学联祝您中秋快乐！",
      en: "Happy Mid-Autumn Festival from CSSA",
      da: "Glædelig midtefterårsfestival fra CSSA",
    },
    summary: {
      zh: "海上生明月，天涯共此时。哥本哈根学联向同学与学者们送上中秋问候，祝大家中秋快乐。",
      en: "Under the same moon, near or far, Copenhagen CSSA sends warm Mid-Autumn Festival wishes to students and scholars.",
      da: "Under den samme måne, nær eller langt væk, sender CSSA København varme hilsner til studerende og forskere ved midtefterårsfestivalen.",
    },
    image: "/images/updates/mid-autumn-2026.webp",
    imageShape: "portrait",
    href: "https://mp.weixin.qq.com/s/A7xDE5yRNMvp23zeReLxDA",
    external: true,
  },
];
