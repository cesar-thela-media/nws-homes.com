"use client";

/**
 * Home hero — Space hero-14 pattern (video bg + bottom content + gradient).
 * Phase 5: local video + real client poster for LCP; no remote hotlinks.
 * @see components/shadcn-space/blocks/hero-14/hero.tsx
 */
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT } from "@/lib/constants";
import { t } from "@/components/v2/lib/typography";
import SocialLinks from "@/components/v2/lib/SocialLinks";
import FadeIn from "@/components/v2/lib/FadeIn";
import { cn } from "@/lib/utils";
import {
  HERO_POSTER,
  HERO_POSTER_HEIGHT,
  HERO_POSTER_WIDTH,
  HERO_VIDEO,
} from "@/data/mediaAssets";

export default function Hero() {
  return (
    <section className="px-3 pb-2 pt-0 sm:px-4 sm:pb-3">
      <div className="relative flex h-[min(90vh,860px)] w-full items-end overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
        {/* LCP still: real client photo under video; high priority, same-origin */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_POSTER}
          alt=""
          aria-hidden
          width={HERO_POSTER_WIDTH}
          height={HERO_POSTER_HEIGHT}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <track kind="captions" />
        </video>
        <div className="hero-overlay pointer-events-none absolute inset-0" />

        <FadeIn
          y={16}
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-7 px-5 py-12 text-center sm:px-8 sm:py-14 md:items-start md:py-20 md:text-left lg:px-16"
        >
          <Badge className="border-0 bg-white/12 font-v2-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md hover:bg-white/15">
            Richmond, TX · Serving Fort Bend since 2007
          </Badge>

          <div className="flex max-w-3xl flex-col gap-5">
            {/* Better version of live "Let's Build Your Dreams" — two lines */}
            <h1 className={cn(t.h1, "text-balance text-white")}>
              <span className="block">Let&apos;s build</span>
              <span className="block">
                your <span className={t.accentItalic}>dreams.</span>
              </span>
            </h1>
            <p className={cn(t.heroLead, "mx-auto max-w-xl md:mx-0")}>
              Discover what a custom-built or beautifully remodeled home can feel
              like. NWS brings personalized design and careful craftsmanship to
              every project, one thoughtful renovation at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center md:items-start">
            <Button
              asChild
              size="lg"
              className="group relative h-12 overflow-hidden rounded-full border border-white bg-white px-6 font-v2-sans text-sm font-semibold text-espresso shadow-none transition-all duration-300 hover:bg-white"
            >
              <a href={CONTACT.phoneHref}>
                <span className="absolute left-1/2 top-full h-10 w-10 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-primary transition-transform duration-700 ease-in-out group-hover:scale-[18]" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Book now
                  <Phone size={16} />
                </span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full border border-white/25 bg-white/5 px-5 font-v2-sans text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
            >
              <Link href="/contact">
                Get in touch
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex h-12 items-center gap-2 px-2 font-v2-sans text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Phone size={16} className="text-primary" />
              </span>
              <span>Office {CONTACT.phone}</span>
            </a>
          </div>

          <div className="border-t border-white/15 pt-5">
            <SocialLinks variant="onDark" leading="Follow" showLabel />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
