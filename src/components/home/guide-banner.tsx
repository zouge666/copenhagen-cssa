import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function GuideBanner() {
  return (
    <section className="guide-banner">
      <div>
        <p className="eyebrow">NEW TO COPENHAGEN?</p>
        <h2>
          初来乍到？
          <br />
          从这里，开始你的新生活。
        </h2>
        <p>
          行前准备、安顿下来、学习与生活。
          <br />
          一份指南，陪你慢慢熟悉哥本哈根。
        </p>
        <Link href="/guide" className="button button-light">
          查看新生指南
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <div className="guide-banner-art" aria-hidden="true">
        <BookOpen size={110} strokeWidth={0.6} />
        <span>
          YOUR NEXT
          <br />
          <em>CHAPTER.</em>
        </span>
        <small>哥本哈根 · 新生指南</small>
      </div>
    </section>
  );
}
