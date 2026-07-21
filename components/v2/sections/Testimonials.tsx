"use client";

/**
 * Testimonials bento — Space testimonial-01 grid motion + card framing.
 * Quotes from data/testimonials (Phase 1 freeze).
 * @see components/shadcn-space/blocks/testimonial-01/testimonial.tsx
 */
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

const NWS = "/nws";

const featured = testimonials[0];
const secondary = testimonials[1];
const tertiary = testimonials[2];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="section-pad surface-soft">
      <div className="section-shell">
        <div className="flex flex-col items-center gap-12 self-stretch">
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-3 sm:gap-4"
          >
            <Badge
              variant="outline"
              className="h-auto px-3 py-1 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Don&apos;t take our word for it
            </Badge>
            <h2 className={cn(t.h2, "mx-auto max-w-xs text-center sm:max-w-2xl")}>
              Check what our clients are saying
            </h2>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
            {/* Featured quote with image backdrop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card
                className="h-full w-full rounded-2xl border border-border bg-cover bg-center bg-no-repeat p-8 md:min-h-96 md:pe-16"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(43,33,24,0.92) 0%, rgba(43,33,24,0.55) 55%, rgba(43,33,24,0.35) 100%), url('${NWS}/kitchen-gallery-7.jpeg')`,
                }}
              >
                <CardContent className="flex h-full flex-col items-start justify-between gap-24 p-0">
                  <p className="font-v2-sans text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                    Customer stories
                  </p>
                  <div className="flex flex-col gap-6">
                    <p className="line-clamp-6 font-v2-sans text-xl font-medium leading-snug text-white lg:text-2xl">
                      &ldquo;{featured.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-v2-sans text-base font-semibold text-white">
                        {featured.name}
                      </p>
                      <p className="font-v2-sans text-sm font-normal text-white/70">
                        {featured.city} · {featured.source}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats card — primary brand color */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="h-full w-full rounded-2xl border border-border bg-primary p-8 md:min-h-96">
                <CardContent className="flex h-full flex-col items-start justify-between gap-24 p-0">
                  <p className="font-v2-sans text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                    Local trust
                  </p>
                  <div className="flex flex-col items-start gap-6">
                    <div>
                      <p className={cn(t.stat, "text-white")}>2007</p>
                      <p className="mt-1 font-v2-sans text-base font-medium text-white/90">
                        serving Richmond &amp; Fort Bend
                      </p>
                    </div>
                    <div className="flex gap-8">
                      <div>
                        <p className="font-v2-display text-2xl font-medium text-white">35+</p>
                        <p className="font-v2-sans text-sm text-white/70">years combined exp.</p>
                      </div>
                      <div>
                        <p className="font-v2-display text-2xl font-medium text-white">Google</p>
                        <p className="font-v2-sans text-sm text-white/70">&amp; Angi reviews</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dark quote card with image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-4"
            >
              <Card className="h-full w-full rounded-2xl border border-border bg-espresso p-8">
                <CardContent className="flex h-full flex-col items-start justify-between gap-6 p-0">
                  <div className="flex flex-col items-start gap-2">
                    <p className="font-v2-sans text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                      Customer stories
                    </p>
                    <p className="line-clamp-5 font-v2-sans text-xl font-medium leading-snug text-white lg:text-2xl">
                      &ldquo;{secondary.quote}&rdquo;
                    </p>
                    <div className="mt-2">
                      <p className="font-v2-sans text-base font-semibold text-white">
                        {secondary.name}
                      </p>
                      <p className="font-v2-sans text-sm text-white/70">{secondary.city}</p>
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${NWS}/custom-homes-4.jpeg`}
                    alt="Custom home project"
                    loading="lazy"
                    decoding="async"
                    className="h-[140px] w-full rounded-xl object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft primary tint quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="col-span-1 lg:col-span-8"
            >
              <Card className="h-full w-full rounded-2xl border border-border bg-primary/10 p-8">
                <CardContent className="flex h-full flex-col items-start justify-between gap-24 p-0">
                  <div className="flex flex-col items-start gap-2">
                    <p className="font-v2-sans text-sm font-medium uppercase tracking-[0.12em] text-primary/70">
                      Customer stories
                    </p>
                    <p className="font-v2-sans text-xl font-medium leading-snug text-card-foreground lg:text-2xl">
                      &ldquo;{tertiary.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="font-v2-sans text-base font-semibold text-card-foreground">
                      {tertiary.name}
                    </p>
                    <p className="font-v2-sans text-sm font-normal text-muted-foreground">
                      {tertiary.city} · {tertiary.source}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
