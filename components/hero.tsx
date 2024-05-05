"use client";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { useGSAP } from "@gsap/react";
import {
  Button as OctaButton,
  Input as OctaInput,
  Toggle as OctaToggle,
} from "@seifeldinio/octa-ui";
import gsap from "gsap";
import { ArrowRight, Settings } from "lucide-react";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

import "@/lib/additional-styles.css";

function Hero() {
  // PARALLAX
  const parallaxRef = useRef(null);

  // GSAP
  useGSAP(() => {
    gsap.to(".hero-gradient", { opacity: 1 });
  }, []);

  return (
    <Section
      // className="pt-[12rem] "
      className="pt-[9rem]"
      // -mt-[5.25rem]
      // crosses
      // crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        ref={parallaxRef}
        className="container pt-40 pb-[14rem] relative max-w-6xl mx-auto"
      >
        {/* py-40 */}
        {/* Gradient overlay */}
        <div className="absolute inset-0 overflow-clip h-full w-full">
          <div className="absolute inset-0 h-full w-full hero-gradient" />
        </div>
        {/* Radial Overlay */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/svg/radial.svg")' }}
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Content */}
        <div className="flex flex-col items-center justify-center relative z-1 max-w-[62rem] mx-auto text-center  mb-[4rem] md:mb-20 lg:mb:[6rem] ">
          <h1
            // className="h1 mb-6"
            className="text-[40px] md:text-4xl font-semibold leading-tighter tracking-tighter mb-6"
          >
            Make beautiful websites regardless <br /> of your design experience.
          </h1>
          <span className="inline-block relative text-[#2F2F2F] mb-6">
            Beautiful, fast and modern React UI library.
          </span>

          <div className="flex flex-row items-center space-x-3 z-20">
            <Button className="rounded-full h-12 px-7 font-semibold space-x-2">
              <img src="/svg/github.svg" alt="Github" className="h-5 w-auto" />
              <span>Github</span>
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full h-12 px-7 font-semibold space-x-2"
            >
              <span> Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* FLOATING COMPONENTS */}
          <ScrollParallax isAbsolutelyPositioned>
      
              {/* BUTTON */}
              <div className="absolute -left-[0.5rem] bottom-[9.5rem] px-1 py-1 ">
                <OctaButton variant={"material"}>Label</OctaButton>
              </div>
              {/* TOGGLE1 */}
              <div className="absolute -left-[-5rem] bottom-[5rem] px-1 py-1 ">
                <OctaToggle label="" />
              </div>
              {/* ICON BUTTON */}
              <div className="absolute -left-[2rem] bottom-[1.5rem] px-1 py-1 ">
                <OctaButton size={"icon"} className="p-0" variant={"key"}>
                  <Settings className="scale-150" />
                  {/* <span>Press me</span> */}
                </OctaButton>
              </div>
              {/* INPUT */}
              <div className="absolute -left-[9rem] bottom-[-4rem] px-1 py-1 ">
                <OctaInput label="Hint" />
              </div>
              {/* TOGGLE2 */}
              <div className="absolute -right-[2.5rem] bottom-[10.5rem] px-1 py-1 ">
                {/* <OctaButton variant={"materialSecondary"}>Label</OctaButton> */}
                <OctaToggle label="" />
              </div>
              {/* OCTA GIF */}
              <div className="absolute -right-[8rem] bottom-[-3.5rem] px-1 py-1">
                <div className="w-[200px] h-[200px] overflow-hidden rounded-2xl">
                  <img
                    src="/images/octa.gif"
                    alt="Octa GIF"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* ICON BUTTON GEAR PURPLE */}
              <div className="absolute -right-[-7rem] bottom-[-2rem] px-1 py-1 ">
                <OctaButton
                  size={"icon"}
                  className="bg-[#6750A4] hover:bg-[#7f67c3] text-white rounded-full"
                  variant={"default"}
                >
                  <Settings />
                </OctaButton>
              </div>
              {/* BUTTON YELLOW */}
              <div className="absolute -right-[-3rem] bottom-[-7rem] px-1 py-1 ">
                <OctaButton
                  variant={"default"}
                  size={"sm"}
                  className="bg-[#FFF069] hover:bg-[#fff495] hover:scale-110 transition-all duration-150 ease-in-out"
                >
                  Label
                </OctaButton>
              </div>

          </ScrollParallax>
        </div>
        {/* Plus Cross */}
        <img
          src="/svg/plus.svg"
          alt="Plus"
          className="absolute h-5 w-auto top-[-10px] left-[-10px] z-10"
        />
      </div>

      {/* </div> */}
    </Section>
  );
}

export default Hero;
