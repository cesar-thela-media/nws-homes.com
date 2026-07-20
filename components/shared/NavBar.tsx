"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const customHome = {
  label: "Custom Home Building",
  href: "/services/custom-home-building",
};
const remodelingLinks = services
  .filter((s) => s.slug !== "custom-home-building")
  .map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` }));

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services" },
  { label: "Custom Home Building", href: "/services/custom-home-building" },
  ...remodelingLinks,
  { label: "Gallery", href: "/gallery" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const servicesActive = pathname.startsWith("/services");
  const galleryActive = pathname.startsWith("/gallery");

  const navLinkClass = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1 border-b-2 pb-0.5 font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors",
      active
        ? "border-primary text-primary"
        : "border-transparent text-espresso/70 hover:text-espresso"
    );

  return (
    <nav className="sticky top-0 z-50 flex h-[72px] items-center border-b border-sage/15 bg-plaster/96 px-5 backdrop-blur-md lg:px-20">
      <Link href="/" className="flex shrink-0 items-center no-underline">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nws-logo.png"
          alt="NWS Custom Homes"
          className="block h-9 w-auto object-contain lg:h-[46px]"
        />
      </Link>

      {/* Desktop center nav */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(navLinkClass(servicesActive), "outline-none")}
          >
            Services
            <ChevronDown className="h-3 w-3 opacity-70" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-[520px] rounded-2xl border-sage/15 p-4 shadow-xl"
          >
            <div className="mb-2 px-1">
              <Link
                href="/services"
                className="font-sans text-[13px] font-semibold text-primary no-underline hover:opacity-80"
              >
                View All Services →
              </Link>
            </div>
            <DropdownMenuSeparator />
            <div className="grid grid-cols-2 gap-x-4 pt-2">
              <div>
                <DropdownMenuLabel className="px-2 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                  New Construction
                </DropdownMenuLabel>
                <DropdownMenuItem asChild className="cursor-pointer rounded-lg">
                  <Link href={customHome.href}>{customHome.label}</Link>
                </DropdownMenuItem>
              </div>
              <div>
                <DropdownMenuLabel className="px-2 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-sage">
                  Remodeling & Renovation
                </DropdownMenuLabel>
                {remodelingLinks.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    asChild
                    className="cursor-pointer rounded-lg"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/gallery" className={navLinkClass(galleryActive)}>
          Gallery
        </Link>
        <Link href="/areas" className={navLinkClass(isActive("/areas"))}>
          Areas
        </Link>
        <Link href="/faqs" className={navLinkClass(isActive("/faqs"))}>
          FAQs
        </Link>
        <Link href="/about" className={navLinkClass(isActive("/about"))}>
          About
        </Link>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-2.5 lg:gap-5">
        <div className="hidden items-center gap-5 lg:flex">
          <Button asChild size="sm" className="h-10 px-5 text-[13px]">
            <Link href="/contact">Free Consultation</Link>
          </Button>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-1.5 font-sans text-[13px] text-espresso no-underline"
          >
            <Phone className="h-3.5 w-3.5 text-sage" />
            {CONTACT.phone}
          </a>
        </div>

        <Button
          asChild
          size="icon"
          variant="outline"
          className="h-[38px] w-[38px] border-sage/25 bg-plaster lg:hidden"
        >
          <a href={CONTACT.phoneHref} aria-label="Call us">
            <Phone className="h-4 w-4 text-primary" />
          </a>
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-full border-0 p-0 sm:max-w-md">
            <SheetHeader className="border-b border-sage/15 px-5 py-5 text-left">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nws-logo.png"
                alt="NWS Custom Homes"
                className="h-9 w-auto object-contain"
              />
            </SheetHeader>
            <div className="flex flex-col px-5 pt-2">
              {mobileLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "border-b border-sage/12 py-3.5 font-sans text-base no-underline",
                      pathname === link.href
                        ? "font-semibold text-primary"
                        : "font-normal text-espresso"
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3 p-5 pt-7">
              <SheetClose asChild>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
              </SheetClose>
              <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary">
                <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
