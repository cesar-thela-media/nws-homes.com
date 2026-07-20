"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

interface CTABannerProps {
  eyebrow?: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  fullWidth?: boolean;
}

export default function CTABanner({
  eyebrow = "START YOUR PROJECT",
  heading,
  body,
  primaryLabel,
  primaryHref,
  fullWidth,
}: CTABannerProps) {
  return (
    <section
      className={
        fullWidth
          ? "bg-plaster p-0"
          : "bg-plaster px-6 py-10 lg:px-20 lg:py-20"
      }
    >
      <div
        className={
          fullWidth
            ? "relative overflow-hidden bg-espresso px-7 py-12 lg:px-16 lg:py-20"
            : "relative mx-auto max-w-[900px] overflow-hidden rounded-3xl bg-espresso px-7 py-12 lg:rounded-[32px] lg:px-16 lg:py-20"
        }
      >
        <div className="relative z-[1] mx-auto max-w-[720px] text-center">
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mb-4 font-serif text-[32px] leading-tight text-white lg:text-[clamp(40px,4vw,64px)]">
            {heading}
          </h2>
          <p className="mb-9 font-sans text-[15px] leading-relaxed text-sage lg:text-base">
            {body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="darkOutline" size="lg">
              <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
            </Button>
          </div>
          <p className="mt-6 font-sans text-xs text-white/35">
            Mon–Fri 8–6 &nbsp;· &nbsp;Sat 8–12 &nbsp;· &nbsp;Richmond, TX
          </p>
        </div>
      </div>
    </section>
  );
}
