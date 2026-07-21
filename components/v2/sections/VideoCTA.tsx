"use client";

/**
 * Optional mid-band CTA. Not mounted on home (avoids unproven stat claims).
 * Copy kept claim-safe: since 2007 + service lines only.
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

const marqueeItems = [
  "Custom home building · Richmond, TX",
  "Kitchen & bathroom remodels",
  "Whole-home renovations",
  "Room additions & open concept",
  "Free on-site consultation",
];

export default function VideoCTA() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16 lg:px-16">
        <div
          className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-t-2xl"
          style={{
            background:
              "linear-gradient(135deg, #2B2118 0%, #3d2e22 40%, #4a3728 70%, #2B2118 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/nws/kitchen-gallery-7.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-espresso/70" />

          <div className="relative z-10 flex w-full flex-col items-center gap-10 px-6 py-14">
            <div className="text-center">
              <h2 className={cn(t.h2, "mb-3 text-white")}>
                Trusted by Fort Bend families since 2007.
              </h2>
              <p className="mx-auto max-w-lg font-v2-sans text-base font-normal leading-relaxed text-white/70">
                Local team from first conversation to final walkthrough.
              </p>
            </div>

            <Button
              asChild
              className="h-auto rounded-full bg-white px-6 py-3.5 font-v2-sans text-sm font-semibold text-espresso hover:bg-white/90"
            >
              <Link href="/gallery">Explore the gallery</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-b-2xl border-t border-black/5 bg-primary py-4">
          <Marquee className="p-0 [--duration:40s] [--gap:1.25rem]" pauseOnHover>
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <p className="whitespace-nowrap font-v2-sans text-sm font-medium text-white">
                  {item}
                </p>
                <Separator className="!w-8 bg-white/40" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
