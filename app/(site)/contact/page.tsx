import type { Metadata } from "next";
import ContactLead from "@/components/v2/sections/ContactLead";
import CTA from "@/components/v2/sections/CTA";
import PageHero from "@/components/v2/sections/PageHero";
import { CONTACT } from "@/lib/constants";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";
import { getMetaForRoute } from "@/data/seoCutover";

const meta = getMetaForRoute("/contact")!;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
};

/** Maps query uses published city only — no invented street address. */
const MAP_EMBED =
  "https://maps.google.com/maps?q=Richmond%2C%20TX&z=11&output=embed";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Start your project"
        title="Reach out to our contractors"
        lead="Questions or ready to begin? Our friendly team is here to help. Call, email, or send a message and we will follow up promptly."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex min-h-11 items-center rounded-full border border-border/80 bg-card px-4 py-2.5 font-v2-sans text-sm font-semibold text-primary shadow-sm transition-colors hover:border-primary/40"
          >
            Office: {CONTACT.phone}
          </a>
          <a
            href={CONTACT.phoneMobileHref}
            className="inline-flex min-h-11 items-center rounded-full border border-border/80 bg-card px-4 py-2.5 font-v2-sans text-sm font-semibold text-primary shadow-sm transition-colors hover:border-primary/40"
          >
            Mobile: {CONTACT.phoneMobile}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex min-h-11 items-center rounded-full border border-border/80 bg-card px-4 py-2.5 font-v2-sans text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary/40"
          >
            {CONTACT.email}
          </a>
        </div>
        <ul className="mt-6 space-y-1 font-v2-sans text-sm text-muted-foreground">
          <li>{CONTACT.hours.weekday}</li>
          <li>{CONTACT.hours.saturday}</li>
          <li>{CONTACT.hours.sunday}</li>
        </ul>
      </PageHero>
      <ContactLead />

      <section className="section-pad border-t border-border/60 bg-secondary/30">
        <div className="section-shell">
          <div className="mb-6 max-w-xl">
            <p className={cn(t.eyebrow, "mb-2")}>Service area</p>
            <h2 className={cn(t.h3, "text-foreground")}>
              Based in {CONTACT.address}
            </h2>
            <p className={cn(t.bodySm, "mt-2")}>
              Fort Bend County and nearby west Houston communities. Map shows the
              city area only — call us for project details.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
            <iframe
              title={`Map of ${CONTACT.address}`}
              src={MAP_EMBED}
              className="h-[280px] w-full border-0 sm:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 font-v2-sans text-xs text-muted-foreground">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Richmond%2C%20TX"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              Open Richmond, TX in Google Maps
            </a>
          </p>
        </div>
      </section>

      <CTA
        title="Prefer to call?"
        description="Speak with our team directly. Office or mobile during business hours. We are looking forward to working with you."
      />
    </div>
  );
}
