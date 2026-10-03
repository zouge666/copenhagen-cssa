import type { Metadata } from "next";
import Link from "next/link";
import { Plus, ArrowUpRight, BookOpen, HeartHandshake } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { guideChapters, handbook } from "@/content/guide";
import { CommunityGrid } from "@/components/contact/community-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "新生指南" };

export default function GuidePage() {
  return (
    <>
      <PageIntro
        label="A NEW CHAPTER"
        title="新生指南"
        description="从准备出发，到安顿下来，陪你开启哥本哈根生活。"
      />
      <section className="container handbook-section">
        <div className="handbook-card">
          <div className="handbook-icon">
            <BookOpen size={40} strokeWidth={1.1} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">THE COPENHAGEN HANDBOOK</p>
            <h2>{handbook.title}</h2>
            <span className="handbook-version">{handbook.version}</span>
            <p>{handbook.description}</p>
          </div>
          <a href={handbook.url} target="_blank" rel="noreferrer" className="button button-primary">
            在线阅读完整手册
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="container section guide-layout">
        <aside className="guide-nav">
          <p className="eyebrow">IN THIS GUIDE</p>
          {guideChapters.map((chapter) => (
            <a href={`#${chapter.id}`} key={chapter.id}>
              <span>{chapter.number}</span>
              {chapter.title}
            </a>
          ))}
          <p className="guide-note">
            下方为手册章节导览，
            <br />
            完整内容请阅读原文。
          </p>
        </aside>
        <div className="guide-chapters">
          {guideChapters.map((chapter) => (
            <section id={chapter.id} key={chapter.id}>
              <p className="eyebrow">
                {chapter.number} / {chapter.subtitle}
              </p>
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
            label="FIND YOUR PEOPLE"
            title="来之前，先认识彼此"
            description="联系群管理员，加入哥本哈根新生社群。"
          />
          <CommunityGrid />
        </div>
      </section>
      <section className="container section">
        <div className="handbook-contribution">
          <HeartHandshake size={34} strokeWidth={1.2} aria-hidden="true" />
          <div>
            <p className="eyebrow">BUILD THE HANDBOOK TOGETHER</p>
            <h2>把你的经验，留给下一个新同学。</h2>
            <p>
              欢迎分享你在丹麦生活、工作与学习的宝贵经验。在学联公众号菜单栏进入「
              {handbook.contributionPath}」，参与生存手册共建企划。
            </p>
            <p>如有手册修改建议，欢迎联系我们，协助修正与勘误。</p>
            <Link href="/contact" className="text-link">
              查看联系渠道
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
