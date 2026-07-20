"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { galleryItems } from "@/data/gallery";
import { t } from "@/components/v2/lib/typography";

const filters = [
  { key: "all", label: "All" },
  { key: "kitchen", label: "Kitchen" },
  { key: "bathroom", label: "Bathroom" },
  { key: "custom-homes", label: "Custom Homes" },
  { key: "remodeling", label: "Remodeling" },
] as const;

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");

  const items = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === active),
    [active]
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <Button
            key={f.key}
            type="button"
            variant={active === f.key ? "default" : "outline"}
            size="sm"
            className="rounded-full font-v2-sans text-sm font-semibold"
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover"
              style={{ aspectRatio: item.aspectRatio.replace("/", " / ") }}
            />
            <div className="flex flex-col gap-1 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className={cn(t.h4, "text-base")}>{item.title}</p>
                <Badge
                  variant="outline"
                  className="shrink-0 font-v2-sans text-xs capitalize"
                >
                  {item.category.replace("-", " ")}
                </Badge>
              </div>
              <p className={t.bodySm}>{item.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
