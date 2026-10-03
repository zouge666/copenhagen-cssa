import Image from "next/image";
import { ArrowUpRight, MessageCircle, Handshake } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { CommunityGrid } from "@/components/contact/community-grid";
import { WechatContact } from "@/components/contact/wechat-contact";
import { cooperation, social } from "@/content/contact";
import { site } from "@/content/site";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";

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
      <section className="container section contact-layout">
        <div>
          <p className="eyebrow">{t.contact.hello}</p>
          <h2>
            {t.contact.greeting[0]}
            <br />
            {t.contact.greeting[1]}
          </h2>
          <p className="contact-intro">{t.contact.introduction}</p>
          <p className="contact-full-name">{t.site.fullName}</p>
        </div>
        <article className="cooperation-card">
          <Handshake size={30} strokeWidth={1.25} aria-hidden="true" />
          <p className="eyebrow">{t.contact.cooperationLabel}</p>
          <h3>{t.contact.cooperationTitle}</h3>
          <p>{t.contact.cooperationDescription}</p>
          <span className="contact-person">{t.contact.role}</span>
          <WechatContact value={cooperation.wechat} copy={t.common} />
          <p className="contact-note">{t.contact.note}</p>
          <div className="email-contact">
            <span>{t.contact.email}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a className="text-link" href={`mailto:${site.email}`}>
              {t.contact.writeEmail}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>
      <section className="container section" id="official-accounts">
        <SectionHeading label={t.contact.channelsLabel} title={t.contact.channelsTitle} />
        <div className="social-channel-grid">
          <article className="official-wechat-card">
            <MessageCircle size={29} strokeWidth={1.3} aria-hidden="true" />
            <h3>{t.contact.wechat}</h3>
            <p>{t.contact.wechatDescription}</p>
            <a
              href={site.wechatQr}
              target="_blank"
              rel="noreferrer"
              aria-label={t.contact.originalQr}
              className="wechat-qr"
            >
              <Image
                src={site.wechatQr}
                alt={t.contact.wechatQrAlt}
                width={720}
                height={720}
                sizes="220px"
              />
            </a>
            <WechatContact value={site.wechatName} label={t.contact.accountName} copy={t.common} />
          </article>
          <article className="xiaohongshu-card">
            <h3>{t.contact.xiaohongshu}</h3>
            <a
              href={social.xiaohongshuImage}
              target="_blank"
              rel="noreferrer"
              aria-label={t.contact.originalQr}
            >
              <Image
                src={social.xiaohongshuImage}
                alt={t.contact.qrAlt}
                width={1116}
                height={389}
                sizes="(max-width: 700px) 100vw, 800px"
              />
            </a>
            <a
              className="text-link"
              href={social.xiaohongshuImage}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.originalQr}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
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
