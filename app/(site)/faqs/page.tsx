import type { Metadata } from "next";
import FAQPreview from "@/components/v2/sections/FAQPreview";
import CTA from "@/components/v2/sections/CTA";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs | NWS Custom Homes",
  description:
    "Common questions about NWS custom home building, remodeling process, pricing, and service areas.",
};

export default function FAQsPage() {
  return (
    <div>
      <FAQPreview
        items={faqs}
        limit={faqs.length}
        showViewAll={false}
        badge="FAQs"
        title="Everything you need to know"
      />
      <CTA
        title="Still have questions?"
        description="Call us or request a free consultation — we'll walk through your project in plain language."
      />
    </div>
  );
}
