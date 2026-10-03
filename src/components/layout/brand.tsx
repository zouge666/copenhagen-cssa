import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function Brand({
  locale,
  copy,
  light = false,
}: {
  locale: Locale;
  copy: Dictionary;
  light?: boolean;
}) {
  return (
    <Link
      href={localePath(locale)}
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label={`${copy.site.shortName} · ${copy.a11y.homeLink}`}
    >
      <Image className="brand-logo" src={site.logo} alt={copy.a11y.logo} width={62} height={62} />
      <span className="brand-copy">
        <strong>{copy.site.shortName}</strong>
        <span className="brand-full-name">{copy.site.fullName}</span>
      </span>
    </Link>
  );
}
