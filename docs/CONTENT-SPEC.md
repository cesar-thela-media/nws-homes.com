# NWS Content Spec

**Client source:** https://www.nws-homes.com/  
**Product:** Frontend rework in this repo — better version of live content + Shadcn Space UI  
**Status:** Locked for MVP implementation (city SEO pages later)

---

## 1. MVP pages vs later

| Route | Ship in MVP | Live source | Notes |
|-------|-------------|-------------|--------|
| `/` | Yes | `/` | Full section set §2 |
| `/services` | Yes | `/services/` | All services |
| `/services/[slug]` | Yes | `/services/.../` | 11 services |
| `/gallery` | Yes | 4 gallery URLs | One hub + filters (custom / remodel / kitchen / bath) |
| `/areas` | Yes | `/areas-we-serve/` | Hub + form; city pages later |
| `/about` | Yes | `/about/` | Story-first |
| `/faqs` | Yes | `/faqs/` | Accordion-first; useful answers |
| `/contact` | Yes | `/contact/` | Form + phones + hours + map |
| `/areas/[city]` | Later | `/{city}-tx/` | 8 cities |
| Gallery path aliases | Later | 4 gallery URLs | Optional SEO |

---

## 2. Landing page section order (locked)

| # | Section | Live seed | Our better version |
|---|---------|-----------|---------------------|
| 1 | **Hero** | “Let’s Build Your Dreams” + Book Now + FB/IG/Houzz | 2-line H1: “Built for the way **you** live.” Sub: custom homes & remodels, Richmond/Katy/Sugar Land, since 2007. CTAs: Start project + View work + phone. Social badges with live URLs. |
| 2 | **Before & After** | *(not on live home — approved upgrade)* | Large slider, real pairs only, Space card frame, short capability copy |
| 3 | **Services** | 11 flip-cards + intro | Intro + **all** services from data; Space feature cards; link each to `/services/[slug]` |
| 4 | **Mid CTA** | “Bring Your Dream Home to Life” | Same phrase family; Call + Contact |
| 5 | **Testimonials** | Real Google/Angi reviews | Full quotes from live where possible; data-driven |
| 6 | **Contact / lead** | Form + support + map | Full fields (first, last, email, phone, zip, service, message); office + mobile + hours; map image if no embed key |
| 7 | **Areas** | City chips | Same 9 labels → `/areas` |

No FAQ strip on home (live home does not lead with FAQ).

---

## 3. Claims allowlist

**Always OK (verified live):**
- Since 2007 · Richmond, TX
- Office (281) 299-2309 · Mobile (713) 884-6571 · info@nws-homes.com
- Hours Mon–Fri 8:00 AM–6:00 PM · Sat 8:00 AM–12:00 PM · Sun Closed
- Cities: Richmond, Sugar Land, Katy, Fulshear, Cinco Ranch, Rosenberg, Weston Lakes, West Side of Houston, Park Row
- Service names from live catalog (11)
- Real review names/quotes published on live home
- Live kitchen cost bands when shown on kitchen page only: Basic $15k–$30k · Mid $30k–$60k · High-end $60k+
- “35+ years combined experience” (live remodeling company page)

**Do not present as fact unless re-verified:**
- Per-service invented averages (e.g. “$380k+ avg custom build”) without live source
- Blanket “5% off if you mention the website” (not on live homepage; drop from default copy)
- Inflated project counts / star ratings not shown on live

**OK as product promise if soft-worded (process, not fake metrics):**
- Free consultation / call us to start
- Clear communication and planning (live language)

---

## 4. Contact & socials

| Field | Value |
|-------|--------|
| Office | (281) 299-2309 · `tel:2812992309` |
| Mobile | (713) 884-6571 · `tel:7138846571` |
| Email | info@nws-homes.com |
| Address | Richmond, TX |
| Facebook | https://www.facebook.com/NWSHomes/ |
| Instagram | https://www.instagram.com/nwshomes/ |
| Houzz | https://www.houzz.com/professionals/home-builders/nws-custom-homes-and-remodeling-pfvwus-pf~849721310 |

**Form fields (match live):** First name, Last name, Email, Phone, Zip, Services (select), Message.

---

## 5. Service matrix

| # | Live path | App slug | Nav label | Card blurb (better, from live) |
|---|-----------|----------|-----------|--------------------------------|
| 1 | `/services/custom-home-builder/` | `custom-home-building` | Custom Home Building | From lot and design through full construction — a home built around how you live. |
| 2 | `/services/remodeling-company/` | `general-remodeling` | Remodeling | Full-service remodeling from painting and layout changes to major interior updates. |
| 3 | `/services/kitchen-remodeling/` | `kitchen-remodeling` | Kitchen Remodeling | Layout, cabinets, counters, and finishes that make the heart of the home work harder. |
| 4 | `/services/bathroom-remodeling/` | `bathroom-remodeling` | Bathroom Remodeling | Spa-like baths with minimal disruption — fixtures, tile, and finishes done right. |
| 5 | `/services/home-remodel/` | `whole-home-remodeling` | Whole Home Remodeling | Top-to-bottom renovations so every room works together. |
| 6 | `/services/bathroom-shower-remodel/` | `shower-remodel` | Shower Remodel | Custom showers for comfort, style, and everyday performance. |
| 7 | `/services/bathtub-remodeling/` | `bathtub-remodel` | Bathtub Remodel | Modern tub upgrades for a calmer, more functional bath. |
| 8 | `/services/room-additions-home-additions/` | `room-additions` | Room Additions | Seamless additions — suites, bedrooms, second stories, and more. |
| 9 | `/services/basement-remodeling-finishing/` | `basement-remodeling` | Basement Remodeling | Finish or rework basements with layouts, floors, and fixtures that last. |
| 10 | `/services/garage-remodel-contractors/` | `garage-conversions` | Garage Conversions | Turn garage space into office, gym, or living — insulation to finishes. |
| 11 | `/services/open-concept-remodeling/` | `open-concept` | Open Concept | Wall removal and layout redesign for light, flow, and family living. |

