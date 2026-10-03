import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/content/site";
import { locales, htmlLanguages } from "@/i18n/config";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import "../globals.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  return {
    title: {
      default: `${t.site.shortName} | ${site.abbreviation}`,
      template: `%s | ${t.site.shortName}`,
    },
    description: t.site.description,
    applicationName: t.site.shortName,
    robots: { index: false, follow: false },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  return (
    <html lang={htmlLanguages[locale]} data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          {t.a11y.skip}
        </a>
        <Header locale={locale} copy={t} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} copy={t} />
      </body>
    </html>
  );
}
