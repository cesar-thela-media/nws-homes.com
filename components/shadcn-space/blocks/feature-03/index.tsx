"use client";

import Feature from "@/components/shadcn-space/blocks/feature-03/feature";
import {
  BrandList,
  Features,
} from "@/components/shadcn-space/blocks/feature-03/feature";
import { Layers, Shapes } from "lucide-react";

const featureData: Features = [
  {
    icon: Layers,
    title: "Data Processing",
    content: (
      <>
        Develop a unique and cohesive{" "}
        <strong className="text-foreground">brand identity</strong>, including
        the design of logos, color schemes, typography.
      </>
    ),
  },
  {
    icon: Shapes,
    title: "Generating a response",
    content: (
      <>
        Develop a unique and cohesive{" "}
        <strong className="text-foreground">brand identity</strong>, including
        the design of logos, color schemes, typography.
      </>
    ),
  },
];

const brandList: BrandList = [
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
    name: "Brand 1",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
    name: "Brand 2",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
    name: "Brand 3",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
    name: "Brand 4",
  },
  {
    image:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg",
    lightimg:
      "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
    name: "Brand 5",
  },
];

const Feature03 = () => {
  return (
    <>
      <Feature featureData={featureData} brandList={brandList} />
    </>
  );
};

export default Feature03;
