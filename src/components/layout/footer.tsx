import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/content/site";
import { Brand } from "./brand";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function Footer({ locale, copy }: { locale: Locale; copy: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand locale={locale} copy={copy} light />
            <p>{copy.footer.tagline}</p>
            <span className="footer-location">KØBENHAVN, DENMARK</span>
          </div>
          <div>
            <p className="footer-label">{copy.footer.explore}</p>
            <nav aria-label={copy.a11y.footerNav}>
              {navigation.slice(1).map((item) => (
                <Link key={item.href} href={localePath(locale, item.href)}>
                  {copy.nav[item.key]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-contact">
            <p className="footer-label">{copy.footer.stay}</p>
            <p>{copy.footer.invitation}</p>
            <Link href={localePath(locale, "/contact")} className="text-link">
              {copy.nav.contact}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.abbreviation}
          </span>
          <span>{copy.site.fullName}</span>
          <a href={site.hero.sourceUrl} target="_blank" rel="noreferrer">
            {copy.footer.credit}：{site.hero.credit}
          </a>
        </div>
      </div>
    </footer>
  );
}
