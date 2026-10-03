import type { GuideChapter } from "@/types/content";

export const translatedGuideChapters: Record<"en" | "da", GuideChapter[]> = {
  en: [
    {
      id: "before-arrival",
      number: "01",
      title: "Before you arrive",
      subtitle: "Preparing to travel",
      description: "From accepting your offer to your first night in Denmark.",
      entries: [
        {
          title: "Admission and departure",
          content:
            "The handbook covers applications, post-admission checklists, flights, luggage, entry documents and preparations before departure.",
        },
        {
          title: "Visa applications",
          content:
            "The visa chapter introduces the application process and biometric registration. See the original chapter for documents and procedures.",
        },
      ],
    },
    {
      id: "settling-in",
      number: "02",
      title: "Settling in",
      subtitle: "Getting established",
      description: "Get familiar with life in Copenhagen at your own pace.",
      entries: [
        {
          title: "Residence permits and health cards",
          content:
            "The handbook introduces residence documents and appointments for the practical steps after arrival.",
        },
        {
          title: "Your first 30 days in Denmark",
          content:
            "This chapter organises arrival tasks, including CPR registration, digital mail, banking and tax matters, and checking posted documents.",
        },
        {
          title: "Finding a home and renting",
          content:
            "The handbook covers housing searches, contracts, payments, moving-in checks, communication during the tenancy and moving out. It also includes English communication templates.",
        },
      ],
    },
    {
      id: "campus-life",
      number: "03",
      title: "Study and daily life",
      subtitle: "Campus life",
      description: "Get to know your campus and fellow students.",
      entries: [
        {
          title: "Study and campus life",
          content:
            "The chapter covers enrolment, courses and credits, exams and grades, and communication and support during your studies.",
        },
      ],
    },
  ],
  da: [
    {
      id: "before-arrival",
      number: "01",
      title: "Før ankomsten",
      subtitle: "Forberedelser",
      description: "Fra optagelse til den første aften i Danmark.",
      entries: [
        {
          title: "Optagelse og afrejse",
          content:
            "Håndbogen beskriver ansøgning, tjeklister efter optagelse, flyrejse, bagage, indrejsedokumenter og forberedelser før afrejse.",
        },
        {
          title: "Visumansøgning",
          content:
            "Visumkapitlet introducerer ansøgningsprocessen og registrering af biometriske oplysninger. Se originalkapitlet for dokumenter og fremgangsmåde.",
        },
      ],
    },
    {
      id: "settling-in",
      number: "02",
      title: "Kom godt på plads",
      subtitle: "Den første tid",
      description: "Lær hverdagen i København at kende i dit eget tempo.",
      entries: [
        {
          title: "Opholdstilladelse og sundhedskort",
          content:
            "Håndbogen introducerer opholdsdokumenter og tidsbestilling til de praktiske opgaver efter ankomsten.",
        },
        {
          title: "De første 30 dage i Danmark",
          content:
            "Kapitlet giver et overblik over opgaver efter ankomsten, herunder CPR-registrering, digital post, bank- og skatteforhold samt kontrol af dokumenter sendt med posten.",
        },
        {
          title: "Boligsøgning og leje",
          content:
            "Håndbogen beskriver boligsøgning, kontrakter, betaling, gennemgang ved indflytning, kommunikation under lejemålet og fraflytning. Den indeholder også skabeloner til kommunikation på engelsk.",
        },
      ],
    },
    {
      id: "campus-life",
      number: "03",
      title: "Studie og hverdag",
      subtitle: "Campuslivet",
      description: "Lær dit campus og dine medstuderende at kende.",
      entries: [
        {
          title: "Studie og campusliv",
          content:
            "Kapitlet dækker indskrivning, kurser og merit, eksamener og karakterer samt kommunikation og støtte under studiet.",
        },
      ],
    },
  ],
};
