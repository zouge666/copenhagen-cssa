import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav className="breadcrumbs" aria-label="面包屑">
          <Link href="/">首页</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span>{title}</span>
        </nav>
        <p className="eyebrow">
          <span />
          {label}
        </p>
        <h1>{title}</h1>
        <p className="intro-description">{description}</p>
        <span className="intro-wordmark" aria-hidden="true">
          CPH.
        </span>
      </div>
    </section>
  );
}
