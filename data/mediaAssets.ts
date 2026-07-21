/**
 * Phase 5 — first-party media paths (public/).
 * All shipped image/video URLs should resolve under these roots.
 */

/** Real NWS project still for LCP / video poster (not AI-generated). */
export const HERO_POSTER = "/nws/custom-homes-7.jpeg";

/** Local NWS hero loop (client/social-derived project footage). */
export const HERO_VIDEO = "/videos/nws-hero.mp4";

/** Intrinsic-ish dimensions for LCP still (layout stability under object-cover). */
export const HERO_POSTER_WIDTH = 1600;
export const HERO_POSTER_HEIGHT = 900;

/** Demo / experiment clips — never use as production hero. */
export const DEMO_VIDEO_BASENAMES = [
  "robot-to-car-transform.mp4",
  "test-motion-chaos.mp4",
] as const;

export const PUBLIC_MEDIA_PREFIXES = [
  "/nws/",
  "/videos/",
  "/nws-logo.png",
] as const;
