import React from "react";
import Section from "@/components/ui/section";
import TechCard from "@/components/ui/tech-card";
import ProductCard from "@/components/ui/product-card";
import { Separator } from "@/components/ui/separator";

const SectionThree = () => {
  return (
    <Section className="mt-[-3rem] " customPaddings id="section-one">
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
      <Separator className=" mb-12" />
    </Section>
  );
};

export default SectionThree;
