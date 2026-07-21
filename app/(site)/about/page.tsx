import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/v2/sections/CTA";
import FadeIn from "@/components/v2/lib/FadeIn";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";
import { getMetaForRoute } from "@/data/seoCutover";

const NWS = "/nws";

const values = [
  {
    title: "Full-service remodeling & custom homes",
    body: "From kitchen and bathroom renovations to complete additions and custom builds, we cover the projects Fort Bend families need most.",
  },
  {
    title: "Projects that run smoothly",
    body: "Our team works together from start to finish so each job stays organized, with clear communication along the way.",
  },
  {
    title: "Local since 2007",
    body: "Richmond-based, building our reputation for excellence and expanding services as homeowners need more from a single trusted partner.",
  },
];

const aboutMeta = getMetaForRoute("/about")!;

export const metadata: Metadata = {
  title: { absolute: aboutMeta.title },
  description: aboutMeta.description,
};

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero-band">
        <div className="section-shell py-12 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="flex flex-col gap-6" y={24}>
              <p className={cn(t.eyebrow, "mb-0")}>About NWS</p>
              <h1 className={cn(t.h1, "max-w-xl")}>Your go-to home builders</h1>
              <p className={t.body}>
                Discover the true meaning of custom homes with NWS Custom Homes
                and Remodeling. We are a full-service construction company
                specializing in remodeling and custom homes.
              </p>
              <p className={t.body}>
                We have been building our reputation for excellence since 2007
                and continue to expand the work we take on, from kitchen and
                bathroom renovations to complete additions. We do it all with the
                same local team homeowners can reach by phone.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full">
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={CONTACT.phoneHref}>Speak to our experts</a>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.12} y={32}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${NWS}/custom-homes-7.jpeg`}
                  alt="NWS custom home project"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Space feature-03 style value cards */}
      <section className="surface-soft section-pad">
        <div className="section-shell">
          <FadeIn className="mb-10 text-center" y={20}>
            <h2 className={cn(t.h2, "mb-4")}>
              We&apos;re looking forward to working with you
            </h2>
            <p className={cn(t.lead, "mx-auto max-w-2xl")}>
              Highly skilled professionals who work together so each project goes
              smoothly from start to finish.
            </p>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.08 * (i + 1)} y={24}>
                <Card className="h-full rounded-2xl border-border/80 shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <div className="mb-1 h-1 w-10 rounded-full bg-primary" />
                    <h3 className={t.h4}>{v.title}</h3>
                    <p className={t.bodySm}>{v.body}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to talk about your home?"
        description="Call our office or mobile, or send a message from the contact page. We are looking forward to working with you."
      />
    </div>
  );
}
