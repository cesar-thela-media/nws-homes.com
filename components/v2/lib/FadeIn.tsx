"use client";

/**
 * Shared scroll-reveal for Phase 2b.
 * Uses motion + useInView (same stack as ServicesGrid / Testimonials).
 * Honors prefers-reduced-motion.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  /** Y offset in px (ignored when reduced motion) */
  y?: number;
  /** Fraction of element visible to trigger */
  amount?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  amount = 0.12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const show = !mounted || isInView;
  const offset = reduceMotion ? 0 : y;

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: offset }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
