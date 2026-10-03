"use client";

import { useState } from "react";
import { events } from "@/content/events";
import type { EventStatus } from "@/types/content";
import { EventCard } from "./event-card";

export function EventExplorer({ showAll = false }: { showAll?: boolean }) {
  const [filter, setFilter] = useState<EventStatus | "all">(showAll ? "all" : "upcoming");
  const tabs: { value: EventStatus | "all"; label: string }[] = [
    ...(showAll ? [{ value: "all" as const, label: "全部活动" }] : []),
    { value: "upcoming", label: "近期活动" },
    { value: "past", label: "往期回顾" },
  ];
  const filtered = events.filter((event) => filter === "all" || event.status === filter);
  return (
    <div>
      <div className="event-toolbar">
        <div className="event-tabs" role="group" aria-label="活动筛选">
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
        <span className="event-toolbar-note">每一次相聚，都是新的连接</span>
      </div>
      <div className="event-grid" aria-live="polite">
        {filtered.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  );
}
