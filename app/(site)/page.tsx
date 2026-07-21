import type { Metadata } from "next";
import Hero from "@/components/v2/sections/Hero";
import BeforeAfterSection from "@/components/v2/sections/BeforeAfterSection";
import ServicesGrid from "@/components/v2/sections/ServicesGrid";
import CTA from "@/components/v2/sections/CTA";
import Testimonials from "@/components/v2/sections/Testimonials";
import ContactLead from "@/components/v2/sections/ContactLead";
import AreasStrip from "@/components/v2/sections/AreasStrip";
import AreasMarquee from "@/components/v2/sections/AreasMarquee";
import { getMetaForRoute } from "@/data/seoCutover";

const homeMeta = getMetaForRoute("/");

export const metadata: Metadata = {
  title: { absolute: homeMeta!.title },
  description: homeMeta!.description,
};

/**
 * Landing page sections follow docs/CONTENT-SPEC.md
 * (derived from https://www.nws-homes.com/ + approved B/A upgrade).
 * Phase 2: Space-aligned shells only — copy frozen.
 */
export default function Home() {
  return (
    <div>
      <Hero />
      <BeforeAfterSection />
      <ServicesGrid
        all
        title="Our quality services"
        subtitle="A full range of residential remodeling and custom home building designed around your vision and budget. Build from the ground up or transform the home you already love."
        showCta={false}
      />
      <CTA
        title="Bring your dream home to life."
        description="From minor upgrades to full renovations, our team guides you from first conversation to final walkthrough. Call now or request a free consultation."
      />
      <Testimonials />
      <ContactLead />
      <AreasMarquee />
      <AreasStrip
        compact
        title="Areas we serve"
      />
    </div>
  );
}
