import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function GuideBanner({ locale, copy }: { locale: Locale; copy: Dictionary["guide"] }) {
  return (
    <section className="guide-banner">
      <BookOpen size={44} strokeWidth={1.4} aria-hidden="true" />
      <div>
        <h2>{copy.bannerTitle}</h2>
        <p>{copy.bannerDescription}</p>
      </div>
      <Link href={localePath(locale, "/guide")} className="button button-light">
        {copy.bannerLink}
        <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </section>
  );
}
