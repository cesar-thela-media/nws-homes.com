"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const NavLink = ({
  item,
  onClick,
}: {
  item: NavigationSection;
  onClick?: () => void;
}) => {
  return (
    <li
      className={cn(
        "group flex items-center transition-all duration-500 ease-in-out w-fit",
        item.isActive ? "gap-3" : "gap-0 hover:gap-3",
      )}
    >
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out flex items-center",
          item.isActive
            ? "max-w-6 opacity-100"
            : "max-w-0 opacity-0 group-hover:max-w-6 group-hover:opacity-100",
        )}
      >
        <div className="w-6 h-0.5 rounded-full bg-foreground" />
      </div>
      <a
        href={item.href}
        onClick={onClick}
        className={cn(
          "text-2xl sm:text-3xl sm:leading-10 leading-8 font-medium transition-colors duration-300",
          item.isActive ? "text-foreground" : "text-foreground/80",
        )}
      >
        {item.name}
      </a>
    </li>
  );
};

export type NavigationSection = {
  name: string;
  href: string;
  isActive?: boolean;
};

interface NavbarProps {
  navigationData: NavigationSection[];
}

const Navbar = ({ navigationData }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 py-4 w-full">
        <nav className="flex items-center justify-between">
          <div className="flex items-center ">
            <a href="#">
              <Logo />
            </a>

            <Separator
              orientation="vertical"
              className="max-lg:hidden h-6 self-center! mx-5"
            />

            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="gap-6">
                {navigationData.map((navItem) => (
                  <NavigationMenuItem key={navItem.name}>
                    <NavigationMenuLink
                      href={navItem.href}
                      className={cn(
                        "p-0 text-base text-foreground hover:text-foreground/80 font-normal hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
                        navItem.isActive && "font-medium",
                      )}
                    >
                      {navItem.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="max-lg:hidden flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 py-2.5 px-5">
              <Phone size={16} />
              <span>(512) 203-0405</span>
            </a>
            <Button className="relative overflow-hidden group h-auto rounded-full px-5 py-2.5 cursor-pointer border border-foreground bg-foreground text-background shadow-none transition-all duration-300">
              <span className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-10 h-10 bg-background rounded-full scale-0 transition-transform duration-700 ease-in-out group-hover:scale-[18]" />
              <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">
                Contact Us
              </span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden relative">
              <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <AnimatePresence>
                  {menuOpen && (
                    <DropdownMenuPortal>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-40 backdrop-blur-sm"
                      />
                    </DropdownMenuPortal>
                  )}
                </AnimatePresence>
                <DropdownMenuTrigger className="rounded-full h-auto p-2.5 gap-2 border border-border cursor-pointer">
                      <Menu className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className="min-w-xs sm:min-w-sm bg-background py-8 px-6 shadow-2xl rounded-3xl border border-border -mt-12 z-50"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-foreground">
                        Menu
                      </p>
                      <Button variant="outline" onClick={() => setMenuOpen(false)} className="cursor-pointer rounded-full">
                        <X size={20} />
                      </Button>
                    </div>
                    <hr className="border-border" />
                    {/* Navigation */}
                    <ul className="flex flex-col gap-3.5 pb-4">
                      {navigationData.map((item, index) => (
                        <NavLink
                          key={index}
                          item={item}
                          onClick={() => setMenuOpen(false)}
                        />
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="flex items-center gap-2 py-2.5">
                        <Phone size={16} />
                        <span>(512) 203-0405</span>
                      </a>
                      <Button className="relative overflow-hidden group h-auto rounded-full px-5 py-2.5 cursor-pointer border border-foreground bg-foreground text-background shadow-none transition-all duration-300">
                        <span className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-10 h-10 bg-background rounded-full scale-0 transition-transform duration-700 ease-in-out group-hover:scale-[18]" />
                        <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">
                          Contact Us
                        </span>
                      </Button>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
