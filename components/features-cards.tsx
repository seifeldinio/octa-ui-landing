import React from "react";
import Section from "./ui/section";
import Card from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FeaturesCards = () => {
  return (
    <Section
      // className="pt-[12rem] "
      className="mt-[-3rem] "
      // -mt-[5.25rem]
      customPaddings
      id="features-cards"
    >
      <div className="relative max-w-6xl mx-auto px-7 bg-transparent">
        <div className="flex flex-row items-center justify-center w-full space-x-10">
          <Card
            title="⚡ Fast"
            description="Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle."
          />

          <Card
            title="🧠 Unique DX"
            description="NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience."
          />

          <Card
            title="✨ Themeable"
            description="Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme."
          />
        </div>
      </div>
      <Separator className="mt-12 mb-12" />
    </Section>
  );
};

export default FeaturesCards;
