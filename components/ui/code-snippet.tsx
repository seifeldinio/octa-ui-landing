"use client";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `import React from "react";
import { Button, Input } from "octa-ui";
import "octa-ui/dist/style.css";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold mt-6">Sign in to Example</h1>
      <p className="text-[#656565] mt-1 text-sm">
        Welcome back! Please sign in to continue
      </p>
      <div className="flex flex-row items-center space-x-2 mt-7">
        <Button variant={"outline"} className="w-[165px]">
          <img src="/svg/google.svg" alt="Google" className="h-5 w-5 mr-2" />
          <span>Google</span>
        </Button>

        <Button variant={"outline"} className="w-[165px]">
          <img
            src="/svg/github-dark.svg"
            alt="Github"
            className="h-5 w-5 mr-2 "
          />
          <span>GitHub</span>
        </Button>
      </div>
      <div className="flex flex-row items-center space-x-3 mt-5 mb-6">
        <hr className="w-[150px]" />
        <span className="text-[#a7a7a7] text-sm">or</span>
        <hr className="w-[150px]" />
      </div>
      <Input label="Email" className="w-[340px]" />
      <Button variant={"materialSecondary"} className="mt-5 w-[340px]">
        Continue
      </Button>
    </div>
  );
};

export default SignIn;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="relative">
      <pre className="w-[620px] h-[370px] bg-white rounded-2xl">
        <code className="language-javascript">{code}</code>
      </pre>

      <Button
        onClick={handleCopy}
        className="absolute right-4 top-3"
        size={"icon"}
        variant={"outline"}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default CodeSnippet;
