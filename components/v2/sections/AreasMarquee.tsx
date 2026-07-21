"use client";

/**
 * Space marquee strip for home areas cue — visual only; labels from data/areas.
 * @see components/shadcn-space/animations/marquee.tsx
 */
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { areas } from "@/data/areas";
import { MapPin } from "lucide-react";

export default function AreasMarquee() {
  return (
    <div className="border-y border-border/50 bg-secondary/40 py-3">
      <Marquee pauseOnHover className="[--duration:40s]">
        {areas.map((a) => (
          <span
            key={a.slug}
            className="mx-4 inline-flex items-center gap-2 font-v2-sans text-sm font-medium text-muted-foreground"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            {a.label}, {a.state}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
