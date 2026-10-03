import type { Locale } from "@/i18n/config";

const content: Record<Locale, string[]> = {
  zh: [
    "学联服务哥本哈根地区的中国学生、学者、访问学者与教职工，联系范围包括哥本哈根大学（KU）、丹麦技术大学（DTU）、哥本哈根商学院（CBS）、哥本哈根 IT 大学（ITU）及其他高校与研究机构。",
    "学联不向成员收取会费。成员基于自愿原则，参与活动策划、筹备与组织，开展传统节日庆祝、文化体育活动、学术交流和新生支持。",
    "学联也促进与国际学生及其他组织的交流，与高校和企业建立联系，为学生学者提供职业交流机会，并协助收集和反映学习生活中的建议。",
  ],
  en: [
    "CSSA serves Chinese students, scholars, visiting scholars and faculty in the Copenhagen area, including KU, DTU, CBS, IT University of Copenhagen (ITU), and other universities and research institutions.",
    "The association charges no membership fees. Members volunteer to plan, prepare and organise traditional celebrations, cultural and sporting events, academic exchange and support for new students.",
    "CSSA also promotes exchange with international students and other organisations, connects with universities and businesses for career-related exchange, and helps gather and communicate suggestions about study and daily life.",
  ],
  da: [
    "CSSA er for kinesiske studerende, forskere, gæsteforskere og undervisere i Københavnsområdet, blandt andet på KU, DTU, CBS, IT-Universitetet i København (ITU) samt andre universiteter og forskningsinstitutioner.",
    "Foreningen opkræver ikke kontingent. Medlemmer bidrager frivilligt til at planlægge og gennemføre traditionelle højtider, kultur- og sportsarrangementer, faglig udveksling og støtte til nye studerende.",
    "CSSA fremmer også udveksling med internationale studerende og andre organisationer, skaber kontakt til universiteter og virksomheder om karrieremuligheder og hjælper med at indsamle og videreformidle forslag om studie og hverdag.",
  ],
};
export function getAssociationProfile(locale: Locale) {
  return content[locale];
}
