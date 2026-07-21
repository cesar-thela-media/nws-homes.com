/**
 * Phase 4 — SEO cutover source of truth (ready-when-needed).
 * Live inventory: docs/nws-homes-research.md + live page-sitemap / crb_service-sitemap.
 *
 * Decisions (locked for cutover prep):
 * - Cities: hub-only + permanent redirects (no thin city landing bodies yet).
 *   Live has 8 `/*-tx/` URLs; Richmond is hub primary (no separate live city URL).
 * - Gallery: single `/gallery` hub + category filters; 4 live gallery paths → query aliases.
 */

export const CITY_STRATEGY = "hub-only-redirects" as const;
export const GALLERY_STRATEGY = "filters-with-seo-aliases" as const;

export type CutoverType = "page" | "redirect";
export type CutoverGroup = "hub" | "service" | "city" | "gallery";

export type CutoverEntry = {
  /** Live WordPress path (trailing slash normalized away in redirects) */
  livePath: string;
  /** App destination (path or path?query) */
  destination: string;
  type: CutoverType;
  group: CutoverGroup;
  note?: string;
};

/** Unique meta for MVP routes (tightened from live framing; no invented stats). */
export type PageMeta = {
  route: string;
  title: string;
  description: string;
};

export const mvpPageMeta: PageMeta[] = [
  {
    route: "/",
    title: "NWS Custom Homes & Remodeling | Richmond, TX",
    description:
      "Custom homes and whole-home remodels across Richmond, Katy & Sugar Land since 2007. Free consultation. Call (281) 299-2309.",
  },
  {
    route: "/services",
    title: "Services | Custom Homes & Remodeling",
    description:
      "Custom home building, remodeling, kitchens, bathrooms, additions, and more for Fort Bend County. Explore our full service list.",
  },
  {
    route: "/gallery",
    title: "Project Gallery | Kitchens, Baths & Custom Homes",
    description:
      "Real project photography from NWS kitchens, bathrooms, custom homes, and remodeling across Richmond and Fort Bend County.",
  },
  {
    route: "/areas",
    title: "Areas We Serve | Fort Bend & West Houston",
    description:
      "NWS serves Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, Weston Lakes, Park Row, and the West Side of Houston.",
  },
  {
    route: "/about",
    title: "About NWS | Local Builders Since 2007",
    description:
      "NWS Custom Homes and Remodeling is a full-service builder in Richmond, TX — remodeling and custom homes since 2007.",
  },
  {
    route: "/faqs",
    title: "FAQs | Custom Homes & Remodeling",
    description:
      "Answers about custom home building, remodeling, kitchens, bathrooms, timelines, and service areas in Richmond, TX.",
  },
  {
    route: "/contact",
    title: "Contact | Free Consultation",
    description:
      "Reach NWS Custom Homes in Richmond, TX. Office (281) 299-2309, mobile (713) 884-6571, or send a project message.",
  },
];

/**
 * Full cutover map: every major live indexed URL → page or permanent redirect.
 */
export const cutoverEntries: CutoverEntry[] = [
  // ── Hubs ──────────────────────────────────────────────
  { livePath: "/", destination: "/", type: "page", group: "hub" },
  { livePath: "/services/", destination: "/services", type: "page", group: "hub" },
  { livePath: "/contact/", destination: "/contact", type: "page", group: "hub" },
  { livePath: "/about/", destination: "/about", type: "page", group: "hub" },
  { livePath: "/faqs/", destination: "/faqs", type: "page", group: "hub" },
  {
    livePath: "/areas-we-serve/",
    destination: "/areas",
    type: "redirect",
    group: "hub",
    note: "WP hub slug differs from app /areas",
  },

  // ── Services (11) — WP CPT slugs → app marketing slugs ─
  {
    livePath: "/services/custom-home-builder/",
    destination: "/services/custom-home-building",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/remodeling-company/",
    destination: "/services/general-remodeling",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/kitchen-remodeling/",
    destination: "/services/kitchen-remodeling",
    type: "page",
    group: "service",
    note: "Same slug; still list for inventory completeness",
  },
  {
    livePath: "/services/bathroom-remodeling/",
    destination: "/services/bathroom-remodeling",
    type: "page",
    group: "service",
  },
  {
    livePath: "/services/home-remodel/",
    destination: "/services/whole-home-remodeling",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/bathroom-shower-remodel/",
    destination: "/services/shower-remodel",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/bathtub-remodeling/",
    destination: "/services/bathtub-remodel",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/room-additions-home-additions/",
    destination: "/services/room-additions",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/basement-remodeling-finishing/",
    destination: "/services/basement-remodeling",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/garage-remodel-contractors/",
    destination: "/services/garage-conversions",
    type: "redirect",
    group: "service",
  },
  {
    livePath: "/services/open-concept-remodeling/",
    destination: "/services/open-concept",
    type: "redirect",
    group: "service",
  },

  // ── Cities (8 live) — hub-only strategy ────────────────
  {
    livePath: "/sugar-land-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/katy-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/fulshear-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/cinco-ranch-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/rosenberg-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/weston-lakes-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/west-side-of-houston-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },
  {
    livePath: "/park-row-tx/",
    destination: "/areas",
    type: "redirect",
    group: "city",
    note: CITY_STRATEGY,
  },

  // ── Galleries (4) — filter aliases ─────────────────────
  {
    livePath: "/custom-homes-gallery/",
    destination: "/gallery?category=custom-homes",
    type: "redirect",
    group: "gallery",
    note: GALLERY_STRATEGY,
  },
  {
    livePath: "/remodeling-gallery/",
    destination: "/gallery?category=remodeling",
    type: "redirect",
    group: "gallery",
    note: GALLERY_STRATEGY,
  },
  {
    livePath: "/kitchen-remodeling-gallery/",
    destination: "/gallery?category=kitchen",
    type: "redirect",
    group: "gallery",
    note: GALLERY_STRATEGY,
  },
  {
    livePath: "/bathroom-remodeling-gallery/",
    destination: "/gallery?category=bathroom",
    type: "redirect",
    group: "gallery",
    note: GALLERY_STRATEGY,
  },
];

/** Paths that need Next.js permanent redirects (type === redirect). */
export function getRedirectRules(): {
  source: string;
  destination: string;
  permanent: boolean;
}[] {
  return cutoverEntries
    .filter((e) => e.type === "redirect")
    .map((e) => {
      const source = e.livePath.replace(/\/$/, "") || "/";
      return {
        source,
        destination: e.destination,
        permanent: true,
      };
    });
}

export function getMetaForRoute(route: string): PageMeta | undefined {
  return mvpPageMeta.find((m) => m.route === route);
}
