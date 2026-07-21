"use client";

import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { t } from "@/components/v2/lib/typography";
import FadeIn from "@/components/v2/lib/FadeIn";
import { cn } from "@/lib/utils";

const BeforeAfterSlider = dynamic(() => import("./BeforeAfterSlider"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[360px] w-full animate-pulse rounded-[1.75rem] bg-espresso/10" />
  ),
});

export default function BeforeAfterSection() {
  return (
    <section className="section-pad relative overflow-hidden border-y border-border/60 bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/nws/remodeling-2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="section-shell relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-5" y={24}>
            <Badge
              variant="outline"
              className="mb-4 h-auto px-3 py-1 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Real projects
            </Badge>
            <h2 className={cn(t.h2, "max-w-md")}>
              Dependable remodeling you can see.
            </h2>
            <p className={cn(t.lead, "mt-4 max-w-md")}>
              Drag the slider to compare before and after. These are real NWS
              project photos from kitchens, baths, and renovations across
              Richmond and the communities we serve.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Proudly serving Richmond, TX and surrounding areas since 2007",
                "Care, precision, and clear communication on every phase",
                "From simple upgrades to complex whole-home remodels",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-v2-sans text-sm text-foreground/90 md:text-[15px]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Large framed B/A media block */}
          <FadeIn className="lg:col-span-7" delay={0.12} y={32}>
            <div className="relative">
              <div
                className="absolute -bottom-3 -right-3 top-4 left-4 z-0 hidden rounded-[2rem] bg-espresso/90 lg:block"
                aria-hidden
              />
              <div className="relative z-[1] overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-[0_28px_80px_rgba(43,33,24,0.16)]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:min-h-[520px] lg:aspect-auto lg:h-[min(56vh,560px)]">
                  <BeforeAfterSlider />
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-4 sm:p-5">
                    <Badge className="rounded-full border-0 bg-espresso px-3.5 py-1.5 font-v2-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-md hover:bg-espresso">
                      Before
                    </Badge>
                    <Badge className="rounded-full border-0 bg-primary px-3.5 py-1.5 font-v2-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-md">
                      After
                    </Badge>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-espresso/85 via-espresso/40 to-transparent px-5 pb-5 pt-16">
                    <p className="font-v2-sans text-sm font-semibold text-white sm:text-base">
                      Kitchen &amp; living remodel
                    </p>
                    <p className="mt-0.5 font-v2-sans text-xs text-white/75 sm:text-sm">
                      Real NWS project photography
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
