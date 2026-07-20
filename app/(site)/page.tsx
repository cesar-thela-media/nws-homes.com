import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/shared/CTABanner";
import ContactLeadHome from "@/components/ContactLeadHome";
import AreasStripHome from "@/components/AreasStripHome";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BeforeAfterSection />
      <ServicesSection />
      <CTABanner
        heading="Bring your dream home to life."
        body="Talk with a local builder who answers the phone. Free consultation across Richmond, Katy, Sugar Land, and surrounding communities."
        primaryLabel="Free Consultation"
        primaryHref="/contact"
      />
      <TestimonialsSection />
      <ContactLeadHome />
      <AreasStripHome />
    </main>
  );
}
