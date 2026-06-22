import FAQBody from '@/components/faqs/FAQBody';
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
    </main>
  );
}
