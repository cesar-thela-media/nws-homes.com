"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/nws/custom-homes-7.jpeg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden lg:min-h-[92vh]">
      <Image
        src={HERO_IMAGE}
        alt="Custom home built by NWS Homes in the Richmond–Katy–Sugar Land area"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Theme wash for readability — image remains visible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/55 to-espresso/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
        <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-plaster/85">
          Richmond · Katy · Sugar Land
        </p>

        <h1 className="m-0 font-serif text-[46px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[clamp(64px,5.5vw,88px)]">
          <span className="block">Built for the Way</span>
          <span className="block">
            <span className="italic text-primary">You</span> Live.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[480px] font-sans text-base leading-relaxed text-plaster/90 sm:text-lg">
          Custom homes and whole-home remodels across Richmond, Katy &amp; Sugar Land,
          crafted since 2007.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-plaster/90">
          <div className="text-center">
            <div className="font-sans text-sm font-semibold text-white">4.9★</div>
            <div className="font-sans text-[11px] text-plaster/70">Google reviews</div>
          </div>
          <div className="h-8 w-px bg-white/25" aria-hidden />
          <div className="text-center">
            <div className="font-sans text-sm font-semibold text-white">Since 2007</div>
            <div className="font-sans text-[11px] text-plaster/70">Local builder</div>
          </div>
          <div className="h-8 w-px bg-white/25" aria-hidden />
          <div className="text-center">
            <div className="font-sans text-sm font-semibold text-white">One crew</div>
            <div className="font-sans text-[11px] text-plaster/70">Start to finish</div>
          </div>
        </div>
      </div>
    </section>
  );
}
