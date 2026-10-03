export const locales = ["zh", "en", "da"] as const;
export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;
export const defaultLocale: Locale = "zh";
export const languageNames: Record<Locale, string> = { zh: "中文", en: "English", da: "Dansk" };
export const htmlLanguages: Record<Locale, string> = { zh: "zh-CN", en: "en", da: "da" };

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localePath(locale: Locale, path = "/") {
  return `/${locale}${path === "/" ? "" : path}`;
}
