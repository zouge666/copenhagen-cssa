import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamGrid } from "@/components/about/team-grid";
import { departments } from "@/content/team";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import { getAssociationProfile } from "@/content/association";
import { site } from "@/content/site";
import { ArrowUpRight } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const t = await getDictionary(await getPageLocale(params));
  return { title: t.nav.about };
}
export default async function AboutPage({ params }: Props) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  return (
    <>
      <PageIntro
        locale={locale}
        copy={t}
        label={t.about.label}
        title={t.about.title}
        description={t.about.description}
      />
      <section className="section container about-story">
        <div>
          <p className="eyebrow">{t.about.storyLabel}</p>
          <h2>
            {t.about.storyTitle[0]}
            <br />
            {t.about.storyTitle[1]}
          </h2>
        </div>
        <div>
          <p className="large-copy">{t.site.introduction}</p>
          {getAssociationProfile(locale).map((paragraph) => (
            <p className="association-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <a className="text-link" href={site.sourceUrl} target="_blank" rel="noreferrer">
            {t.common.source}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="section muted-section" id="departments">
        <div className="container">
          <SectionHeading
            label={t.about.departmentsLabel}
            title={t.about.departmentsTitle}
            description={t.about.departmentsDescription}
          />
          <div className="department-grid">
            {departments.map((department) => (
              <article key={department.id}>
                <h3>{department.name[locale]}</h3>
                <p>{department.description[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container" id="team">
        <SectionHeading
          label={t.about.teamLabel}
          title={t.about.teamTitle}
          description={t.about.teamDescription}
        />
        <TeamGrid copy={t.team} />
      </section>
    </>
  );
}
