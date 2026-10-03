import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";
import { localePath } from "@/i18n/config";
import { updates } from "@/content/updates";
import { formatPublicationDate } from "@/lib/events";
import { SectionHeading } from "@/components/ui/section-heading";

export function AssociationUpdates({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["updates"];
}) {
  const sorted = [...updates].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <section className="container section association-updates" id="updates">
      <SectionHeading label={copy.label} title={copy.title} description={copy.description} />
      <div className="updates-grid">
        {sorted.map((update) => (
          <article key={update.id} className="update-card">
            {update.imageShape === "recruitment" ? (
              <Link
                href={localePath(locale, update.href)}
                className="update-image update-recruitment"
                aria-label={update.title[locale]}
              >
                <div className="recruitment-cover-copy">
                  <span>CSSA-COPENHAGEN · 2026</span>
                  <strong>{update.coverTitle?.[locale]}</strong>
                  <span>JOIN US!</span>
                </div>
                <Image
                  src={update.image}
                  alt=""
                  width={500}
                  height={629}
                  className="recruitment-cover-art"
                  sizes="(max-width: 760px) 45vw, 25vw"
                />
              </Link>
            ) : (
              <a
                className={`update-image update-${update.imageShape}`}
                href={update.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`${update.title[locale]} · ${copy.poster}`}
              >
                <Image
                  src={update.image}
                  alt={update.title[locale]}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </a>
            )}
            <div className="update-content">
              <time dateTime={update.publishedAt}>
                {formatPublicationDate(update.publishedAt, locale)}
              </time>
              <h3>{update.title[locale]}</h3>
              <p>{update.summary[locale]}</p>
              {update.external ? (
                <a href={update.href} className="text-link" target="_blank" rel="noreferrer">
                  {copy.original}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : (
                <Link href={localePath(locale, update.href)} className="text-link">
                  {copy.read}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
