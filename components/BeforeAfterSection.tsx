"use client";

import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BeforeAfterSlider = dynamic(() => import("./BeforeAfterSlider"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[320px] w-full animate-pulse rounded-2xl bg-espresso/10" />
  ),
});

export default function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-plaster py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url(/nws/remodeling-2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-20">
        <div>
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Transformations
          </p>
          <h2 className="m-0 font-serif text-[36px] leading-tight tracking-[-0.02em] text-espresso sm:text-[44px]">
            See the difference a whole-home remodel makes.
          </h2>
          <p className="mt-4 max-w-[480px] font-sans text-base leading-relaxed text-sage">
            Drag the slider to compare before and after. These are real NWS project photos —
            kitchens, baths, and full remodels for families across Fort Bend and west Houston.
          </p>
          <ul className="mt-6 space-y-2 font-sans text-sm text-espresso/90">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Fixed-price scopes before we lift a tool
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              One crew from demo through final walkthrough
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Local references you can actually call
            </li>
          </ul>
        </div>

        <div className="relative">
          <div
            className="absolute -bottom-3 -right-3 top-3 left-3 z-0 hidden rounded-3xl bg-espresso lg:block"
            aria-hidden
          />
          <div className="relative z-[1] h-[300px] overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(43,33,24,0.18)] sm:h-[400px] lg:h-[480px] lg:rounded-3xl">
            <BeforeAfterSlider />
            <Badge
              variant="secondary"
              className="absolute left-3 top-3 z-20 bg-espresso text-white hover:bg-espresso"
            >
              Before
            </Badge>
            <Badge className="absolute right-3 top-3 z-20">After</Badge>
            <Card className="absolute bottom-4 left-4 z-20 hidden max-w-[280px] border-0 shadow-xl lg:block">
              <CardContent className="p-4">
                <p className="m-0 font-serif text-[13px] font-bold leading-snug text-espresso">
                  Kitchen &amp; living remodel
                </p>
                <p className="mt-1 mb-0 font-sans text-[13px] text-sage">
                  Real NWS project photography
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
