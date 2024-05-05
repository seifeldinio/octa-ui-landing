import { Button } from "@/components/ui/button";
import CodeSnippet from "@/components/ui/code-snippet";
import Section from "@/components/ui/section";
import { Copy } from "lucide-react";

import FormExample from "./ui/form-example";

const SectionOne = () => {
  return (
    <Section
      //   className="mt-[-3rem] "

      customPaddings
      id="section-one"
    >
      <div className="flex flex-row items-start w-full px-7">
        {/* Left */}
        <div className="w-full mr-auto">
          <h2 className="md:text-3xl font-semibold leading-tighter tracking-tighter mb-2">
            Ship your MVP fast 🌐
          </h2>
          <p className="text-[#666666] mb-4 text-xl tracking-tighter">
            With beautiful out of the box components.
          </p>
          {/* Code */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E9E9E9] w-full h-[460px]">
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
        <div className="ml-10">
          <FormExample />
        </div>
      </div>
      <div className="h-[400px]"></div>
    </Section>
  );
};

export default SectionOne;
