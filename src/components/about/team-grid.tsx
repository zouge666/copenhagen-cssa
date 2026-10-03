import Image from "next/image";
import { UserRound } from "lucide-react";
import { team } from "@/content/team";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function TeamGrid({ copy }: { copy: Dictionary["team"] }) {
  return (
    <div className="team-grid">
      {team.map((member) => (
        <article className="team-card" key={member.id}>
          <div className="team-photo">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name ?? copy.member}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
              />
            ) : (
              <>
                <UserRound size={46} strokeWidth={1} aria-hidden="true" />
                <span>{copy.photo}</span>
              </>
            )}
          </div>
          <p className="team-role">{member.role ?? copy.role}</p>
          <h3>{member.name ?? copy.name}</h3>
          <p className="team-university">{member.university ?? copy.university}</p>
        </article>
      ))}
    </div>
  );
}
