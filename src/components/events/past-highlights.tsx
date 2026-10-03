import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { memories } from "@/content/memories";
import type { Dictionary } from "@/i18n/dictionaries/zh";
import { SectionHeading } from "@/components/ui/section-heading";

export function PastHighlights({
  copy,
  compact = false,
}: {
  copy: Dictionary["gallery"];
  compact?: boolean;
}) {
  const albums = compact ? memories.slice(0, 2) : memories;
  return (
    <section className="section container memories-section" id="highlights">
      <SectionHeading label={copy.label} title={copy.title} description={copy.description} />
      <div className={`memories-grid ${compact ? "memories-compact" : ""}`}>
        {albums.map((album, index) => (
          <article
            className={`memory-card ${album.id === "community" ? "memory-portrait" : ""}`}
            key={album.id}
          >
            <a
              href={album.image}
              target="_blank"
              rel="noreferrer"
              aria-label={`${copy.open}: ${copy.albums[index].title}`}
            >
              <Image
                src={album.image}
                alt={copy.albums[index].alt}
                width={album.width}
                height={album.height}
                sizes="(max-width: 760px) 100vw, 65vw"
              />
            </a>
            <div className="memory-caption">
              <h3>{copy.albums[index].title}</h3>
              <p>{copy.albums[index].description}</p>
              <a className="text-link" href={album.image} target="_blank" rel="noreferrer">
                {copy.open}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
