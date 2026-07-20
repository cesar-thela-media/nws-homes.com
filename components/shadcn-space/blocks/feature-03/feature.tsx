"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import type { LucideIcon } from "lucide-react";

export type Features = {
  icon: LucideIcon;
  title: string;
  content: ReactNode;
}[];

export type BrandList = {
  image: string;
  name: string;
  lightimg: string;
}[];

const Feature = ({
  featureData,
  brandList,
}: {
  featureData: Features;
  brandList: BrandList;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 overflow-hidden">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src="https://images.shadcnspace.com/assets/feature/feature-03.webp"
                  alt="feature-img"
                  className="rounded-2xl w-full h-full object-top object-cover aspect-video lg:aspect-auto"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:ps-8 place-self-center flex flex-col gap-8 sm:gap-10"
              >
                <div className="flex flex-col gap-4">
                  <motion.div variants={itemVariants}>
                    <Badge
                      variant={"outline"}
                      className="px-3 py-1 h-7 text-sm font-normal"
                    >
                      Features
                    </Badge>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
                  >
                    Leading with innovative solution.
                  </motion.p>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg font-normal text-muted-foreground"
                  >
                    We&apos;re west coast change-makers in a complex world, crafting
                    purposeful and powerful brands with fluidity
                  </motion.p>
                </div>

                <motion.div variants={itemVariants}>
                  <Card className="p-6 sm:p-8 shadow-none rounded-2xl">
                    <CardContent className="p-0 flex flex-col gap-6 sm:gap-8">
                      {featureData &&
                        featureData.map((feature, index) => (
                          <React.Fragment key={index}>
                            <div className="flex gap-5">
                              {feature.icon && (
                                <feature.icon size={30} className="shrink-0" />
                              )}
                              <div className="flex flex-col gap-2">
                                <p className="text-xl font-semibold">
                                  {feature.title}
                                </p>
                                <p className="text-base text-muted-foreground">
                                  {feature.content}
                                </p>
                              </div>
                            </div>
                            {index !== featureData.length - 1 && (
                              <Separator orientation="horizontal" />
                            )}
                          </React.Fragment>
                        ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>

            {/* brand slider */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-3 items-center overflow-hidden"
            >
              <p className="text-base font-normal text-muted-foreground text-center">
                We have 23k+ Satisfied & Trusted Customers
              </p>
              {brandList && (
                <Marquee pauseOnHover className="[--duration:20s] py-3 sm:py-4">
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
                      />
                      <img
                        src={brand.lightimg}
                        alt={brand.name}
                        className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
                      />
                    </div>
                  ))}
                </Marquee>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
