import type { Locale } from "@/i18n/config";

export const recruitment = {
  sourceUrl: "https://mp.weixin.qq.com/s/O_LY35H2kT9bKxWv9o70dA",
  applicationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfDmIKcaVJue6aqrtCrClUUCOJk0K9z3K9VIniXMN2fIrhpmA/viewform",
  publishedAt: "2026-10-02",
  deadlineDate: "2026-10-19",
  deadlineTime: "23:59",
};

const zh = {
  eligibility: [
    "全日制在丹留学生：本科生、硕士生、博士生或博后。",
    "在丹麦剩余学习或研究时间不少于一年。",
    "愿意投入时间与精力，为在丹留学生服务。",
  ],
  process: [
    { title: "填写报名表", description: "通过官方问卷提交申请，可以报名多个意向部门。" },
    { title: "初筛与通知", description: "学联初筛后，将以邮件等方式通知结果和具体线上面试时间。" },
    { title: "线上面试", description: "根据面试结果择优录取，后续安排以学联通知为准。" },
  ],
  departmentNote: "2026年招新公告中，文体部使用「组织与文体部」名称，并承担活动统筹与组织工作。",
  departments: [
    {
      name: "组织与文体部",
      description: "策划与执行联谊聚会、节日庆典、文艺演出和体育赛事，并协助各部门落实活动细节。",
      requirements: [
        "积极主动，善于沟通与团队协作。",
        "有责任心，能灵活应对突发情况。",
        "有活动策划、组织、主持或舞台经验者优先。",
      ],
    },
    {
      name: "学术部",
      description:
        "组织讲座、学术沙龙与经验分享，促进跨学科交流，也欢迎提出学术与就业指导活动建议。",
      requirements: [
        "对学术活动、科研或知识分享有兴趣。",
        "具备组织与策划能力。",
        "适合有读博意向、在读博士或科研相关专业的同学；有讲座组织经验者优先。",
      ],
    },
    {
      name: "宣传部",
      description: "负责信息发布与活动宣传，参与公众号推送、海报、视频剪辑、摄影和设计。",
      requirements: [
        "愿意学习官方邮箱、微信公众号与小红书等平台的运营规则。",
        "乐于参与宣传工作。",
        "有新媒体运营、写作、摄影、平面设计经验，或熟悉秀米、Canva 者优先。",
      ],
    },
    {
      name: "外联与财务部",
      description: "建立与维护机构、企业和赞助商合作，参与寻找赞助、筹集资金、编制预算与财务报告。",
      requirements: [
        "具备良好的沟通与协作能力。",
        "做事细致可靠，责任心强。",
        "对外联合作或财务管理有兴趣或相关经验者优先。",
      ],
    },
  ],
};

