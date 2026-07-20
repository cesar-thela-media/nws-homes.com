import type { Metadata } from "next";
import ContactLead from "@/components/v2/sections/ContactLead";
import CTA from "@/components/v2/sections/CTA";
import { t } from "@/components/v2/lib/typography";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | NWS Custom Homes",
  description:
    "Request a free consultation for custom homes and remodels across Richmond, Katy & Sugar Land.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="border-b border-border/60 bg-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
          <p className={cn(t.eyebrow, "mb-3")}>Contact</p>
          <h1 className={cn(t.h1, "max-w-2xl")}>
            Let&apos;s talk about your project
          </h1>
          <p className={cn(t.lead, "mt-4 max-w-xl")}>
            Free on-site consultation. Fixed-price quote within 5 business days.
            Mention the website for 5% off your project.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              📞 {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              ✉️ {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
      <ContactLead />
      <CTA
        title="Prefer to call?"
        description="Speak with our team directly — same people who run your project from start to finish."
      />
    </div>
  );
}
