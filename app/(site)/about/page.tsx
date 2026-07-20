import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/v2/sections/CTA";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

const NWS = "/nws";

const values = [
  {
    title: "One crew, every trade",
    body: "The same team that breaks ground finishes your home. No subcontractor roulette, no lost accountability.",
  },
  {
    title: "Fixed-price quotes",
    body: "You know the number before work starts. Scope changes only happen with a written change order you approve.",
  },
  {
    title: "Local since 2007",
    body: "Richmond-based and family-run. We know Fort Bend permit offices, HOAs, and neighborhoods inside-out.",
  },
];

const stats = [
  { value: "19+", label: "Years building" },
  { value: "500+", label: "Projects delivered" },
  { value: "4.9★", label: "Client rating" },
  { value: "1", label: "Accountable crew" },
];

export const metadata: Metadata = {
  title: "About | NWS Custom Homes",
  description:
    "NWS Custom Homes has been building and remodeling across Richmond, Katy & Sugar Land since 2007.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-20">
          <Badge
            variant="outline"
            className="mb-4 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em]"
          >
            About NWS
          </Badge>
          <h1 className={cn(t.h1, "max-w-3xl")}>
            Building Fort Bend County since 2007
          </h1>
          <p className={cn(t.lead, "mt-6 max-w-2xl")}>
            NWS Custom Homes is a locally owned builder and remodeler based in
            Richmond, TX. We design and construct custom homes, kitchens, baths,
            and whole-home renovations — with one crew that owns every phase of
            your project.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${NWS}/custom-homes-7.jpeg`}
              alt="NWS custom home project"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className={t.h2}>Crafted for the way you live</h2>
            <p className={t.body}>
              Building a home — or transforming the one you have — is the biggest
              investment most families make. We treat it that way: every decision
              is yours, every detail is deliberate, and every phase is
              communicated clearly before it begins.
            </p>
            <p className={t.body}>
              Architecture coordination, permitting, material sourcing, and full
              construction live under one roof. You get a single project manager,
              weekly updates, and a final walkthrough where every punch-list item
              is resolved before close-out.
            </p>
            <div>
              <Button asChild className="rounded-full">
                <Link href="/contact">Start your project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent/30 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className={cn(t.stat, "text-primary")}>{s.value}</p>
              <p className={cn(t.bodySm, "mt-1")}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className={cn(t.h2, "mb-8 text-center")}>How we work</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="rounded-2xl">
                <CardContent className="flex flex-col gap-3 p-6">
                  <h3 className={t.h4}>{v.title}</h3>
                  <p className={t.bodySm}>{v.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
