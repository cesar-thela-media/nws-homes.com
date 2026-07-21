/**
 * Structural checks for visual polish pass: home section order + B/A framing.
 * Drives real source files — not reimplemented expectations.
 * Run: bun test lib/visualPolish.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";

const root = join(import.meta.dir, "..");

function read(rel: string) {
  return readFileSync(join(root, rel), "utf8");
}

describe("visual polish structure (shipped source)", () => {
  test("home keeps CONTENT-SPEC section order with v2 components", () => {
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
      expect(idx).toBeGreaterThan(-1);
      expect(idx).toBeGreaterThan(last);
      last = idx;
    }
    // Must not reintroduce legacy home tree
    expect(page).not.toContain("HeroSection");
    expect(page).not.toContain("ServicesSection");
    expect(page).not.toContain("ContactLeadHome");
  });

  test("home before/after has large media region and Before/After labels", () => {
    const ba = read("components/BeforeAfterSection.tsx");
    expect(ba).toContain("Before");
    expect(ba).toContain("After");
    expect(ba).toContain("BeforeAfterSlider");
    // Large framed media intent
    expect(ba.includes("lg:h-[min(52vh,520px)]") || ba.includes("min-h-[")).toBe(
      true
    );
    expect(ba).toContain("rounded-");
  });

  test("service detail uses v2/Tailwind language and framed B/A when pairs exist", () => {
    const slugPage = read("app/(site)/services/[slug]/page.tsx");
    expect(slugPage).toContain("@/components/v2/lib/typography");
    expect(slugPage).toContain("BeforeAfterSlider");
    expect(slugPage).toContain("Before");
    expect(slugPage).toContain("After");
    expect(slugPage).toContain("section-pad");
    expect(slugPage).toContain("md:h-[min(55vh,560px)]");
    // Shared UI + CONTACT is fine; forbid legacy COLORS/FONTS inline island
    expect(slugPage).toContain("CONTACT");
    expect(slugPage).not.toContain("COLORS.");
    expect(slugPage).not.toContain("FONTS.");
  });

  test("site chrome uses v2 header/footer", () => {
    const layout = read("app/(site)/layout.tsx");
    expect(layout).toContain("SiteHeader");
    expect(layout).toContain("SiteFooter");
    expect(layout).toContain("nws-v2");
  });
});
