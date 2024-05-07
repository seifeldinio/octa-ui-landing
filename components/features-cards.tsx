"use client";
import Card from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Section from "@/components/ui/section";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/lib/animation";

const FeaturesCards = () => {
  // GSAP
  useGSAP(() => {
    // animateWithGsap(".section-one-animation", { y: 0, opacity: 1 });
    animateWithGsap(".card-animation-1", { y: 1, opacity: 1, delay: 0.1 });
    animateWithGsap(".card-animation-2", { y: 1, opacity: 1, delay: 0.2 });
    animateWithGsap(".card-animation-3", { y: 1, opacity: 1, delay: 0.3 });
  }, []);

  return (
    <Section
      // className="pt-[12rem] "
      className="mt-[-3rem] "
      // -mt-[5.25rem]
      customPaddings
      id="features-cards"
    >
      <div className="relative max-w-6xl mx-auto px-7 bg-transparent ">
        <div className="flex md:flex-row flex-col items-center justify-center w-full md:space-x-10 space-x-0 md:space-y-0 space-y-5">
          <Card
            title="⚡ Fast"
            description="Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle."
            className="card-animation-1"
          />

          <Card
            title="🧠 Unique DX"
            description="Octa UI is fully-typed to minimize the learning curve, and provide the best possible developer experience."
            className="card-animation-2"
          />

          <Card
            title="✨ Themeable"
            description="Provides the ability to customize default themes, you can change all semantic tokens or create an entire new theme."
            className="card-animation-3"
          />
        </div>
      </div>
      <Separator className="mt-12 mb-12" />
    </Section>
  );
};

export default FeaturesCards;
