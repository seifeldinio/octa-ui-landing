"use client";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { octaButtonVariants } from "@/lib/octa-button-variants";
import { Check, Plus } from "lucide-react"; // Import the Check icon
import { useState } from "react";
import BrandedButton from "@/components/ui/branded-button";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/lib/animation";

const SectionTwo = () => {
  const [selectedVariant, setSelectedVariant] = useState(
    octaButtonVariants[0].variant
  );

  // Finding the selected variant object based on the selectedVariant key
  const selectedVariantObject = octaButtonVariants.find(
    (item) => item.variant === selectedVariant
  );

  // GSAP
  useGSAP(() => {
    // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
    animateWithGsap(".section-two-title", { opacity: 1 });
    animateWithGsap(".section-two-buttons", { opacity: 1, delay: 0.1 });
    animateWithGsap(".section-two-render", { opacity: 1, delay: 0.2 });
    // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
  }, []);

  return (
    <Section
      //   className="mt-[-3rem] "
      customPaddings
      id="section-two"
    >
      <div className="flex flex-row items-start w-full px-7 ">
        <div className="section-two-render flex items-center justify-center bg-gradient-to-tr from-[#FF71DF] to-[#F74D7A] w-[660px] rounded-2xl h-[350px]">
          {/* Rendering the selected variant component */}
          {selectedVariantObject && selectedVariantObject.component}
        </div>
        <div className="flex flex-col items-start ml-[2.5rem]">
          <h2 className="section-two-title md:text-3xl font-semibold leading-tighter tracking-tighter mb-2">
            Many variants. 🙌
          </h2>
          <p className="section-two-title text-[#666666] mb-6 text-xl tracking-tighter">
            Select a variant to switch.{" "}
          </p>
          {/* Options to switch the variant */}
          <div className="section-two-buttons grid grid-cols-3 gap-7 mb-10">
            {octaButtonVariants.map((item, i) => (
              <Button
                key={i}
                onClick={() => {
                  setSelectedVariant(item.variant);
                }}
                variant={"outline"}
                className="rounded-full w-[110px]"
              >
                {selectedVariant === item.variant && (
                  <Check className="h-4 w-4 mr-2" />
                )}
                <span>{item.title}</span>
              </Button>
            ))}
            {/* More */}
            <div className="flex items-center justify-center text-sm border  bg-[#e8e8e8] text-[#3e3e3e] rounded-full">
              <Plus className="h-3 w-3 mr-1" />
              <span>More</span>
            </div>
          </div>
          <div className="section-two-buttons">
            <BrandedButton />
          </div>
        </div>
      </div>

      <Separator className="mt-12 mb-12" />
    </Section>
  );
};

export default SectionTwo;
