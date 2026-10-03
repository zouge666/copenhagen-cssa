import type { TeamMember } from "@/types/content";
import type { LocalizedText } from "@/i18n/config";

export const team: TeamMember[] = Array.from({ length: 4 }, (_, index) => ({
  id: `member-${index + 1}`,
  name: null,
  role: null,
  university: null,
  photo: null,
}));

export const departments: { id: string; name: LocalizedText; description: LocalizedText }[] = [
  {
    id: "relations-finance",
    name: {
      zh: "外联&财务部",
      en: "External Relations & Finance",
      da: "Eksterne relationer og økonomi",
    },
    description: {
      zh: "对外联络、合作事务及财务管理，确保资源的有效配置。",
      en: "Manages external contacts, partnerships and finances to ensure resources are allocated effectively.",
      da: "Varetager eksterne kontakter, samarbejde og økonomi og sikrer en effektiv fordeling af ressourcer.",
    },
  },
  {
    id: "communications",
    name: { zh: "宣传部", en: "Communications", da: "Kommunikation" },
    description: {
      zh: "活动的宣传推广和品牌塑造，提高活动的知名度和参与度。",
      en: "Promotes events and develops the association's identity to increase awareness and participation.",
      da: "Formidler aktiviteter og udvikler foreningens profil for at øge kendskabet og deltagelsen.",
    },
  },
  {
    id: "academic",
    name: { zh: "学术部", en: "Academic Affairs", da: "Faglige aktiviteter" },
    description: {
      zh: "组织学术类相关活动，加强学术交流。",
      en: "Organises academic activities and encourages exchange between students and scholars.",
      da: "Arrangerer faglige aktiviteter og styrker udvekslingen mellem studerende og forskere.",
    },
  },
  {
    id: "culture-sports",
    name: { zh: "文体部", en: "Culture & Sport", da: "Kultur og sport" },
    description: {
      zh: "策划和实施各类艺术及体育类活动，丰富校园生活。",
      en: "Plans and runs arts and sporting activities to enrich student life.",
      da: "Planlægger og gennemfører kunst- og sportsaktiviteter, der beriger studielivet.",
    },
  },
];
