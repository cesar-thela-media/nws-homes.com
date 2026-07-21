# Phase 2b — Visual system pass

Design-only elevation after Phase 1 content freeze + Phase 2a Space shells.

## Media
| Asset | Path | Notes |
|-------|------|--------|
| Hero video | `/videos/nws-hero.mp4` | Space hero-14 autoplay muted loop |
| Hero poster | `/nws/generated/hero-poster.jpg` | AI still, plaster/espresso/terracotta mood |
| Project photos | `/nws/*` | Real NWS photography (unchanged) |

## Tokens
- Palette: plaster `#F7F4EF`, espresso `#2B2118`, terracotta `#B5552D`, sage `#9A9B8C`
- Shared utilities (`.nws-v2`): `.hero-overlay`, `.hero-overlay-center`, `.page-hero-band`, `.surface-soft`, `.surface-espresso`
- Type: Inter via `components/v2/lib/typography.ts` (+ `heroLead`, `accentItalic`)

## Components
- `SocialLinks` — FB / IG / Houzz from `lib/constants` SOCIAL
- `FadeIn` — scroll reveal with reduced-motion support

## Claims
No new stats, prices, or promos. Copy freeze remains in structure tests.
