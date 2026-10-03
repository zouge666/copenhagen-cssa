import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";
import styles from "./guide-banner.module.css";

export function GuideBanner({ locale, copy }: { locale: Locale; copy: Dictionary["guide"] }) {
  return (
    <section className={styles.banner}>
      <div>
        <p className={styles.label}>{copy.bannerLabel}</p>
        <h2 className={styles.title}>
          {copy.bannerHeadline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.description}>{copy.bannerDescription}</p>
        <div className={styles.action}>
          <Link href={localePath(locale, "/guide")} className="button button-light">
            {copy.bannerLink}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.chapter}>
        <BookOpen strokeWidth={0.9} aria-hidden="true" />
        <strong>
          {copy.bannerChapter.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </strong>
        <p>{copy.bannerChapterCaption}</p>
      </div>
    </section>
  );
}
