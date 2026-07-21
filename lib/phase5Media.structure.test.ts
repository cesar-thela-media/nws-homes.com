/**
 * Phase 5 — first-party media, hero video+poster, asset presence, LCP hygiene.
 * Run: bun test lib/phase5Media.structure.test.ts
 */
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "fs";
import { join } from "path";
import {
  DEMO_VIDEO_BASENAMES,
  HERO_POSTER,
  HERO_VIDEO,
} from "@/data/mediaAssets";
import { galleryItems } from "@/data/gallery";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

const root = join(import.meta.dir, "..");
const read = (rel: string) => readFileSync(join(root, rel), "utf8");
const publicPath = (webPath: string) =>
  join(root, "public", webPath.replace(/^\//, "").replace(/\//g, "\\"));

/** Remote media hosts that must not appear as image/video src on ship path */
const HOTLINK_MEDIA =
  /(?:src|poster|href)=["']https?:\/\/[^"']+\.(?:jpe?g|png|webp|gif|avif|mp4|webm|svg)(?:\?[^"']*)?["']|url\(\s*['"]?https?:\/\/[^)'"]+\.(?:jpe?g|png|webp|gif|avif|mp4|webm)/i;

const shipDirs = [
  "app/(site)",
  "components/v2",
  "data",
];

function walkTsx(dirRel: string): string[] {
  const abs = join(root, dirRel);
  const out: string[] = [];
  const walk = (d: string) => {
    for (const name of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, name.name);
      if (name.isDirectory()) walk(p);
      else if (/\.(tsx?|jsx?)$/.test(name.name)) out.push(p);
    }
  };
  walk(abs);
  return out;
}

describe("phase 5 media & performance", () => {
  test("hero uses local NWS video + real client poster (not demo clips, not AI-only LCP)", () => {
    expect(HERO_VIDEO).toBe("/videos/nws-hero.mp4");
    expect(HERO_POSTER).toBe("/nws/custom-homes-7.jpeg");
    expect(HERO_POSTER).not.toContain("generated");
    for (const demo of DEMO_VIDEO_BASENAMES) {
      expect(HERO_VIDEO).not.toContain(demo);
    }

    const hero = read("components/v2/sections/Hero.tsx");
    expect(hero).toContain("HERO_VIDEO");
    expect(hero).toContain("HERO_POSTER");
    expect(hero).toContain("mediaAssets");
    expect(hero).toContain('autoPlay');
    expect(hero).toContain("muted");
    expect(hero).toContain("playsInline");
    expect(hero).toContain("loop");
    expect(hero).toContain('fetchPriority="high"');
    expect(hero).toContain("poster={HERO_POSTER}");
    expect(hero).not.toMatch(/robot-to-car|test-motion-chaos/);

    expect(existsSync(publicPath(HERO_VIDEO))).toBe(true);
    expect(existsSync(publicPath(HERO_POSTER))).toBe(true);
  });

  test("layout preloads hero LCP still from first-party path", () => {
    const layout = read("app/(site)/layout.tsx");
    expect(layout).toContain("preload");
    expect(layout).toContain("HERO_POSTER");
    expect(layout).toContain("mediaAssets");
  });

  test("no hotlinked image/video URLs on shipped v2 / app / data surfaces", () => {
    const offenders: string[] = [];
    for (const dir of shipDirs) {
      for (const file of walkTsx(dir)) {
        const src = readFileSync(file, "utf8");
        // Allow map embeds / social link hrefs that are not media files
        const lines = src.split("\n");
        lines.forEach((line, i) => {
          if (HOTLINK_MEDIA.test(line)) {
            offenders.push(`${file}:${i + 1}: ${line.trim().slice(0, 120)}`);
          }
          // Catch backgroundImage url(https://...) media
          if (
            /url\(\s*['"]https?:\/\//i.test(line) &&
            !/maps\.google|facebook|instagram|houzz|g\.page/i.test(line)
          ) {
            offenders.push(`${file}:${i + 1}: ${line.trim().slice(0, 120)}`);
          }
        });
      }
    }
    expect(offenders).toEqual([]);
  });

  test("gallery, services, and areas media files exist under public/", () => {
    const paths = new Set<string>();
    for (const g of galleryItems) paths.add(g.image);
    for (const s of services) {
      paths.add(s.heroImage);
      for (const img of s.galleryImages ?? []) paths.add(img);
      if (s.beforeAfter) {
        paths.add(s.beforeAfter.before);
        paths.add(s.beforeAfter.after);
      }
    }
    for (const a of areas) paths.add(a.image);
    paths.add("/nws-logo.png");

    const missing: string[] = [];
    for (const p of paths) {
      if (!existsSync(publicPath(p))) missing.push(p);
    }
    expect(missing).toEqual([]);
    expect(paths.size).toBeGreaterThan(20);
  });

  test("below-fold grids use lazy loading", () => {
    expect(read("components/v2/sections/GalleryGrid.tsx")).toContain(
      'loading="lazy"'
    );
    expect(read("components/v2/sections/ServicesGrid.tsx")).toContain(
      'loading="lazy"'
    );
    expect(read("components/v2/sections/AreasStrip.tsx")).toContain(
      'loading="lazy"'
    );
  });
});
