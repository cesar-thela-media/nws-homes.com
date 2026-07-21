"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export type SpaceCtaProps = {
  className?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Shadcn Space cta-01 — prop-driven so NWS can pass frozen Phase-1 copy.
 */
export default function SpaceCta({
  className,
  title = "Innovative solutions for bold brands",
  description = "Looking to elevate your brand? We craft immersive experiences that captivate, engage, and make your business unforgettable in every interaction.",
  primaryLabel = "Let's craft together",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: SpaceCtaProps) {
  const ref = useRef(null);

  const bottomAnimation = {
    initial: { y: "5%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.3 },
  };

  return (
    <section className={cn("section-pad", className)}>
      <div className="section-shell">
        <div
          ref={ref}
          className="relative flex min-h-96 items-center justify-center overflow-hidden rounded-3xl border border-border px-6 py-14 before:absolute before:-z-10 before:top-24 before:h-4/5 before:w-full before:rounded-full before:bg-gradient-to-r before:from-primary/15 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:blur-3xl"
        >
          <motion.div
            {...bottomAnimation}
            className="mx-auto flex flex-col items-center gap-6"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <h2 className="max-w-2xl font-v2-sans text-3xl font-semibold tracking-tight md:text-5xl">
                {title}
              </h2>
              <p className="mx-auto max-w-2xl font-v2-sans text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 pe-14 ps-6 text-sm font-semibold transition-all duration-500 hover:bg-primary/90 hover:pe-6 hover:ps-14"
              >
                <Link href={primaryHref}>
                  <span className="relative z-10 transition-all duration-500">
                    {primaryLabel}
                  </span>
                  <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full px-6 text-sm font-semibold"
                >
                  <a href={secondaryHref}>
                    {secondaryHref.startsWith("tel:") ? (
                      <Phone className="h-4 w-4" />
                    ) : null}
                    {secondaryLabel}
                  </a>
                </Button>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
