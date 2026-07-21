import { t } from "@/components/v2/lib/typography";
import FadeIn from "@/components/v2/lib/FadeIn";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Shared hub page hero shell (Space-inspired max-width + gradient band).
 * Copy is passed in from pages — frozen Phase-1 strings stay on page files.
 * Phase 2b: page-hero-band utility + fade reveal.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className,
}: PageHeroProps) {
  return (
    <div className={cn("page-hero-band", className)}>
      <div className="section-shell py-14 lg:py-20">
        <FadeIn y={20}>
          <p className={cn(t.eyebrow, "mb-3")}>{eyebrow}</p>
          <h1 className={cn(t.h1, "max-w-2xl text-balance")}>{title}</h1>
          {lead ? (
            <p className={cn(t.lead, "mt-5 max-w-2xl")}>{lead}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </FadeIn>
      </div>
    </div>
  );
}
