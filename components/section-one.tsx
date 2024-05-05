import React from "react";
import Section from "@/components/ui/section";
import CodeSnippet from "@/components/ui/code-snippet";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const SectionOne = () => {
  return (
    <Section
      //   className="mt-[-3rem] "

      customPaddings
      id="section-one"
    >
      <div className="flex flex-row items-start w-full">
        {/* Left */}
        <div className="w-full mr-auto">
          <h2 className="md:text-3xl font-semibold leading-tighter tracking-tighter mb-2">
            Ship your MVP fast 🌐
          </h2>
          <p className="text-[#666666] mb-4 text-xl tracking-tighter">
            With beautiful out of the box components.
          </p>
          {/* Code */}
          <div className="bg-white rounded-xl shadow-sm border border-[#E9E9E9] w-full h-[370px]">
            <div className="bg-[#FAFAFA] w-full rounded-tr-xl rounded-tl-xl px-4 py-4">
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-red-500 rounded-full h-2.5 w-2.5" />
                <div className="bg-blue-500 rounded-full h-2.5 w-2.5" />
                <div className="bg-green-500 rounded-full h-2.5 w-2.5" />
              </div>
            </div>
            {/* Content */}
            <div className="relative p-4">
              {/* <code>const greeting = "Hello, world!";</code> */}
              <Button className="absolute right-10 top-10" size={"icon"} variant={'outline'}>
                <Copy className="h-4 w-4"/>
              </Button>
              <CodeSnippet />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="ml-10">
          <div className="bg-white rounded-xl shadow-lg border border-[#E9E9E9] h-[460px] w-[400px] p-4">
            Example
          </div>
        </div>
      </div>
      <div className="h-[400px]"></div>
    </Section>
  );
};

export default SectionOne;
