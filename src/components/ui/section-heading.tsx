import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  label,
  title,
  description,
  link,
}: {
  label: string;
  title: string;
  description?: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {label}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {link && (
        <Link className="text-link" href={link.href}>
          {link.label}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
