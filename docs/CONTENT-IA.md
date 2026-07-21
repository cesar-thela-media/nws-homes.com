# NWS Custom Homes — Content & IA (Phase 1 boss slice)

**Live source:** https://www.nws-homes.com/  
**Research:** `docs/nws-homes-research.md`  
**Scope:** Hub routes + 11 services + gallery hub + areas hub + about/FAQs/contact.

## Product tree

Ship **`app/(site)`** only. `app/v2` is experimental — do not link from production nav.

## Global chrome

| Element | Purpose | Notes |
|---------|---------|--------|
| Nav | Logo, Services, Gallery, Areas, About, FAQs, Contact, phone CTA | Prefer Shadcn Space navbar-08 restyled |
| Footer | Brand, services, contact, hours, socials, areas | Space footer-02 style |
| Forms | Lead capture | N8N webhook env |

## Phase 1 routes

| Route | Live source | H1 / purpose | Sections (target) |
|-------|-------------|--------------|-------------------|
| `/` | `/` | Built for the Way *You* Live / custom homes & remodels Richmond–Katy–Sugar Land | Hero (photo, centered CTAs) → Before/After → What We Build → Mid CTA → Testimonials → Lead/contact strip → Areas |
| `/services` | `/services/` | Full service catalog | Intro + service card grid |
| `/services/[slug]` | `/services/.../` | Per-service SEO | Hero, intro, includes, process, B/A, related, CTA |
| `/gallery` | gallery URLs | Our work | Filters + grid first (no heavy page hero) |
| `/areas` | `/areas-we-serve/` | Cities we serve | Intro, map, city cards, optional form |
| `/about` | `/about/` | Story since 2007 | Story, values, visuals; drop redundant mid CTAs |
| `/faqs` | `/faqs/` | Answers | Accordion; no redundant ready-to-start CTA |
| `/contact` | `/contact/` | Free consultation | Form + contact meta |

## Service slugs (in-app)

custom-home-building, kitchen-remodeling, bathroom-remodeling, whole-home-remodeling, room-additions, open-concept, bathroom-shower-remodel, bathtub-remodeling, basement-remodeling, garage-remodel, remodeling-company (map as needed to data file).

## Landing section order (locked)

1. **Hero** — full-bleed **local** NWS photo; centered H1, sub, CTAs, trust (4.9★ real). No B/A control.
2. **Before & After** — slider + section heading/body (client pairs).
3. **What We Build** — service cards, hover polish, **Button** Explore.
4. **Mid CTA** — call/contact.
5. **Testimonials** — real review voice.
6. **Contact / lead** — form webhook-ready + hours/phones.
7. **Areas** — city chips from live list.

## Keep / drop (from QA + transcript)

| Keep | Drop / change |
|------|----------------|
| Plaster/espresso/terracotta palette | In-hero before/after |
| Serif display + clean sans (Inter body) | Decorative house icons on CTAs |
| Phone CTAs | Hotlinked WP images |
| Before/after as capability | Redundant “ready to start” CTAs on FAQ/areas/about |
| | Gallery page heavy hero/featured if it delays filters |

## Improved copy principles

- Derive from live NWS messaging; tighten and modernize; **do not invent** services or cities.
- Metrics: prefer **4.9★** and counts verified from live/Google (not inflated 5.0).
- CTAs: “Start Your Project” / “View Our Work” / tel links.

## Media

All critical images under `/nws/{filename}` (downloaded from client site).
