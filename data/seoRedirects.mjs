/**
 * Plain ESM redirect list for next.config (no TS loader required).
 * Must stay in parity with getRedirectRules() in data/seoCutover.ts.
 * Structure tests assert every rule here appears in cutover map + next.config.
 */
export const permanentRedirects = [
  { source: "/areas-we-serve", destination: "/areas", permanent: true },
  {
    source: "/services/custom-home-builder",
    destination: "/services/custom-home-building",
    permanent: true,
  },
  {
    source: "/services/remodeling-company",
    destination: "/services/general-remodeling",
    permanent: true,
  },
  {
    source: "/services/home-remodel",
    destination: "/services/whole-home-remodeling",
    permanent: true,
  },
  {
    source: "/services/bathroom-shower-remodel",
    destination: "/services/shower-remodel",
    permanent: true,
  },
  {
    source: "/services/bathtub-remodeling",
    destination: "/services/bathtub-remodel",
    permanent: true,
  },
  {
    source: "/services/room-additions-home-additions",
    destination: "/services/room-additions",
    permanent: true,
  },
  {
    source: "/services/basement-remodeling-finishing",
    destination: "/services/basement-remodeling",
    permanent: true,
  },
  {
    source: "/services/garage-remodel-contractors",
    destination: "/services/garage-conversions",
    permanent: true,
  },
  {
    source: "/services/open-concept-remodeling",
    destination: "/services/open-concept",
    permanent: true,
  },
  { source: "/sugar-land-tx", destination: "/areas", permanent: true },
  { source: "/katy-tx", destination: "/areas", permanent: true },
  { source: "/fulshear-tx", destination: "/areas", permanent: true },
  { source: "/cinco-ranch-tx", destination: "/areas", permanent: true },
  { source: "/rosenberg-tx", destination: "/areas", permanent: true },
  { source: "/weston-lakes-tx", destination: "/areas", permanent: true },
  { source: "/west-side-of-houston-tx", destination: "/areas", permanent: true },
  { source: "/park-row-tx", destination: "/areas", permanent: true },
  {
    source: "/custom-homes-gallery",
    destination: "/gallery?category=custom-homes",
    permanent: true,
  },
  {
    source: "/remodeling-gallery",
    destination: "/gallery?category=remodeling",
    permanent: true,
  },
  {
    source: "/kitchen-remodeling-gallery",
    destination: "/gallery?category=kitchen",
    permanent: true,
  },
  {
    source: "/bathroom-remodeling-gallery",
    destination: "/gallery?category=bathroom",
    permanent: true,
  },
];
