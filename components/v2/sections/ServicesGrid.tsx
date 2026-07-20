"use client";

import Link from "next/link";
import {
  Bath,
  Building2,
  Car,
  DoorOpen,
  House,
  Layers,
  LayoutGrid,
  LucideIcon,
  PlusSquare,
  ShowerHead,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  house: House,
  kitchen: UtensilsCrossed,
  bath: Bath,
  home: Building2,
  shower: ShowerHead,
  tub: Bath,
  addition: PlusSquare,
  basement: Layers,
  garage: Car,
  openplan: LayoutGrid,
};

const topServices = services.slice(0, 6);

type ServicesGridProps = {
  /** Show all services instead of top 6 */
  all?: boolean;
  title?: string;
  subtitle?: string;
  showCta?: boolean;
};

export default function ServicesGrid({
  all = false,
  title = "What we build for you",
  subtitle,
  showCta = true,
}: ServicesGridProps) {
  const list = all ? services : topServices;

  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4"
            >
              <Badge
                variant="outline"
                className="h-auto px-3 py-1 font-v2-sans text-xs font-semibold uppercase tracking-[0.14em]"
              >
                Services
              </Badge>
              <h2 className={cn(t.h2, "text-center")}>{title}</h2>
              {subtitle && (
                <p className={cn(t.lead, "text-center")}>{subtitle}</p>
              )}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {list.map((service) => {
                const Icon = iconMap[service.iconType] ?? DoorOpen;
                return (
                  <motion.div
                    key={service.slug}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Link href={`/services/${service.slug}`} className="group block h-full">
                      <Card className="h-full overflow-hidden border-0 py-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-40 w-full overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={service.heroImage}
                            alt={service.navLabel}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                          <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                            <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                        <CardContent className="flex flex-col gap-2 px-6 py-5">
                          <h3 className={t.h4}>{service.navLabel}</h3>
                          <p className={cn(t.bodySm, "line-clamp-2")}>
                            {service.cardDescription}
                          </p>
                          <span className="mt-1 font-v2-sans text-sm font-semibold text-primary">
                            Learn more →
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {showCta && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-center justify-center gap-5"
              >
                <p className={t.bodySm}>
                  One crew. Every trade. Fixed-price quotes before we start.
                </p>
                <Button
                  asChild
                  className="h-auto cursor-pointer rounded-full px-5 py-2.5 font-v2-sans text-sm font-semibold shadow-xs"
                >
                  <Link href="/services">View all services</Link>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
