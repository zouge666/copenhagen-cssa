import Link from "next/link";
import { Plus, ArrowUpRight, BookOpen, HeartHandshake } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { getGuideChapters, handbook } from "@/content/guide";
import { CommunityGrid } from "@/components/contact/community-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const t = await getDictionary(await getPageLocale(params));
  return { title: t.nav.guide };
}
export default async function GuidePage({ params }: Props) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  const chapters = getGuideChapters(locale);
  return (
    <>
      <PageIntro
        locale={locale}
        copy={t}
        label={t.guide.label}
        title={t.guide.title}
        description={t.guide.description}
      />
      <section className="container handbook-section">
        <div className="handbook-card">
          <div className="handbook-icon">
            <BookOpen size={40} strokeWidth={1.1} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">{t.guide.handbookLabel}</p>
            <h2>{t.guide.handbookTitle}</h2>
            <span className="handbook-version">{t.guide.version}</span>
            <p>{t.guide.handbookDescription}</p>
            {locale !== "zh" && (
              <p className="original-language-note">{t.guide.originalLanguage}</p>
            )}
          </div>
          <a href={handbook.url} target="_blank" rel="noreferrer" className="button button-primary">
            {t.guide.read}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="container section guide-layout">
        <aside className="guide-nav">
          <p className="eyebrow">{t.guide.contents}</p>
          {chapters.map((chapter) => (
            <a href={`#${chapter.id}`} key={chapter.id}>
              <span>{chapter.number}</span>
              {chapter.title}
            </a>
          ))}
          <p className="guide-note">{t.guide.note}</p>
        </aside>
        <div className="guide-chapters">
          {chapters.map((chapter) => (
            <section id={chapter.id} key={chapter.id}>
              <p className="eyebrow">{chapter.number}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.description}</p>
              <div className="guide-entries">
                {chapter.entries.map((entry) => (
                  <details key={entry.title}>
                    <summary>
                      {entry.title}
                      <Plus size={18} aria-hidden="true" />
                    </summary>
                    <div>{entry.content}</div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className="community-section muted-section">
        <div className="container">
          <SectionHeading
            label={t.guide.communityLabel}
            title={t.guide.communityTitle}
            description={t.guide.communityDescription}
          />
          <CommunityGrid locale={locale} copy={t} />
        </div>
      </section>
      <section className="container section">
        <div className="handbook-contribution">
          <HeartHandshake size={34} strokeWidth={1.2} aria-hidden="true" />
          <div>
            <p className="eyebrow">{t.guide.contributeLabel}</p>
            <h2>{t.guide.contributeTitle}</h2>
            <p>{t.guide.contributeDescription}</p>
            <p>{t.guide.corrections}</p>
            <Link href={localePath(locale, "/contact")} className="text-link">
              {t.common.contactChannels}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
