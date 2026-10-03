import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, ArrowUpRight, ScanLine } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "联系学联" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="LET’S CONNECT"
        title="联系学联"
        description="有问题、想加入，或希望合作？期待听见你的声音。"
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
          <p className="contact-intro">
            无论你刚刚来到哥本哈根，还是已经在这里生活，欢迎与我们联系。
          </p>
          <div className="contact-method">
            <Mail size={23} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <h3>学联邮箱</h3>
              {site.email ? (
                <a href={`mailto:${site.email}`}>
                  {site.email}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : (
                <p>邮箱地址待补充</p>
              )}
            </div>
          </div>
          <div className="contact-method">
            <MessageCircle size={23} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <h3>微信公众号</h3>
              <p>{site.wechatName ?? "公众号名称待补充"}</p>
            </div>
          </div>
        </div>
        <div className="wechat-card">
          <span className="eyebrow">KEEP IN TOUCH</span>
          <h3>在微信上，找到我们</h3>
          <div className="qr-placeholder">
            {site.wechatQr ? (
              <Image src={site.wechatQr} alt="学联微信公众号二维码" fill sizes="220px" />
            ) : (
              <>
                <ScanLine size={56} strokeWidth={1} aria-hidden="true" />
                <span>公众号二维码待补充</span>
              </>
            )}
          </div>
          <p>关注学联，获取活动与生活资讯。</p>
        </div>
      </section>
    </>
  );
}
