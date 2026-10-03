import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/content/site";
import { Brand } from "./brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand light />
            <p>连接你我，让异国成为熟悉的地方。</p>
            <span className="footer-location">KØBENHAVN, DENMARK</span>
          </div>
          <div>
            <p className="footer-label">探索学联</p>
            <nav aria-label="页脚导航">
              {navigation.slice(1).map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-contact">
            <p className="footer-label">保持联系</p>
            <p>欢迎同学、学者与合作伙伴联系学联。</p>
            <Link href="/contact" className="text-link">
              联系我们
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.abbreviation}
          </span>
          <span>{site.name}</span>
          <a href={site.hero.sourceUrl} target="_blank" rel="noreferrer">
            新港影像：{site.hero.credit}
          </a>
        </div>
      </div>
    </footer>
  );
}
