import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Variant = "light" | "dark" | "onDark";

type SocialLinksProps = {
  className?: string;
  /** light = espresso on plaster; dark = muted on light; onDark = white on espresso */
  variant?: Variant;
  showLabel?: boolean;
  /** Optional leading label e.g. "Follow" */
  leading?: string;
};

const links = [
  {
    label: "Facebook",
    href: SOCIAL.facebook,
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: SOCIAL.instagram,
    icon: InstagramIcon,
  },
  {
    label: "Houzz",
    href: SOCIAL.houzz,
    icon: HouzzIcon,
  },
] as const;

const chip: Record<Variant, string> = {
  light:
    "border-espresso/15 bg-white/80 text-espresso hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
  dark:
    "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
  onDark:
    "border-white/20 bg-white/8 text-white/85 hover:border-primary/50 hover:bg-primary/15 hover:text-white",
};

const leadingColor: Record<Variant, string> = {
  light: "text-espresso/45",
  dark: "text-muted-foreground",
  onDark: "text-white/50",
};

export default function SocialLinks({
  className,
  variant = "onDark",
  showLabel = true,
  leading,
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2",
        className
      )}
    >
      {leading ? (
        <span
          className={cn(
            "font-v2-sans text-[11px] font-medium uppercase tracking-[0.14em]",
            leadingColor[variant]
          )}
        >
          {leading}
        </span>
      ) : null}
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex h-9 items-center gap-2 rounded-full border px-3 font-v2-sans text-xs font-semibold transition-colors",
            !showLabel && "w-9 justify-center px-0",
            chip[variant]
          )}
        >
          <Icon className="h-3.5 w-3.5 shrink-0 opacity-90" />
          {showLabel ? <span>{label}</span> : null}
        </a>
      ))}
    </div>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.84c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.92A3.12 3.12 0 1 1 12 8.88a3.12 3.12 0 0 1 0 6.24zM17.64 6.96a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0z" />
      <path d="M12 2.4c-2.6 0-2.93.01-3.96.06-2.55.12-3.74 1.32-3.86 3.86-.05 1.03-.06 1.36-.06 3.96s.01 2.93.06 3.96c.12 2.53 1.31 3.74 3.86 3.86 1.03.05 1.36.06 3.96.06s2.93-.01 3.96-.06c2.55-.12 3.74-1.33 3.86-3.86.05-1.03.06-1.36.06-3.96s-.01-2.93-.06-3.96c-.12-2.54-1.31-3.74-3.86-3.86-1.03-.05-1.36-.06-3.96-.06zm0 1.68c2.56 0 2.86.01 3.87.06 1.9.09 2.78.99 2.87 2.87.05 1 .06 1.3.06 3.87s-.01 2.87-.06 3.87c-.09 1.87-.97 2.78-2.87 2.87-1.01.05-1.31.06-3.87.06s-2.86-.01-3.87-.06c-1.9-.09-2.78-.99-2.87-2.87-.05-1-.06-1.3-.06-3.87s.01-2.87.06-3.87c.09-1.88.97-2.78 2.87-2.87 1.01-.05 1.31-.06 3.87-.06z" />
    </svg>
  );
}

function HouzzIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.5 2.5 4 7.1v9.8l8.5 4.6 8.5-4.6V7.1L12.5 2.5zm0 2.05 6.5 3.52v1.84l-6.5 3.53-6.5-3.53V8.07l6.5-3.52zm-6.5 7.15 5.5 2.99v4.58l-5.5-2.98v-4.59zm7.5 7.57v-4.58l5.5-2.99v4.59l-5.5 2.98z" />
    </svg>
  );
}
