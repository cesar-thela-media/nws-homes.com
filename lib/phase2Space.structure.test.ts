/**
 * Phase 2 design polish — Space integration + visual shells; copy freeze spot-checks.
 * Run: bun test lib/phase2Space.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";

const root = join(import.meta.dir, "..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");

describe("phase 2 Space polish", () => {
  test("home keeps locked section order", () => {
    const page = read("app/(site)/page.tsx");
    const order = [
      "Hero",
      "BeforeAfterSection",
      "ServicesGrid",
      "CTA",
      "Testimonials",
      "ContactLead",
      "AreasStrip",
    ];
    let last = -1;
    for (const name of order) {
      const idx = page.indexOf(name);
      expect(idx).toBeGreaterThan(last);
      last = idx;
    }
  });

  test("Phase 1 copy freeze spot-checks still present", () => {
    const hero = read("components/v2/sections/Hero.tsx");
    expect(hero).toContain("dreams");
    expect(hero).toContain("Book now");

    const page = read("app/(site)/page.tsx");
    expect(page).toContain("Bring your dream home to life.");

    const contact = read("app/(site)/contact/page.tsx");
    expect(contact).toContain("Reach out to our contractors");

    const services = read("data/services.ts");
    expect(services).toContain("$15,000–$30,000");
  });

  test("real Shadcn Space block composition in shipped v2 sections", () => {
    const cta = read("components/v2/sections/CTA.tsx");
    expect(cta).toContain("@/components/shadcn-space/blocks/cta-01/cta");

    const faq = read("components/v2/sections/FAQPreview.tsx");
    expect(faq).toContain("@/components/shadcn-space/blocks/faq-01/faq");

    const marquee = read("components/v2/sections/AreasMarquee.tsx");
    expect(marquee).toContain("@/components/shadcn-space/animations/marquee");

    const header = read("components/v2/layout/SiteHeader.tsx");
    expect(header).toContain("navbar-08");
    expect(header).toContain("sticky");
    expect(header).toContain("handleScroll");

    const footer = read("components/v2/layout/SiteFooter.tsx");
    expect(footer).toContain("footer-02");
  });

  test("hubs share PageHero; service template stays Tailwind/v2", () => {
    expect(read("app/(site)/services/page.tsx")).toContain("PageHero");
    expect(read("app/(site)/gallery/page.tsx")).toContain("PageHero");
    expect(read("app/(site)/areas/page.tsx")).toContain("PageHero");
    expect(read("app/(site)/contact/page.tsx")).toContain("PageHero");
    // FAQs uses Space faq-01 header only (no dual PageHero + H2)
    expect(read("app/(site)/faqs/page.tsx")).toContain("FAQPreview");
    expect(read("app/(site)/faqs/page.tsx")).not.toContain("PageHero");

    const slug = read("app/(site)/services/[slug]/page.tsx");
    expect(slug).toContain("section-pad");
    expect(slug).toContain("hero-overlay-center");
    expect(slug).not.toContain("COLORS.");
    expect(slug).not.toContain("Ranges published for kitchen remodeling");
  });

  test("phase 2b: hero video + poster, SocialLinks, FadeIn system", () => {
    const hero = read("components/v2/sections/Hero.tsx");
    expect(hero).toContain("HERO_VIDEO");
    expect(hero).toContain("HERO_POSTER");
    expect(hero).toContain("mediaAssets");
    expect(hero).toContain("hero-14");
    expect(hero).toContain("SocialLinks");
    expect(hero).toContain("FadeIn");
    expect(hero).toContain("hero-overlay");
    // Restrained: no ken burns motion on hero media
    expect(hero).not.toContain("hero-media-kenburns");
    expect(hero).not.toContain("kenburns");

    const social = read("components/v2/lib/SocialLinks.tsx");
    expect(social).toContain("SOCIAL.facebook");
    expect(social).toContain("SOCIAL.instagram");
    expect(social).toContain("SOCIAL.houzz");

    expect(read("components/v2/layout/SiteFooter.tsx")).toContain("SocialLinks");
    expect(read("components/v2/sections/ContactLead.tsx")).toContain(
      "SocialLinks"
    );

    const fade = read("components/v2/lib/FadeIn.tsx");
    expect(fade).toContain("useReducedMotion");
    expect(fade).toContain("useInView");

    expect(read("components/BeforeAfterSection.tsx")).toContain("FadeIn");
    expect(read("components/v2/sections/PageHero.tsx")).toContain("FadeIn");
    expect(read("components/v2/sections/PageHero.tsx")).toContain(
      "page-hero-band"
    );
    expect(read("components/v2/sections/AreasStrip.tsx")).toContain("FadeIn");
    expect(read("components/v2/sections/FAQPreview.tsx")).toContain("FadeIn");

    const globals = read("app/globals.css");
    expect(globals).toContain(".hero-overlay");
    expect(globals).toContain(".page-hero-band");
    expect(globals).not.toContain("hero-media-kenburns");
  });

  test("restrained pass: home does not mount VideoCTA; v2 has no 5% promo or 500+ stats", () => {
    const home = read("app/(site)/page.tsx");
    expect(home).not.toContain("VideoCTA");

    const v2Video = read("components/v2/sections/VideoCTA.tsx");
    expect(v2Video).not.toContain("500+");
    expect(v2Video).not.toContain("4.9");
    expect(v2Video).not.toContain("5%");

    const shipFiles = [
      "app/(site)/page.tsx",
      "app/(site)/contact/page.tsx",
      "app/(site)/about/page.tsx",
      "app/(site)/gallery/page.tsx",
      "app/(site)/faqs/page.tsx",
      "app/(site)/areas/page.tsx",
      "app/(site)/services/page.tsx",
      "components/v2/sections/Hero.tsx",
      "components/v2/sections/ContactLead.tsx",
      "components/v2/sections/Testimonials.tsx",
      "components/v2/layout/SiteFooter.tsx",
      "data/services.ts",
      "data/faqs.ts",
      "data/testimonials.ts",
    ];
    for (const rel of shipFiles) {
      const src = read(rel);
      expect(src).not.toContain("5% off");
      expect(src).not.toMatch(/500\+\s*projects/i);
    }
  });

  test("B/A media region remains large", () => {
    const ba = read("components/BeforeAfterSection.tsx");
    expect(ba).toContain("Before");
    expect(ba).toContain("After");
    expect(ba.includes("56vh") || ba.includes("520px")).toBe(true);
  });

  test("Space FAQ hides default accordion chevron so only PlusIcon shows", () => {
    const faq = read("components/shadcn-space/blocks/faq-01/faq.tsx");
    expect(faq).toContain("PlusIcon");
    // Real hide for NWS AccordionTrigger (no data-slot on chevron)
    expect(faq).toContain("[&>svg:last-child]:hidden");
    // Must not rely on non-matching data-slot selector alone
    expect(faq).not.toMatch(
      /AccordionTrigger className="[^"]*data-\[slot=accordion-trigger-icon\]/
    );
  });
});

