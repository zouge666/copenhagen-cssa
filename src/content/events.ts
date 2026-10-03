import type { AssociationEvent } from "@/types/content";
import type { Locale } from "@/i18n/config";

export const events: AssociationEvent[] = [
  {
    slug: "bii-visit-2026",
    number: "01",
    status: "past",
    title: "从科研到创业：在丹中国学生学者探访 BII",
    category: "学术交流",
    date: "2026年9月17日",
    location: "BioInnovation Institute，哥本哈根",
    summary: "来自 KU、DTU 与 CBS 的中国学生学者走进 BII，与 Jens Nielsen 交流科研成果转化与创业。",
    image: "/images/events/bii-visit.webp",
    publishedAt: "2026-09-18",
    sourceUrl: "https://mp.weixin.qq.com/s/qJETraKCv3fzq681YM8yZA",
    registrationUrl: null,
    paragraphs: [
      "2026年9月17日，在中国驻丹麦大使馆牵线和 BioInnovation Institute（BII）邀请下，哥本哈根学联协助组织了此次参访。来自哥本哈根大学（KU）、丹麦技术大学（DTU）和哥本哈根商学院（CBS）的二十余位中国学生学者参加交流。",
      "BII 首席执行官 Jens Nielsen 分享了自己的科研与创业经历，并介绍研究成果走向实际应用的路径，以及 BII 对早期生命科学项目的支持。",
      "同学们围绕科研成果转化、创业起步与支持资源提问交流，进一步了解丹麦的生命科学创新生态，也认识了来自不同学科的同学。",
    ],
    gallery: [{ src: "/images/events/bii-discussion.webp", width: 1080, height: 810 }],
    translations: {
      en: {
        title: "From research to entrepreneurship: a visit to BII",
        category: "Academic exchange",
        date: "17 September 2026",
        location: "BioInnovation Institute, Copenhagen",
        summary:
          "Chinese students and scholars from KU, DTU and CBS visited BII to discuss research translation and entrepreneurship with Jens Nielsen.",
        paragraphs: [
          "On 17 September 2026, Copenhagen CSSA helped organise a visit to the BioInnovation Institute (BII), following an introduction by the Chinese Embassy in Denmark and an invitation from BII. More than twenty Chinese students and scholars from KU, DTU and CBS took part.",
          "BII CEO Jens Nielsen shared his experience in research and entrepreneurship, explaining how research can reach practical applications and how BII supports early-stage life science projects.",
          "Participants discussed translating research into applications, taking the first steps towards entrepreneurship and finding support. The visit offered insight into Denmark's life science innovation community and opportunities to meet students from other disciplines.",
        ],
      },
      da: {
        title: "Fra forskning til iværksætteri: besøg på BII",
        category: "Faglig udveksling",
        date: "17. september 2026",
        location: "BioInnovation Institute, København",
        summary:
          "Kinesiske studerende og forskere fra KU, DTU og CBS besøgte BII og talte med Jens Nielsen om at omsætte forskning til iværksætteri.",
        paragraphs: [
          "Den 17. september 2026 var CSSA København med til at arrangere et besøg på BioInnovation Institute (BII). Besøget fandt sted efter kontakt formidlet af Kinas ambassade i Danmark og en invitation fra BII. Over tyve kinesiske studerende og forskere fra KU, DTU og CBS deltog.",
          "BII's administrerende direktør Jens Nielsen delte sine erfaringer med forskning og iværksætteri. Han fortalte om vejen fra forskningsresultater til praktisk anvendelse og BII's støtte til tidlige projekter inden for life science.",
          "Deltagerne stillede spørgsmål om anvendelse af forskningsresultater, de første skridt som iværksætter og muligheder for støtte. Besøget gav indblik i det danske innovationsmiljø inden for life science og mulighed for at møde studerende fra andre fagområder.",
        ],
      },
    },
  },
  {
    slug: "welcome-buddy-2026",
    number: "02",
    status: "past",
    title: "2026 哥本哈根迎新会暨 Buddy Program 线下破冰会",
    category: "新生支持 · 邀请函存档",
    date: "2026年9月19日 · 15:30–20:00",
    location: "Copenhagen Biocenter · Ole Maaløes Vej 5, 2100 København",
    summary: "迎新与安全宣讲、学长学姐经验分享，以及面向本届 Buddy Program 成员的线下交流。",
    image: "/images/nyhavn-poster.jpg",
    publishedAt: "2026-09-12",
    sourceUrl: "https://mp.weixin.qq.com/s/mfYwQTi1N3d2NH9PsFykZw",
    registrationUrl: null,
    paragraphs: [
      "2026年迎新会邀请在哥本哈根的新同学参与交流。以下信息整理自9月12日发布的邀请函，活动日期已过，页面保留当时的安排供查阅。",
      "迎新会设置「平安进校园」安全宣讲，由中国驻丹麦大使馆领事官员分享安全与防诈骗知识；学长学姐介绍在丹学习生活经验，并安排互动问答与丹麦特色小吃。",
      "18:00起的 Buddy Program 线下破冰会仅面向本届 Buddy Program 成员，包括互动游戏、伙伴交流与免费晚餐。",
      "活动地点为哥本哈根大学北校区 Copenhagen Biocenter，block 4 的 Lundbeckfond-auditoriet，地址为 Ole Maaløes Vej 5, 2100 København。",
    ],
    schedule: [
      { time: "15:30–15:55", description: "入场签到" },
      { time: "16:00–18:00", description: "迎新会暨「平安进校园」安全宣讲" },
      { time: "18:00–20:00", description: "Buddy Program 成员破冰交流与晚餐" },
    ],
    translations: {
      en: {
        title: "2026 welcome event and Buddy Program meetup",
        category: "New student support · Archived invitation",
        date: "19 September 2026 · 15:30–20:00",
        location: "Copenhagen Biocenter · Ole Maaløes Vej 5, 2100 København",
        summary:
          "A welcome and safety session, advice from senior students, and an in-person meetup for members of the 2026 Buddy Program.",
        paragraphs: [
          "The 2026 welcome event invited new students in Copenhagen to meet and exchange experiences. This page summarises the invitation published on 12 September. The event date has passed; the original programme is retained for reference.",
          "The welcome session included safety and fraud prevention advice from consular officers of the Chinese Embassy in Denmark, practical experiences shared by senior students, a quiz and Danish snacks.",
          "The Buddy Program meetup from 18:00 was exclusively for members of the 2026 programme, with games, conversations between buddies and new students, and a free dinner.",
          "The venue was Lundbeckfond-auditoriet in block 4 of Copenhagen Biocenter on KU's North Campus, at Ole Maaløes Vej 5, 2100 København.",
        ],
        schedule: [
          { time: "15:30–15:55", description: "Arrival and check-in" },
          { time: "16:00–18:00", description: "Welcome event and campus safety session" },
          { time: "18:00–20:00", description: "Buddy Program meetup and dinner" },
        ],
      },
      da: {
        title: "Velkomstarrangement 2026 og Buddy Program-træf",
        category: "Støtte til nye studerende · Arkiveret invitation",
        date: "19. september 2026 · 15:30–20:00",
        location: "Copenhagen Biocenter · Ole Maaløes Vej 5, 2100 København",
        summary:
          "Velkomst, sikkerhedsoplæg og erfaringer fra ældre studerende samt et fysisk træf for deltagere i Buddy Program 2026.",
        paragraphs: [
          "Velkomstarrangementet i 2026 inviterede nye studerende i København til at mødes og udveksle erfaringer. Oplysningerne er fra invitationen udgivet den 12. september. Datoen er passeret, og programmet vises som arkivmateriale.",
          "Velkomstdelen omfattede råd om sikkerhed og forebyggelse af svindel fra konsulære medarbejdere ved Kinas ambassade i Danmark, erfaringer fra ældre studerende, en quiz og danske snacks.",
          "Buddy Program-træffet fra kl. 18 var kun for deltagere i 2026-programmet. Det omfattede lege, samtaler mellem buddies og nye studerende samt gratis aftensmad.",
          "Arrangementet fandt sted i Lundbeckfond-auditoriet, blok 4 i Copenhagen Biocenter på KU's Nørre Campus, Ole Maaløes Vej 5, 2100 København.",
        ],
        schedule: [
          { time: "15:30–15:55", description: "Ankomst og registrering" },
          { time: "16:00–18:00", description: "Velkomst og oplæg om sikkerhed på campus" },
          { time: "18:00–20:00", description: "Buddy Program-træf og aftensmad" },
        ],
      },
    },
  },
  {
    slug: "buddy-program-2026",
    number: "03",
    status: "past",
    title: "2026 迎新季 Buddy Program：点灯计划",
    category: "新生互助 · 招募存档",
    date: "2026年8月15日 23:59 报名截止",
    location: "哥本哈根 · 新生与 Buddy 分组交流",
    summary: "由熟悉哥本哈根的 Buddy 陪伴新同学，从行前准备到抵丹安顿，分享学习与生活经验。",
    image: "/images/events/buddy-program.webp",
    publishedAt: "2026-08-09",
    sourceUrl: "https://mp.weixin.qq.com/s/93ian0oFvSGJOWSN_pz-ig",
    registrationUrl: null,
    galleryIsChinese: true,
    gallery: [
      { src: "/images/events/buddy-introduction.webp", width: 1080, height: 720 },
      { src: "/images/events/buddy-participants.png", width: 1080, height: 720 },
      { src: "/images/events/buddy-timeline.webp", width: 1080, height: 720 },
      { src: "/images/events/buddy-registration.webp", width: 1024, height: 1536 },
    ],
    paragraphs: [
      "Buddy Program 是哥本哈根学联发起的新老生互助计划。学联根据报名情况分组，让熟悉哥本哈根学习生活的 Buddy 与新同学建立联系，围绕行前准备、初到哥本哈根和适应学习生活交流互助。",
      "2026年计划面向秋季入学、或已抵丹不足两个月的新同学，涵盖 KU、DTU、CBS 及哥本哈根地区其他高校。Buddy 志愿者可以是在读学生、交换生或已经工作的校友，欢迎愿意分享经验的人参与。",
      "本届采用小组互助形式，而非一对一配对。志愿者分享经验、协同答疑并联系跟进；新同学可以认识来自不同学校与专业的伙伴。",
      "2026年招募报名截止时间为8月15日23:59；8月16日至20日审核，8月21日公布结果与分组。此轮报名已结束，以下保留原始海报供回顾。后续计划请关注学联公众号。",
    ],
    translations: {
      en: {
        title: "Buddy Program 2026: helping new students settle in",
        category: "Peer support · Archived recruitment",
        date: "Application deadline: 15 August 2026, 23:59",
        location: "Copenhagen · Buddy and new student groups",
        summary:
          "Experienced buddies support new students with travel preparations, settling in and everyday student life in Copenhagen.",
        paragraphs: [
          "The Buddy Program is a peer support initiative run by Copenhagen CSSA. Students familiar with studying and living in Copenhagen are grouped with newcomers to exchange advice before departure, on arrival and while settling into study and daily life.",
          "The 2026 programme welcomed students starting in autumn or who had arrived in Denmark less than two months earlier, at KU, DTU, CBS and other local universities. Buddy volunteers could be current students, exchange students or graduates already working who wanted to share their experience.",
          "Support was organised in small groups rather than one-to-one pairs. Volunteers shared experiences, answered questions together and stayed in touch, while new students met peers from different universities and subjects.",
          "Applications closed on 15 August 2026 at 23:59. Reviews were scheduled for 16–20 August, with results and groups announced on 21 August. This round is closed. The original posters are retained below; follow CSSA's WeChat account for future programmes.",
        ],
      },
      da: {
        title: "Buddy Program 2026: hjælp til nye studerende",
        category: "Studiestøtte · Arkiveret rekruttering",
        date: "Ansøgningsfrist: 15. august 2026 kl. 23:59",
        location: "København · Grupper med buddies og nye studerende",
        summary:
          "Erfarne buddies hjælper nye studerende med rejseforberedelser, ankomst og studielivet i København.",
        paragraphs: [
          "Buddy Program er CSSA Københavns støtteordning for nye studerende. Studerende med erfaring fra København sættes i grupper med nye studerende, så de kan udveksle råd før afrejse, ved ankomst og under tilvænningen til studie og hverdag.",
          "Programmet i 2026 var for studerende med studiestart om efteråret eller med under to måneders ophold i Danmark på KU, DTU, CBS og andre lokale universiteter. Frivillige buddies kunne være nuværende studerende, udvekslingsstuderende eller tidligere studerende i arbejde, der ønskede at dele deres erfaringer.",
          "Støtten foregik i små grupper frem for individuelle par. De frivillige delte erfaringer, besvarede spørgsmål i fællesskab og fulgte op. De nye studerende kunne møde andre fra forskellige universiteter og fag.",
          "Ansøgningsfristen var den 15. august 2026 kl. 23:59. Ansøgninger blev planlagt vurderet den 16.–20. august, og resultater og grupper blev annonceret den 21. august. Denne ansøgningsrunde er lukket. De originale plakater vises nedenfor; følg CSSA på WeChat for kommende programmer.",
        ],
      },
    },
  },
];

export function getEvents(locale: Locale): AssociationEvent[] {
  return events.map((event) => ({
    ...event,
    ...(locale === "zh" ? {} : event.translations?.[locale]),
  }));
}
