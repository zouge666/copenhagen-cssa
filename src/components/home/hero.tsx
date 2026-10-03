"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function Hero({ locale, copy }: { locale: Locale; copy: Dictionary["home"] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      if (preference.matches) videoRef.current?.pause();
      else videoRef.current?.play().catch(() => {});
    };
    applyPreference();
    preference.addEventListener("change", applyPreference);
    return () => preference.removeEventListener("change", applyPreference);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Image
        src={site.hero.poster}
        alt={copy.heroImage}
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={site.hero.poster}
        className={`hero-video ${failed ? "is-hidden" : ""}`}
        aria-hidden="true"
        onError={() => setFailed(true)}
      >
        <source src={site.hero.video} type="video/mp4" onError={() => setFailed(true)} />
      </video>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="hero-kicker">
          <span />
          {site.abbreviation}
        </p>
        <h1 id="hero-heading">
          {copy.headline[0]}
          <br />
          {copy.headline[1]}
        </h1>
        <p className="hero-subtitle">{copy.subtitle}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href={localePath(locale, "/about")}>
            {copy.heroAbout}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link className="button button-glass" href={localePath(locale, "/events")}>
            {copy.heroEvents}
          </Link>
        </div>
        <div className="hero-bottom">
          <a href="#welcome" className="hero-scroll">
            <ArrowDown size={16} aria-hidden="true" />
            {copy.scroll}
          </a>
        </div>
      </div>
    </section>
  );
}
