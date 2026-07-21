import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/v2/layout/SiteHeader";
import SiteFooter from "@/components/v2/layout/SiteFooter";
import { HERO_POSTER } from "@/data/mediaAssets";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-v2-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NWS Custom Homes & Remodeling | Richmond, TX",
    template: "%s | NWS Custom Homes",
  },
  description:
    "Custom homes and whole-home remodels across Richmond, Katy & Sugar Land, crafted since 2007. Free consultation.",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`nws-v2 ${inter.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
    >
      {/* LCP: preload real client hero still (same-origin) */}
      <link rel="preload" as="image" href={HERO_POSTER} fetchPriority="high" />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
