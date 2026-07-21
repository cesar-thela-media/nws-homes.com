import { getServiceBySlug, getRelatedServices } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import dynamicNext from "next/dynamic";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTA from "@/components/v2/sections/CTA";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";
// Shared section shells: section-pad / section-shell (globals) + Space CTA composition

const BeforeAfterSlider = dynamicNext(
  () => import("@/components/BeforeAfterSlider"),
  { ssr: false }
);

export const dynamic = "force-dynamic";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: {
      absolute: `${service.navLabel} in Richmond, TX | NWS Custom Homes`,
    },
    description: service.cardDescription,
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const related = getRelatedServices(service.relatedSlugs);
  const groups = service.includeGroups ?? [];

  return (
    <div>
      {/* Hero — image background, centered title (shared hero-overlay-center) */}
      <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden md:min-h-[62vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.heroImage}
          alt={service.navLabel}
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay-center absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-8">
          <nav className="mb-6 font-v2-sans text-xs text-white/55">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{service.navLabel}</span>
          </nav>
          <Badge className="mb-4 border-0 bg-white/12 font-v2-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm hover:bg-white/15">
            {service.navLabel}
          </Badge>
          <h1 className={cn(t.h1, "text-balance text-white")}>
            {service.title}{" "}
            <span className={t.accentItalic}>{service.titleAccent}</span>
          </h1>
          <p className={cn(t.heroLead, "mx-auto mt-5 max-w-xl")}>
            {service.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
            >
              <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Soft trust strip */}
      <section className="border-b border-border/70 bg-background">
        <div className="section-shell grid grid-cols-1 gap-8 py-12 sm:grid-cols-3">
          {service.byTheNumbers.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-card/60 px-4 py-6 text-center shadow-sm"
            >
              <p className={cn(t.stat, "text-primary")}>{stat.value}</p>
              <p className={cn(t.bodySm, "mt-1.5")}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad">
        <div className="section-shell">
          {service.galleryImages && service.galleryImages.length >= 3 ? (
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className={cn(t.eyebrow, "mb-3")}>About this service</p>
                <h2 className={cn(t.h2, "mb-6")}>
                  {service.title}{" "}
                  <span className="italic text-primary">{service.titleAccent}</span>
                </h2>
                {service.intro.map((p, i) => (
                  <p key={i} className={cn(t.body, "mb-4 last:mb-0")}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.galleryImages[0]}
                  alt={service.navLabel}
                  className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.galleryImages[1]}
                  alt=""
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.galleryImages[2]}
                  alt=""
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-2xl text-center">
              <p className={cn(t.eyebrow, "mb-3")}>About this service</p>
              <h2 className={cn(t.h2, "mb-6")}>
                {service.title}{" "}
                <span className="italic text-primary">{service.titleAccent}</span>
              </h2>
              {service.intro.map((p, i) => (
                <p key={i} className={cn(t.body, "mb-4 text-left last:mb-0")}>
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Before / After — large framed media block */}
      {service.beforeAfter && (
        <section className="section-pad surface-soft">
          <div className="section-shell max-w-5xl">
            <p className={cn(t.eyebrow, "mb-3 text-center")}>See the difference</p>
            <h2 className={cn(t.h2, "mb-10 text-center")}>
              Before &amp; <span className="italic text-primary">after</span>
            </h2>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-[0_28px_80px_rgba(43,33,24,0.14)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] md:min-h-[480px] md:aspect-auto md:h-[min(55vh,560px)]">
                <BeforeAfterSlider
                  beforeSrc={service.beforeAfter.before}
                  afterSrc={service.beforeAfter.after}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between p-4 sm:p-5">
                  <Badge className="rounded-full border-0 bg-espresso px-3.5 py-1.5 font-v2-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-md hover:bg-espresso">
                    Before
                  </Badge>
                  <Badge className="rounded-full border-0 bg-primary px-3.5 py-1.5 font-v2-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-md">
                    After
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-pad">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className={cn(t.eyebrow, "mb-3")}>How it works</p>
              <h2 className={t.h2}>
                Our <span className="italic text-primary">process</span>
              </h2>
              <p className={cn(t.lead, "mt-4 max-w-md")}>
                Every project follows a clear path so you always know what comes
                next.
              </p>
            </div>
            <ol className="flex flex-col gap-6">
              {service.processSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-v2-sans text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className={t.h4}>{step}</h3>
                    {service.processDescriptions?.[i] && (
                      <p className={cn(t.bodySm, "mt-2")}>
                        {service.processDescriptions[i]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad bg-espresso text-plaster">
        <div className="section-shell">
          <p className="mb-3 font-v2-sans text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Scope of work
          </p>
          <h2 className={cn(t.h2, "mb-10 text-white")}>
            What&apos;s <span className="italic text-primary">included</span>
          </h2>
          {groups.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group) => (
                <Card
                  key={group.label}
                  className="rounded-2xl border-white/10 bg-white/5 text-plaster"
                >
                  <CardContent className="p-6">
                    <p className="mb-4 font-v2-sans text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {group.label}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 font-v2-sans text-sm text-sage"
                        >
                          <span className="text-primary">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 font-v2-sans text-sm text-sage"
                >
                  <span className="text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Cost bands when published on live client page */}
      {service.costBands && service.costBands.length > 0 && (
        <section className="section-pad">
          <div className="section-shell">
            <p className={cn(t.eyebrow, "mb-3 text-center")}>Planning</p>
            <h2 className={cn(t.h2, "mb-4 text-center")}>
              Typical investment ranges
            </h2>
            <p className={cn(t.lead, "mx-auto mb-10 max-w-2xl text-center")}>
              Typical ranges for {service.navLabel.toLowerCase()} help you plan.
              Your actual quote depends on scope, materials, and site conditions.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {service.costBands.map((band) => (
                <Card key={band.label} className="rounded-2xl">
                  <CardContent className="flex flex-col gap-2 p-6">
                    <Badge variant="outline" className="w-fit">
                      {band.label}
                    </Badge>
                    <p className={cn(t.h3, "text-primary")}>{band.range}</p>
                    {band.notes && <p className={t.bodySm}>{band.notes}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs when present */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-pad surface-soft">
          <div className="section-shell max-w-3xl">
            <p className={cn(t.eyebrow, "mb-3 text-center")}>FAQs</p>
            <h2 className={cn(t.h2, "mb-8 text-center")}>
              Common questions
            </h2>
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {service.faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`s-faq-${i}`}
                  className="rounded-2xl border border-border bg-background px-5"
                >
                  <AccordionTrigger className="text-left font-v2-sans text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-v2-sans text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="section-shell">
            <p className={cn(t.eyebrow, "mb-3")}>Explore more</p>
            <h2 className={cn(t.h2, "mb-8")}>
              Related <span className="italic text-primary">services</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                  <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.heroImage}
                      alt={s.navLabel}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <CardContent className="p-5">
                      <h3 className={t.h4}>{s.navLabel}</h3>
                      <p className={cn(t.bodySm, "mt-2 line-clamp-2")}>
                        {s.cardDescription}
                      </p>
                      <span className="mt-3 inline-block font-v2-sans text-sm font-semibold text-primary">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title={`Start your ${service.navLabel.toLowerCase()} project`}
        description="Free consultation. Call us or send a message and we will walk through next steps."
      />
    </div>
  );
}
