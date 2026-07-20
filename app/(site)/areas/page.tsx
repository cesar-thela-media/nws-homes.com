import type { Metadata } from "next";
import AreasStrip from "@/components/v2/sections/AreasStrip";
import ContactLead from "@/components/v2/sections/ContactLead";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "NWS serves Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, Weston Lakes, Park Row, and West Houston.",
};

export default function AreasPage() {
  return (
    <div>
      <div className="border-b border-border/60 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
          <p className={cn(t.eyebrow, "mb-3")}>Areas we serve</p>
          <h1 className={cn(t.h1, "max-w-2xl")}>
            Richmond, Katy, Sugar Land &amp; more
          </h1>
          <p className={cn(t.lead, "mt-4 max-w-2xl")}>
            Home base in Richmond since 2007. If you&apos;re in Greater Houston
            and not on this list, call us — we likely serve you.
          </p>
        </div>
      </div>
      <AreasStrip compact={false} title="Neighborhoods we know well" />
      <ContactLead />
    </div>
  );
}
