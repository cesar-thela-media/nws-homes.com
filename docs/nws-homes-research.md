# NWS Homes — Live Site Research (Recreate Brief)

**Source:** [https://www.nws-homes.com/](https://www.nws-homes.com/)  
**Researched:** 2026-07-17  
**Purpose:** Inventory landing-page UI sections, full sitemap-based page map, and design implications for a recreation.  
**Sitemaps used:**
- [sitemap_index.xml](https://www.nws-homes.com/sitemap_index.xml)
- [page-sitemap.xml](https://www.nws-homes.com/page-sitemap.xml)
- [crb_service-sitemap.xml](https://www.nws-homes.com/crb_service-sitemap.xml)

This document is **content/structure research**, not a visual pixel clone guide. Design system (tokens, type, component language) should be decided *after* this IA is locked.

---

## 1. Brand & business snapshot

| Field | Live site |
|--------|-----------|
| **Company** | NWS Custom Homes and Remodeling |
| **Positioning** | Residential remodeling + custom home building in Richmond, TX & Fort Bend / west Houston area |
| **Since** | 2007 |
| **Office** | (281) 299-2309 |
| **Mobile** | (713) 884-6571 |
| **Email** | info@nws-homes.com |
| **Hours** | Mon–Fri 8:00 AM–6:00 PM · Sat 8:00 AM–12:00 PM · Sun Closed |
| **HQ framing** | Richmond, TX (service footprint = multi-city) |
| **Proof** | Google / Angi reviews, Facebook, Instagram, Houzz |
| **Primary CTAs** | Call (`tel:`) · Book Now · Get In Touch / Contact form |
| **Stack (live)** | WordPress + Yoast SEO · custom post type for services (`crb_service`) |

### Voice / conversion pattern

- Trust-first: years in market, local cities, reviews, badges  
- Service-first: long list of remodeling verticals  
- SEO-heavy: city pages + service detail pages with FAQs and cost ranges  
- Lead capture: contact form (name, email, phone, zip, service, message) repeated on many pages  

---

## 2. Global chrome (all pages)

These appear site-wide and should be designed once as shared layout.

### 2.1 Header / navigation

**Implied primary nav (from structure + links):**
- Home  
- Services (hub + service children)  
- Gallery (split into category galleries)  
- Areas we serve (hub + city pages)  
- About  
- FAQs  
- Contact  

**Header UI elements:**
- Logo  
- Phone CTA (primary conversion)  
- Secondary “Get In Touch” / contact link  
- Mobile menu (expected; WordPress theme pattern)

### 2.2 Footer (typical blocks)

- Brand blurb  
- Services link list  
- Contact (email, office, mobile)  
- Hours  
- Social (FB, IG, Houzz; YouTube present in some assets)  
- Area links (or “Areas we serve”)  
- Map thumbnail  

### 2.3 Shared lead module

**Contact form fields (live):**
1. First Name  
2. Last Name  
3. Email  
4. Phone Number  
5. Zip code  
6. Services (select)  
7. Message  

**Service select options (form):**
- Custom Home Building  
- Remodeling  
- Kitchen Remodeling  
- Bathroom Remodeling  
- Whole Home Remodeling  

> Note: site markets more services than the form dropdown exposes. Recreation can expand select/chips to match full service list.

### 2.4 Shared trust / map modules

- Service-area map image (small + enlarge lightbox)  
- “Start Your Project / Reach Out” contact strip (phone, hours, location)  

---

## 3. Landing page (`/`) — UI section inventory

Ordered top → bottom as observed on the live homepage.

| # | Section | Purpose | UI pattern | Key content / components |
|---|---------|---------|------------|---------------------------|
| **1** | **Hero** | First impression + primary conversion | Full-bleed remodel photo, H1/H2, body, CTA | Headline (“Let’s Build Your Dreams”), short pitch, **Book Now** phone CTA, social/proof badges (FB, IG, Houzz) |
| **2** | **Value / authority band** | SEO H1 + trust copy | Text-heavy intro + CTA | “Dependable residential remodeling… Richmond, TX”, since 2007, speak-to-experts CTA, contact chips (email, office, mobile, location) |
| **3** | **Services overview intro** | Bridge to catalog | Heading + prose list of services with deep links | Bullet list of all major services with links to `/services/...` |
| **4** | **Service flip-cards / grid** | Browse services visually | Icon + flip or dual-face cards | ~11 service cards (Custom Home, Remodeling, Kitchen, Bathroom, Whole Home, Shower, Bathtub, Room Additions, Basement, Garage, Open Concept) |
| **5** | **Mid-page CTA** | Re-conversion | Dark/light band | “Bring Your Dream Home to Life” + Call Now |
| **6** | **Testimonials** | Social proof | Review carousel / list | Google/Angi-style reviews (name, date, long quote, source) |
| **7** | **Lead form + support panel** | Convert | Split: form + contact meta + map | Full contact form + Support / Hours / map |
| **8** | **Areas we serve** | Local SEO + navigation | City chip / link grid | Richmond (anchor), Sugar Land, Katy, Fulshear, West Side Houston, Cinco Ranch, Rosenberg, Weston Lakes, Park Row |

### Landing design implications

- **Hero is photo-led**, not abstract illustration — recreation should keep strong lifestyle/project photography.  
- **Services are the product catalog** — cards need clear hierarchy (featured services vs niche).  
- **Proof is dense** (badges + many reviews) — design needs scannable review cards, not a wall of text.  
- **Form appears on home** — contact page is not the only lead surface.  
- **Cities are first-class** — area strip is not footer-only; it’s a landing section.

### Optional / implicit homepage pieces (theme-dependent)

Not always pure “sections” but appear on live WP sites of this type:
- Sticky header on scroll  
- Floating call button (mobile)  
- Cookie/analytics banners (not brand UI)

---

## 4. Full site map (from Yoast + page crawl)

### 4.1 Core pages (`page-sitemap.xml`)

| Route | Type | Role |
|-------|------|------|
| `/` | Landing | Brand + services + reviews + form + areas |
| `/services/` | Hub | All services flip-cards / catalog |
| `/contact/` | Lead | Full contact layout + form + map |
| `/about/` | Story | Company story + form |
| `/faqs/` | Support / SEO | FAQ accordion list |
| `/areas-we-serve/` | Local hub | City list + form + contact |
| `/custom-homes-gallery/` | Gallery | Custom homes photo gallery |
| `/remodeling-gallery/` | Gallery | Remodeling gallery |
| `/kitchen-remodeling-gallery/` | Gallery | Kitchen gallery |
| `/bathroom-remodeling-gallery/` | Gallery | Bathroom gallery |
| `/sugar-land-tx/` | City landing | Local SEO page |
| `/katy-tx/` | City landing | Local SEO page |
| `/fulshear-tx/` | City landing | Local SEO page |
| `/cinco-ranch-tx/` | City landing | Local SEO page |
| `/rosenberg-tx/` | City landing | Local SEO page |
| `/weston-lakes-tx/` | City landing | Local SEO page |
| `/west-side-of-houston-tx/` | City landing | Local SEO page |
| `/park-row-tx/` | City landing | Local SEO page |

**Note:** Richmond appears as home/areas focus (`Richmond, TX` link is `#` on areas page — often treated as “primary city” rather than separate URL).

### 4.2 Service detail pages (`crb_service-sitemap.xml`)

| Route | Service |
|-------|---------|
| `/services/custom-home-builder/` | Custom home building |
| `/services/remodeling-company/` | General / whole-company remodeling |
| `/services/kitchen-remodeling/` | Kitchen remodeling |
| `/services/bathroom-remodeling/` | Bathroom remodeling |
| `/services/home-remodel/` | Whole home / general remodel |
| `/services/bathroom-shower-remodel/` | Shower remodel |
| `/services/bathtub-remodeling/` | Bathtub remodel |
| `/services/room-additions-home-additions/` | Room / home additions |
| `/services/basement-remodeling-finishing/` | Basement finishing |
| `/services/garage-remodel-contractors/` | Garage conversion / remodel |
| `/services/open-concept-remodeling/` | Living room / open concept |

**Total indexed service pages: 11**

### 4.3 Information architecture tree

```text
Home
├── Services (hub)
│   ├── Custom Home Building
│   ├── Remodeling (company)
│   ├── Kitchen Remodeling
│   ├── Bathroom Remodeling
│   ├── Whole Home / Home Remodel
│   ├── Shower Remodel
│   ├── Bathtub Remodel
│   ├── Room Additions
│   ├── Basement Remodeling
│   ├── Garage Conversions
│   └── Open Concept Remodeling
├── Gallery
│   ├── Custom Homes Gallery
│   ├── Remodeling Gallery
│   ├── Kitchen Gallery
│   └── Bathroom Gallery
├── Areas We Serve (hub)
│   ├── Sugar Land
│   ├── Katy
│   ├── Fulshear
│   ├── Cinco Ranch
│   ├── Rosenberg
│   ├── Weston Lakes
│   ├── West Side of Houston
│   └── Park Row
│   └── (Richmond — primary market, often not separate URL)
├── About
├── FAQs
└── Contact
```

---

## 5. Page templates — sections needed per template

Design should treat these as **repeatable templates**, not one-off pages.

### 5.1 Template A — Landing (`/`)

See §3.

### 5.2 Template B — Services hub (`/services/`)

| Section | UI |
|---------|----|
| Page hero | Breadcrumb + title + Contact CTA |
| Intro | Short paragraph on full-service capability |
| Service card grid | Same flip-card / icon cards as home (full set) |
| (Optional) CTA band | Contact experts |

### 5.3 Template C — Service detail (`/services/{slug}/`)

Observed strongly on **Kitchen Remodeling** (pattern for other services):

| Section | UI / content |
|---------|----------------|
| **Breadcrumb** | Home › Services › {Service} |
| **Service hero** | Eyebrow + H2/H1 + short value prop + Get In Touch |
| **Long-form SEO intro** | Problem → solution narrative + hero image |
| **Feature / options blocks** | Subheads + bullet groups (layouts, materials, upgrades) |
| **Cost / pricing ranges** (where relevant) | Tiered ranges (basic / mid / high-end) |
| **Project start CTA** | Closing narrative + Call Now |
| **Service FAQs** | Accordion (service-specific) |
| **Bottom contact CTA** | “Elevate your X with our help” |

**Design notes for service detail:**
- Content-heavy; need strong typography hierarchy  
- Photo + text split sections  
- Accordion for FAQs  
- Optional: related services, gallery teaser, before/after  

### 5.4 Template D — Gallery (`/*-gallery/`)

| Section | UI |
|---------|----|
| Breadcrumb + title | Category name |
| Short intro | 1–2 sentences |
| Photo grid / masonry | Project images (primary UI) |

**Live galleries:**
1. Custom Homes  
2. Remodeling  
3. Kitchen Remodeling  
4. Bathroom Remodeling  

**Design choice for recreation:**  
Either keep **4 gallery URLs** (SEO parity) or one **Gallery hub with category filters** (better UX; map filters → SEO routes if needed).

### 5.5 Template E — Areas hub (`/areas-we-serve/`)

| Section | UI |
|---------|----|
| Title + intro | “Areas we serve” |
| City link grid | Chips / cards to city pages |
| Map | Service area map |
| Lead form | Full form |
| Contact strip | Phone / find us / hours |

### 5.6 Template F — City landing (`/{city}-tx/`)

Pattern from **Sugar Land**:

| Section | UI |
|---------|----|
| Breadcrumb | Home › {City} |
| City hero | H1 local keyword title + Get In Touch |
| Local intro | SEO copy with city name + service list links |
| Mid image | Project/parallax photo |
| Map | Same map module |
| Local CTA + form | Form tailored to city messaging |

**Cities to support (from sitemap):** 8 dedicated pages (+ Richmond as home/primary).

### 5.7 Template G — About (`/about/`)

| Section | UI |
|---------|----|
| Hero | “Your Go-to Home Builders” + Get In Touch |
| Story | Since 2007, full-service remodeling + custom homes |
| Phone CTA | Speak to experts |
| Image | Parallax / hero custom home image |
| Map + form | Shared lead module |

### 5.8 Template H — FAQs (`/faqs/`)

| Section | UI |
|---------|----|
| Hero | Title + Get In Touch |
| FAQ list | Accordion (~15 questions on live site) |
| Optional CTA | Contact / phone |

Live FAQ topics cover: services offered, choosing a builder, kitchen/bathroom differentiation, whole-home benefits, process, financing, materials, quotes, testimonials, timelines, energy efficiency.

### 5.9 Template I — Contact (`/contact/`)

| Section | UI |
|---------|----|
| Hero | Contact title + Book Now |
| “Start your project” panel | Support / Phone / Hours cards |
| Map (full) | Enlargeable |
| Lead form | Full multi-field form |

---

## 6. UI component checklist (derived from live site)

Use this as the **component inventory** when choosing Shadcn / design primitives.

### Navigation & chrome
- [ ] Logo header  
- [ ] Desktop nav + Services dropdown  
- [ ] Mobile drawer/sheet  
- [ ] Primary phone button  
- [ ] Footer multi-column  
- [ ] Social icon buttons  
- [ ] Breadcrumb  

### Marketing sections
- [ ] Hero (image + H1 + CTA + badges)  
- [ ] Trust/badge row  
- [ ] Service flip-card / service card  
- [ ] Mid-page CTA band  
- [ ] Testimonials (card + source + stars optional)  
- [ ] City chip / city card  
- [ ] Stats strip (if added in recreation; not dominant on live home)  

### Content
- [ ] Page hero (internal pages)  
- [ ] Long-form content blocks  
- [ ] Feature bullet groups  
- [ ] Pricing/tier cards (service pages)  
- [ ] FAQ accordion  
- [ ] Photo gallery grid / lightbox  
- [ ] Before/after (optional enhancement; strong for remodel brand)  

### Forms & contact
- [ ] Multi-field contact form  
- [ ] Service select / chips  
- [ ] Contact info cards (email, phone, hours)  
- [ ] Map embed or map image + modal  

### Feedback / interaction
- [ ] Buttons (primary / outline / phone)  
- [ ] Links as CTAs  
- [ ] Accordion expand/collapse  
- [ ] Card hover / flip (live uses flip-style service cards)  

---

## 7. Gap analysis: live site vs current rework app

Approximate mapping for the Next.js rework (`NWS-new-website-rework`):

| Live capability | Rework status (approx.) | Notes |
|-----------------|-------------------------|--------|
| Landing hero + services + reviews | Present | Hero improved; services/reviews exist |
| Contact form | Present | Simplified vs live (less fields) |
| FAQs | Present | Good accordion |
| About | Present | Simpler than live story+form |
| Services hub + detail | Present | Slug model exists |
| Areas hub + cities | Partial | Areas page exists; may not be 1:1 city SEO pages |
| Split galleries | Partial | Single gallery + filters more modern |
| Service-page cost tiers + deep FAQs | Weak / partial | Live kitchen page is much deeper SEO content |
| Map module | Weak / partial | Live leans hard on map imagery |
| Flip-card services | Different | Rework uses photo cards (often better UX) |

**Recommendation:**  
Recreate **information architecture + conversion sections**, not WordPress flip-card UI 1:1. Keep NWS rework’s stronger editorial design (plaster/espresso/terracotta) while ensuring **page coverage** matches sitemap priorities.

---

## 8. Suggested recreation priority (phased)

### Phase 1 — Core conversion shell
1. Global nav + footer  
2. Landing (all 8 sections)  
3. Contact page  
4. Services hub  

### Phase 2 — Money pages  
5. Service detail template (start: Kitchen, Bathroom, Custom Home, Whole Home)  
6. FAQs  
7. About  

### Phase 3 — Local SEO  
8. Areas hub  
9. City landings (all 8)  

### Phase 4 — Proof media  
10. Gallery hub + category routes (or filters with SEO titles)  
11. Before/after moments on service + home  

### Phase 5 — Depth  
12. Service-specific FAQs + cost ranges  
13. Expand form fields to match live  
14. Map module polish  

---

## 9. Design aspects this research should drive

Once IA is agreed, design decisions fall out of:

| Design aspect | Driven by |
|---------------|-----------|
| **Page templates** | §5 templates A–I |
| **Section library** | Landing §3 + shared chrome §2 |
| **Component set** | §6 checklist |
| **Content model** | Services (11), Cities (8+), Gallery categories (4), FAQs, Reviews, Form |
| **Conversion hierarchy** | Phone > Form > Secondary “View work / Services” |
| **SEO structure** | Unique H1s per service + city; gallery URLs optional |
| **Visual system** | Photo-first construction brand; warm residential palette (rework already has strong tokens) |
| **Interaction** | Accordion FAQs, service cards, filters, form validation states |

### Open design choices (decide next)

1. **Gallery:** multi-page (live) vs single filtered gallery (rework)?  
2. **Service cards:** flip-cards (live) vs photo image cards (rework)?  
3. **Richmond:** dedicated city page or only home/areas hub?  
4. **Form:** match live fields or keep simpler high-conversion form?  
5. **Depth:** full SEO long-form on every service vs shorter premium pages + FAQs?  

---

## 10. Appendix — quick URL list

### Core
- https://www.nws-homes.com/
- https://www.nws-homes.com/services/
- https://www.nws-homes.com/contact/
- https://www.nws-homes.com/about/
- https://www.nws-homes.com/faqs/
- https://www.nws-homes.com/areas-we-serve/

### Galleries
- https://www.nws-homes.com/custom-homes-gallery/
- https://www.nws-homes.com/remodeling-gallery/
- https://www.nws-homes.com/kitchen-remodeling-gallery/
- https://www.nws-homes.com/bathroom-remodeling-gallery/

### Cities
- https://www.nws-homes.com/sugar-land-tx/
- https://www.nws-homes.com/katy-tx/
- https://www.nws-homes.com/fulshear-tx/
- https://www.nws-homes.com/cinco-ranch-tx/
- https://www.nws-homes.com/rosenberg-tx/
- https://www.nws-homes.com/weston-lakes-tx/
- https://www.nws-homes.com/west-side-of-houston-tx/
- https://www.nws-homes.com/park-row-tx/

### Services
- https://www.nws-homes.com/services/custom-home-builder/
- https://www.nws-homes.com/services/remodeling-company/
- https://www.nws-homes.com/services/kitchen-remodeling/
- https://www.nws-homes.com/services/bathroom-remodeling/
- https://www.nws-homes.com/services/home-remodel/
- https://www.nws-homes.com/services/bathroom-shower-remodel/
- https://www.nws-homes.com/services/bathtub-remodeling/
- https://www.nws-homes.com/services/room-additions-home-additions/
- https://www.nws-homes.com/services/basement-remodeling-finishing/
- https://www.nws-homes.com/services/garage-remodel-contractors/
- https://www.nws-homes.com/services/open-concept-remodeling/

---

## 11. One-line summary

**To recreate NWS Homes:** build a **photo-led contractor site** with **one strong landing**, **11 service money pages**, **8 city SEO pages**, **4 gallery surfaces**, plus **About / FAQs / Contact / Areas hub**, all sharing **nav, footer, phone CTAs, map, and a lead form** — then apply a modern design system on top of that IA (not the other way around).
