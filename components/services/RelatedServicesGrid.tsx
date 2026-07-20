"use client";

import Link from "next/link";
import type { Service } from "@/lib/types";
import { cn } from "@/lib/utils";

function RelatedCard({ r }: { r: Service }) {
  return (
    <Link
      href={`/services/${r.slug}`}
      className={cn(
        "group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-[20px] bg-[#D8CFC4] no-underline",
        "shadow-[0_6px_24px_rgba(43,33,24,0.1)] transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(43,33,24,0.22)]"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={r.heroImage}
        alt={r.navLabel}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-espresso via-espresso/55 via-35% to-transparent" />
      <div className="relative z-[2] px-6 pb-[22px] pt-6">
        <p className="mb-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
          {r.navLabel.split(" ")[0].toUpperCase()}
        </p>
        <h3 className="mb-2.5 font-serif text-[21px] leading-tight text-white">{r.navLabel}</h3>
        <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-primary transition-transform group-hover:translate-x-1">
          Explore →
        </span>
      </div>
    </Link>
  );
}

export default function RelatedServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {services.map((r) => (
        <RelatedCard key={r.slug} r={r} />
      ))}
    </div>
  );
}
