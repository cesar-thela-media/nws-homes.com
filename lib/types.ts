export interface Service {
  slug: string;
  /** Path on live client site for content reference */
  livePath?: string;
  navLabel: string;
  title: string;
  titleAccent: string;
  heroSubtitle: string;
  intro: string[];
  includes: string[];
  includeGroups?: { label: string; items: string[] }[];
  processSteps: string[];
  processDescriptions?: string[];
  relatedSlugs: string[];
  iconType: string;
  cardDescription: string;
  heroImage: string;
  heroVariant?: 'dark';
  galleryImages?: string[];
  byTheNumbers: { value: string; label: string }[];
  beforeAfter?: { before: string; after: string };
  /** Optional cost bands only when published on live client page */
  costBands?: { label: string; range: string; notes?: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  city: string;
  date: string;
  source: 'Google' | 'Angi';
  quote: string;
  service?: string;
}

export interface Area {
  slug: string;
  label: string;
  state: string;
  isPrimary?: boolean;
  tagline: string;
  description: string;
  image?: string;
}

export interface FAQ {
  id: string;
  category: 'General' | 'Process' | 'Pricing' | 'Quality' | 'Areas';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'custom-homes' | 'kitchen' | 'bathroom' | 'remodeling';
  title: string;
  area: string;
  aspectRatio: '4/3' | '3/4' | '1/1';
  image: string;
}
