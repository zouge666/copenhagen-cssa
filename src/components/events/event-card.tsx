import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { AssociationEvent } from "@/types/content";

export function EventCard({ event }: { event: AssociationEvent }) {
  return (
    <article className="event-card">
      <Link
        href={`/events/${event.slug}`}
        className="event-cover"
        aria-label={`查看${event.title}`}
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
            <span className="event-image-label">活动图片待补充</span>
          </div>
        )}
        <span className="event-status">
          {event.status === "upcoming" ? "近期活动" : "往期回顾"}
        </span>
        <span className="event-cover-icon">
          <ArrowUpRight size={21} aria-hidden="true" />
        </span>
      </Link>
      <div className="event-card-content">
        <p className="event-category">{event.category}</p>
        <h3>
          <Link href={`/events/${event.slug}`}>{event.title}</Link>
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
