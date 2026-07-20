import Navbar from "@/components/shadcn-space/blocks/hero-14/navbar";
import HeroSection from "@/components/shadcn-space/blocks/hero-14/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-14/navbar";

const navigationData: NavigationSection[] = [
  {
    name: "About Us",
    href: "#",
    isActive: true, 
  },
  {
    name: "Find a Doctor",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Health Blogs",
    href: "#",
  }
];

const HeroPage = () => {
  return (
    <div>
      <Navbar navigationData={navigationData} />
      <HeroSection />
    </div>
  );
};

export default HeroPage;
