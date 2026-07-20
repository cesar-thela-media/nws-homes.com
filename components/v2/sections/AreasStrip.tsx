import Link from "next/link";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { areas } from "@/data/areas";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

type AreasStripProps = {
  /** Compact strip vs full page grid */
  compact?: boolean;
  title?: string;
};

export default function AreasStrip({
  compact = true,
  title = "Areas we serve",
}: AreasStripProps) {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8 flex flex-col items-center gap-3 text-center md:mb-12">
          <Badge
            variant="outline"
            className="h-auto px-3 py-1 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Service area
          </Badge>
          <h2 className={cn(t.h2, "text-center")}>{title}</h2>
          <p className={cn(t.lead, "max-w-xl text-center")}>
            Based in Richmond, TX — serving Fort Bend County and the West Side
            of Houston since 2007.
          </p>
        </div>

        <div
          className={
            compact
              ? "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {areas.map((area) => (
            <Link key={area.slug} href="/areas" className="group block">
              {compact ? (
                <Card className="h-full transition-all duration-200 hover:border-primary/40 hover:shadow-md">
                  <CardContent className="flex items-center gap-2 p-4">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="truncate font-v2-sans text-sm font-semibold text-foreground group-hover:text-primary">
                        {area.label}
                      </p>
                      <p className="font-v2-sans text-xs text-muted-foreground">{area.state}</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-full overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={area.image}
                      alt={`${area.label}, ${area.state}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-2 p-5">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <h3 className={t.h4}>
                        {area.label}, {area.state}
                      </h3>
                    </div>
                    {area.tagline && (
                      <p className="font-v2-sans text-sm font-semibold text-primary">
                        {area.tagline}
                      </p>
                    )}
                    <p className={t.bodySm}>{area.description}</p>
                  </CardContent>
                </Card>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
