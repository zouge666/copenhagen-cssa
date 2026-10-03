import Link from "next/link";
import { ArrowUpRight, UsersRound } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { recruitment, getRecruitment } from "@/content/join";
import { formatPublicationDate } from "@/lib/events";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const t = await getDictionary(await getPageLocale(params));
  return { title: t.nav.join };
}
export default async function JoinPage({ params }: Props) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  const details = getRecruitment(locale);
  return (
    <>
      <PageIntro
        locale={locale}
        copy={t}
        label={t.join.label}
        title={t.join.title}
        description={t.join.description}
      />
      <section className="container section join-layout">
        <div>
          <p className="eyebrow">{t.join.teamLabel}</p>
          <h2>
            {t.join.heading[0]}
            <br />
            {t.join.heading[1]}
          </h2>
          <p className="join-introduction">{t.join.introduction}</p>
          <Link href={localePath(locale, "/about")} className="text-link">
            {t.join.about}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <article className="recruitment-card">
          <UsersRound size={36} strokeWidth={1.25} aria-hidden="true" />
          <p className="eyebrow">{t.join.recruitmentLabel}</p>
          <h3>{t.join.recruitmentTitle}</h3>
          <p>{t.join.recruitmentDescription}</p>
          <div className="recruitment-deadline">
            <span>{t.join.deadline}</span>
            <time dateTime={`${recruitment.deadlineDate}T${recruitment.deadlineTime}`}>
              {formatPublicationDate(recruitment.deadlineDate, locale)} · {recruitment.deadlineTime}
            </time>
          </div>
          <a
            className="button button-light"
            href={recruitment.applicationUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.join.apply}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="recruitment-source"
            href={recruitment.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.join.read}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <span className="source-label">
            {t.join.published} {formatPublicationDate(recruitment.publishedAt, locale)}
          </span>
          {locale !== "zh" && <p className="original-language-note">{t.join.originalLanguage}</p>}
        </article>
      </section>
      <section className="container recruitment-details">
        <div className="recruitment-information">
          <div>
            <h2>{t.join.eligibilityTitle}</h2>
            <ul>
              {details.eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.join.processTitle}</h2>
            <ol className="application-steps">
              {details.process.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="recruitment-departments">
          <h2>{t.join.departmentsTitle}</h2>
          <p className="department-note">{details.departmentNote}</p>
          <div className="department-grid">
            {details.departments.map((department) => (
              <article key={department.name}>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
                <h4>{t.join.requirements}</h4>
                <ul>
                  {department.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="join-follow-up">
        <div className="container">
          <div>
            <p className="eyebrow">{t.join.followLabel}</p>
            <h2>{t.join.followTitle}</h2>
            <p>{t.join.followDescription}</p>
          </div>
          <Link href={localePath(locale, "/contact")} className="button button-outline">
            {t.common.contactChannels}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
