import CTABanner from '@/components/shared/CTABanner';
import FAQBody from '@/components/faqs/FAQBody';
import { COLORS, FONTS } from '@/lib/constants';
import { faqs } from '@/data/faqs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | NWS Custom Homes and Remodeling',
  description: 'Answers to common questions about custom home building, remodeling timelines, pricing, permits, and service areas in Richmond, TX.',
};

export default function FAQsPage() {
  return (
    <main>

      {/* ── FAQ body: sticky sidebar + accordion ── */}
      <FAQBody faqs={faqs} />

      <CTABanner
        heading="Ready to Get Started?"
        body="Free consultation. We'll talk through your project and give you a firm quote."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </main>
  );
}
