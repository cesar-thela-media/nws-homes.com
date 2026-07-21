import type { Service } from '@/lib/types';

const NWS = '/nws';

export const services: Service[] = [
  {
    slug: 'custom-home-building',
    livePath: '/services/custom-home-builder/',
    navLabel: 'Custom Home Building',
    title: 'We build your',
    titleAccent: 'dream home.',
    heroSubtitle:
      'From the first consultation to the final walkthrough, we work with you so your home matches what you envisioned, modern, traditional, or entirely unique.',
    heroImage: `${NWS}/custom-homes-7.jpeg`,
    heroVariant: 'dark' as const,
    galleryImages: [`${NWS}/custom-homes-2.jpeg`, `${NWS}/custom-homes-4.jpeg`, `${NWS}/custom-homes-6.jpeg`],
    byTheNumbers: [
      { value: '2007', label: 'Building since' },
      { value: '35+', label: 'Years combined exp.' },
      { value: 'Local', label: 'Richmond & Fort Bend' },
    ],
    intro: [
      'When it comes to building custom homes, the process should reflect your lifestyle and personality. As a custom home builder serving Richmond, TX and Fort Bend County, we know no two families are the same, and your home should not be either.',
      'A custom home gives you the freedom to design a one-of-a-kind space from the ground up: floor plan, layout, finishes, and the details in between. We guide lot selection, zoning considerations, utilities, and site prep so construction starts on a solid foundation.',
      'From initial consultation and floor plan development through permitting, construction, and final walkthrough, we keep communication clear so building feels organized, not overwhelming.',
    ],
    includes: [
      'Lot evaluation & selection support',
      'Floor plan development',
      'Design & material selection',
      'Permitting & Fort Bend approvals',
      'Foundation, framing & systems',
      'Finishes & fixtures',
      'Final walkthrough',
    ],
    includeGroups: [
      {
        label: 'Planning',
        items: ['Initial consultation on vision and must-haves', 'Floor plan tailored to daily routines', 'Lot size, zoning, drainage, and utilities guidance'],
      },
      {
        label: 'Build',
        items: ['Permitting and code compliance', 'Framing, systems, and construction management', 'Finishes chosen with your design direction'],
      },
      {
        label: 'Handoff',
        items: ['Final walkthrough for quality and satisfaction', 'Clear communication on schedule and materials'],
      },
    ],
    processSteps: [
      'Initial consultation',
      'Floor plan & design',
      'Permitting & approvals',
      'Construction & final walkthrough',
    ],
    processDescriptions: [
      'Discuss your vision, budget, and must-have features before drawings go far.',
      'Create a layout for your lifestyle, then select finishes, fixtures, and architectural details.',
      'We handle local permits and compliance so the project can move without avoidable delays.',
      'Manage framing through finishing, then review every detail with you at handoff.',
    ],
    beforeAfter: {
      before: `${NWS}/custom-homes-3.jpeg`,
      after: `${NWS}/custom-homes-7.jpeg`,
    },
    relatedSlugs: ['whole-home-remodeling', 'general-remodeling', 'room-additions'],
    iconType: 'house',
    cardDescription:
      'Custom construction from consultation to final walkthrough, built around how you live in Richmond and Fort Bend County.',
  },
  {
    slug: 'general-remodeling',
    livePath: '/services/remodeling-company/',
    navLabel: 'Remodeling',
    title: 'Transform your home',
    titleAccent: 'with expert remodeling.',
    heroSubtitle:
      'From painting and layout redesigns to major interior renovations, maximize space, comfort, and value with a dependable local team.',
    heroImage: `${NWS}/remodeling-2.jpeg`,
    galleryImages: [`${NWS}/remodeling-1.jpeg`, `${NWS}/remodeling-3.jpeg`, `${NWS}/remodeling-5.jpeg`],
    byTheNumbers: [
      { value: '2007', label: 'Local since' },
      { value: '35+', label: 'Years combined exp.' },
      { value: 'Full', label: 'Interior focus' },
    ],
    intro: [
      'Choosing the right remodeling company can make or break a project. Poor communication and unclear timelines turn renovations into stress. Homeowners need a team they can rely on from planning to completion.',
      'NWS has served Richmond, TX since 2007 with over 35 years of combined construction and remodeling experience. We focus on clear communication, structured planning, and consistent craftsmanship.',
      'Whether you want to modernize a kitchen, upgrade a bathroom, or refresh multiple rooms, we listen, plan, and build so your home feels fresh, functional, and customized.',
    ],
    includes: [
      'Kitchen and bath updates',
      'Interior layout redesign',
      'Whole-home painting',
      'Flooring and surfaces',
      'Lighting improvements',
      'Project planning and coordination',
    ],
    includeGroups: [
      {
        label: 'What sets us apart',
        items: [
          'Established local business since 2007',
          'Over 35 years of combined industry experience',
          'Personalized approach on every project',
          'Reliable timelines and organized workflow',
        ],
      },
      {
        label: 'Typical work',
        items: ['Kitchen and bathroom upgrades', 'Layout redesigns', 'Painting and finish work', 'Flooring and lighting'],
      },
      {
        label: 'Service area',
        items: ['Richmond, TX', 'Sugar Land, Katy, Fulshear, Rosenberg', 'Nearby Fort Bend communities'],
      },
    ],
    processSteps: ['Consultation', 'Plan & scope', 'Build', 'Walkthrough'],
    processDescriptions: [
      'Share your vision. We walk the home and outline what is realistic for budget and timeline.',
      'Scope, materials, and sequence are documented so you always know what happens next.',
      'Work proceeds with organized workflow and regular communication.',
      'Final walkthrough confirms spaces match the plan you approved.',
    ],
    beforeAfter: {
      before: `${NWS}/remodeling-1.jpeg`,
      after: `${NWS}/remodeling-5.jpeg`,
    },
    relatedSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'whole-home-remodeling'],
    iconType: 'home',
    cardDescription:
      'Dependable remodeling from painting and layout changes to major interior updates, since 2007 in Richmond.',
  },
  {
    slug: 'kitchen-remodeling',
    livePath: '/services/kitchen-remodeling/',
    navLabel: 'Kitchen Remodeling',
    title: 'Improve the heart',
    titleAccent: 'of your home.',
    heroSubtitle:
      'Modern kitchen remodeling that fits your lifestyle. From layout redesign to premium finishes, every detail is planned for daily comfort, style, and long-term value.',
    heroImage: `${NWS}/kitchen-gallery-7.jpeg`,
    galleryImages: [`${NWS}/kitchen-gallery-1.jpeg`, `${NWS}/kitchen-gallery-3.jpeg`, `${NWS}/kitchen-gallery-5.jpeg`],
    byTheNumbers: [
      { value: '4–10', label: 'Weeks typical' },
      { value: 'Layout', label: 'First priority' },
      { value: 'Local', label: 'Richmond & beyond' },
    ],
    beforeAfter: {
      before: `${NWS}/kitchen-gallery-9.jpeg`,
      after: `${NWS}/kitchen-gallery-7.jpeg`,
    },
    intro: [
      'Outdated kitchens make daily routines frustrating and limit how you use your home. Poor layouts, worn cabinets, and a lack of storage often lead to cluttered, inefficient spaces that no longer fit your lifestyle.',
      'At NWS Custom Homes and Remodeling, we specialize in kitchen remodeling in Richmond, TX and the surrounding areas. We start with how you use your kitchen, then plan layout, materials, and precise installation so the space works for cooking, gathering, and long-term value.',
      'From modern upgrades to full kitchen transformations, we create kitchens that improve flow, maximize storage, and elevate how the room looks and feels, whether you want contemporary clean lines or a warmer traditional style.',
    ],
    includes: [
      'Cabinet design & installation',
      'Countertop fabrication & install',
      'Backsplash tile work',
      'Island design & build',
      'Appliance rough-in',
      'Lighting & electrical',
      'Flooring installation',
    ],
    includeGroups: [
      {
        label: 'Layout options for better flow',
        items: [
          'Galley layouts for smaller spaces and streamlined workflow',
          'L-shaped kitchens for an open feel and flexible dining',
          'Island layouts for prep space, seating, and storage',
          'Open concept designs that connect kitchen and living areas',
        ],
      },
      {
        label: 'Counters, cabinets & storage',
        items: [
          'Quartz counters for durable, low-maintenance surfaces',
          'Granite counters with natural veining and heat resistance',
          'Butcher block for warm prep areas and character',
          'Shaker, flat-panel, or custom cabinetry with soft-close hardware',
        ],
      },
      {
        label: 'Additional upgrades',
        items: [
          'Under-cabinet and pendant lighting',
          'Backsplash that protects walls and finishes the look',
          'Durable tile, hardwood, or luxury vinyl flooring',
          'Appliance rough-in coordinated with the layout',
        ],
      },
    ],
    processSteps: ['Consultation & how you cook', 'Layout & material selection', 'Demo & prep', 'Install & finish'],
    processDescriptions: [
      'We begin by understanding how you use your kitchen, what frustrates you today, and what you want the finished room to support day to day.',
      'Layout planning and material selection come next so cabinets, counters, backsplash, lighting, and appliances work as one plan.',
      'Demo and prep, including leveling and rough-in where needed, set a clean foundation before finish work starts.',
      'Installation follows a clear sequence so surfaces, storage, lighting, and appliances come together with attention to detail.',
    ],
    costBands: [
      {
        label: 'Basic kitchen updates',
        range: '$15,000–$30,000',
        notes: 'Cabinet refinishing, new countertops, and minor layout improvements',
      },
      {
        label: 'Mid-range remodel',
        range: '$30,000–$60,000',
        notes: 'New cabinetry, upgraded appliances, improved lighting, and layout adjustments',
      },
      {
        label: 'High-end kitchen renovation',
        range: '$60,000+',
        notes: 'Full redesign with custom cabinetry, premium materials, expanded layouts, and luxury finishes',
      },
    ],
    faqs: [
      {
        question: 'How long does a kitchen remodel take?',
        answer:
          'Most kitchen remodeling projects take between 4 and 10 weeks depending on scope. Larger renovations with layout changes or custom cabinetry may take longer due to design, ordering, and installation timelines.',
      },
      {
        question: 'Do I need to move out during the remodel?',
        answer:
          'In most cases you can stay in your home. You may need a temporary kitchen setup while work is completed, especially during major renovations.',
      },
      {
        question: 'What adds the most value in a kitchen remodel?',
        answer:
          'Upgrades like new cabinets, countertops, and improved layouts typically offer the strongest return. Open layouts and modern finishes are especially appealing to buyers in Richmond, TX and surrounding areas.',
      },
      {
        question: 'Can you help with design ideas?',
        answer:
          'Yes. We guide layout planning, material selection, and design choices so your kitchen matches your vision and how you live.',
      },
      {
        question: 'How do I choose the right materials?',
        answer:
          'We help you compare options such as quartz, granite, and wood surfaces based on durability, maintenance, and style so you pick the best fit for your home.',
      },
    ],
    relatedSlugs: ['bathroom-remodeling', 'whole-home-remodeling', 'open-concept'],
    iconType: 'kitchen',
    cardDescription:
      'Kitchen remodeling that improves layout, function, and style, planned around how you cook and live.',
  },
  {
    slug: 'bathroom-remodeling',
    livePath: '/services/bathroom-remodeling/',
    navLabel: 'Bathroom Remodeling',
    title: 'Give your bathroom',
    titleAccent: 'a makeover.',
    heroSubtitle:
      'Custom bathroom remodeling built for comfort. We turn ordinary baths into relaxing, functional spaces tailored to your style and needs.',
    heroImage: `${NWS}/bathroom-gallery-7.jpeg`,
    galleryImages: [`${NWS}/bathroom-gallery-2.jpeg`, `${NWS}/bathroom-gallery-4.jpeg`, `${NWS}/bathroom-gallery-6.jpeg`],
    byTheNumbers: [
      { value: 'Local', label: 'Richmond & Fort Bend' },
      { value: 'Texas', label: 'Humidity-ready builds' },
      { value: '2007', label: 'Building since' },
    ],
    beforeAfter: {
      before: `${NWS}/bathroom-gallery-2.jpeg`,
      after: `${NWS}/bathroom-gallery-7.jpeg`,
    },
    intro: [
      'An outdated bathroom can feel cramped, inefficient, and hard to maintain. Limited storage, worn surfaces, and poor ventilation lead to daily frustration and moisture problems that Texas humidity can make worse.',
      'NWS provides bathroom remodeling in Richmond, TX and surrounding areas that balances design and durability. We evaluate the space, plan improvements, and address moisture control so the finished room is comfortable and lasting.',
      'Whether you need a simple upgrade or a full renovation, we handle sinks, tubs, toilets, tile, countertops, and conversions with a start-to-finish approach and local permitting support.',
    ],
    includes: [
      'Full demo & haul-off',
      'Tile & stone installation',
      'Shower & tub work',
      'Vanity & fixture installation',
      'Plumbing updates',
      'Ventilation & lighting',
      'Waterproofing for Texas humidity',
    ],
    includeGroups: [
      {
        label: 'Common upgrades',
        items: [
          'Walk-in showers and tub-to-shower conversions',
          'Floating or double vanities with better storage',
          'Spa-inspired layouts and freestanding tubs',
          'Bold tile and durable porcelain or stone surfaces',
        ],
      },
      {
        label: 'Built for Texas moisture',
        items: [
          'Proper ventilation to control humidity',
          'Moisture-resistant materials for walls and floors',
          'Sealed tile and grout',
          'Drainage and shower waterproofing done right',
        ],
      },
      {
        label: 'Systems & finish',
        items: ['Plumbing updates', 'Lighting layers for task and mood', 'Permit and inspection coordination'],
      },
    ],
    processSteps: ['Consultation', 'Design & materials', 'Build with waterproofing', 'Walkthrough'],
    processDescriptions: [
      'We learn your goals, from a small refresh to a luxury spa bath, and review the existing layout.',
      'Select tile, vanities, fixtures, and features so the plan is clear before demo.',
      'Demo, waterproofing, tile, and fixtures install with attention to humidity and durability.',
      'Final review so the bathroom is ready for everyday use.',
    ],
    costBands: [
      {
        label: 'Typical complete bathroom renovation',
        range: '$10,000–$25,000',
        notes: 'Live-published average range; luxury finishes and custom work can go higher',
      },
    ],
    faqs: [
      {
        question: 'How much does bathroom remodeling cost in Richmond, TX?',
        answer:
          'Cost depends on size, materials, and scope. Homeowners can often expect roughly $10,000 to $25,000 for a complete renovation, while luxury finishes can go higher. We provide detailed estimates before work begins.',
      },
      {
        question: 'How long does a shower conversion take?',
        answer:
          'A tub-to-shower conversion often takes about one to two weeks depending on design and materials. Simpler work may finish sooner; custom tile and glass can take longer.',
      },
      {
        question: 'Do you handle permitting and inspections?',
        answer:
          'Yes. We coordinate permits and inspections so the project meets Richmond-area building codes and safety standards.',
      },
    ],
    relatedSlugs: ['shower-remodel', 'bathtub-remodel', 'kitchen-remodeling'],
    iconType: 'bath',
    cardDescription:
      'Bathroom makeovers that blend comfort, luxury, and durability, planned for Texas moisture and daily use.',
  },
  {
    slug: 'whole-home-remodeling',
    livePath: '/services/home-remodel/',
    navLabel: 'Whole Home Remodeling',
    title: 'Renovate your home',
    titleAccent: 'with confidence.',
    heroSubtitle:
      'From one room to a full home remodel, thoughtful design and expert craftsmanship that improve how your house works and feels.',
    heroImage: `${NWS}/remodeling-1.jpeg`,
    galleryImages: [`${NWS}/remodeling-1.jpeg`, `${NWS}/remodeling-2.jpeg`, `${NWS}/remodeling-3.jpeg`],
    byTheNumbers: [
      { value: '2–6', label: 'Months typical' },
      { value: 'Full', label: 'Home scope' },
      { value: 'Local', label: 'Richmond team' },
    ],
    intro: [
      'Your home should reflect your lifestyle and taste. We provide high-quality home remodel services that enhance both form and function, from small upgrades to complete whole-home remodeling in Richmond, TX and nearby.',
      'Whether you just purchased a house or want to refresh the one you have, our process covers layout changes, kitchens and baths, living spaces, flooring, and finishes so the whole home feels unified.',
      'Careful planning and coordination keep larger projects organized: consultation, design, material selection, construction, and final walkthrough.',
    ],
    includes: [
      'Layout redesign',
      'Kitchen and bathroom renovations',
      'Living space enhancements',
      'Flooring and finishes throughout',
      'Lighting upgrades',
      'Permitting support',
      'Final walkthrough',
    ],
    includeGroups: [
      {
        label: 'Core upgrades',
        items: [
          'Open floor plans that improve flow',
          'Kitchen renovation with modern layouts',
          'Bathroom upgrades including walk-in showers',
          'Living space expansions and better lighting',
          'Flooring and finishes that unify the home',
        ],
      },
      {
        label: 'Structured process',
        items: [
          'Initial consultation and planning',
          'Design and layout development',
          'Material selection',
          'Construction and installation',
          'Final walkthrough and completion',
        ],
      },
    ],
    processSteps: [
      'Consultation & planning',
      'Design & materials',
      'Construction',
      'Final walkthrough',
    ],
    processDescriptions: [
      'Define goals for one room or the full house and set a realistic scope.',
      'Develop layouts and select materials so decisions stay ahead of construction.',
      'Build with coordinated trades and clear updates as phases complete.',
      'Walk the finished home and close out remaining items.',
    ],
    costBands: [
      {
        label: 'Partial remodels (typical starting range)',
        range: 'From ~$50,000',
        notes: 'Live-published starting point; depends on scope and materials',
      },
      {
        label: 'Full home renovations',
        range: 'Can exceed $100,000',
        notes: 'Customization, layout changes, and finishes drive cost',
      },
    ],
    faqs: [
      {
        question: 'How long does a full home remodel take?',
        answer:
          'Most projects take about 2 to 6 months depending on size and scope. Structural changes, additions, or major layout redesigns can take longer.',
      },
      {
        question: 'What is included in a whole home remodel?',
        answer:
          'It can include layout changes, kitchen and bath renovations, flooring, lighting, and new finishes throughout, focused on flow and overall design rather than one isolated room.',
      },
      {
        question: 'Do I need permits for home remodeling in Richmond, TX?',
        answer:
          'Many projects require permits, especially structural, electrical, or plumbing work. We handle permitting so the job meets local codes.',
      },
    ],
    beforeAfter: {
      before: `${NWS}/remodeling-1.jpeg`,
      after: `${NWS}/remodeling-5.jpeg`,
    },
    relatedSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'room-additions'],
    iconType: 'home',
    cardDescription:
      'Whole-home remodeling that improves form and function, from partial upgrades to full renovations.',
  },
  {
    slug: 'shower-remodel',
    livePath: '/services/bathroom-shower-remodel/',
    navLabel: 'Shower Remodel',
    title: 'Upgrade your bathroom',
    titleAccent: 'with a better shower.',
    heroSubtitle:
      'From a full shower remodel to a focused update, create a modern, functional shower that fits how you live.',
    heroImage: `${NWS}/bathroom-gallery-5.jpeg`,
    galleryImages: [`${NWS}/bathroom-gallery-1.jpeg`, `${NWS}/bathroom-gallery-3.jpeg`, `${NWS}/bathroom-gallery-5.jpeg`],
    byTheNumbers: [
      { value: 'Custom', label: 'Shower design' },
      { value: 'Local', label: 'Richmond team' },
      { value: '2007', label: 'Trusted since' },
    ],
    intro: [
      'An outdated or cramped shower can disrupt daily routines. Poor water pressure, leaks, or limited space make showering a hassle and can affect comfort and home value.',
      'As shower remodel contractors in Richmond, TX, we transform showers to match your needs, whether you want better function, a fresh look, or a full redesign with walk-in access.',
      'We guide glass choices, tile, storage features, and waterproofing so the finished shower is stylish, practical, and built to last.',
    ],
    includes: [
      'Waterproofing systems',
      'Custom tile work',
      'Frameless or framed glass',
      'Fixtures and showerheads',
      'Niches, benches, and shelving',
      'Walk-in conversion support',
      'Final quality check',
    ],
    includeGroups: [
      {
        label: 'Glass & enclosure',
        items: ['Frameless glass for a clean open look', 'Framed glass for durable value', 'Walk-in layouts with modern access'],
      },
      {
        label: 'Tile & features',
        items: ['Porcelain, ceramic, stone, or mosaic accents', 'Shower benches and wall niches', 'Slip-resistant flooring options'],
      },
      {
        label: 'Comfort upgrades',
        items: ['Rainfall and handheld fixtures', 'Better drainage and waterproofing', 'Storage that keeps the space organized'],
      },
    ],
    processSteps: [
      'Assessment',
      'Design planning',
      'Demo, waterproofing & install',
      'Final inspection',
    ],
    processDescriptions: [
      'Evaluate layout, plumbing, and structural considerations.',
      'Select layout, tile, glass, and fixtures that match your goals.',
      'Remove old materials, waterproof properly, then install tile, glass, and fixtures.',
      'Confirm function and finish quality before handoff.',
    ],
    beforeAfter: {
      before: `${NWS}/bathroom-gallery-1.jpeg`,
      after: `${NWS}/bathroom-gallery-5.jpeg`,
    },
    relatedSlugs: ['bathroom-remodeling', 'bathtub-remodel', 'whole-home-remodeling'],
    iconType: 'shower',
    cardDescription:
      'Stunning shower remodels and walk-in conversions that improve comfort, style, and everyday use.',
  },
  {
    slug: 'bathtub-remodel',
    livePath: '/services/bathtub-remodeling/',
    navLabel: 'Bathtub Remodel',
    title: 'Revamp your bathroom',
    titleAccent: 'with a better tub.',
    heroSubtitle:
      'High-quality bathtub remodeling, from a fresh tub update to a full redesign or tub-to-shower conversion.',
    heroImage: `${NWS}/bathroom-gallery-6.jpeg`,
    galleryImages: [`${NWS}/bathroom-gallery-3.jpeg`, `${NWS}/bathroom-gallery-5.jpeg`, `${NWS}/bathroom-gallery-7.jpeg`],
    byTheNumbers: [
      { value: 'Bath', label: 'Focused upgrades' },
      { value: 'Local', label: 'Fort Bend team' },
      { value: '2007', label: 'Building since' },
    ],
    intro: [
      'An outdated or uncomfortable bathtub is frustrating. Cracked tubs, peeling tile, or a style that no longer fits can stress daily routines and lower how the bathroom feels.',
      'We specialize in bathtub remodeling in Richmond, TX, working with you to combine form and function, whether you want a modern freestanding soaker or a classic clawfoot look.',
      'Many homeowners also choose tub-to-shower conversion for accessibility and a more open layout. We handle consultation through final walkthrough with minimal disruption.',
    ],
    includes: [
      'Tub removal & haul-off',
      'Plumbing and drain work',
      'Freestanding, clawfoot, or alcove installs',
      'Tile and surround work',
      'Fixture installation',
      'Tub-to-shower conversions',
      'Final walkthrough',
    ],
    includeGroups: [
      {
        label: 'Tub options',
        items: [
          'Modern freestanding tubs as a focal point',
          'Classic clawfoot styles',
          'Deep soaking and ergonomic shapes',
          'Alcove and drop-in built-in options',
        ],
      },
      {
        label: 'Conversion path',
        items: [
          'Consultation and design planning',
          'Demolition and waterproofing prep',
          'Shower install with tile and glass',
          'Final walkthrough for quality',
        ],
      },
    ],
    processSteps: ['Consultation', 'Design & selection', 'Demo & install', 'Walkthrough'],
    processDescriptions: [
      'Review space, plumbing, and goals for a tub update or conversion.',
      'Choose tub style, surrounds, and fixtures that match your bathroom.',
      'Remove the old tub, prepare the space, and install the new design carefully.',
      'Confirm everything looks and functions as planned.',
    ],
    beforeAfter: {
      before: `${NWS}/bathroom-gallery-3.jpeg`,
      after: `${NWS}/bathroom-gallery-6.jpeg`,
    },
    relatedSlugs: ['shower-remodel', 'bathroom-remodeling', 'whole-home-remodeling'],
    iconType: 'tub',
    cardDescription:
      'Bathtub remodels and conversions that refresh style and make the bathroom feel like a retreat.',
  },
  {
    slug: 'room-additions',
    livePath: '/services/room-additions-home-additions/',
    navLabel: 'Room Additions',
    title: 'Seamlessly add space',
    titleAccent: 'and value.',
    heroSubtitle:
      'From master suites to second stories, room additions designed and built to feel complete with the home you already have.',
    heroImage: `${NWS}/custom-homes-3.jpeg`,
    galleryImages: [`${NWS}/custom-homes-3.jpeg`, `${NWS}/custom-homes-5.jpeg`, `${NWS}/custom-homes-8.jpeg`],
    byTheNumbers: [
      { value: 'Expand', label: 'Living space' },
      { value: 'Permit', label: 'We handle process' },
      { value: 'Local', label: 'Fort Bend builds' },
    ],
    intro: [
      'Running out of space is stressful whether your family is growing, you need room for relatives, or you simply want more breathing room. Starting an addition can feel intimidating without the right team.',
      'As home addition contractors in Richmond, TX and Fort Bend County since 2007, we handle design, permits, and construction so new space blends with what is already there.',
      'From extra bedrooms and home offices to second-story builds and mother-in-law suites, we plan carefully so the finished addition feels natural and cohesive.',
    ],
    includes: [
      'Design tailored to your lifestyle',
      'Fort Bend County permitting',
      'Foundation and structural work',
      'Roofline and exterior matching',
      'Electrical and HVAC extension',
      'Interior finishes',
      'Inspections through final approval',
    ],
    includeGroups: [
      {
        label: 'Addition types',
        items: [
          'Extra bedrooms and living expansions',
          'Home offices',
          'Full or partial second-story builds',
          'Mother-in-law suites with private living areas',
        ],
      },
      {
        label: 'Permit process overview',
        items: [
          'Planning and code-compliant design',
          'Permit submission and review',
          'Inspections during construction',
          'Final approval for a compliant addition',
        ],
      },
    ],
    processSteps: ['Planning & design', 'Permitting', 'Construction', 'Final approval'],
    processDescriptions: [
      'Consultations, design development, and material selection (often about 2–6 weeks).',
      'We submit drawings and documentation; approval timing depends on complexity.',
      'Framing through finishing with required inspections along the way.',
      'Confirm the completed addition meets regulations and your goals.',
    ],
    costBands: [
      {
        label: 'Small room additions',
        range: '$40,000–$80,000',
        notes: 'Bedrooms, offices, or small expansions (live-published ranges)',
      },
      {
        label: 'Mid-range additions',
        range: '$80,000–$150,000',
        notes: 'Larger living spaces or multi-room work',
      },
      {
        label: 'Second-story additions',
        range: '$150,000+',
        notes: 'Full structural expansions with significant square footage',
      },
    ],
    beforeAfter: {
      before: `${NWS}/custom-homes-2.jpeg`,
      after: `${NWS}/custom-homes-8.jpeg`,
    },
    relatedSlugs: ['custom-home-building', 'whole-home-remodeling', 'garage-conversions'],
    iconType: 'addition',
    cardDescription:
      'Custom room and home additions that expand living space without looking bolted on.',
  },
  {
    slug: 'basement-remodeling',
    livePath: '/services/basement-remodeling-finishing/',
    navLabel: 'Basement Remodeling',
    title: 'Maximize your home',
    titleAccent: 'with a better basement.',
    heroSubtitle:
      'Basement remodeling and finishing that expands living space, from planning to permits, designed around your family.',
    heroImage: `${NWS}/remodeling-3.jpeg`,
    galleryImages: [`${NWS}/remodeling-2.jpeg`, `${NWS}/remodeling-5.jpeg`, `${NWS}/kitchen-gallery-6.jpeg`],
    byTheNumbers: [
      { value: 'Finish', label: 'Lower level' },
      { value: 'Layout', label: 'Built for you' },
      { value: 'Local', label: 'Since 2007' },
    ],
    intro: [
      'Unfinished basements often become storage instead of adding value. Poor lighting, outdated layouts, or limited function can frustrate homeowners and leave square footage unused.',
      'Since 2007, NWS has specialized in basement remodeling in Richmond, TX, turning underutilized space into guest suites, media rooms, offices, gyms, and more.',
      'We manage design through construction with attention to moisture, layout, and lighting so the basement becomes a space you actually enjoy, not just a finished shell.',
    ],
    includes: [
      'Planning and permitting support',
      'Moisture-aware design',
      'Framing and insulation',
      'Electrical and lighting',
      'Flooring and finishes',
      'Custom storage and layouts',
      'Family entertainment or suite options',
    ],
    includeGroups: [
      {
        label: 'Why finish the basement',
        items: [
          'Add comfort and usable square footage',
          'Create in-law suites, playrooms, gyms, or theaters',
          'Improve long-term home value with intentional design',
        ],
      },
      {
        label: 'What we handle',
        items: [
          'Custom layouts for your lifestyle',
          'Insulation, flooring, and lighting',
          'Detail-focused craftsmanship that blends with the main house',
        ],
      },
    ],
    processSteps: ['Vision & plan', 'Design & permits', 'Build', 'Handoff'],
    processDescriptions: [
      'Define how you want to use the space and what problems the basement has today.',
      'Create a layout and handle permitting so work can proceed cleanly.',
      'Frame, systems, and finishes with quality materials and careful detailing.',
      'Deliver a finished basement that feels like part of the home.',
    ],
    beforeAfter: {
      before: `${NWS}/remodeling-2.jpeg`,
      after: `${NWS}/remodeling-3.jpeg`,
    },
    relatedSlugs: ['room-additions', 'whole-home-remodeling', 'garage-conversions'],
    iconType: 'basement',
    cardDescription:
      'Basement finishing that turns wasted square footage into rooms your family will use.',
  },
  {
    slug: 'garage-conversions',
    livePath: '/services/garage-remodel-contractors/',
    navLabel: 'Garage Conversions',
    title: 'Turn your garage',
    titleAccent: 'into living space.',
    heroSubtitle:
      'From insulation and flooring to finishing touches, make an unused garage the most useful room in the house.',
    heroImage: `${NWS}/remodeling-4.jpeg`,
    galleryImages: [`${NWS}/custom-homes-2.jpeg`, `${NWS}/custom-homes-3.jpeg`, `${NWS}/remodeling-3.jpeg`],
    byTheNumbers: [
      { value: 'Convert', label: 'Garage space' },
      { value: 'Insulate', label: 'Year-round comfort' },
      { value: 'Local', label: 'Since 2007' },
    ],
    intro: [
      'Many Richmond garages become cold storage filled with boxes instead of a real extension of the house. That wasted space creates stress when families need room to work, exercise, or host guests.',
      'Since 2007, our garage remodel contractors have transformed underused garages into offices, gyms, bedrooms, and guest suites, managing insulation, flooring, electrical, and finishes.',
      'A well-done conversion can add comfort and value without the cost of a full addition, and the new room should feel seamless with the rest of the home.',
    ],
    includes: [
      'Insulation and climate comfort',
      'Flooring systems',
      'Electrical and lighting',
      'Drywall and interior finish',
      'Door and window upgrades as needed',
      'Design that blends with the main house',
    ],
    includeGroups: [
      {
        label: 'Popular uses',
        items: ['Guest suite', 'Private office', 'Home gym', 'Extra living room'],
      },
      {
        label: 'Why convert',
        items: [
          'More usable square footage without moving',
          'Comfort year-round with proper insulation and lighting',
          'Potential property value improvement',
        ],
      },
    ],
    processSteps: ['Consultation', 'Design', 'Build', 'Finish'],
    processDescriptions: [
      'Define the intended use and check structure and access needs.',
      'Plan insulation, layout, electrical, and finishes for a livable room.',
      'Complete conversion work with care so the space feels intentional.',
      'Deliver a finished room ready for daily life.',
    ],
    beforeAfter: {
      before: `${NWS}/custom-homes-4.jpeg`,
      after: `${NWS}/remodeling-4.jpeg`,
    },
    relatedSlugs: ['room-additions', 'basement-remodeling', 'whole-home-remodeling'],
    iconType: 'garage',
    cardDescription:
      'Garage conversions and remodels that turn cluttered storage into offices, gyms, or living space.',
  },
  {
    slug: 'open-concept',
    livePath: '/services/open-concept-remodeling/',
    navLabel: 'Open Concept',
    title: 'Create a bright, open',
    titleAccent: 'living space.',
    heroSubtitle:
      'From wall removal to updated finishes, open concept remodeling that connects kitchen, dining, and living for modern life.',
    heroImage: `${NWS}/remodeling-5.jpeg`,
    galleryImages: [`${NWS}/kitchen-gallery-2.jpeg`, `${NWS}/kitchen-gallery-4.jpeg`, `${NWS}/kitchen-gallery-6.jpeg`],
    byTheNumbers: [
      { value: 'Open', label: 'Better flow' },
      { value: 'Light', label: 'Brighter rooms' },
      { value: 'Local', label: 'Since 2007' },
    ],
    intro: [
      'Closed-off floor plans can feel dark and cramped. Narrow hallways and boxy rooms limit light and make gatherings harder. Many families want more openness without leaving their home.',
      'Since 2007, NWS has helped Richmond homeowners create brighter, more functional layouts by removing unnecessary walls, opening sight lines, and upgrading finishes.',
      'Open concept remodeling is about connection as much as design: better flow between kitchen, dining, and living, more natural light, and flexible spaces that grow with you. Structural changes are planned carefully so the result is safe and intentional.',
    ],
    includes: [
      'Layout planning for open flow',
      'Wall removal when appropriate',
      'Structural support as required',
      'Flooring and finish upgrades',
      'Lighting improvements',
      'Living room remodel integration',
    ],
    includeGroups: [
      {
        label: 'Benefits families want',
        items: [
          'Improved flow between kitchen, dining, and living',
          'More natural light throughout the home',
          'A larger feel without a full addition',
          'Better spaces for entertaining and family time',
        ],
      },
      {
        label: 'What we handle',
        items: [
          'Structural details when walls come down',
          'Aesthetic upgrades to flooring and finishes',
          'Living room layouts that invite connection',
        ],
      },
    ],
    processSteps: ['Goals & layout', 'Structural plan', 'Remodel build', 'Finish'],
    processDescriptions: [
      'Identify which walls and rooms should open for the lifestyle you want.',
      'Plan safe structural support and permits when load-bearing work is involved.',
      'Open the space and rebuild finishes so it looks intentional, not patched.',
      'Deliver a brighter, more connected home ready for everyday living.',
    ],
    beforeAfter: {
      before: `${NWS}/kitchen-gallery-2.jpeg`,
      after: `${NWS}/kitchen-gallery-6.jpeg`,
    },
    relatedSlugs: ['kitchen-remodeling', 'whole-home-remodeling', 'room-additions'],
    iconType: 'openplan',
    cardDescription:
      'Open concept and living room remodels that bring light, flow, and modern connection to closed-off homes.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map(s => getServiceBySlug(s)).filter(Boolean) as Service[];
}
