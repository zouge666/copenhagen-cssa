import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { AssociationEvent } from "@/types/content";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";
import { formatPublicationDate } from "@/lib/events";

export function EventCard({
  event,
  locale,
  copy,
}: {
  event: AssociationEvent;
  locale: Locale;
  copy: Dictionary["events"];
}) {
  return (
    <article className="event-card">
      <Link
        href={localePath(locale, `/events/${event.slug}`)}
        className="event-cover"
        aria-label={event.title}
      >
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`event-placeholder tone-${Number(event.number) % 3}`}>
            <span className="event-placeholder-label">COPENHAGEN CSSA / EVENTS</span>
            <span className="event-number">{event.number}</span>
            <span className="event-image-label">{copy.image}</span>
          </div>
        )}
        <span className="event-status">
          {event.status === "upcoming" ? copy.upcoming : copy.past}
        </span>
        <span className="event-cover-icon">
          <ArrowUpRight size={21} aria-hidden="true" />
        </span>
      </Link>
      <div className="event-card-content">
        <p className="event-category">{event.category}</p>
        {event.publishedAt && (
          <p className="publication-date">
            {copy.published}{" "}
            <time dateTime={event.publishedAt}>
              {formatPublicationDate(event.publishedAt, locale)}
            </time>
          </p>
        )}
        <h3>
          <Link href={localePath(locale, `/events/${event.slug}`)}>{event.title}</Link>
        </h3>
        <p>{event.summary}</p>
        <div className="event-meta">
          <span>
            <CalendarDays size={14} aria-hidden="true" />
            {event.date}
          </span>
          <span>
            <MapPin size={14} aria-hidden="true" />
            {event.location}
          </span>
        </div>
      </div>
    </article>
  );
}
