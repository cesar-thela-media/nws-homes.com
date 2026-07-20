'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
  isMobile?: boolean;
}

function ServiceCard({ image, icon, title, description, href, featured, isMobile }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-[20px] no-underline transition-all duration-300",
        isMobile ? "h-[280px]" : featured ? "z-10 h-[480px] scale-[1.04] shadow-[0_0_0_6px_rgba(181,85,45,0.18),0_24px_64px_rgba(0,0,0,0.4)] ring-2 ring-primary" : "h-[420px] shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]",
        featured && !isMobile && "hover:scale-[1.07]",
        !featured && "hover:scale-[1.03]"
      )}
    >
      {featured && (
        <Badge className="absolute left-0 right-0 top-0 z-20 w-full justify-center rounded-none py-1.5 tracking-[0.18em]">
          MOST REQUESTED
        </Badge>
      )}

      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 900px) 100vw, 25vw"
        className="transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/75 via-30% to-transparent to-80%" />

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end",
          isMobile ? "p-5" : "p-7"
        )}
      >
        <div className="mb-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/12 backdrop-blur-sm">
          {icon}
        </div>
        <h3
          className={cn(
            "mb-1.5 font-sans leading-tight text-white",
            isMobile ? "text-lg" : "text-[22px]"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mb-3.5 font-sans text-[13px] leading-relaxed text-sage",
            isMobile && "hidden"
          )}
        >
          {description}
        </p>
        <span className="mt-1.5 inline-flex self-start rounded-full bg-primary px-5 py-2.5 font-sans text-xs font-semibold text-white shadow-md transition-all group-hover:bg-primary/90 group-hover:shadow-lg lg:mt-0">
          Explore â†’
        </span>
      </div>
    </Link>
  );
}

const NWS = '/nws';

const services = [
  {
    title: "Custom Home Building",
    description: "Architectural homes built around the way you live.",
    image: `${NWS}/custom-homes-4.jpeg`,
    href: "/services/custom-home-building",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L2 8H4V15H14V8H16L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="11" width="4" height="4" rx="0.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Kitchen Remodeling",
    description: "Beautiful kitchens designed for real life and real Texas families.",
    image: `${NWS}/kitchen-gallery-7.jpeg`,
    href: "/services/kitchen-remodeling",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="white" strokeWidth="1.5" />
        <path d="M2 8H16" stroke="white" strokeWidth="1.5" />
        <circle cx="6" cy="11" r="1" fill="white" />
        <circle cx="9" cy="11" r="1" fill="white" />
        <circle cx="12" cy="11" r="1" fill="white" />
        <path d="M6 4V2M9 4V2M12 4V2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Bathroom & Shower",
    description: "Spa-worthy bathrooms that feel like a retreat.",
    image: `${NWS}/bathroom-gallery-7.jpeg`,
    href: "/services/bathroom-remodeling",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9H14C14 12.3 11.3 15 8 15H10C6.7 15 4 12.3 4 9Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 9V5C4 3.9 4.9 3 6 3V3C7.1 3 8 3.9 8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 9H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Room Additions",
    description: "Seamless additions that add space and value.",
    image: `${NWS}/remodeling-3.jpeg`,
    href: "/services/room-additions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3L3 7V15H15V7L9 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="11" width="4" height="4" stroke="white" strokeWidth="1.5" />
        <path d="M15 7H17V15H15" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    featured: false,
  },
];

const stats = [
  { value: "500+", label: "Projects" },
  { value: "19", label: "Years" },
  { value: "9", label: "Cities Served" },
  { value: "4.9 / 5", label: "Average" },
];

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#2B2118", overflow: "hidden" }}>
        <div style={{ padding: isMobile ? "56px 24px 64px" : "80px 80px 96px" }}>

          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
              gap: isMobile ? "16px" : "64px",
              alignItems: "start",
              marginBottom: isMobile ? "36px" : "56px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "11px", color: "#B5552D", textTransform: "uppercase",
                  letterSpacing: "0.15em", marginBottom: "16px",
                }}
              >
                WHAT WE BUILD
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: isMobile ? "36px" : "clamp(40px, 3.1vw, 52px)",
                  color: "white", lineHeight: 1.05, margin: 0,
                }}
              >
                One Team. Every Trade.
                <br />
                Zero Chaos.
              </h2>
            </div>
            <div style={{ paddingTop: isMobile ? 0 : "64px", paddingLeft: isMobile ? 0 : "24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "15px", color: "#9A9B8C", lineHeight: 1.7,
                  maxWidth: "400px", margin: 0,
                }}
              >
                From first sketch to final walkthrough, one accountable crew handles
                design, permits, and construction.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? "12px" : "20px",
              alignItems: "end",
            }}
          >
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          background: "linear-gradient(180deg, #7B5C3A 0%, #6B4A28 25%, #8B6840 50%, #5A3C22 75%, #6B4A28 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 60px, rgba(0,0,0,0.04) 60px, rgba(0,0,0,0.04) 62px), repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            padding: isMobile ? "40px 24px" : "48px 80px",
            position: "relative", zIndex: 1,
            rowGap: isMobile ? "32px" : 0,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                borderLeft: isMobile ? (i % 2 === 1 ? "1px solid rgba(255,255,255,0.2)" : "none") : (i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none"),
                padding: "0 16px",
              }}
            >
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: isMobile ? "44px" : "clamp(48px, 4vw, 64px)", color: "white", lineHeight: 1 }}>
                {stat.value}
              </span>
              <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: "10px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
