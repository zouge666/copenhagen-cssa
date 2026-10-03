import Link from "next/link";
import { ArrowUpRight, UsersRound, BookOpen, Sparkles, HeartHandshake } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { EventExplorer } from "@/components/events/event-explorer";
import { TeamGrid } from "@/components/about/team-grid";
import { GuideBanner } from "@/components/home/guide-banner";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="quick-links">
        <div className="container quick-links-inner">
          {[
            {
              href: "/about",
              number: "01",
              title: "认识学联",
              subtitle: "Meet our community",
              icon: UsersRound,
            },
            {
              href: "/events",
              number: "02",
              title: "活动与相聚",
              subtitle: "Moments that connect",
              icon: Sparkles,
            },
            {
              href: "/guide",
              number: "03",
              title: "留学新起点",
              subtitle: "Your Copenhagen guide",
              icon: BookOpen,
            },
          ].map((item) => (
            <Link href={item.href} key={item.href}>
              <item.icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <section className="section welcome-section container" id="welcome">
        <div>
          <p className="eyebrow">
            <span />
            HELLO, COPENHAGEN
          </p>
          <h2>
            一座城市，
            <br />
            一群<span className="accent-text">同行的人。</span>
          </h2>
          <p className="welcome-english">
            A place to connect.
            <br />A community to belong.
          </p>
        </div>
        <div className="welcome-copy">
          <p>{site.introduction}</p>
          <div className="welcome-values">
            <span>
              <HeartHandshake size={18} strokeWidth={1.5} aria-hidden="true" />
              互助与陪伴
            </span>
            <span>
              <BookOpen size={18} strokeWidth={1.5} aria-hidden="true" />
              交流与成长
            </span>
            <span>
              <Sparkles size={18} strokeWidth={1.5} aria-hidden="true" />
              相聚与探索
            </span>
          </div>
          <Link href="/about" className="text-link">
            了解我们的故事
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section events-section">
        <div className="container">
          <SectionHeading
            label="WHAT’S ON"
            title="相聚，让生活更精彩。"
            description="近期活动与往期拾光，每一段故事都从相遇开始。"
            link={{ href: "/events", label: "查看全部活动" }}
          />
          <EventExplorer />
        </div>
      </section>
      <section className="section container guide-section">
        <GuideBanner />
      </section>
      <section className="section container team-section">
        <SectionHeading
          label="THE PEOPLE BEHIND"
          title="认识你的学联伙伴"
          description="因为有人愿意付出，相聚才有了更多可能。"
          link={{ href: "/about#team", label: "关于学联团队" }}
        />
        <TeamGrid />
      </section>
      <section className="contact-strip">
        <div className="container">
          <div>
            <p className="eyebrow">LET’S STAY CONNECTED</p>
            <h2>你的下一段故事，从一次联系开始。</h2>
          </div>
          <Link href="/contact" className="button button-outline">
            与我们联系
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
