/**
 * NWS FAQ section — composes Shadcn Space faq-01 with Phase-1 FAQ data.
 * Phase 2b: FadeIn shell around Space block.
 */
import SpaceFaq from "@/components/shadcn-space/blocks/faq-01/faq";
import FadeIn from "@/components/v2/lib/FadeIn";
import { faqs } from "@/data/faqs";
import type { FAQ } from "@/lib/types";

type FAQPreviewProps = {
  items?: FAQ[];
  limit?: number;
  showViewAll?: boolean;
  title?: string;
  badge?: string;
};

export default function FAQPreview({
  items,
  limit = 5,
  showViewAll = true,
  title = "Got questions? We've got answers",
  badge = "FAQs",
}: FAQPreviewProps) {
  const list = (items ?? faqs).slice(0, limit).map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <FadeIn y={24}>
      <SpaceFaq
        items={list}
        badge={badge}
        title={title}
        showViewAll={showViewAll}
        viewAllHref="/faqs"
      />
    </FadeIn>
  );
}
