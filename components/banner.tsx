"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function Banner() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={cn(
        "fixed z-50 w-full flex flex-row items-center justify-center bg-[#171717] text-white h-9 py-2 space-x-3 text-sm transition-all duration-200 ease-in-out",
        !top
          ? "opacity-0 pointer-events-none"
          : "backdrop-blur-md border-b mt-0"
      )}
      style={{
        maxHeight: !top ? "0px" : "36px", // Adjust height as needed
        overflow: !top ? "hidden" : "visible", // Show content only when not at top
      }}
    >
      <span>🎉 Ship faster with beautiful components</span>
      {/* <Separator
        orientation="vertical"
        className="border-[0.5px] border-[#4B4B4B]"
      />
      <span>Get Started</span> */}
    </div>
  );
}

export default Banner;
