/**
 * Asserts live→better copy pass strings exist in shipped sources.
 * Run: bun test lib/liveCopy.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";

const root = join(import.meta.dir, "..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");

describe("live→shipped copy (home / kitchen / contact)", () => {
  test("home hero and section strings from live rewrite", () => {
    const hero = read("components/v2/sections/Hero.tsx");
    expect(hero).toContain("Let&apos;s build");
    expect(hero).toContain("dreams");
    expect(hero).toContain("Book now");
    expect(hero).toContain("custom-built or beautifully remodeled");

    const page = read("app/(site)/page.tsx");
    expect(page).toContain("Our quality services");
    expect(page).toContain("Bring your dream home to life.");
    expect(page).toContain("Hero");
    expect(page).toContain("BeforeAfterSection");
    expect(page).toContain("ServicesGrid");
    expect(page).toContain("ContactLead");
    expect(page).toContain("AreasStrip");

    const t = read("components/v2/sections/Testimonials.tsx");
    expect(t.toLowerCase()).toContain("check what our clients are saying");

    const areas = read("components/v2/sections/AreasStrip.tsx");
    expect(areas).toContain("promptly");
  });

  test("kitchen data keeps live cost bands and materials FAQ", () => {
    const services = read("data/services.ts");
    const kStart = services.indexOf("slug: 'kitchen-remodeling'");
    const kEnd = services.indexOf("slug: 'bathroom-remodeling'");
    expect(kStart).toBeGreaterThan(-1);
    expect(kEnd).toBeGreaterThan(kStart);
    const kSlice = services.slice(kStart, kEnd);
    expect(kSlice).toContain("Improve the heart");
    expect(kSlice).toContain("$15,000–$30,000");
    expect(kSlice).toContain("$30,000–$60,000");
    expect(kSlice).toContain("$60,000+");
    expect(kSlice).toContain("How do I choose the right materials?");
    expect(kSlice).toContain("4 and 10 weeks");
    expect(kSlice).not.toContain("5% off");
  });

  test("contact page and lead match live framing without bad promos", () => {
    const contact = read("app/(site)/contact/page.tsx");
    expect(contact).toContain("Reach out to our contractors");
    expect(contact).toContain("Start your project");
    expect(contact).toContain("CONTACT.phone");
    expect(contact).not.toContain("5%");

    const lead = read("components/v2/sections/ContactLead.tsx");
    expect(lead).toContain("looking forward to working with you");
    expect(lead).toContain("Reach out to our contractors");
    expect(lead).not.toContain("5% off");
  });

  test("side-by-side audit doc exists and covers three surfaces", () => {
    const doc = read("docs/LIVE-TO-SHIPPED-COPY.md");
    expect(doc).toContain("## Home");
    expect(doc).toContain("## Kitchen");
    expect(doc).toContain("## Contact");
    expect(doc).toContain("Let");
    expect(doc).toContain("$15,000");
    expect(doc).toContain("Reach out to our contractors");
  });
});
