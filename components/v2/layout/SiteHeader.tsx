"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  Hammer,
  Bath,
  ChefHat,
  Building2,
  Phone,
  TextAlignJustify,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const mainLinks = [
  { title: "Gallery", href: "/gallery" },
  { title: "Areas", href: "/areas" },
  { title: "FAQs", href: "/faqs" },
  { title: "About", href: "/about" },
];

const serviceIcons = [Home, Hammer, ChefHat, Bath, Building2, Hammer];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/nws-logo.png"
            alt="NWS Custom Homes"
            className="block h-9 w-auto object-contain lg:h-10"
          />
        </Link>

        {/* Desktop — Space navbar-08 style NavigationMenu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    "rounded-md px-3 py-2 font-v2-sans text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname === "/" ? "text-primary" : "text-foreground/80"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "bg-transparent font-v2-sans text-sm font-medium",
                  pathname.startsWith("/services") && "text-primary"
                )}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[480px] gap-1 p-3 sm:grid-cols-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services"
                      className="col-span-full mb-1 rounded-lg bg-primary/5 px-3 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-primary/10"
                    >
                      View all services →
                    </Link>
                  </NavigationMenuLink>
                  {services.slice(0, 8).map((s, i) => {
                    const Icon = serviceIcons[i % serviceIcons.length];
                    return (
                      <NavigationMenuLink asChild key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-3 rounded-lg p-3 no-underline transition-colors hover:bg-accent"
                        >
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>
                            <span className="block text-sm font-medium text-foreground">
                              {s.navLabel}
                            </span>
                            <span className="mt-0.5 line-clamp-1 block text-xs text-muted-foreground">
                              {s.heroSubtitle}
                            </span>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    );
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {mainLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2 font-v2-sans text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive(link.href) ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {CONTACT.phone}
          </a>
          <Button
            asChild
            size="sm"
            className="hidden rounded-full font-v2-sans text-sm font-semibold sm:inline-flex"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* Mobile sheet — Space pattern */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <TextAlignJustify className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm p-0">
              <SheetHeader className="border-b px-5 py-4 text-left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/nws-logo.png" alt="NWS" className="h-8 w-auto object-contain" />
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-5rem)]">
                <div className="flex flex-col gap-1 p-4">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                    >
                      Home
                    </Link>
                  </SheetClose>

                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent">
                      Services
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
                      <SheetClose asChild>
                        <Link
                          href="/services"
                          className="rounded-md px-3 py-2 text-sm text-primary hover:bg-accent"
                        >
                          All services
                        </Link>
                      </SheetClose>
                      {services.map((s) => (
                        <SheetClose asChild key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                          >
                            {s.navLabel}
                          </Link>
                        </SheetClose>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  {mainLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                      >
                        {link.title}
                      </Link>
                    </SheetClose>
                  ))}

                  <Separator className="my-3" />

                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-full">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </SheetClose>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a>
                  </Button>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
