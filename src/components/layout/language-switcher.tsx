"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { languageNames, localePath, locales, type Locale } from "@/i18n/config";
import styles from "./language-switcher.module.css";

const abbreviations: Record<Locale, string> = { zh: "CH", en: "EN", da: "DA" };

export function LanguageSwitcher({
  locale,
  label,
  onChange,
}: {
  locale: Locale;
  label: string;
  onChange?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus();
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  function chooseLanguage(nextLocale: Locale) {
    setOpen(false);
    triggerRef.current?.focus();
    if (nextLocale !== locale) {
      const path = `/${pathname.split("/").slice(2).join("/")}`;
      router.push(localePath(nextLocale, path) + window.location.search + window.location.hash);
      onChange?.();
    }
  }

  function handleMenuKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    const options = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [],
    );
    const index = options.indexOf(document.activeElement as HTMLButtonElement);
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % options.length
        : event.key === "ArrowUp"
          ? (index - 1 + options.length) % options.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? options.length - 1
              : null;
    if (next !== null) {
      event.preventDefault();
      options[next]?.focus();
    }
  }

  return (
    <div
      className={styles.root}
      ref={rootRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-label={`${label}: ${languageNames[locale]}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <Globe2 size={16} aria-hidden="true" />
        <span>{abbreviations[locale]}</span>
        <ChevronDown size={12} className={styles.chevron} aria-hidden="true" />
      </button>
      {open && (
        <div
          id={menuId}
          ref={menuRef}
          role="menu"
          aria-label={label}
          className={styles.menu}
          onKeyDown={handleMenuKeys}
        >
          {locales.map((language) => (
            <button
              key={language}
              type="button"
              role="menuitemradio"
              aria-checked={language === locale}
              tabIndex={-1}
              lang={language}
              className={styles.option}
              onClick={() => chooseLanguage(language)}
            >
              <span>{languageNames[language]}</span>
              {language === locale && <Check size={15} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
