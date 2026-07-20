"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type NavigationSection = {
  name: string;
  href: string;
  isActive?: boolean;
};

const navigationData: NavigationSection[] = [
  {
    name: "Home",
    href: "#",
    isActive: true,
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Contacts us",
    href: "#",
  },
];

export type NavLinkItem = {
  name: string;
  label?: string;
  href: string;
  isActive?: boolean;
};

export interface NavLinkProps {
  item: NavLinkItem;
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  return (
    <li className="flex items-center group w-fit cursor-pointer">
      <div
        className={cn(
          "h-0.5 bg-blue-500 transition-all duration-300",
          item.isActive ? "w-6 mr-4" : "w-0 group-hover:w-6 group-hover:mr-4",
        )}
      />
      <a
        href={item.href}
        className={cn(
          "text-2xl font-medium rounded-full transition-colors",
          item.isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary",
        )}
      >
        {item.name}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="bg-gray-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto sm:px-16 px-4 py-2 w-full">
          {/* Announcement bar  */}
          <div className="flex items-center gap-8 justify-between">
            <div className="flex items-center gap-8 w-full justify-center sm:justify-start">
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:text-white/70"
              >
                <Mail size={16} />
                <p className="text-xs">support@gleamer.com</p>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:text-white/70"
              >
                <MapPin size={16} />
                <p className="text-xs">Blane Street, Manchester</p>
              </a>
            </div>

            <div className="hidden text-white sm:flex items-center gap-4">
              <a href="#" className="hover:text-white/70">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-white/70">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-white/70">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-16 px-4 py-4 w-full border-b border-white/10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <Logo />
            </a>
            <div className="h-4 w-px bg-border mx-4 max-lg:hidden" />
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="flex items-center gap-6">
                {navigationData.map((navItem) => (
                  <NavigationMenuItem key={navItem.name}>
                    <NavigationMenuLink
                      href={navItem.href}
                      className={cn(
                        "p-0 text-base font-normal hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent transition-colors",
                        navItem.isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground/70",
                      )}
                    >
                      {navItem.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center max-lg:hidden">
            <a
              href="tel:+1 0239 0310"
              className="flex items-center gap-2 px-5 py-2.5 hover:text-foreground/70"
            >
              <Phone size={16} />
              <span>+1 0239 0310</span>
            </a>
            <Button className="h-auto px-5 py-2.5 rounded-lg text-white bg-blue-500 hover:bg-blue-400 cursor-pointer hover:translate-y-0.5 transition-transform duration-300">
              Book a Service
            </Button>
          </div>

          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="min-lg:hidden flex items-center gap-3 h-auto p-2.5 rounded-lg font-normal hover:cursor-pointer border"
          >
            <Menu size={16} strokeWidth={2} />
          </Button>
        </nav>
      </div>
        <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="bg-background p-6 overflow-auto no-scrollbar border-none flex flex-col gap-12"
          >
            {/* Header / Close Button */}
            <SheetHeader>
              <SheetClose className="absolute top-4 right-4 rounded-lg dark:bg-white bg-black dark:text-black text-white p-2 cursor-pointer">
                <X size={24} />
              </SheetClose>
            </SheetHeader>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-col gap-4">
                {navigationData?.map((item, index) => (
                  <SheetClose key={index} className="w-fit">
                    <NavLink item={item} />
                  </SheetClose>
                ))}
              </ul>
            </nav>

            {/* Contact & Socials */}
            <div className="flex flex-col gap-12 text-foreground">
              {/* Contact */}
              <div className="flex flex-col gap-1">
                <p className="text-lg font-normal text-muted-foreground">
                  Contact
                </p>
                <a
                  href="#"
                  className="text-base font-medium hover:text-foreground/70"
                >
                  hello@shadcnspace.com
                </a>
                <a
                  href="#"
                  className="text-base font-medium hover:text-foreground/70"
                >
                  +1-212-456-7890
                </a>
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-1">
                <p className="text-lg font-normal text-muted-foreground">
                  Socials
                </p>
                <a
                  href="#"
                  className="text-base font-medium hover:text-foreground/70"
                >
                  X / Twitter
                </a>
                <a
                  href="#"
                  className="text-base font-medium hover:text-foreground/70"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-base font-medium hover:text-foreground/70"
                >
                  Instagram
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
    </header>
  );
};

export default Navbar;
