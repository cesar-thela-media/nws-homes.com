import type { Metadata } from "next";
import ServicesGrid from "@/components/v2/sections/ServicesGrid";
import CTA from "@/components/v2/sections/CTA";
import PageHero from "@/components/v2/sections/PageHero";
import { getMetaForRoute } from "@/data/seoCutover";

const meta = getMetaForRoute("/services")!;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Our quality services"
        lead="Our wide range of services means we can build you a custom home from square one or remodel an existing one. We help with lot planning, dream-home layouts, and turning the structure you already have into the home you want."
      />
      <ServicesGrid
        all
        title="What we build and remodel"
        subtitle="Contact our experts for a free consultation, then explore the service that fits your project."
        showCta={false}
      />
      <CTA
        title="Not sure where to start?"
        description="Call our team or send a message. We will help you match your goals to the right service."
      />
    </div>
  );
}
