import type { AssociationEvent } from "../types/content";

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
