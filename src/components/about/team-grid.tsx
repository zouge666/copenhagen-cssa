import Image from "next/image";
import { UserRound } from "lucide-react";
import { team } from "@/content/team";

export function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((member, index) => (
        <article className="team-card" key={member.id}>
          <div className="team-photo">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name ?? "学联成员"}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
              />
            ) : (
              <>
                <span className="team-index">0{index + 1}</span>
                <UserRound size={46} strokeWidth={1} aria-hidden="true" />
                <span>成员照片待补充</span>
              </>
            )}
          </div>
          <p className="team-role">{member.role}</p>
          <h3>{member.name ?? "姓名待补充"}</h3>
          <p className="team-university">{member.university ?? "学校 / 专业待补充"}</p>
        </article>
      ))}
    </div>
  );
}
