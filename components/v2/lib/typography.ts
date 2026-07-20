/**
 * v2 type scale — Inter only for all roles.
 */
export const t = {
  /** Page / hero title */
  h1: "font-v2-sans text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl xl:text-6xl",
  /** Section title */
  h2: "font-v2-sans text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl",
  /** Card / subsection title */
  h3: "font-v2-sans text-xl font-semibold leading-snug tracking-tight md:text-2xl",
  /** Compact card title */
  h4: "font-v2-sans text-lg font-semibold leading-snug tracking-tight",
  /** Supporting intro under a heading */
  lead: "font-v2-sans text-base font-normal leading-relaxed text-muted-foreground md:text-lg",
  /** Default body */
  body: "font-v2-sans text-base font-normal leading-relaxed text-muted-foreground",
  /** Small body */
  bodySm: "font-v2-sans text-sm font-normal leading-relaxed text-muted-foreground",
  /** Eyebrow / section label */
  eyebrow:
    "font-v2-sans text-xs font-semibold uppercase tracking-[0.16em] text-primary",
  /** Meta / hours / labels */
  label: "font-v2-sans text-sm font-medium text-muted-foreground",
  /** Nav / UI controls */
  ui: "font-v2-sans text-sm font-medium",
  /** Stat numbers */
  stat: "font-v2-sans text-4xl font-semibold tracking-tight md:text-5xl",
} as const;
