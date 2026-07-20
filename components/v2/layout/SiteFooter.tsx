import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";

const explore = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-plaster">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Conversion band — footer-02 style */}
          <div className="md:col-span-7">
            <h2 className={cn(t.h2, "mb-4 text-white")}>
              Ready to start your project?
            </h2>
            <p className="mb-6 max-w-lg font-v2-sans text-sm font-normal leading-relaxed text-sage sm:text-base">
              Free on-site consultation. Clear fixed-price quotes. One crew from first
              sketch to final walkthrough.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-auto rounded-full px-6 py-3 font-v2-sans text-sm font-semibold"
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-full border-white/25 bg-transparent px-6 py-3 font-v2-sans text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 font-v2-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-v2-sans text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 font-v2-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-v2-sans text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="mb-3 inline-flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nws-logo.png"
                alt="NWS Custom Homes"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="max-w-sm font-v2-sans text-sm text-sage">
              Building Fort Bend County since 2007. Richmond, TX.
            </p>
            <div className="mt-3 flex flex-col gap-1 font-v2-sans text-sm text-white/70">
              <a href={CONTACT.phoneHref} className="hover:text-primary">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
              <span>
                {CONTACT.hours.weekday} · {CONTACT.hours.saturday}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 font-v2-sans text-xs text-sage md:items-end">
            <p>© {year} NWS Custom Homes. All rights reserved.</p>
            <a
              href="https://www.instagram.com/nwshomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @nwshomes on Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
