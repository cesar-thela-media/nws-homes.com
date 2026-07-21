import type { Metadata } from "next";
import FAQPreview from "@/components/v2/sections/FAQPreview";
import CTA from "@/components/v2/sections/CTA";
import { faqs } from "@/data/faqs";
import { getMetaForRoute } from "@/data/seoCutover";

const meta = getMetaForRoute("/faqs")!;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
};

export default function FAQsPage() {
  return (
    <div>
      <FAQPreview
        items={faqs}
        limit={faqs.length}
        showViewAll={false}
        badge="FAQs"
        title="Frequently asked questions"
      />
      <CTA
        title="Still have questions?"
        description="Get in touch for a free consultation. Call (281) 299-2309 or send a message and we will walk through your project in plain language."
      />
    </div>
  );
}
