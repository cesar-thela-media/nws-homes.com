"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const values = [
  {
    num: "01",
    word: "Craft",
    body: "Every cut, every joint, every finish is done by someone who takes pride in their work, and it shows.",
  },
  {
    num: "02",
    word: "Clarity",
    body: "Fixed-price quotes before we begin. No surprise invoices. No change orders without your approval in writing.",
  },
  {
    num: "03",
    word: "Commitment",
    body: "We give you a timeline before we start and we stick to it. If something changes, you hear about it immediately.",
  },
];

export default function ValueCards() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {values.map((v) => (
        <Card
          key={v.num}
          className={cn(
            "group relative overflow-hidden rounded-3xl border-white/[0.07] bg-white/[0.05] text-white shadow-none transition-all duration-200",
            "hover:-translate-y-1 hover:border-white/12 hover:bg-white/[0.08] hover:shadow-[0_20px_48px_rgba(43,33,24,0.4)]"
          )}
        >
          <div className="absolute left-9 right-9 top-0 h-0.5 bg-primary opacity-70 transition-opacity group-hover:opacity-100" />
          <CardContent className="p-9 pt-10">
            <p className="mb-4 font-sans text-[11px] tracking-[0.2em] text-primary">{v.num}</p>
            <p className="mb-7 font-sans text-[clamp(44px,4vw,64px)] italic leading-none text-white/90 transition-colors group-hover:text-white">
              {v.word}
            </p>
            <p className="m-0 font-sans text-sm leading-relaxed text-sage">{v.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
