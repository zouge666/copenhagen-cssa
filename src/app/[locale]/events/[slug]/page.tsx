import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { events, getEvents } from "@/content/events";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { formatPublicationDate } from "@/lib/events";

export const dynamicParams = false;
export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}
type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  const event = getEvents(locale).find((item) => item.slug === slug);
  return { title: event?.title ?? t.events.missing };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  const event = getEvents(locale).find((item) => item.slug === slug);
  if (!event) notFound();
  return (
    <article className="container section event-detail">
      <Link href={localePath(locale, "/events")} className="text-link back-link">
        <ArrowLeft size={16} aria-hidden="true" />
        {t.events.back}
      </Link>
      <p className="eyebrow">
        <span />
        {event.status === "upcoming" ? t.events.upcoming : t.events.past}
      </p>
      <h1>{event.title}</h1>
      <p className="detail-summary">{event.summary}</p>
      {event.publishedAt && (
        <p className="publication-date">
          {t.events.published}{" "}
          <time dateTime={event.publishedAt}>
            {formatPublicationDate(event.publishedAt, locale)}
          </time>
        </p>
      )}
      <div className="detail-cover">
        {event.image ? (
          <Image src={event.image} alt={event.title} fill sizes="(max-width: 900px) 100vw, 900px" />
        ) : (
          <div className={`event-placeholder tone-${Number(event.number) % 3}`}>
            <span className="event-placeholder-label">COPENHAGEN CSSA / EVENTS</span>
            <span className="event-number">{event.number}</span>
            <span className="event-image-label">{t.events.image}</span>
          </div>
        )}
      </div>
      <div className="detail-body">
        <div>
          <h2>{t.events.introduction}</h2>
          {event.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {event.schedule && (
            <section className="event-schedule">
              <h2>{t.events.schedule}</h2>
              <dl>
                {event.schedule.map((item) => (
                  <div key={item.time}>
                    <dt>{item.time}</dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {event.gallery && (
            <section className="article-gallery">
              <h2>{t.events.gallery}</h2>
              {event.galleryIsChinese && <p>{t.events.originalChinese}</p>}
              {event.gallery.map((photo, index) => (
                <a
                  href={photo.src}
                  key={photo.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t.common.originalImage} ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={`${event.title} · ${t.events.gallery} ${index + 1}`}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 900px) 100vw, 700px"
                  />
                </a>
              ))}
            </section>
          )}
          {event.sourceUrl && (
            <a href={event.sourceUrl} className="text-link" target="_blank" rel="noreferrer">
              {t.events.original}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        <aside className="event-info">
          <h3>{t.events.information}</h3>
          <p>
            <CalendarDays size={17} aria-hidden="true" />
            {event.date}
          </p>
          <p>
            <MapPin size={17} aria-hidden="true" />
            {event.location}
          </p>
          {event.status === "past" && (
            <span className="registration-pending">{t.events.ended}</span>
          )}
          {event.status === "upcoming" &&
            (event.registrationUrl ? (
              <a
                className="button button-primary"
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.events.registration}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <span className="registration-pending">{t.events.pendingRegistration}</span>
            ))}
        </aside>
      </div>
    </article>
  );
}
