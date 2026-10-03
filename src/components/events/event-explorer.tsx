"use client";

import { useState } from "react";
import type { AssociationEvent, EventStatus } from "@/types/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";
import { EventCard } from "./event-card";
import { sortEventsByPublicationDate } from "@/lib/events";

export function EventExplorer({
  locale,
  events,
  copy,
  showAll = false,
}: {
  locale: Locale;
  events: AssociationEvent[];
  copy: Dictionary["events"];
  showAll?: boolean;
}) {
  const [filter, setFilter] = useState<EventStatus | "all">(showAll ? "all" : "upcoming");
  const tabs: { value: EventStatus | "all"; label: string }[] = [
    ...(showAll ? [{ value: "all" as const, label: copy.all }] : []),
    { value: "upcoming", label: copy.upcoming },
    ...(events.some((event) => event.status === "past")
      ? [{ value: "past" as const, label: copy.past }]
      : []),
  ];
  const filtered = sortEventsByPublicationDate(events).filter(
    (event) => filter === "all" || event.status === filter,
  );
  return (
    <div>
      {tabs.length > 1 && (
        <div className="event-toolbar">
          <div className="event-tabs" role="group" aria-label={copy.filter}>
            {tabs.map((tab) => (
              <button
                key={tab.value}
                aria-pressed={filter === tab.value}
                className={filter === tab.value ? "selected" : ""}
                onClick={() => setFilter(tab.value)}
              >
                {tab.label}
                <span>
                  {tab.value === "all"
                    ? events.length
                    : events.filter((event) => event.status === tab.value).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="event-grid" aria-live="polite">
        {filtered.map((event) => (
          <EventCard key={event.slug} event={event} locale={locale} copy={copy} />
        ))}
        {filtered.length === 0 && <p className="events-empty">{copy.empty}</p>}
      </div>
    </div>
  );
}
