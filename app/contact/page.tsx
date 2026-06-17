import ContactPageContent from '@/components/contact/ContactPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NWS Custom Homes | Free Consultation',
  description: 'Get a free consultation with NWS Custom Homes. Call (281) 299-2309 or fill out our form. 5% off when you mention the website.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
