"use client";

import CodeSnippet from "@/components/ui/code-snippet";
import Section from "@/components/ui/section";
import FormExample from "@/components/ui/form-example";
import { Separator } from "@/components/ui/separator";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/lib/animation";

const SectionOne = () => {
  useGSAP(() => {
    // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
    animateWithGsap(".section-one-title", { opacity: 1 });
    animateWithGsap(".section-one-subtitle", { opacity: 1, delay: 0.1 });
    animateWithGsap(".section-one-code", { opacity: 1, delay: 0.2 });
    animateWithGsap(".section-one-example", { opacity: 1, delay: 0.3 });
    // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
  }, []);

  return (
    <Section
      //   className="mt-[-3rem] "

      customPaddings
      id="section-one"
    >
      <div className="flex md:flex-row flex-col md:items-start w-full md:px-7 px-4">
        {/* Left */}
        <div className="w-full md:mr-auto">
          <h2 className="section-one-title text-3xl font-semibold leading-tighter tracking-tighter mb-2">
            Ship your MVP fast 🌐
          </h2>
          <p className="section-one-subtitle text-[#666666] mb-4 text-xl tracking-tighter">
            With beautiful out of the box components.
          </p>
          {/* Code */}
          <div className="section-one-code bg-white rounded-2xl shadow-sm border border-[#E9E9E9] md:w-full w-full md:h-[460px] h-[280px]">
            <div className="bg-[#FAFAFA] w-full rounded-tr-2xl rounded-tl-2xl px-4 py-4">
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-red-500 rounded-full h-2.5 w-2.5" />
                <div className="bg-blue-500 rounded-full h-2.5 w-2.5" />
                <div className="bg-green-500 rounded-full h-2.5 w-2.5" />
              </div>
            </div>
            {/* Content */}
            <div className="p-4">
              <CodeSnippet />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="section-one-example md:ml-10 md:mt-0 mt-4 ">
          <FormExample />
        </div>
      </div>
      <Separator className="mt-12 mb-12" />
    </Section>
  );
};

export default SectionOne;
