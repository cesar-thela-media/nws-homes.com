"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type SpaceFaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_DATA: SpaceFaqItem[] = [
  {
    id: "demo-1",
    question: "What services does Shadcn Space offer?",
    answer:
      "We offer a wide range of services including web development, app development, and digital marketing.",
  },
];

type SpaceFaqProps = {
  items?: SpaceFaqItem[];
  badge?: string;
  title?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  className?: string;
};

/**
 * Shadcn Space faq-01 — prop-driven accordion shell for NWS Phase-1 FAQ copy.
 */
export default function SpaceFaq({
  items = FAQ_DATA,
  badge = "FAQs",
  title = "Got questions? We've got answers ready",
  showViewAll = false,
  viewAllHref = "/faqs",
  className,
}: SpaceFaqProps) {
  return (
    <section className={className}>
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 sm:px-6 md:gap-16 lg:px-8 xl:py-24">
        <div className="flex animate-in flex-col items-center gap-4 fade-in slide-in-from-top-10 fill-mode-both duration-1000 delay-100 ease-in-out">
          <Badge
            variant="outline"
            className="h-auto border-0 px-3 py-1 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em] outline outline-border"
          >
            {badge}
          </Badge>
          <h2 className="max-w-lg text-center font-v2-sans text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
        </div>
        <div>
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4 md:gap-6"
          >
            {items.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "group/item flex flex-col gap-3 rounded-2xl border border-border p-5 transition-colors animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-700 data-[state=open]:bg-accent sm:p-6",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500"
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "cursor-pointer p-0 text-left font-v2-sans text-lg font-semibold tracking-tight hover:no-underline md:text-xl",
                    // Hide default ui/accordion ChevronDown (last svg child) — Space faq-01 uses Plus only
                    "[&>svg:last-child]:hidden",
                    // Open state: Plus rotates to X (overrides default rotate-180 on chevron)
                    "[&[data-state=open]>svg]:rotate-45"
                  )}
                >
                  {faq.question}
                  <PlusIcon
                    className="h-5 w-5 shrink-0 text-foreground transition-transform duration-200 md:h-6 md:w-6"
                    aria-hidden
                  />
                </AccordionTrigger>
                <AccordionContent className="p-0 pb-1 font-v2-sans text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {showViewAll ? (
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 font-v2-sans text-sm font-semibold"
            >
              <Link href={viewAllHref}>View all FAQs</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
