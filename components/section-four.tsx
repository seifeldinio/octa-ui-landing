"use client";

import { animateWithGsap } from "@/lib/animation";
import { useGSAP } from "@gsap/react";
import React from "react";

const SectionFour = () => {
  // GSAP
  useGSAP(() => {
    // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
    animateWithGsap(".section-four-title", { opacity: 1 });
    animateWithGsap(".section-four-logo-1", { opacity: 1, delay: 0.1 });
    animateWithGsap(".section-four-logo-2", { opacity: 1, delay: 0.2 });
    animateWithGsap(".section-four-logo-3", { opacity: 1, delay: 0.3 });
    animateWithGsap(".section-four-logo-4", { opacity: 1, delay: 0.4 });
  }, []);

  return (
    <section className="relative flex flex-row items-center h-[185px] border-b">
      <div className="flex items-center justify-start border-r px-14 h-full w-full">
        <h2 className="section-four-title text-3xl font-semibold tracking-tighter">
          Fastest ReactJS, <br /> UI library.
        </h2>
      </div>
      <div className="flex items-center justify-center border-r p-8 h-full w-1/2">
        <img
          src="/logo/logo-dark.webp"
          alt="Octa UI"
          className="section-four-logo-1 h-[62px] w-auto"
        />
      </div>
      <div className="flex items-center justify-center border-r p-8 h-full w-1/2">
        <img
          src="/svg/npm.svg"
          alt="NPM"
          className="section-four-logo-2 h-[48px] w-auto"
        />
      </div>
      <div className="flex items-center justify-center border-r p-8 h-full w-1/2">
        <img
          src="/svg/nextjs.svg"
          alt="NextJS"
          className="section-four-logo-3 h-[62px] w-auto"
        />
      </div>
      <div className="flex items-center justify-center p-8 h-full w-1/2">
        <img
          src="/svg/react.svg"
          alt="React"
          className="section-four-logo-4 h-[62px] w-auto"
        />
      </div>
      {/* Plus Cross */}
      <img
        src="/svg/plus.svg"
        alt="Plus"
        className="absolute h-5 w-auto top-[-10px] left-[-10px] z-10"
      />
    </section>
  );
};

export default SectionFour;
