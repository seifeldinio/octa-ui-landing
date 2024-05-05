"use client";

import React from "react";
import Section from "@/components/ui/section";
import TechCard from "@/components/ui/tech-card";
import ProductCard from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";
// import { useGSAP } from "@gsap/react";
// import { animateWithGsap } from "@/lib/animation";

const SectionThree = () => {
  // GSAP
  // useGSAP(() => {
  //   // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
  //   animateWithGsap(".section-three-animation", { opacity: 1 });
  //   // animateWithGsap(".section-three-cards", { opacity: 1, delay: 0.1 });
  //   // animateWithGsap(".section-three-render", { opacity: 1, delay: 0.2 });
  //   // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
  // }, []);

  return (
    <Section className="mt-[-3rem] " customPaddings id="section-three">
      <div className="flex flex-row items-end w-full px-7 py-20 bg-white">
        {/* Left */}
        <div className="flex flex-col items-start mr-auto">
          <h2 className="md:text-3xl font-semibold leading-tighter tracking-tighter mb-2">
            Customizable with classes.
          </h2>
          <p className="text-[#666666] mb-6 text-xl tracking-tighter">
            Octa UI components are built on top of <br /> ensuring exceptional
            accessibility support.
          </p>
          {/* Cards */}
          <div className="flex flex-col items-start space-y-6">
            <TechCard
              title="TypeScript based"
              description="Build type safe applications, Octa UI has a fully-typed API to minimize the learning curve, and help you build applications."
              imageSrc="/svg/typescript.svg"
              alt="TS"
            />

            <TechCard
              title="No runtime styles"
              description="Octa UI is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle."
              imageSrc="/svg/tailwind.svg"
              alt="TS"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center bg-gradient-to-t from-[#FFF16B] to-[#FFF7A9] w-[590px] rounded-2xl h-[315px] ">
          <ProductCard />
        </div>
      </div>
      <Separator />
    </Section>
  );
};

export default SectionThree;
