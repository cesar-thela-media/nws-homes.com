import type { Metadata } from "next";
import GalleryGrid from "@/components/v2/sections/GalleryGrid";
import CTA from "@/components/v2/sections/CTA";
import PageHero from "@/components/v2/sections/PageHero";
import { getMetaForRoute } from "@/data/seoCutover";

const meta = getMetaForRoute("/gallery")!;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
};

const ALLOWED = new Set([
  "all",
  "kitchen",
  "bathroom",
  "custom-homes",
  "remodeling",
]);

export default function GalleryPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const raw = searchParams?.category ?? "all";
  const initialCategory = ALLOWED.has(raw) ? raw : "all";

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="See our work"
        lead="Real project photography from custom homes, kitchen remodels, bathrooms, and whole-home renovations. Filter by category to explore the kind of work you are planning."
      />
      <section className="section-pad">
        <div className="section-shell">
          <GalleryGrid initialCategory={initialCategory} />
        </div>
      </section>
      <CTA
        title="Like what you see?"
        description="Tell us about your project. Call or request a free consultation and we will take the next step with you."
      />
    </div>
  );
}
