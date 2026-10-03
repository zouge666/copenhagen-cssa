import Link from "next/link";
import { locale as rootLocale } from "next/root-params";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";

export default async function NotFound() {
  const value = await rootLocale();
  const locale = isLocale(value) ? value : defaultLocale;
  const t = await getDictionary(locale);
  return (
    <section className="container not-found">
      <p className="eyebrow">404</p>
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.description}</p>
      <Link className="button button-primary" href={localePath(locale)}>
        {t.notFound.back}
      </Link>
    </section>
  );
}
