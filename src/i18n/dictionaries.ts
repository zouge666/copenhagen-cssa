import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";

const dictionaries = {
  zh: () => import("./dictionaries/zh").then((module) => module.zh),
  en: () => import("./dictionaries/en").then((module) => module.en),
  da: () => import("./dictionaries/da").then((module) => module.da),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export async function getPageLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
