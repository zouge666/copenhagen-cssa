import { PageIntro } from "@/components/ui/page-intro";
import { EventExplorer } from "@/components/events/event-explorer";
import { PastHighlights } from "@/components/events/past-highlights";
import { SectionHeading } from "@/components/ui/section-heading";
import { getEvents } from "@/content/events";
import { getDictionary, getPageLocale } from "@/i18n/dictionaries";
import { AssociationUpdates } from "@/components/events/association-updates";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const t = await getDictionary(await getPageLocale(params));
  return { title: t.nav.events };
}
export default async function EventsPage({ params }: Props) {
  const locale = await getPageLocale(params);
  const t = await getDictionary(locale);
  return (
    <>
      <PageIntro
        locale={locale}
        copy={t}
        label={t.events.label}
        title={t.events.title}
        description={t.events.description}
      />
      <AssociationUpdates locale={locale} copy={t.updates} />
      <section className="section container activity-records">
        <SectionHeading
          label={t.home.eventsLabel}
          title={t.home.eventsTitle}
          description={t.home.eventsDescription}
        />
        <EventExplorer locale={locale} events={getEvents(locale)} copy={t.events} showAll />
      </section>
      <PastHighlights copy={t.gallery} />
    </>
  );
}
