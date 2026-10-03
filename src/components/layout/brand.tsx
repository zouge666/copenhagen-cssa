import Link from "next/link";
import { site } from "@/content/site";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label={`${site.shortName} · 返回首页`}
    >
      <span className="brand-mark" aria-hidden="true">
        <span>CPH</span>
        <small>CSSA</small>
      </span>
      <span className="brand-copy">
        <strong>{site.shortName}</strong>
        <span>COPENHAGEN CSSA</span>
      </span>
    </Link>
  );
}
