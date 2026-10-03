import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamGrid } from "@/components/about/team-grid";
import { departments } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "关于学联" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="OUR COMMUNITY"
        title="关于学联"
        description="在异国的日常里，找到同行的伙伴。"
      />
      <section className="section container about-story">
        <div>
          <p className="eyebrow">
            <span />
            WHO WE ARE
          </p>
          <h2>
            连接彼此，
            <br />
            走得更远。
          </h2>
        </div>
        <div>
          <p className="large-copy">{site.introduction}</p>
          <div className="content-placeholder">
            <span>学联介绍</span>
            <p>成立时间、组织宗旨与学联历史待补充……</p>
          </div>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container">
          <SectionHeading
            label="HOW WE WORK"
            title="学联部门"
            description="共同协作，让每一份热情都有发挥的空间。"
          />
          <div className="department-grid">
            {departments.map((department) => (
              <article key={department.number}>
                <span>{department.number}</span>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container" id="team">
        <SectionHeading
          label="MEET THE TEAM"
          title="学联团队"
          description="认识在活动与日常中陪伴大家的伙伴。"
        />
        <TeamGrid />
      </section>
    </>
  );
}
