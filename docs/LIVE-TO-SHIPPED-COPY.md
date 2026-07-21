# Live → shipped copy audit (home · kitchen · contact)

**Live source:** https://www.nws-homes.com/  
**Pass date:** 2026-07-22  
**Rules:** Same facts/services/cities; tighten SEO fluff; no invented promos (no 5% off); kitchen costs only as published live.

Shipped strings must remain present in the files cited under **Where shipped**.

---

## Home (`/` → `app/(site)/page.tsx` + sections)

| Slot | Live seed | Shipped better wording | Where shipped |
|------|-----------|------------------------|---------------|
| Hero H1 | Let’s Build Your Dreams | Let’s build your dreams. (two-line) | `components/v2/sections/Hero.tsx` |
| Hero body | Discover what it truly means to live in a custom-built or beautifully remodeled home… attention to detail, personalized design… | Discover what a custom-built or beautifully remodeled home can feel like. NWS brings personalized design and careful craftsmanship… one thoughtful renovation at a time. | `Hero.tsx` |
| Hero location | Richmond / since 2007 (authority band) | Richmond, TX · Serving Fort Bend since 2007 | `Hero.tsx` badge |
| Hero primary CTA | Book Now (tel) | Book now (tel office) | `Hero.tsx` |
| Hero secondary | (contact / speak to experts) | Get in touch → `/contact` | `Hero.tsx` |
| B/A section | (not on live home; capability upgrade) | Dependable remodeling you can see. + since 2007 / care & precision / upgrades to whole-home | `components/BeforeAfterSection.tsx` |
| Services title | Our Quality Services | Our quality services | `page.tsx` → `ServicesGrid` |
| Services intro | Full range… vision and budget… ground up or transform existing | Full range of residential remodeling and custom home building… Build from the ground up or transform the home you already love. | `page.tsx` subtitle |
| Mid CTA title | Bring Your Dream Home to Life | Bring your dream home to life. | `page.tsx` + `CTA.tsx` default |
| Mid CTA body | From minor upgrades to full-on renovations… guide you through the process from start to finish | From minor upgrades to full renovations… from first conversation to final walkthrough. Call now… | `page.tsx` |
| Reviews eyebrow | Don’t Take Our Word For It | Don’t take our word for it | `Testimonials.tsx` |
| Reviews H2 | Check What Our Clients Are Saying | Check what our clients are saying | `Testimonials.tsx` |
| Areas intro | We complete every project promptly, effectively, and with the utmost attention to detail. | We complete every project promptly, carefully, and with attention to detail across Richmond, Fort Bend… | `AreasStrip.tsx` |
| Lead framing | Reach Out / We’re Looking Forward to Work With You | We’re looking forward to working with you. / Reach out to our contractors… | `ContactLead.tsx` |

**Unchanged / already aligned:** Full review quotes from live Google/Angi bank in `data/testimonials.ts`; social URLs from live; service list from live catalog (data).

---

## Kitchen (`/services/kitchen-remodeling` → `data/services.ts` kitchen entry)

| Slot | Live seed | Shipped better wording | Where shipped |
|------|-----------|------------------------|---------------|
| Hero title | Improve the “Heart” of Your Home | Improve the heart of your home. | `title` + `titleAccent` |
| Hero sub | Modern Kitchen Remodeling That Fits Your Lifestyle + transform functional modern… | Modern kitchen remodeling that fits your lifestyle. From layout redesign to premium finishes… | `heroSubtitle` |
| Intro | Outdated kitchens… frustrating… NWS specializes… process begins with how you use… | Same facts, three tighter paragraphs | `intro[]` |
| Features | Layout / counters / cabinets / upgrades lists | Same options, clearer group labels | `includeGroups` |
| Costs | Basic $15k–$30k / Mid $30k–$60k / High $60k+ | Same ranges and notes (live-published only) | `costBands` |
| FAQs | Timeline, move-out, value, design, materials | Same five topics; materials FAQ added from live | `faqs` |
| Card blurb | Kitchen remodeling… layout functionality style | Kitchen remodeling that improves layout, function, and style… | `cardDescription` |
| Bottom CTA | Elevate Your Kitchen… Call Now | Dynamic CTA via page: Start your kitchen remodeling project + call/consult | `[slug]/page.tsx` + `CTA` |

**Not invented:** No new dollar figures beyond live cost bands. No 5% website promo.

---

## Contact (`/contact` → page + `ContactLead`)

