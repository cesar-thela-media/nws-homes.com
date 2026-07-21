"use client";

import type { FAQ } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <Accordion type="single" collapsible className="mb-3">
      <AccordionItem
        value={faq.question}
        className={cn(
          "group/item overflow-hidden rounded-2xl border-0 bg-white shadow-[0_2px_16px_rgba(43,33,24,0.04)] transition-shadow",
          "data-[state=open]:shadow-[0_8px_28px_rgba(43,33,24,0.08)]"
        )}
      >
        <div className="h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-data-[state=open]/item:scale-x-100" />
        <AccordionTrigger
          className={cn(
            "px-6 py-6 text-left font-sans text-lg font-normal text-espresso hover:no-underline md:px-8",
            "[&[data-state=open]]:text-espresso [&[data-state=open]>svg]:text-primary"
          )}
        >
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 font-sans text-[15px] leading-relaxed text-sage md:px-8">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function FAQAccordionList({ faqs }: { faqs: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className={cn(
            "group/item overflow-hidden rounded-2xl border-0 bg-white shadow-[0_2px_16px_rgba(43,33,24,0.04)]",
            "data-[state=open]:shadow-[0_8px_28px_rgba(43,33,24,0.08)]"
          )}
        >
          <div className="h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-data-[state=open]/item:scale-x-100" />
          <AccordionTrigger className="px-6 py-6 text-left font-sans text-lg font-normal text-espresso hover:no-underline md:px-8">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 font-sans text-[15px] leading-relaxed text-sage md:px-8">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
