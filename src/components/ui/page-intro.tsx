import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function PageIntro({
  label,
  title,
  description,
  locale,
  copy,
}: {
  label: string;
  title: string;
  description: string;
  locale: Locale;
  copy: Dictionary;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav className="breadcrumbs" aria-label={copy.a11y.breadcrumbs}>
          <Link href={localePath(locale)}>{copy.nav.home}</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span>{title}</span>
        </nav>
        <p className="eyebrow">
          <span />
          {label}
        </p>
        <h1>{title}</h1>
        <p className="intro-description">{description}</p>
      </div>
    </section>
  );
}
