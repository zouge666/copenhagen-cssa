import type { AssociationEvent } from "../types/content";
import type { Locale } from "@/i18n/config";

export function formatPublicationDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat({ zh: "zh-CN", en: "en-GB", da: "da-DK" }[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value.slice(0, 10)}T12:00:00Z`));
}

function publicationTime(value: string | null) {
  if (!value) return null;
  const time = Date.parse(value);
  return Number.isNaN(time) ? null : time;
}

export function sortEventsByPublicationDate(events: readonly AssociationEvent[]) {
  return [...events].sort((left, right) => {
    const leftTime = publicationTime(left.publishedAt);
    const rightTime = publicationTime(right.publishedAt);
    if (leftTime === null && rightTime === null) return 0;
    if (leftTime === null) return 1;
    if (rightTime === null) return -1;
    return rightTime - leftTime;
  });
}
