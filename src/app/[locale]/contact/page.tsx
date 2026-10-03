import Image from "next/image";
import { ArrowUpRight, Handshake } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { CommunityGrid } from "@/components/contact/community-grid";
import { WechatContact } from "@/components/contact/wechat-contact";
import { cooperation, social } from "@/content/contact";
import { site } from "@/content/site";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import styles from "./contact.module.css";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const t = await getDictionary(await getPageLocale(params));
  return { title: t.nav.contact };
}
export default async function ContactPage({ params }: Props) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  return (
    <>
      <PageIntro
        locale={locale}
        copy={t}
        label={t.contact.label}
        title={t.contact.title}
        description={t.contact.description}
      />
      <section className={`container section ${styles.overview}`}>
        <article className={styles.contactCard}>
          <div className={styles.introduction}>
            <div>
              <p className="eyebrow">{t.contact.hello}</p>
              <h2>{t.contact.greeting.join(locale === "zh" ? "" : " ")}</h2>
              <p>{t.contact.introduction}</p>
            </div>
            <Handshake size={30} strokeWidth={1.25} aria-hidden="true" />
          </div>
          <p className={styles.fullName}>{t.site.fullName}</p>
          <div className={styles.cooperation}>
            <h3>{t.contact.cooperationTitle}</h3>
            <p>{t.contact.cooperationDescription}</p>
          </div>
          <div className={styles.channels}>
            <div>
              <span className={styles.channelLabel}>{t.contact.role}</span>
              <WechatContact value={cooperation.wechat} copy={t.common} />
              <p className={styles.note}>{t.contact.note}</p>
            </div>
            <div>
              <span className={styles.channelLabel}>{t.contact.email}</span>
              <a className={styles.email} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <div className={styles.emailAction}>
                <a className="text-link" href={`mailto:${site.email}`}>
                  {t.contact.writeEmail}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={`container section ${styles.accounts}`} id="official-accounts">
        <SectionHeading label={t.contact.channelsLabel} title={t.contact.channelsTitle} />
        <div className={styles.socialGrid}>
          <article className={styles.socialCard}>
            <div className={styles.socialHeading}>
              <h3>{t.contact.wechat}</h3>
              <p>{t.contact.wechatDescription}</p>
            </div>
            <a
              href={site.wechatQr}
              target="_blank"
              rel="noreferrer"
              aria-label={t.contact.originalQr}
              className={styles.code}
            >
              <Image
                src={site.wechatQr}
                alt={t.contact.wechatQrAlt}
                width={720}
                height={720}
                sizes="190px"
              />
            </a>
            <div className={styles.channelFooter}>
              <WechatContact
                value={site.wechatName}
                label={t.contact.accountName}
                copy={t.common}
              />
            </div>
          </article>
          <article className={styles.socialCard}>
            <div className={styles.socialHeading}>
              <h3>{t.contact.xiaohongshu}</h3>
              <p>{t.contact.xiaohongshuDescription}</p>
            </div>
            <a
              href={social.xiaohongshuImage}
              target="_blank"
              rel="noreferrer"
              aria-label={t.contact.originalQr}
              className={`${styles.code} ${styles.xiaohongshuCode}`}
            >
              <Image
                src={social.xiaohongshuImage}
                alt={t.contact.qrAlt}
                width={1116}
                height={389}
                sizes="850px"
              />
            </a>
            <div className={styles.channelFooter}>
              <a
                className="text-link"
                href={social.xiaohongshuImage}
                target="_blank"
                rel="noreferrer"
              >
                {t.contact.originalQr}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="community-section muted-section">
        <div className="container">
          <SectionHeading
            label={t.contact.communitiesLabel}
            title={t.contact.communitiesTitle}
            description={t.contact.communitiesDescription}
          />
          <CommunityGrid locale={locale} copy={t} showContactLink={false} />
        </div>
      </section>
    </>
  );
}
