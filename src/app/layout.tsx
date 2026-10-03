import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.shortName} | Copenhagen CSSA`, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.shortName,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          跳转到正文
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
