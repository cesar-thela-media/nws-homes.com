"use client";

import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle?: string;
  breadcrumb: BreadcrumbItemType[];
  image?: string;
  variant?: "dark";
  layout?: "split" | "centered";
}

export default function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  titleAccent,
  subtitle,
  breadcrumb,
  image,
  variant,
  layout = "split",
}: PageHeroProps) {
  const dark = variant === "dark";
  const centered = layout === "centered";
  const bg = dark ? COLORS.espresso : COLORS.plaster;
  const headingColor = dark ? COLORS.white : COLORS.espresso;
  const subtitleColor = dark ? "rgba(255,255,255,0.6)" : COLORS.sage;
  const lineColor = dark ? "rgba(255,255,255,0.15)" : COLORS.sage;

  if (centered && image) {
    return (
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-espresso lg:min-h-[60vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={titleLine1}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-espresso/70" />
        <div className="relative z-[2] max-w-[800px] px-6 py-20 text-center lg:px-20 lg:py-[120px]">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.18em] text-primary lg:text-sm">
            {eyebrow}
          </p>
          <h1 className="mb-5 font-sans text-[44px] leading-[1.05] tracking-[-0.02em] text-white lg:text-[clamp(56px,6vw,96px)]">
            {titleLine1}{" "}
            <span className="italic text-primary">{titleAccent}</span>
          </h1>
          {subtitle && (
            <p className="mx-auto max-w-[500px] font-sans text-[15px] leading-relaxed text-white/60 lg:text-[17px]">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative overflow-hidden px-6 pb-12 pt-20 lg:px-20 lg:pb-20 lg:pt-[120px]"
      style={{ backgroundColor: bg }}
    >
      <svg
        className="pointer-events-none absolute left-16 top-20 z-0 hidden h-[300px] w-[300px] lg:block"
        style={{ opacity: dark ? 0.05 : 0.12 }}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M 60 0 L 0 0 L 0 60" fill="none" stroke={lineColor} strokeWidth="1.5" />
        <path d="M 240 300 L 300 300 L 300 240" fill="none" stroke={lineColor} strokeWidth="1.5" />
        <line x1="0" y1="32" x2="280" y2="32" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="0" y1="80" x2="280" y2="80" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="0" y1="128" x2="280" y2="128" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="32" y1="0" x2="32" y2="280" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="80" y1="0" x2="80" y2="280" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10" />
        <line x1="128" y1="0" x2="128" y2="280" stroke={lineColor} strokeWidth="0.7" strokeDasharray="4 10" />
      </svg>

      <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Breadcrumb className="mb-7">
            <BreadcrumbList>
              {breadcrumb.map((crumb, i) => (
                <BreadcrumbItem key={crumb.href}>
                  {i > 0 && <BreadcrumbSeparator className="text-sage/50" />}
                  {i === breadcrumb.length - 1 ? (
                    <BreadcrumbPage className="font-sans text-xs text-primary">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={crumb.href}
                        className="font-sans text-xs text-sage hover:text-espresso"
                      >
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.15em] text-primary">
            {eyebrow}
          </p>

          <h1
            className="m-0 font-sans text-[42px] leading-[1.02] tracking-[-0.02em] lg:text-[clamp(48px,4.5vw,80px)]"
            style={{ color: headingColor }}
          >
            <span className="block">{titleLine1}</span>
            <span className="block">
              {titleLine2 && <span>{titleLine2} </span>}
              <span className="italic text-primary">{titleAccent}</span>
            </span>
          </h1>

          {subtitle && (
            <p
              className="mt-6 max-w-[440px] font-sans text-base leading-relaxed"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </p>
          )}

          <div className="mt-7 h-0.5 w-12 bg-primary" />
        </div>

        <div className="relative h-[220px] overflow-hidden rounded-2xl bg-[#D8CFC4] lg:h-[420px] lg:rounded-3xl">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={titleLine1}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <svg
              className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 opacity-20"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path d="M60 10L10 50V110H110V50L60 10Z" stroke={COLORS.sage} strokeWidth="1.5" />
              <rect x="48" y="70" width="24" height="40" stroke={COLORS.sage} strokeWidth="1.5" />
            </svg>
          )}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-espresso/80 via-espresso/35 to-transparent" />
          <div className="absolute bottom-4 left-4 z-[2] lg:bottom-8 lg:left-8">
            <Badge>{eyebrow}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