### Kitchen detail outline (prototype for all service pages)
From live kitchen page — tighten for UI:

1. **Hero** — “Improve the heart of your home” / modern kitchen remodeling for your lifestyle  
2. **Intro** — Problem (outdated layout) → NWS solution in Richmond & surrounds  
3. **Features** — Layout options · Countertops · Cabinets · Lighting/backsplash/flooring  
4. **Costs** (live only) — Basic / Mid / High-end bands above  
5. **FAQs** — timeline 4–10 weeks; stay in home; value drivers; design help; materials  
6. **CTA** — Call / contact  

Other services: pull structure from each live URL; omit cost bands if live page has none.

---

## 6. Testimonials bank (from live home — fuller text)

Prefer full names and fuller quotes as published live:

1. **Allison Crane** · Google · 08/30/2023 — Downstairs remodel (kitchen, dining, living, half bath); calm issue handling; finished in 3 months.  
2. **Katie Jacob** · Google · 08/15/2023 — Full home build mid-pandemic; Giovani & Alejandro communicators; pleased with outcome.  
3. **Carrie Neal** · Google · 07/21/2023 — Multiple projects minor to major; keep going back for good work.  
4. **Amy Heinz** · Google · 07/04/2023 — Alejandro and crew always responded, showed up, job done right.  
5. **Drew Lowery** · Google · 06/16/2021 — First class from scope to punch list; Alejandro managed renovation.  
6. **Sheila Ventura** · Google · 03/19/2020 — All 4 bathrooms; friendly, quality work.  
7. **Mark Dixon** · Google · 05/16/2018 — Patio, roof, concrete; professional, clean site.  
8. **Mark D.** · Angi · 10/23/2017 — Detailed daily updates; on budget; clean follow-up.  
9. **Tim O.** · Angi · 03/31/2017 — Master bath, outdoor kitchen, deck, pool work; can do anything.  

UI may show 3–6 cards; data file holds the bank.

---

## 7. FAQ mapping (live topic → better answer direction)

| Live question (SEO-ish) | Better answer direction |
|-------------------------|-------------------------|
| What services do you offer? | List full 11 services + in-house capability; link hub |
| Reliable custom home builder near me? | Local Richmond since 2007; same team consultation through walkthrough |
| Kitchen / bathroom differentiation | Function + aesthetics; process & materials guidance |
| Whole home benefits | Cohesive finish, one plan, less chaos than multi-vendor |
| Process to start | Call or form → on-site consult → written plan/quote |
| Financing | Available for larger projects — ask in consultation (live claims this) |
| Timeline bath/kitchen | Ranges from live/process knowledge; kitchen 4–10 weeks when stating kitchen FAQ |
| Materials / energy / quotes | Quality materials; eco options for custom builds; free quote via form/phone |

Drop pure keyword spam; keep intent.

---

## 8. About (from live)

**Live H1:** “Your Go-to Home Builders”  
**Story:** Full-service remodeling + custom homes since 2007; expanded services; kitchens, baths, additions.  

**Better:** Lead with story and trust (local, full-service, since 2007). Soft CTA + optional form. No empty marketing hero that delays the story.

---

## 9. Areas

**Labels (live order):** Richmond (primary), Sugar Land, Katy, Fulshear, West Side of Houston, Cinco Ranch, Rosenberg, Weston Lakes, Park Row.  

MVP: hub cards/chips + form. City landings later using Sugar Land pattern (local H1, intro, services links, form).

---

## 10. Gallery

**Categories = live galleries:** Custom Homes · Remodeling · Kitchen · Bathroom.  
MVP: `/gallery` with filter chips. Images from `/public/nws`. No fake nav that points four times to the same unfiltered view.

---

## 11. Home copy side-by-side (seed)

| Slot | Live | Better (use in UI) |
|------|------|---------------------|
| Hero H1 | Let’s Build Your Dreams | Built for the way **you** live. (2 lines) |
| Hero body | Discover what it truly means to live in a custom-built or beautifully remodeled home… | Custom homes and whole-home remodels across Richmond, Katy & Sugar Land — crafted since 2007. |
| Mid CTA | Bring Your Dream Home to Life | Bring your dream home to life. |
| Mid body | From minor upgrades to full-on renovations… | From kitchen updates to full renovations, we guide every step — call or request a free consultation. |
| Services intro | Full range… build from square one or remodel… | Custom build or remodel — one local team for the work that matters. |
| Reviews heading | Check What Our Clients Are Saying | What homeowners say about NWS |
| Form heading | We’re Looking Forward to Work With You | Tell us about your project |
| Areas intro | We complete every project promptly… | Based in Richmond — serving Fort Bend and west Houston. |

---

## 12. Implementation notes for engineering

1. Homepage must import **one** section tree (v2 / Space-aligned), not hard-coded service/testimonial arrays.  
2. `data/services.ts` must include **general-remodeling** (11 total) + optional `livePath` field.  
3. `lib/constants.ts` gains `SOCIAL` links.  
4. Strip em dashes sitewide in new copy.  
5. Service detail: Space template; content from live per slug; kitchen first for costs/FAQs.  
6. Frontend only; keep `submitLead` + `NEXT_PUBLIC_N8N_WEBHOOK_URL`.  
