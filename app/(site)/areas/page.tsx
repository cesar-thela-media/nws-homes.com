import type { Metadata } from "next";
import AreasStrip from "@/components/v2/sections/AreasStrip";
import ContactLead from "@/components/v2/sections/ContactLead";
import PageHero from "@/components/v2/sections/PageHero";
import { getMetaForRoute } from "@/data/seoCutover";

const meta = getMetaForRoute("/areas")!;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
};

export default function AreasPage() {
  return (
    <div>
      <PageHero
        eyebrow="Areas we serve"
        title="Areas we serve"
        lead="We complete every project promptly, carefully, and with attention to detail. Home base in Richmond, TX since 2007, with work across Fort Bend County and the West Side of Houston."
      />
      <AreasStrip compact={false} title="Communities we know well" />
      <ContactLead />
    </div>
  );
}
