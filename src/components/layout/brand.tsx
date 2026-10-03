import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label={`${site.shortName} · 返回首页`}
    >
      <Image className="brand-logo" src={site.logo} alt="哥本哈根学联徽标" width={62} height={62} />
      <span className="brand-copy">
        <strong>{site.shortName}</strong>
        <span>{site.abbreviation}</span>
      </span>
    </Link>
  );
}
