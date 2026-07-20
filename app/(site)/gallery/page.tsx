import type { Metadata } from "next";
import GalleryGrid from "@/components/v2/sections/GalleryGrid";
import CTA from "@/components/v2/sections/CTA";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery | NWS Custom Homes",
  description:
    "Browse NWS custom homes, kitchen remodels, bathrooms, and whole-home renovations across Fort Bend County.",
};

export default function GalleryPage() {
  return (
    <div>
      <div className="border-b border-border/60 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
          <p className={cn(t.eyebrow, "mb-3")}>Gallery</p>
          <h1 className={cn(t.h1, "max-w-2xl")}>Our work</h1>
          <p className={cn(t.lead, "mt-4 max-w-2xl")}>
            Kitchens, baths, custom builds, and full renovations — real projects
            across Richmond, Katy, Sugar Land, and beyond.
          </p>
        </div>
      </div>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
      <CTA
        title="Like what you see?"
        description="Tell us about your project — free consultation, fixed-price quote, no pressure."
      />
    </div>
  );
}
