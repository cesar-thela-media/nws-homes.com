import Link from "next/link";
import { areas } from "@/data/areas";

export default function AreasStripHome() {
  return (
    <section className="border-t border-espresso/10 bg-plaster py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Areas we serve
            </p>
            <h2 className="m-0 font-serif text-[32px] text-espresso sm:text-[40px]">
              Fort Bend &amp; west Houston
            </h2>
          </div>
          <Link
            href="/areas"
            className="font-sans text-sm font-semibold text-primary no-underline hover:underline"
          >
            View all areas →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href="/areas"
              className="rounded-full border border-espresso/15 bg-white px-4 py-2 font-sans text-sm text-espresso no-underline transition hover:border-primary hover:text-primary"
            >
              {a.label}
              {a.state ? `, ${a.state}` : ""}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
