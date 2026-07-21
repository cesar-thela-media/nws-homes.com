/**
 * NWS footer — Space footer-02 conversion grid + link columns.
 * Copy frozen from Phase 1 (conversion band + contact facts).
 * @see components/shadcn-space/blocks/footer-02/footer.tsx
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";
import { t } from "@/components/v2/lib/typography";
import SocialLinks from "@/components/v2/lib/SocialLinks";
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
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Space footer-02 style conversion + columns */}
          <div className="grid grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-10 fill-mode-both duration-1000">
            <div className="col-span-12 md:col-span-7">
              <h2 className={cn(t.h2, "mb-5 text-white")}>
                Ready to start your project?
              </h2>
              <p className="mb-7 max-w-lg font-v2-sans text-sm leading-relaxed text-sage sm:text-base">
                Free consultation. Clear communication. A local team from first
                sketch to final walkthrough since 2007.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-full px-6 font-v2-sans text-sm font-semibold shadow-md"
                >
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/25 bg-transparent px-6 font-v2-sans text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:col-span-1 md:block" />
            <div className="col-span-6 md:col-span-2">
              <p className="mb-4 font-v2-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Explore
              </p>
              <ul className="flex flex-col gap-3">
                {explore.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block font-v2-sans text-sm text-white/60 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 md:col-span-2">
              <p className="mb-4 font-v2-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Services
              </p>
              <ul className="flex flex-col gap-3">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="block font-v2-sans text-sm text-white/60 transition-colors hover:text-primary"
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-10 fill-mode-both duration-1000 delay-100">
            <Separator className="bg-white/10" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
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
                <div className="mt-4 flex flex-col gap-1 font-v2-sans text-sm text-white/70">
                  <a href={CONTACT.phoneHref} className="hover:text-primary">
                    Office {CONTACT.phone}
                  </a>
                  <a href={CONTACT.phoneMobileHref} className="hover:text-primary">
                    Mobile {CONTACT.phoneMobile}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 md:text-right">
                <p className="mb-3 font-v2-sans text-xs text-sage">
                  © {year} NWS Custom Homes. All rights reserved.
                </p>
                <SocialLinks
                  variant="onDark"
                  className="md:justify-end"
                  showLabel
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