type RecruitmentContent = typeof zh;
const en: RecruitmentContent = {
  eligibility: [
    "Full-time students in Denmark at bachelor's, master's or doctoral level, and postdoctoral researchers.",
    "At least one year of study or research remaining in Denmark.",
    "Willingness to contribute time and effort to supporting students in Denmark.",
  ],
  process: [
    {
      title: "Complete the application",
      description: "Submit the official questionnaire. You may apply to more than one department.",
    },
    {
      title: "Initial review",
      description:
        "CSSA will communicate the review result and the time of your online interview by email or other channels.",
    },
    {
      title: "Online interview",
      description:
        "Selection is based on the interview. Follow CSSA's notifications for subsequent arrangements.",
    },
  ],
  departmentNote:
    "The 2026 announcement names the Culture & Sport department “Organisation, Culture & Sport”, reflecting its event coordination responsibilities.",
  departments: [
    {
      name: "Organisation, Culture & Sport",
      description:
        "Plan and run social gatherings, festivals, performances and sporting events, and help other departments with event arrangements.",
      requirements: [
        "A proactive approach and good communication and teamwork skills.",
        "Responsibility and flexibility when unexpected situations arise.",
        "Experience in event planning, coordination, hosting or stage work is an advantage.",
      ],
    },
    {
      name: "Academic Affairs",
      description:
        "Organise lectures, academic discussions and experience sharing, encourage interdisciplinary exchange and propose academic or career guidance activities.",
      requirements: [
        "An interest in academic activities, research or sharing knowledge.",
        "Organisation and planning skills.",
        "Well suited to prospective or current PhD students and research-related subjects; experience organising talks is an advantage.",
      ],
    },
    {
      name: "Communications",
      description:
        "Publish information and promote events through WeChat articles, posters, video editing, photography and design.",
      requirements: [
        "Willingness to learn how to manage official email, WeChat and Xiaohongshu channels.",
        "Interest in promoting CSSA's activities.",
        "Experience with social media, writing, photography or graphic design, or familiarity with Xiumi or Canva, is an advantage.",
      ],
    },
    {
      name: "External Relations & Finance",
      description:
        "Build partnerships with institutions, businesses and sponsors, and contribute to sponsorship, fundraising, budgets and financial reporting.",
      requirements: [
        "Good communication and collaboration skills.",
        "Careful, reliable work and a strong sense of responsibility.",
        "Interest or experience in partnerships or financial management is an advantage.",
      ],
    },
  ],
};
const da: RecruitmentContent = {
  eligibility: [
    "Fuldtidsstuderende i Danmark på bachelor-, kandidat- eller ph.d.-niveau samt postdocs.",
    "Mindst ét års studie eller forskning tilbage i Danmark.",
    "Lyst til at bruge tid og kræfter på at støtte studerende i Danmark.",
  ],
  process: [
    {
      title: "Udfyld ansøgningen",
      description: "Indsend det officielle spørgeskema. Du kan søge flere afdelinger.",
    },
    {
      title: "Indledende vurdering",
      description:
        "CSSA meddeler resultatet og tidspunktet for en online samtale via e-mail eller andre kanaler.",
    },
    {
      title: "Online samtale",
      description: "Udvælgelsen sker på baggrund af samtalen. De næste trin meddeles af CSSA.",
    },
  ],
  departmentNote:
    "I opslaget fra 2026 hedder afdelingen for kultur og sport “Organisation, kultur og sport”, da den også koordinerer arrangementer.",
  departments: [
    {
      name: "Organisation, kultur og sport",
      description:
        "Planlæg og gennemfør sociale sammenkomster, højtider, optrædener og sportsarrangementer, og hjælp andre afdelinger med praktiske opgaver.",
      requirements: [
        "Initiativ samt gode kommunikations- og samarbejdsevner.",
        "Ansvarlighed og fleksibilitet ved uventede situationer.",
        "Erfaring med planlægning, koordinering, værtsopgaver eller scenearbejde er en fordel.",
      ],
    },
    {
      name: "Faglige aktiviteter",
      description:
        "Arrangér foredrag, faglige samtaler og erfaringsudveksling, styrk samarbejde på tværs af fag, og foreslå faglig vejledning eller karriereaktiviteter.",
      requirements: [
        "Interesse for faglige aktiviteter, forskning eller videndeling.",
        "Evne til at organisere og planlægge.",
        "Velegnet til kommende eller nuværende ph.d.-studerende og forskningsrelaterede fag; erfaring med foredrag er en fordel.",
      ],
    },
    {
      name: "Kommunikation",
      description:
        "Formidl information og aktiviteter gennem WeChat-opslag, plakater, videoredigering, fotografi og design.",
      requirements: [
        "Lyst til at lære at administrere officiel e-mail, WeChat og Xiaohongshu.",
        "Interesse for at formidle CSSA's aktiviteter.",
        "Erfaring med sociale medier, skrivning, fotografi eller grafisk design samt kendskab til Xiumi eller Canva er en fordel.",
      ],
    },
    {
      name: "Eksterne relationer og økonomi",
      description:
        "Skab samarbejde med institutioner, virksomheder og sponsorer, og bidrag til sponsorater, indsamling af midler, budgetter og økonomiske rapporter.",
      requirements: [
        "Gode kommunikations- og samarbejdsevner.",
        "Omhyggelighed, pålidelighed og ansvarlighed.",
        "Interesse eller erfaring med samarbejdspartnere eller økonomistyring er en fordel.",
      ],
    },
  ],
};

export function getRecruitment(locale: Locale): RecruitmentContent {
  return { zh, en, da }[locale];
}
