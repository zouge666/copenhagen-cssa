import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { PageIntro } from "@/components/ui/page-intro";
import { guideChapters } from "@/content/guide";

export const metadata: Metadata = { title: "新生指南" };

export default function GuidePage() {
  return (
    <>
      <PageIntro
        label="A NEW CHAPTER"
        title="新生指南"
        description="从准备出发，到安顿下来，陪你开启哥本哈根生活。"
      />
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
            指南内容正在整理，
            <br />
            各章节将陆续补充。
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
    </>
  );
}
