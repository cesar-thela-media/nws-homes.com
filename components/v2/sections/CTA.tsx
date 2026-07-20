"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

type CTAProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function CTA({
  title = "Ready to build something great?",
  description = "Book a free consultation. We'll walk your space, talk through your vision, and give you a fixed-price quote — no pressure, no surprises.",
  className,
}: CTAProps) {
  const ref = useRef(null);

  const bottomAnimation = {
    initial: { y: "5%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.3 },
  };

  return (
    <section className={className}>
      <div className="py-8 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-16">
          <div
            ref={ref}
            className="relative flex min-h-96 items-center justify-center overflow-hidden rounded-3xl border border-border px-6 before:absolute before:-z-10 before:top-24 before:h-4/5 before:w-full before:rounded-full before:bg-gradient-to-r before:from-primary/15 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:blur-3xl dark:before:-z-10 dark:before:from-primary/20 dark:before:via-black dark:before:to-amber-300/10"
          >
            <motion.div
              {...bottomAnimation}
              className="mx-auto flex flex-col items-center gap-6"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <h2 className={cn(t.h2, "text-center")}>{title}</h2>
                <p className={cn(t.lead, "mx-auto max-w-2xl text-center")}>
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  className="group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 pe-14 ps-6 font-v2-sans text-sm font-semibold transition-all duration-500 hover:bg-primary/90 hover:pe-6 hover:ps-14"
                >
                  <Link href="/contact">
                    <span className="relative z-10 transition-all duration-500">
                      Free consultation
                    </span>
                    <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 cursor-pointer rounded-full px-6 font-v2-sans text-sm font-semibold"
                >
                  <a href={CONTACT.phoneHref}>
                    <Phone className="h-4 w-4" />
                    Call {CONTACT.phone}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
