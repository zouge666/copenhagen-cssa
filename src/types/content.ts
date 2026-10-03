export type EventStatus = "upcoming" | "past";

export interface AssociationEvent {
  slug: string;
  title: string;
  number: string;
  status: EventStatus;
  category: string;
  date: string;
  location: string;
  summary: string;
  image: string | null;
  paragraphs: string[];
  registrationUrl: string | null;
  publishedAt: string | null;
  sourceUrl: string | null;
  schedule?: { time: string; description: string }[];
  gallery?: { src: string; width: number; height: number }[];
  galleryIsChinese?: boolean;
  translations?: Partial<
    Record<
      Exclude<Locale, "zh">,
      Pick<
        AssociationEvent,
        "title" | "category" | "date" | "location" | "summary" | "paragraphs" | "schedule"
      >
    >
  >;
}

export interface TeamMember {
  id: string;
  name: string | null;
  role: string | null;
  university: string | null;
  photo: string | null;
}

export interface GuideChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  entries: { title: string; content: string }[];
}
import type { Locale } from "@/i18n/config";
