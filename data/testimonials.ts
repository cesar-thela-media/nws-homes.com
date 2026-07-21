import type { Testimonial } from '@/lib/types';

/**
 * Review bank derived from live https://www.nws-homes.com/ homepage.
 * Prefer fuller published quotes; do not invent reviewers.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Allison Crane',
    initial: 'A',
    city: 'Richmond, TX',
    date: 'Aug 2023',
    source: 'Google',
    quote:
      'NWS remodeled the downstairs of our house including the kitchen, dining, 2 living rooms, and a half bath. It turned out beautifully and they were so easy to work with. Each time an issue presented itself, they handled it calmly, professionally, and worked to find a pragmatic solution. Also, they were able to complete the job in just 3 months!',
    service: 'kitchen-remodeling',
  },
  {
    id: 't2',
    name: 'Katie Jacob',
    initial: 'K',
    city: 'Richmond, TX',
    date: 'Aug 2023',
    source: 'Google',
    quote:
      'NWS took care of our full home build during the middle of the pandemic. Giovani and Alejandro are great communicators and kept us up to date on the home build and any hiccups along the way. We are very pleased with the outcome of our home and service provided during the building experience.',
    service: 'custom-home-building',
  },
  {
    id: 't3',
    name: 'Carrie Neal',
    initial: 'C',
    city: 'Sugar Land, TX',
    date: 'Jul 2023',
    source: 'Google',
    quote:
      'We have used NWS for several home projects, from minor things to major renovations. We keep going back to them because they do good work!',
    service: 'whole-home-remodeling',
  },
  {
    id: 't4',
    name: 'Amy Heinz',
    initial: 'A',
    city: 'Katy, TX',
    date: 'Jul 2023',
    source: 'Google',
    quote:
      'These guys are top notch. Contractors are usually tough, but Alejandro and crew always responded, always showed up and made sure the job was done right! We will use NWS again no doubt.',
    service: 'bathroom-remodeling',
  },
  {
    id: 't5',
    name: 'Drew Lowery',
    initial: 'D',
    city: 'Cinco Ranch, TX',
    date: 'Jun 2021',
    source: 'Google',
    quote:
      'First class operation and team from building scope of work to final punch list. Alejandro was the Manager over our home renovation and did a great job handling everything we asked of he and his team. Would highly recommend to anyone looking to build custom or have a custom renovation completed.',
    service: 'custom-home-building',
  },
  {
    id: 't6',
    name: 'Sheila Ventura',
    initial: 'S',
    city: 'Richmond, TX',
    date: 'Mar 2020',
    source: 'Google',
    quote:
      'NWS has just remodeled all 4 of our bathrooms and did a fantastic job. They are friendly and easy to work with and the quality of their work is very good. I would highly recommend them for any remodeling work you need done.',
    service: 'bathroom-remodeling',
  },
  {
    id: 't7',
    name: 'Tim O.',
    initial: 'T',
    city: 'Fulshear, TX',
    date: 'Mar 2017',
    source: 'Angi',
    quote:
      'Excellent! Very pleased with NWS remodeling. Great value and they can do anything! NWS remodeled our master bathroom and added an outdoor kitchen with a 500 square foot deck as well as replastered our pool and did new flagstone surrounding pool.',
    service: 'whole-home-remodeling',
  },
  {
    id: 't8',
    name: 'Mark D.',
    initial: 'M',
    city: 'Richmond, TX',
    date: 'Oct 2017',
    source: 'Angi',
    quote:
      'Everything went well. The employees were professional and very detailed. I was updated daily on progress and what to expect by the end of the job. The project did not go over budget. It was performed in a timely manner as explained prior to work beginning.',
    service: 'room-additions',
  },
];

export function getTestimonials(serviceSlug?: string, count = 3): Testimonial[] {
  if (serviceSlug) {
    const relevant = testimonials.filter((t) => t.service === serviceSlug);
    if (relevant.length >= count) return relevant.slice(0, count);
    const others = testimonials.filter((t) => t.service !== serviceSlug);
    return [...relevant, ...others].slice(0, count);
  }
  return testimonials.slice(0, count);
}
