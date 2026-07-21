"use client";

/**
 * NWS mid-page CTA — composes Shadcn Space cta-01 with frozen Phase-1 copy defaults.
 */
import SpaceCta from "@/components/shadcn-space/blocks/cta-01/cta";
import { CONTACT } from "@/lib/constants";

type CTAProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function CTA({
  title = "Bring your dream home to life.",
  description = "From minor upgrades to full renovations, our team guides you through the process from start to finish. Call now to speak with us.",
  className,
}: CTAProps) {
  return (
    <SpaceCta
      className={className}
      title={title}
      description={description}
      primaryLabel="Get in touch"
      primaryHref="/contact"
      secondaryLabel={`Call ${CONTACT.phone}`}
      secondaryHref={CONTACT.phoneHref}
    />
  );
}
