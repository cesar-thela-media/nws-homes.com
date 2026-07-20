"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT } from "@/lib/constants";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

/**
 * AI image brief (replace /nws/kitchen-gallery-7.jpeg with the generated image):
 * Wide interior shot of a newly completed custom home in Richmond TX —
 * warm evening light, open-concept kitchen/living area, high ceilings,
 * wood beams, neutral stone/cream tones. No people.
 * 3:2 landscape, min 2400×1600px. Mood: aspirational, calm, premium residential.
 */
const HERO_IMAGE = "/nws/kitchen-gallery-7.jpeg";

export default function Hero() {
  return (
    <section className="p-3 pt-0 sm:p-4 sm:pt-0">
      <div className="relative flex h-[min(88vh,820px)] w-full items-end overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="NWS Custom Homes — Richmond TX"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-5 py-8 sm:px-8 sm:py-12 md:py-16 lg:px-16">
          <Badge className="border-0 bg-white/10 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm hover:bg-white/15">
            Richmond · Katy · Sugar Land · Since 2007
          </Badge>

          <div className="flex max-w-3xl flex-col gap-4 text-left">
            <h1 className={cn(t.h1, "text-white")}>
              Custom homes &amp; remodels,{" "}
              <span className="italic text-primary">built for the way you live.</span>
            </h1>
            <p className="max-w-xl font-v2-sans text-base font-normal leading-relaxed text-white/70 md:text-lg">
              One accountable crew from design through final walkthrough. Fixed-price
              quotes, clear timelines, and craftsmanship Fort Bend families trust.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              className="group relative h-auto overflow-hidden rounded-full border border-white bg-white px-5 py-2.5 font-v2-sans text-sm font-semibold text-espresso shadow-none transition-all duration-300 hover:bg-white"
            >
              <Link href="/contact">
                <span className="absolute left-1/2 top-full h-10 w-10 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-primary transition-transform duration-700 ease-in-out group-hover:scale-[18]" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Get a Free Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-rotate-45"
                  />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-auto rounded-full px-4 py-2.5 font-v2-sans text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/gallery">View Our Work</Link>
            </Button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 py-2.5 font-v2-sans text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Phone size={16} className="text-primary" />
              <span>{CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
