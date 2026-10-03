import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { events } from "@/content/events";

export const dynamicParams = false;
export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  return { title: event?.title ?? "活动不存在" };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();
  return (
    <article className="container section event-detail">
      <Link href="/events" className="text-link back-link">
        <ArrowLeft size={16} aria-hidden="true" />
        返回活动列表
      </Link>
      <p className="eyebrow">
        <span />
        {event.status === "upcoming" ? "UPCOMING EVENT" : "PAST MOMENTS"}
      </p>
      <h1>{event.title}</h1>
      <p className="detail-summary">{event.summary}</p>
      <div className="detail-cover">
        {event.image ? (
          <Image src={event.image} alt={event.title} fill sizes="(max-width: 900px) 100vw, 900px" />
        ) : (
          <div className={`event-placeholder tone-${Number(event.number) % 3}`}>
            <span className="event-placeholder-label">COPENHAGEN CSSA / EVENTS</span>
            <span className="event-number">{event.number}</span>
            <span className="event-image-label">活动图片待补充</span>
          </div>
        )}
      </div>
      <div className="detail-body">
        <div>
          <h2>活动介绍</h2>
          {event.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {event.sourceUrl && (
            <a href={event.sourceUrl} className="text-link" target="_blank" rel="noreferrer">
              阅读公众号原文
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        <aside className="event-info">
          <h3>活动信息</h3>
          <p>
            <CalendarDays size={17} aria-hidden="true" />
            {event.date}
          </p>
          <p>
            <MapPin size={17} aria-hidden="true" />
            {event.location}
          </p>
          {event.status === "upcoming" &&
            (event.registrationUrl ? (
              <a
                className="button button-primary"
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
              >
                报名参加
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <span className="registration-pending">报名信息待公布</span>
            ))}
        </aside>
      </div>
    </article>
  );
}
