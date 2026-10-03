import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Handshake } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { CommunityGrid } from "@/components/contact/community-grid";
import { WechatContact } from "@/components/contact/wechat-contact";
import { cooperation, social } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "联系学联" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="LET’S CONNECT"
        title="联系学联"
        description="加入社群，关注学联，也与我们一起创造更多可能。"
      />
      <section className="container section contact-layout">
        <div>
          <p className="eyebrow">
            <span />
            SAY HELLO
          </p>
          <h2>
            很高兴，
            <br />
            与你相识。
          </h2>
          <p className="contact-intro">{site.name}，与你在哥本哈根保持连接。</p>
          <p className="contact-full-name">{site.englishName}</p>
        </div>
        <article className="cooperation-card">
          <Handshake size={30} strokeWidth={1.25} aria-hidden="true" />
          <p className="eyebrow">PARTNER WITH US</p>
          <h3>{cooperation.title}</h3>
          <p>{cooperation.description}</p>
          <span className="contact-person">{cooperation.contactRole}</span>
          <WechatContact value={cooperation.wechat} />
          <p className="contact-note">{cooperation.note}</p>
        </article>
      </section>
      <section className="community-section muted-section">
        <div className="container">
          <SectionHeading
            label="FIND YOUR COMMUNITY"
            title="先找到你的伙伴"
            description="联系群管理员，加入适合你的哥本哈根社群。"
          />
          <CommunityGrid showContactLink={false} />
        </div>
      </section>
      <section className="container section">
        <SectionHeading label="OUR CHANNELS" title="在这里，找到学联" />
        <div className="social-channel-grid">
          <article className="official-wechat-card">
            <MessageCircle size={29} strokeWidth={1.3} aria-hidden="true" />
            <p className="eyebrow">WECHAT</p>
            <h3>微信公众号</h3>
            <p>在微信中搜索公众号，关注活动与生活资讯。</p>
            <WechatContact value={site.wechatName} label="公众号名称" />
          </article>
          <article className="xiaohongshu-card">
            <div>
              <p className="eyebrow">XIAOHONGSHU</p>
              <h3>小红书</h3>
            </div>
            <a
              href={social.xiaohongshuImage}
              target="_blank"
              rel="noreferrer"
              aria-label="查看小红书二维码原图"
            >
              <Image
                src={social.xiaohongshuImage}
                alt="哥本哈根CSSA小红书二维码，扫码在小红书找到学联"
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
              查看二维码原图
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
