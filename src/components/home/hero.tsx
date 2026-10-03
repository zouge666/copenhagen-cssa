"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
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

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Image
        src={site.hero.poster}
        alt="哥本哈根新港的彩色建筑与运河"
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
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      >
        <source src={site.hero.video} type="video/mp4" onError={() => setFailed(true)} />
      </video>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="hero-kicker">
          <span />
          COPENHAGEN CSSA
        </p>
        <h1 id="hero-heading">
          远在北欧，
          <br />
          近在<span>一起。</span>
        </h1>
        <p className="hero-subtitle">
          <span>在哥本哈根，遇见彼此，</span>
          <span>连接更大的世界。</span>
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/about">
            认识学联
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link className="button button-glass" href="/events">
            探索我们的活动
          </Link>
        </div>
        <div className="hero-bottom">
          <a href="#welcome" className="hero-scroll">
            <ArrowDown size={16} aria-hidden="true" />
            向下探索
          </a>
          <div className="hero-location">
            <span>{site.hero.location}</span>
            {!failed && (
              <button onClick={toggleVideo} aria-label={playing ? "暂停背景视频" : "播放背景视频"}>
                {playing ? <Pause size={14} /> : <Play size={14} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
