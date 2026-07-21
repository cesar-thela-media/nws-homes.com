import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-plaster px-10 py-20 text-center">
      <div className="max-w-md">
        <p className="mb-0 font-sans text-8xl leading-none text-espresso/10">404</p>
        <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.15em] text-primary">
          Page not found
        </p>
        <h1 className="mb-5 font-sans text-[clamp(32px,4vw,48px)] text-espresso">
          This page doesn&apos;t{" "}
          <span className="italic text-primary">exist.</span>
        </h1>
        <p className="mb-10 font-sans text-base leading-relaxed text-sage">
          The page you&apos;re looking for has moved or never existed. Let&apos;s get you
          back on track.
        </p>
        <Button asChild size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
