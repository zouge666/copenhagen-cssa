import Link from "next/link";
import { ArrowUpRight, UsersRound, BookOpen, Sparkles, HeartHandshake } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { EventExplorer } from "@/components/events/event-explorer";
import { PastHighlights } from "@/components/events/past-highlights";
import { TeamGrid } from "@/components/about/team-grid";
import { GuideBanner } from "@/components/home/guide-banner";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";
import { getEvents } from "@/content/events";
import { AssociationUpdates } from "@/components/events/association-updates";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  const quickLinks = [
    { href: "/about", icon: UsersRound },
    { href: "/events#highlights", icon: Sparkles },
    { href: "/guide", icon: BookOpen },
  ];
  return (
    <>
      <Hero locale={locale} copy={t.home} />
      <div className="quick-links">
        <div className="container quick-links-inner">
          {quickLinks.map((item, index) => (
            <Link href={localePath(locale, item.href)} key={item.href}>
              <item.icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <strong>{t.home.quick[index].title}</strong>
                <span>{t.home.quick[index].subtitle}</span>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <section className="section welcome-section container" id="welcome">
        <div>
          <p className="eyebrow">{t.home.welcomeLabel}</p>
          <h2>
            {t.home.welcomeTitle[0]}
            <br />
            {t.home.welcomeTitle[1]}
          </h2>
        </div>
        <div className="welcome-copy">
          <p>{t.site.introduction}</p>
          <div className="welcome-values">
            {[HeartHandshake, BookOpen, Sparkles].map((Icon, index) => (
              <span key={t.home.values[index]}>
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                {t.home.values[index]}
              </span>
            ))}
          </div>
          <Link href={localePath(locale, "/about")} className="text-link">
            {t.home.aboutLink}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <AssociationUpdates locale={locale} copy={t.updates} />
      <section className="section events-section">
        <div className="container">
          <SectionHeading
            label={t.home.eventsLabel}
            title={t.home.eventsTitle}
            description={t.home.eventsDescription}
            link={{ href: localePath(locale, "/events"), label: t.home.allEvents }}
          />
          <EventExplorer locale={locale} events={getEvents(locale)} copy={t.events} showAll />
        </div>
      </section>
      <PastHighlights copy={t.gallery} compact />
      <section className="section container guide-section">
        <GuideBanner locale={locale} copy={t.guide} />
      </section>
      <section className="section container team-section">
        <SectionHeading
          label={t.home.teamLabel}
          title={t.home.teamTitle}
          description={t.home.teamDescription}
          link={{ href: localePath(locale, "/about#team"), label: t.home.teamLink }}
        />
        <TeamGrid copy={t.team} />
      </section>
      <section className="contact-strip">
        <div className="container">
          <div>
            <p className="eyebrow">{t.home.contactLabel}</p>
            <h2>{t.home.contactTitle}</h2>
          </div>
          <Link href={localePath(locale, "/contact")} className="button button-outline">
            {t.nav.contact}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
