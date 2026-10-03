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
}

export interface TeamMember {
  id: string;
  name: string | null;
  role: string;
  university: string | null;
  photo: string | null;
}
