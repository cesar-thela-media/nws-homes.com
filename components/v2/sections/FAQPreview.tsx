import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faqs";
import type { FAQ } from "@/lib/types";
import { t } from "@/components/v2/lib/typography";

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
  const list = (items ?? faqs).slice(0, limit);

  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8 xl:py-24">
        <div className="flex animate-in flex-col items-center gap-4 fade-in slide-in-from-top-10 fill-mode-both duration-1000 delay-100 ease-in-out">
          <Badge
            variant="outline"
            className="h-auto border-0 px-3 py-1 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em] outline outline-border"
          >
            {badge}
          </Badge>
          <h2 className={cn(t.h2, "max-w-lg text-center")}>{title}</h2>
        </div>
        <div>
          <Accordion type="single" collapsible className="flex w-full flex-col gap-6">
            {list.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "rounded-2xl border border-border px-6 transition-colors animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-700 data-[state=open]:bg-accent",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500"
                )}
              >
                <AccordionTrigger className="cursor-pointer py-6 text-left font-v2-sans text-lg font-semibold tracking-tight hover:no-underline md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={cn(t.body, "pb-6")}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {showViewAll && (
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 font-v2-sans text-sm font-semibold"
            >
              <Link href="/faqs">View all FAQs</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
