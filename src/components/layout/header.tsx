"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/content/site";
import { Brand } from "./brand";
import { LanguageSwitcher } from "./language-switcher";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";
import styles from "./header.module.css";

const headerNavigation = navigation.filter((item) => item.key !== "join");

export function Header({ locale, copy }: { locale: Locale; copy: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className={styles.inner}>
        <Brand locale={locale} copy={copy} />
        <nav className={styles.desktopNav} aria-label={copy.a11y.mainNav}>
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className={
                pathname === localePath(locale, item.href) ||
                (item.href !== "/" && pathname.startsWith(localePath(locale, item.href)))
                  ? styles.active
                  : ""
              }
              aria-current={pathname === localePath(locale, item.href) ? "page" : undefined}
            >
              {copy.nav[item.key]}
            </Link>
          ))}
        </nav>
        <Link
          href={localePath(locale, "/contact")}
          className={`button button-primary ${styles.contact}`}
        >
          {copy.nav.contact}
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <LanguageSwitcher
          locale={locale}
          label={copy.a11y.language}
          onChange={() => setOpen(false)}
        />
        <button
          ref={toggleRef}
          className={styles.menuToggle}
          aria-label={open ? copy.a11y.closeMenu : copy.a11y.openMenu}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav id="mobile-navigation" className={styles.mobileNav} aria-label={copy.a11y.mobileNav}>
            {[...headerNavigation, { href: "/contact", key: "contact" as const }].map((item) => (
              <Link
                href={localePath(locale, item.href)}
                key={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === localePath(locale, item.href) ? "page" : undefined}
              >
                {copy.nav[item.key]}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
