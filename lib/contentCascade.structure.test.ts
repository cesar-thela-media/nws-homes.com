/**
 * Content cascade pass: remaining services + hubs drive real shipped files.
 * Run: bun test lib/contentCascade.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";
import { services } from "../data/services";
import { faqs } from "../data/faqs";

const root = join(import.meta.dir, "..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");

describe("content cascade (services + hubs)", () => {
  test("catalog has 11 services with non-empty intro and card text", () => {
    expect(services.length).toBe(11);
    for (const s of services) {
      expect(s.slug.length).toBeGreaterThan(0);
      expect(s.intro.length).toBeGreaterThan(0);
      expect(s.cardDescription.trim().length).toBeGreaterThan(20);
      expect(s.heroSubtitle.trim().length).toBeGreaterThan(20);
      expect(s.livePath).toMatch(/^\/services\//);
    }
  });

  test("non-kitchen services include live-derived phrases in data file", () => {
    const src = read("data/services.ts");
    expect(src).toContain("We build your");
    expect(src).toContain("Transform your home");
    expect(src).toContain("Give your bathroom");
    expect(src).toContain("$10,000–$25,000");
    expect(src).toContain("Renovate your home");
    expect(src).toContain("From ~$50,000");
    expect(src).toContain("Upgrade your bathroom");
    expect(src).toContain("Revamp your bathroom");
    expect(src).toContain("Seamlessly add space");
    expect(src).toContain("$40,000–$80,000");
    expect(src).toContain("Maximize your home");
    expect(src).toContain("Turn your garage");
    expect(src).toContain("Create a bright, open");
    // Do not reintroduce live website 5% promo
    expect(src).not.toContain("5% off");
  });

  test("kitchen still keeps live cost bands from prior pass", () => {
    const k = services.find((s) => s.slug === "kitchen-remodeling");
    expect(k).toBeDefined();
    expect(k!.costBands?.some((b) => b.range.includes("15,000"))).toBe(true);
  });

  test("hub pages use live-derived framing", () => {
    const about = read("app/(site)/about/page.tsx");
    expect(about).toContain("Your go-to home builders");
    expect(about).toContain("2007");

    const servicesPage = read("app/(site)/services/page.tsx");
    expect(servicesPage).toContain("Our quality services");
    expect(servicesPage).toContain("square one");

    const areas = read("app/(site)/areas/page.tsx");
    expect(areas).toContain("promptly");

    const gallery = read("app/(site)/gallery/page.tsx");
    expect(gallery).toContain("See our work");

    const faqsPage = read("app/(site)/faqs/page.tsx");
    expect(faqsPage).toContain("Frequently asked questions");
  });

  test("FAQs map live topics and useful answers", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(14);
    const q = faqs.map((f) => f.question.toLowerCase()).join(" | ");
    expect(q).toContain("what services do you offer");
    expect(q).toContain("kitchen");
    expect(q).toContain("bathroom");
    expect(q).toContain("financing");
    expect(q).toContain("quote");
    expect(faqs.every((f) => f.answer.length > 40)).toBe(true);
  });

  test("home CONTENT-SPEC order unchanged", () => {
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

  test("audit doc covers cascade surfaces", () => {
    const doc = read("docs/LIVE-TO-SHIPPED-COPY.md");
    expect(doc).toContain("Cascade pass");
    expect(doc).toContain("custom-home-building");
    expect(doc).toContain("garage-conversions");
    expect(doc).toContain("open-concept");
    expect(doc).toContain("About");
    expect(doc).toContain("Gallery");
  });

  test("service detail cost-band lead is service-agnostic (not kitchen-only)", () => {
    const page = read("app/(site)/services/[slug]/page.tsx");
    expect(page).toContain("service.navLabel");
    expect(page).toContain("Typical ranges for");
    expect(page).not.toContain("Ranges published for kitchen remodeling");
  });
});

