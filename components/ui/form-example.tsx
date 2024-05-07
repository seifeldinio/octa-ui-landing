// "use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Input as OctaInput, Button as OctaButton } from "octa-ui";

const FormExample = () => {
  return (
    <div className="relative flex flex-col items-center pt-10 bg-[#F7F7F8] rounded-2xl shadow-lg hover:shadow-xl border border-[#E9E9E9] h-[550px] md:w-[400px] w-full transition-all duration-150 ease-in-out">
      <div className="absolute top-0 flex flex-col items-center pt-10 pl-4 pr-4 bg-white rounded-2xl shadow-sm h-[440px] md:w-[400px] w-full">
        <div className="bg-gradient-to-b from-[#515151] to-[#171717] border border-[#171717] p-2 rounded-xl">
          <img
            src="/logo/logo-light.webp"
            className="h-[40px] w-auto"
            alt="Logo"
          />
        </div>
        <h1 className="font-bold mt-6">Sign in to Example</h1>
        <p className="text-[#656565] mt-1 text-sm">
          Welcome back! Please sign in to continue
        </p>
        <div className="flex flex-row items-center space-x-2 mt-7">
          <OctaButton variant={"outline"} className="md:w-[165px] w-full">
            <img src="/svg/google.svg" alt="Google" className="h-5 w-5 mr-2" />
            <span>Google</span>
          </OctaButton>

          <OctaButton variant={"outline"} className="md:w-[165px] w-full">
            <img
              src="/svg/github-dark.svg"
              alt="Github"
              className="h-5 w-5 mr-2 "
            />
            <span>GitHub</span>
          </OctaButton>
        </div>
        <div className="flex flex-row items-center space-x-3 mt-5 mb-6">
          <Separator className="md:w-[150px] w-[120px]" />
          <span className="text-[#a7a7a7] text-sm">or</span>
          <Separator className="md:w-[150px] w-[120px]" />
          {/* className="w-full"  */}
        </div>
        <OctaInput label="Email" className="md:w-[340px] w-full" />{" "}
        <OctaButton variant={"materialSecondary"} className="mt-5 md:w-[340px] w-full">
          Continue
        </OctaButton>
      </div>
      {/* Grey part */}
      <div className="absolute bottom-0 w-full py-4 flex flex-col items-center">
        <div className="flex flex-row items-center space-x-1 text-sm mt-6">
          <span className="opacity-70">Don't have an account?</span>
          <span className="font-semibold hover:underline cursor-pointer">
            Sign up
          </span>
        </div>
        <Separator className="mt-4 mb-4" />
        {/* Built with */}
        <div className="flex flex-row items-center opacity-60">
          <span className="text-sm mr-1.5">Built with </span>
          <img
            src="/logo/logo-dark.webp"
            className="h-6 w-auto mr-1"
            alt="Logo"
          />{" "}
          <span className="font-semibold text-sm">Octa UI </span>
        </div>
      </div>
    </div>
  );
};

export default FormExample;
