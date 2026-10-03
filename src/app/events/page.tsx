import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { EventExplorer } from "@/components/events/event-explorer";

export const metadata: Metadata = { title: "活动拾光" };

export default function EventsPage() {
  return (
    <>
      <PageIntro
        label="MOMENTS & CONNECTIONS"
        title="活动拾光"
        description="把学习之外的时光，留给相聚与探索。"
      />
      <section className="section container">
        <EventExplorer showAll />
      </section>
    </>
  );
}
