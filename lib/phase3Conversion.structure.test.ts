/**
 * Phase 3 — lead path wiring + conversion href inventory + mobile chrome.
 * Run: bun test lib/phase3Conversion.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { CONTACT, SOCIAL } from "./constants";
import { getLeadWebhookUrl, submitLead } from "./submitLead";

const root = join(import.meta.dir, "..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");

describe("phase 3 conversion — lead path + CTAs", () => {
  test("constants expose real tel/mailto/social values", () => {
    expect(CONTACT.phoneHref).toMatch(/^tel:\d+$/);
    expect(CONTACT.phoneMobileHref).toMatch(/^tel:\d+$/);
    expect(CONTACT.email).toContain("@");
    expect(SOCIAL.facebook).toMatch(/^https:\/\//);
    expect(SOCIAL.instagram).toMatch(/^https:\/\//);
    expect(SOCIAL.houzz).toMatch(/^https:\/\//);
  });

  test("ContactLead submits via real submitLead and surfaces offline/success/error UX", () => {
    const lead = read("components/v2/sections/ContactLead.tsx");
    expect(lead).toContain("@/lib/submitLead");
    expect(lead).toContain("submitLead");
    expect(lead).toContain('source: "nws-contact"');
    expect(lead).toContain("mode === \"offline\"");
    expect(lead).toContain("lead-offline-note");
    expect(lead).toContain("lead-success");
    expect(lead).toContain("lead-error");
    expect(lead).toContain("lead-submit");
    expect(lead).toContain("setError(result.error)");
    expect(lead).not.toContain("5% off");
    expect(lead).toContain("CONTACT.phoneHref");
    expect(lead).toContain("CONTACT.phoneMobileHref");
    expect(lead).toContain("mailto:${CONTACT.email}");
  });

  test("shipped conversion surfaces use CONTACT/SOCIAL hrefs — no dead # CTAs", () => {
    const files = [
      "components/v2/layout/SiteHeader.tsx",
      "components/v2/layout/SiteFooter.tsx",
      "components/v2/sections/Hero.tsx",
      "components/v2/sections/CTA.tsx",
      "components/v2/sections/ContactLead.tsx",
      "app/(site)/contact/page.tsx",
      "app/(site)/page.tsx",
    ];
    for (const rel of files) {
      const src = read(rel);
      expect(src).not.toMatch(/href=["']#["']/);
    }

    const header = read("components/v2/layout/SiteHeader.tsx");
    expect(header).toContain("CONTACT.phoneHref");
    expect(header).toContain("mailto:${CONTACT.email}");
    expect(header).toContain('href="/contact"');
    expect(header).toContain("Sheet");
    expect(header).toContain("SheetTrigger");
    expect(header).toContain("Open menu");
    expect(header).toContain("CONTACT.phoneMobileHref");

    const footer = read("components/v2/layout/SiteFooter.tsx");
    expect(footer).toContain("CONTACT.phoneHref");
    expect(footer).toContain("CONTACT.phoneMobileHref");
    expect(footer).toContain("mailto:${CONTACT.email}");
    expect(footer).toContain("SocialLinks");

    const hero = read("components/v2/sections/Hero.tsx");
    expect(hero).toContain("CONTACT.phoneHref");
    expect(hero).toContain('href="/contact"');
    expect(hero).toContain("SocialLinks");

    const cta = read("components/v2/sections/CTA.tsx");
    expect(cta).toContain('primaryHref="/contact"');
    expect(cta).toContain("CONTACT.phoneHref");

    const contact = read("app/(site)/contact/page.tsx");
    expect(contact).toContain("CONTACT.phoneHref");
    expect(contact).toContain("CONTACT.phoneMobileHref");
    expect(contact).toContain("mailto:${CONTACT.email}");
    expect(contact).toContain("ContactLead");
  });

  test("mobile form controls use comfortable min heights in source", () => {
    const lead = read("components/v2/sections/ContactLead.tsx");
    expect(lead).toContain("h-11");
    expect(lead).toContain("h-12");
    expect(lead).toContain('type="email"');
    expect(lead).toContain('type="tel"');
    expect(lead).toContain("firstName");
    expect(lead).toContain("lastName");
    expect(lead).toContain("zip");
    expect(lead).toContain("service");
    expect(lead).toContain("message");
  });

  test("social constants match SocialLinks shipped wiring", () => {
    const social = read("components/v2/lib/SocialLinks.tsx");
    expect(social).toContain("SOCIAL.facebook");
    expect(social).toContain("SOCIAL.instagram");
    expect(social).toContain("SOCIAL.houzz");
    expect(SOCIAL.facebook).toContain("facebook.com");
    expect(SOCIAL.instagram).toContain("instagram.com");
    expect(SOCIAL.houzz).toContain("houzz.com");
  });

  test("contact map uses city-level embed only (no invented street)", () => {
    const contact = read("app/(site)/contact/page.tsx");
    expect(contact).toContain("maps.google.com/maps?q=Richmond");
    expect(contact).toContain("iframe");
    expect(contact).toContain(CONTACT.address);
    // Must not invent a street number
    expect(contact).not.toMatch(/\d{2,5}\s+\w+\s+(St|Ave|Rd|Blvd|Drive|Lane)/i);
  });

  test("submitLead real module: offline + webhook modes (staging-style mock)", async () => {
    const prev = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    try {
      delete process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      expect(getLeadWebhookUrl()).toBeUndefined();
      const offline = await submitLead({
        source: "nws-contact",
        email: "qa@example.com",
        phone: "2812992309",
        message: "phase3",
        submittedAt: new Date().toISOString(),
      });
      expect(offline.ok).toBe(true);
      if (offline.ok) expect(offline.mode).toBe("offline");

      process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL =
        "https://hooks.staging.example/nws-lead";
      const calls: { url: string; body: string; method: string }[] = [];
      const origFetch = globalThis.fetch;
      // @ts-expect-error test mock
      globalThis.fetch = async (url: string, init?: RequestInit) => {
        calls.push({
          url: String(url),
          body: String(init?.body || ""),
          method: String(init?.method || ""),
        });
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
      };
      try {
        const payload = {
          source: "nws-contact",
          firstName: "Pat",
          lastName: "Lee",
          name: "Pat Lee",
          email: "pat@example.com",
          phone: "7138846571",
          zip: "77406",
          service: "kitchen-remodeling",
          message: "Staging verify",
          submittedAt: "2026-07-22T00:00:00.000Z",
        };
        const webhook = await submitLead(payload);
        expect(webhook.ok).toBe(true);
        if (webhook.ok) expect(webhook.mode).toBe("webhook");
        expect(calls).toHaveLength(1);
        expect(calls[0].url).toBe(
          "https://hooks.staging.example/nws-lead"
        );
        expect(calls[0].method).toBe("POST");
        const parsed = JSON.parse(calls[0].body);
        expect(parsed.email).toBe("pat@example.com");
        expect(parsed.service).toBe("kitchen-remodeling");
        expect(parsed.source).toBe("nws-contact");
      } finally {
        globalThis.fetch = origFetch;
      }
    } finally {
      if (prev === undefined) delete process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      else process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL = prev;
    }
  });

  test("hero poster and video assets exist for mobile hero paint", () => {
    // Phase 5: real client still + local NWS hero video
    expect(existsSync(join(root, "public/nws/custom-homes-7.jpeg"))).toBe(
      true
    );
    expect(existsSync(join(root, "public/videos/nws-hero.mp4"))).toBe(true);
  });
});
