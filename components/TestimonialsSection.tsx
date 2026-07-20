'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "They handled every hiccup calmly and finished ahead of schedule. The kitchen is beyond what we imagined.",
    name: "Allison C.", city: "Richmond, TX", initial: "A", featured: false,
  },
  {
    quote: "From first meeting to final walkthrough, total transparency. Our home is exactly what we dreamed.",
    name: "Michael R.", city: "Katy, TX", initial: "M", featured: true,
  },
  {
    quote: "Months after closing they still answered every call. That's not customer service. That's integrity.",
    name: "Sarah T.", city: "Sugar Land, TX", initial: "S", featured: false,
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M7 0L8.6 4.8H13.7L9.6 7.8L11.1 12.7L7 9.7L2.9 12.7L4.4 7.8L0.3 4.8H5.4L7 0Z" fill="#B5552D" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function TestimonialCard({ quote, name, city, featured, isMobile }: {
  quote: string; name: string; city: string; featured?: boolean; isMobile?: boolean;
}) {
  return (
    <Card
      className={cn(
        "relative flex flex-col rounded-[20px] border-0 bg-white",
        featured && !isMobile && "-translate-y-4 z-10 shadow-[0_24px_64px_rgba(43,33,24,0.16)] ring-1 ring-primary/20",
        !(featured && !isMobile) && "shadow-[0_4px_24px_rgba(43,33,24,0.07)]"
      )}
    >
      <CardContent className="flex flex-1 flex-col p-7 pt-8">
        <div className="mb-3.5 flex gap-[3px]">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="mb-[18px] flex-1 font-serif text-sm italic leading-relaxed text-espresso">
          &ldquo;{quote}&rdquo;
        </p>
        <Separator className="mb-4 bg-sage/20" />
        <div className="flex items-center gap-2.5">
          <Avatar className="h-9 w-9 bg-[#E8E2D9]">
            <AvatarFallback className="bg-[#E8E2D9] font-sans text-xs font-semibold text-espresso">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="m-0 font-sans text-[13px] font-semibold leading-tight text-espresso">{name}</p>
            <p className="m-0 font-sans text-xs leading-tight text-sage">{city}</p>
          </div>
          <a
            href="https://g.page/r/CRyZ8e5jvBiVEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="Google review"
          >
            <GoogleIcon />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div style={{ padding: isMobile ? "56px 24px" : "96px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "58fr 42fr",
            gap: isMobile ? "48px" : "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Testimonials */}
          <div>
            <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "11px", color: "#B5552D", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
              WORD TRAVELS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: isMobile ? "36px" : "clamp(40px, 3.5vw, 56px)",
                color: "#2B2118", lineHeight: 1.1,
                marginBottom: isMobile ? "32px" : "48px",
              }}
            >
              Our Clients Do
              <br />
              the Talking.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} isMobile={isMobile} />
              ))}
            </div>
          </div>

          {/* RIGHT — CTA Panel */}
          <div
            style={{
              backgroundColor: "#2B2118", borderRadius: "24px",
              padding: isMobile ? "32px 24px" : "48px 40px",
              position: "relative", overflow: "hidden",
            }}
          >

            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: isMobile ? "30px" : "clamp(32px, 3vw, 44px)",
                color: "white", lineHeight: 1.15, marginBottom: "16px",
                position: "relative", zIndex: 1,
              }}
            >
              Let&apos;s Walk Your
              <br />
              Floor Plan.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "14px", color: "#9A9B8C", lineHeight: 1.6,
                marginBottom: "32px", position: "relative", zIndex: 1,
              }}
            >
              Free on-site consultation, and 5% off when you mention the website.
            </p>

            <form action="/contact" method="GET" className="relative z-[1]">
              <div className="mb-6 border-b border-white/20 pb-3">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="h-auto rounded-none border-0 bg-transparent px-0 py-0 text-sm text-white shadow-none placeholder:text-white/40 focus-visible:ring-0"
                />
              </div>
              <div className="mb-6 border-b border-white/20 pb-3">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="h-auto rounded-none border-0 bg-transparent px-0 py-0 text-sm text-white shadow-none placeholder:text-white/40 focus-visible:ring-0"
                />
              </div>
              <div className="relative mb-6">
                <select
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/20 bg-transparent px-[18px] py-3.5 font-sans text-sm text-sage outline-none"
                >
                  <option value="" disabled>Service Needed</option>
                  <option value="custom-home-building">Custom Home Building</option>
                  <option value="kitchen-remodeling">Kitchen Remodeling</option>
                  <option value="bathroom-remodeling">Bathroom Remodeling</option>
                  <option value="whole-home-remodeling">Whole Home Remodeling</option>
                  <option value="room-additions">Room Additions</option>
                  <option value="shower-remodel">Shower Remodel</option>
                  <option value="bathtub-remodel">Bathtub Remodel</option>
                  <option value="basement-remodeling">Basement Finishing</option>
                  <option value="garage-conversions">Garage Conversions</option>
                  <option value="open-concept">Open Concept</option>
                </select>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2" aria-hidden>
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#9A9B8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <Button asChild size="lg" className="mb-5 w-full">
                <Link href="/contact">Book My Consultation</Link>
              </Button>
              <p className="text-center font-sans text-xs text-sage">
                Mon–Fri 8–6 &nbsp;·&nbsp; Sat 8–12 &nbsp;·&nbsp; Richmond, TX
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
