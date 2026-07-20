"use client";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const imageVariants = (x: number, y: number) => ({
    hidden: { x: x * 0.3, y: y * 0.3, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  });

  return (
    <section ref={containerRef}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0, margin: "100px 0px" }}
        className="relative bg-accent dark:bg-gray-950 h-full min-h-[640px] flex items-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto sm:px-16 px-4 py-10 w-full z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-6 md:gap-8">
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-base text-muted-foreground">
                  <strong className="text-foreground font-medium">
                    44,000+
                  </strong>{" "}
                  Businesses trust
                </p>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-foreground">
                  Professional{" "}
                  <span className="relative inline-flex bg-amber-300 rounded-xl px-4 py-0.5 overflow-hidden align-bottom min-w-[120px] justify-center">
                    <span className="flex text-gray-950 pb-1.5">cleaning</span>
                  </span>{" "}
                  services for{" "}
                  <span className="relative inline-block">
                    every need.
                    <span className="hidden xl:block absolute left-0 -bottom-1.5 w-full h-3 bg-no-repeat bg-center bg-contain">
                      <svg
                        width="312"
                        height="17"
                        viewBox="0 0 312 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.0174561 8.14131C9.06772 8.26799 28.2966 8.67334 32.81 9.28138C38.4517 10.0414 77.2385 13.4616 79.0016 13.4616C80.7646 13.4616 118.494 15.7417 128.367 14.6017C138.592 14.2217 159.114 13.4616 159.396 13.4616C159.691 13.4616 171.107 12.3962 165.507 8.25869C164.597 7.58606 165.032 5.77822 166.162 5.84554C183.387 6.87162 209.31 8.34009 211.467 8.15761C211.557 8.15001 211.628 8.14163 211.718 8.14227L265.531 8.52133C277.52 8.90135 303.401 7.9133 311.017 0.920898"
                          className="stroke-gray-950/10 dark:stroke-white/20"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </span>
                </h1>
              </div>
              <p className="max-w-sm mx-auto text-muted-foreground text-base md:text-lg font-normal">
                Regular cleaning of office spaces, including desks, floors,
                common areas, and restrooms.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="h-auto py-3.5 px-6 rounded-lg cursor-pointer hover:translate-y-0.5 transition-transform duration-300">
                Book a Service
              </Button>
              <Button
                variant={"outline"}
                className="h-auto py-3.5 px-6 rounded-lg cursor-pointer hover:translate-y-0.5 transition-transform duration-300"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none max-w-[1980px] mx-auto">
          {/* Left top */}
          <motion.img
            variants={imageVariants(-100, -100)}
            src="https://images.shadcnspace.com/assets/hero-img/hero-9-img-1.png"
            alt=""
            className="absolute top-6 -left-1 w-full h-auto max-w-32 md:max-w-48 xl:max-w-xs rounded-sm"
          />

          {/* Left bottom */}
          <motion.img
            variants={imageVariants(-100, 100)}
            src="https://images.shadcnspace.com/assets/hero-img/hero-9-img-3.png"
            alt=""
            className="absolute bottom-6 -left-1 w-full h-auto max-w-24 md:max-w-32 xl:max-w-52 rounded-sm"
          />

          {/* Right top */}
          <motion.img
            variants={imageVariants(100, -100)}
            src="https://images.shadcnspace.com/assets/hero-img/hero-9-img-2.png"
            alt=""
            className="absolute top-6 -right-1 w-full h-auto max-w-24 md:max-w-32 xl:max-w-52 rounded-sm"
          />

          {/* Right bottom */}
          <motion.img
            variants={imageVariants(100, 100)}
            src="https://images.shadcnspace.com/assets/hero-img/hero-9-img-4.png"
            alt=""
            className="absolute bottom-6 -right-1 w-full h-auto max-w-32 md:max-w-48 xl:max-w-xs rounded-sm"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
