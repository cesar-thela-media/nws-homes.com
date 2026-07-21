# SEO cutover plan (Phase 4 — ready when needed)

**Status:** Config + inventory prepared. Domain DNS / Search Console not in this phase.  
**Source of truth (code):** `data/seoCutover.ts`  
**Redirects:** `next.config.mjs` → `async redirects()` from `getRedirectRules()`

---

## Decisions

| Topic | Decision | Rationale |
|-------|----------|-----------|
| **Cities (8 live `/*-tx/`)** | **Hub-only + permanent redirects → `/areas`** | Avoid thin city pages until real local copy ships; no invented case studies. Richmond has no separate live city URL (hub primary). |
| **Gallery (4 live URLs)** | **One `/gallery` hub + filters**; 4 paths redirect to `?category=` | Better UX; preserves indexed URLs via 301. |
| **Services** | WP CPT slugs → app slugs via 301 where different | Marketing slugs in app; live equity preserved. |

To flip cities later: add `/areas/[city]` pages from `data/areas.ts`, change city rows in `seoCutover.ts` from `redirect` → `page`, update redirects.

---

## Live inventory coverage

| Group | Count | Outcome |
|-------|------:|---------|
| Hubs | 6 (+ areas hub rename) | Pages or redirect |
| Services | 11 | Page or redirect |
| Cities | 8 | Redirect → `/areas` |
| Galleries | 4 | Redirect → `/gallery?category=…` |

Full rows: `cutoverEntries` in `data/seoCutover.ts`.

---

## Meta

MVP routes use unique titles/descriptions from `mvpPageMeta` (tightened live framing).  
Service detail pages use `generateMetadata` from each service’s `navLabel` + `cardDescription`.

---

## Cutover checklist (ops — not this repo task)

1. Deploy redirects + meta with the app  
2. Point domain after verifying sample 301s  
3. Submit new sitemap in Search Console  
4. Monitor coverage for city/gallery/service old URLs  
