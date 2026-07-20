import type { Metadata } from "next";
import ServicesGrid from "@/components/v2/sections/ServicesGrid";
import CTA from "@/components/v2/sections/CTA";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | NWS Custom Homes",
  description:
    "Custom home building, kitchen & bath remodeling, room additions, and whole-home renovations across Fort Bend County.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="border-b border-border/60 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
          <p className={cn(t.eyebrow, "mb-3")}>Services</p>
          <h1 className={cn(t.h1, "max-w-2xl")}>What we build</h1>
          <p className={cn(t.lead, "mt-4 max-w-2xl")}>
            From custom homes on your lot to kitchen remodels and whole-home
            transformations — one crew handles every trade in-house.
          </p>
        </div>
      </div>
      <ServicesGrid
        all
        title="Full-service construction & remodeling"
        subtitle="Every project starts with a free consultation and a fixed-price quote."
        showCta={false}
      />
      <CTA />
    </div>
  );
}
