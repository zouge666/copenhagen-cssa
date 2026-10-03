export const site = {
  name: "丹麦哥本哈根中国学生学者联合会",
  shortName: "哥本哈根CSSA",
  englishName: "Chinese Students & Scholars Association in Copenhagen",
  abbreviation: "CSSA-COPENHAGEN",
  logo: "/images/cssa-logo.jpg",
  description: "哥本哈根学联官网：活动资讯、留学指南、社群与团队。",
  introduction:
    "丹麦哥本哈根中国学生学者联合会（CSSA-Copenhagen）成立于2024年3月，是在中国驻丹麦大使馆支持与指导下的非政治、非宗教、非营利性学生社团。学联服务在哥本哈根学习和生活的中国学生与学者，开展学术交流、文体活动与新生互助。",
  email: "cssa.copenhagen@gmail.com",
  wechatName: "哥本哈根CSSA",
  wechatQr: "/images/wechat-official-qr.png",
  sourceUrl: "https://mp.weixin.qq.com/s/XXIW6NttsNAFeb6rBgenVw",
  hero: {
    poster: "/images/nyhavn-poster.jpg",
    video: "/videos/nyhavn.mp4",
    location: "NYHAVN, COPENHAGEN",
    credit: "Efrem Efre / Pexels",
    sourceUrl: "https://www.pexels.com/video/colorful-nyhavn-canal-in-copenhagen-denmark-30379625/",
  },
};

export const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "events", href: "/events" },
  { key: "guide", href: "/guide" },
  { key: "join", href: "/join" },
] as const;
