/**
 * Phase 4 SEO cutover — map, meta, redirects (ready-when-needed).
 * Drives real modules: data/seoCutover.ts, data/seoRedirects.mjs, next.config, pages.
 * Run: bun test lib/phase4Seo.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { join } from "path";
import {
  CITY_STRATEGY,
  GALLERY_STRATEGY,
  cutoverEntries,
  getMetaForRoute,
  getRedirectRules,
  mvpPageMeta,
} from "@/data/seoCutover";
import { permanentRedirects } from "../data/seoRedirects.mjs";
import { services } from "@/data/services";

const root = join(import.meta.dir, "..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");

describe("phase 4 SEO cutover", () => {
  test("decisions recorded: cities hub-only, gallery filters + aliases", () => {
    expect(CITY_STRATEGY).toBe("hub-only-redirects");
    expect(GALLERY_STRATEGY).toBe("filters-with-seo-aliases");
    const doc = read("docs/SEO-CUTOVER.md");
    expect(doc.toLowerCase()).toContain("hub-only");
    expect(doc.toLowerCase()).toContain("gallery");
    expect(doc).toContain("seoCutover.ts");
  });

  test("cutover map covers hubs, 11 services, 8 cities, 4 galleries", () => {
    const hubs = cutoverEntries.filter((e) => e.group === "hub");
    const svc = cutoverEntries.filter((e) => e.group === "service");
    const cities = cutoverEntries.filter((e) => e.group === "city");
    const galleries = cutoverEntries.filter((e) => e.group === "gallery");

    expect(hubs.length).toBeGreaterThanOrEqual(6);
    expect(svc).toHaveLength(11);
    expect(cities).toHaveLength(8);
    expect(galleries).toHaveLength(4);

    // Every entry has destination
    for (const e of cutoverEntries) {
      expect(e.livePath.length).toBeGreaterThan(0);
      expect(e.destination.length).toBeGreaterThan(0);
      expect(["page", "redirect"]).toContain(e.type);
    }

    // 8 live city paths present
    const cityPaths = cities.map((c) => c.livePath);
    for (const p of [
      "/sugar-land-tx/",
      "/katy-tx/",
      "/fulshear-tx/",
      "/cinco-ranch-tx/",
      "/rosenberg-tx/",
      "/weston-lakes-tx/",
      "/west-side-of-houston-tx/",
      "/park-row-tx/",
    ]) {
      expect(cityPaths).toContain(p);
      const row = cities.find((c) => c.livePath === p)!;
      expect(row.type).toBe("redirect");
      expect(row.destination).toBe("/areas");
    }

    // 4 galleries → filter query
    const gDest = galleries.map((g) => g.destination);
    expect(gDest).toContain("/gallery?category=kitchen");
    expect(gDest).toContain("/gallery?category=bathroom");
    expect(gDest).toContain("/gallery?category=custom-homes");
    expect(gDest).toContain("/gallery?category=remodeling");
  });

  test("service livePath inventory matches data/services livePath fields", () => {
    const serviceLive = cutoverEntries
      .filter((e) => e.group === "service")
      .map((e) => e.livePath.replace(/\/$/, "") + "/");
    for (const s of services) {
      expect(serviceLive).toContain(s.livePath);
    }
    expect(services).toHaveLength(11);
  });

  test("getRedirectRules matches seoRedirects.mjs (next.config source)", () => {
    const rules = getRedirectRules();
    expect(rules.length).toBe(permanentRedirects.length);
    expect(rules.length).toBeGreaterThanOrEqual(20);

    for (const r of rules) {
      expect(r.permanent).toBe(true);
      const match = permanentRedirects.find(
        (p: { source: string }) => p.source === r.source
      );
      expect(match).toBeTruthy();
      expect(match.destination).toBe(r.destination);
      expect(match.permanent).toBe(true);
    }

    // Known WP mismatches must redirect
    const bySource = Object.fromEntries(
      rules.map((r) => [r.source, r.destination])
    );
    expect(bySource["/areas-we-serve"]).toBe("/areas");
    expect(bySource["/services/custom-home-builder"]).toBe(
      "/services/custom-home-building"
    );
    expect(bySource["/services/remodeling-company"]).toBe(
      "/services/general-remodeling"
    );
    expect(bySource["/kitchen-remodeling-gallery"]).toBe(
      "/gallery?category=kitchen"
    );
    expect(bySource["/sugar-land-tx"]).toBe("/areas");
  });

  test("next.config.mjs wires permanentRedirects from seoRedirects.mjs", () => {
    const cfg = read("next.config.mjs");
    expect(cfg).toContain("seoRedirects.mjs");
    expect(cfg).toContain("permanentRedirects");
    expect(cfg).toContain("async redirects");
  });

  test("MVP meta inventory: unique titles, non-empty descriptions", () => {
    expect(mvpPageMeta.length).toBe(7);
    const titles = mvpPageMeta.map((m) => m.title);
    const routes = mvpPageMeta.map((m) => m.route);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(routes).size).toBe(routes.length);

    for (const m of mvpPageMeta) {
      expect(m.title.trim().length).toBeGreaterThan(10);
      expect(m.description.trim().length).toBeGreaterThan(40);
      expect(m.description.toLowerCase()).not.toContain("5% off");
    }

    for (const route of [
      "/",
      "/services",
      "/gallery",
      "/areas",
      "/about",
      "/faqs",
      "/contact",
    ]) {
      const m = getMetaForRoute(route);
      expect(m).toBeTruthy();
    }
  });

  test("shipped pages import getMetaForRoute or generateMetadata for unique SEO", () => {
    const pages: [string, string][] = [
      ["app/(site)/page.tsx", "getMetaForRoute"],
      ["app/(site)/services/page.tsx", "getMetaForRoute"],
      ["app/(site)/gallery/page.tsx", "getMetaForRoute"],
      ["app/(site)/areas/page.tsx", "getMetaForRoute"],
      ["app/(site)/about/page.tsx", "getMetaForRoute"],
      ["app/(site)/faqs/page.tsx", "getMetaForRoute"],
      ["app/(site)/contact/page.tsx", "getMetaForRoute"],
    ];
    for (const [rel, token] of pages) {
      const src = read(rel);
      expect(src).toContain(token);
      expect(src).toContain("metadata");
      expect(src).toContain("description");
    }

    const slug = read("app/(site)/services/[slug]/page.tsx");
    expect(slug).toContain("generateMetadata");
    expect(slug).toContain("cardDescription");
    expect(slug).toContain("absolute");
  });

  test("gallery accepts category query for SEO alias destinations", () => {
    const page = read("app/(site)/gallery/page.tsx");
    expect(page).toContain("searchParams");
    expect(page).toContain("category");
    expect(page).toContain("initialCategory");

    const grid = read("components/v2/sections/GalleryGrid.tsx");
    expect(grid).toContain("initialCategory");
  });
});
