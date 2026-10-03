import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, UsersRound } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { recruitment } from "@/content/join";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "加入我们" };

export default function JoinPage() {
  return (
    <>
      <PageIntro
        label="MAKE IT HAPPEN, TOGETHER"
        title="加入我们"
        description="把你的热情，变成这座城市里的一次相聚。"
      />
      <section className="container section join-layout">
        <div>
          <p className="eyebrow">
            <span />
            BECOME PART OF THE TEAM
          </p>
          <h2>
            从认识彼此，
            <br />
            到一起做点事情。
          </h2>
          <p className="join-introduction">
            在哥本哈根，学联因每一位伙伴的参与而更加丰富。欢迎关注招新信息，认识团队，找到属于你的参与方式。
          </p>
          <Link href="/about" className="text-link">
            了解学联与团队
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <article className="recruitment-card">
          <UsersRound size={36} strokeWidth={1.25} aria-hidden="true" />
          <p className="eyebrow">JOIN CSSA-COPENHAGEN</p>
          <h3>{recruitment.title}</h3>
          <p>{recruitment.description}</p>
          <a
            className="button button-light"
            href={recruitment.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            阅读完整招新公告
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <span className="source-label">学联微信公众号原文</span>
        </article>
      </section>
      <section className="join-follow-up">
        <div className="container">
          <div>
            <p className="eyebrow">KEEP IN TOUCH</p>
            <h2>更多消息，关注学联公众号。</h2>
            <p>在微信中搜索「{site.wechatName}」，与我们保持联系。</p>
          </div>
          <Link href="/contact" className="button button-outline">
            查看联系渠道
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