| Slot | Live seed | Shipped better wording | Where shipped |
|------|-----------|------------------------|---------------|
| Eyebrow | Start Your Project | Start your project | `contact/page.tsx` |
| H1 | Reach Out to Our Contractors | Reach out to our contractors | `contact/page.tsx` |
| Lead | Support / friendly team / questions | Questions or ready to begin? Our friendly team is here to help… | `contact/page.tsx` |
| Facts | Office (281) 299-2309, email, hours Mon–Fri 8–6, Sat 8–12, Sun Closed | Same via `CONTACT` + mobile from live home | `lib/constants.ts` + page chips |
| Form heading | We’re Looking Forward to Work With You | We’re looking forward to working with you. | `ContactLead.tsx` |
| Form sub | Reach out to contractors / friendly team | Reach out to our contractors. Our friendly team… | `ContactLead.tsx` |
| Form card title | Get In Touch | Get in touch | `ContactLead.tsx` |
| Prefer call CTA | Book Now / Call | Prefer to call? … Office or mobile during business hours… | `contact/page.tsx` |

**Explicitly omitted vs inventing:** No “5% off website,” no fake response SLAs beyond “promptly / one business day” as helpful UX.

---

## Spot-check map (for verification)

These exact substrings must exist in shipped source after this pass:

1. `Let's build` / `your dreams` — `Hero.tsx`  
2. `Bring your dream home to life.` — `page.tsx` or `CTA.tsx`  
3. `Check what our clients are saying` — `Testimonials.tsx`  
4. `Improve the heart` — `data/services.ts` kitchen  
5. `$15,000–$30,000` — kitchen `costBands`  
6. `How do I choose the right materials?` — kitchen FAQs  
7. `Reach out to our contractors` — `contact/page.tsx`  
8. `We're looking forward to working with you` — `ContactLead.tsx`  

---

## Cascade pass (remaining services + hubs) � 2026-07-22

**Scope:** All non-kitchen services + about / FAQs / areas / services hub / gallery.  
**Rules:** Live-derived; thinned SEO walls; **no 5% website promo** even when live garage/open-concept pages mention it.

### Services (`data/services.ts`)

| Slug | Live path | Live seed (headline intent) | Shipped better (key strings) |
|------|-----------|----------------------------|------------------------------|
| custom-home-building | /services/custom-home-builder/ | We Build Your Dream Home / 35+ years | We build your dream home. / From first consultation to final walkthrough |
| general-remodeling | /services/remodeling-company/ | Transform Your Home With Expert Remodeling / since 2007 / 35+ | Transform your home with expert remodeling. / 35+ years combined |
| bathroom-remodeling | /services/bathroom-remodeling/ | Give Your Bathroom a Makeover / Texas humidity | Give your bathroom a makeover. / Built for Texas moisture / $10,000�$25,000 |
| whole-home-remodeling | /services/home-remodel/ | Renovate Your Home With Confidence / 2�6 months | Renovate your home with confidence. / From ~$50,000 / Can exceed $100,000 |
| shower-remodel | /services/bathroom-shower-remodel/ | Upgrade Your Bathroom with a Stunning Shower Remodel | Upgrade your bathroom with a better shower. |
| bathtub-remodel | /services/bathtub-remodeling/ | Revamp Your Bathroom with a Stunning Bathtub Remodel | Revamp your bathroom with a better tub. |
| room-additions | /services/room-additions-home-additions/ | Seamlessly Add Space and Value | Seamlessly add space and value. / $40,000�$80,000 ranges |
| basement-remodeling | /services/basement-remodeling-finishing/ | Maximize Your Home with Basement Remodel | Maximize your home with a better basement. |
| garage-conversions | /services/garage-remodel-contractors/ | Turn Your Garage Into a Functional Living Space | Turn your garage into living space. (promo 5% **omitted**) |
| open-concept | /services/open-concept-remodeling/ | Create a Bright, Welcoming Open Concept | Create a bright, open living space. (promo 5% **omitted**) |
| kitchen-remodeling | (prior pass) | Improve the heart of your home | Already audited above |

### Hubs

| Page | Live seed | Shipped better | Where |
|------|-----------|----------------|-------|
| Services hub | Our Quality Services / wide range� square one or remodel | Our quality services / same wide-range intent | `app/(site)/services/page.tsx` |
| About | Your Go-to Home Builders / full-service since 2007 | Your go-to home builders / full-service since 2007 | `app/(site)/about/page.tsx` |
| FAQs | FREQUENTLY ASKED QUESTIONS + SEO Q list | Frequently asked questions + live topics, clearer answers | `data/faqs.ts` + `faqs/page.tsx` |
| Areas | Areas We Serve / promptly� detail | Areas we serve / promptly, carefully� | `areas/page.tsx` |
| Gallery | (category galleries) | See our work / real project photography + filters | `gallery/page.tsx` |

### Spot-check strings (must exist in source)

1. `We build your` � services.ts custom-home  
2. `35 years of combined` or `35+` � general-remodeling  
3. `$10,000�$25,000` � bathroom costBands  
4. `From ~$50,000` � whole-home  
5. `Your go-to home builders` � about  
6. `Our quality services` � services hub  
7. `Frequently asked questions` � faqs page  
8. `Turn your garage` � garage-conversions  
9. `Create a bright, open` � open-concept  
10. Home section order unchanged (Hero ? B/A ? ServicesGrid ? CTA ? Testimonials ? ContactLead ? AreasStrip)

