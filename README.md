# NWS Custom Homes & Remodeling

Marketing website for **NWS Custom Homes**, a full-service custom home builder and remodeling company serving Fort Bend County — Richmond, Katy, Sugar Land, Cinco Ranch, and surrounding areas — since 2007.

**Live site:** https://nws-rework-june15.vercel.app

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | React inline `style={{}}` props — no Tailwind in JSX |
| Fonts | Playfair Display (serif) + DM Sans (sans) via `next/font/google` |
| Before/After slider | `img-comparison-slider` web component |
| Deployment | Vercel (auto-deploy on push to `main`) |

> **Styling rule:** All colors and fonts come from `COLORS` / `FONTS` constants in `lib/constants.ts`. Never use Tailwind class names in JSX — `globals.css` has no `@tailwind` directives.

---

## Project Structure

```
app/
  layout.tsx              # Root layout — fonts, global metadata, NavBar + Footer
  page.tsx                # Homepage
  about/page.tsx
  areas/page.tsx
  contact/page.tsx
  faqs/page.tsx
  gallery/page.tsx
  services/
    page.tsx              # All services overview
    [slug]/page.tsx       # Dynamic page per service (10 slugs)

components/
  shared/
    NavBar.tsx            # Sticky nav, hover dropdowns, mobile hamburger overlay
    Footer.tsx
  BeforeAfterSlider.tsx   # img-comparison-slider wrapper
  Hero.tsx
  ServicesSection.tsx
  TestimonialsSection.tsx
  CTABanner.tsx
  StatsStrip.tsx
  ... (other section components)

data/
  services.ts             # All 10 services: slug, copy, images, before/after pairs

lib/
  constants.ts            # COLORS, FONTS, CONTACT
  types.ts                # Shared TypeScript types

public/
  nws-logo.png            # Brand logo (served at /nws-logo.png)
  favicon.ico
```

---

## Brand Constants

```ts
// lib/constants.ts

export const COLORS = {
  plaster:    '#F7F4EF',  // warm off-white — main background
  espresso:   '#2B2118',  // near-black — body text
  terracotta: '#B5552D',  // rust/orange — primary CTA accent
  sage:       '#9A9B8C',  // muted grey-green — secondary text
  white:      '#FFFFFF',
}

export const FONTS = {
  serif: 'var(--font-playfair), Georgia, serif',
  sans:  'var(--font-dm-sans), system-ui, sans-serif',
}

export const CONTACT = {
  phone:     '(281) 299-2309',
  phoneHref: 'tel:2812992309',
  email:     'info@nws-homes.com',
  address:   'Richmond, TX',
}
```

---

## Running Locally

**Requirements:** Node.js 18+

```bash
# 1. Clone
git clone https://github.com/thela-media-group/nws-homes.com.git
cd nws-homes.com

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Verify production build before pushing
npm run build
```

> **Cache tip:** If the homepage shows a 404 after clearing `.next/` or switching branches, kill the dev server, delete `.next/`, and restart — Next.js App Router requires a cold start after cache invalidation.

---

## Services (10 slugs)

All service pages are generated from `data/services.ts` at `/services/[slug]`:

| Slug | Service |
|---|---|
| `custom-home-building` | Custom Home Building |
| `kitchen-remodeling` | Kitchen Remodeling |
| `bathroom-remodeling` | Bathroom Remodeling |
| `whole-home-remodeling` | Whole-Home Remodeling |
| `shower-remodel` | Shower Remodel |
| `bathtub-remodel` | Bathtub Remodel |
| `room-additions` | Room Additions |
| `basement-remodeling` | Basement Remodeling |
| `garage-conversions` | Garage Conversions |
| `open-concept` | Open Concept Remodeling |

---

## Deployment

Pushes to `main` on either repo auto-deploy via Vercel.

```bash
# Push to both repos
git push origin master:main && git push june15 master:main
```

### Vercel requirements
- `npm run build` → zero errors, 11 routes (10 static + 1 dynamic)
- No environment variables required — all data is static
- `postcss.config.mjs` must use ESM `export default` (Next.js 14 requirement)

---

## Git Remotes

| Remote | Repo | Purpose |
|---|---|---|
| `origin` | `thela-media-group/nws-homes.com` | primary / client org |
| `june15` | `cesar-thela-media/nws-homes.com` | agency copy / Vercel deploy |
