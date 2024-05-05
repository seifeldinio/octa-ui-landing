"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { Button } from "@seifeldinio/octa-ui";
// import "@seifeldinio/octa-ui/dist/style.css";
// import { Logo } from "../public/logo/logo.webp";

function Header() {
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
    <>
      <header
        className={cn(
          "fixed w-full z-30 bg-opacity-80 transition duration-300 ease-in-out mt-9",
          !top && "backdrop-blur-md shadow-sm mt-0"
          //  border-b
        )}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-16">
            {/* Site branding */}

            <nav>
              <ul className="flex flex-row items-center space-x-3">
                <li>
                  {" "}
                  <div className="flex-shrink-0 mr-2">
                    {/* Logo */}
                    <Link href="/">
                      <>
                        <img
                          src="/logo/logo.webp"
                          className="md:h-[46px] h-[28px] w-auto"
                          alt=""
                          loading="lazy"
                        />
                      </>
                    </Link>
                  </div>
                </li>

                <li>
                  <Button variant={"ghost"} className="hover:bg-transparent">
                    Components
                  </Button>
                </li>
                <li>
                  <Button variant={"ghost"} className="hover:bg-transparent">
                    Contact
                  </Button>
                </li>
              </ul>
            </nav>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center space-x-3 ">
                <li>
                  <Button variant={"outline"}>Docs</Button>
                  {/* <Link href="/login">
                    <button
                      className={
                        !top
                          ? "font-medium text-black hover:text-[#2b2b2b] px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer md:text-[16px] text-[14px]"
                          : "font-medium text-white hover:text-[#e4e4e4] px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer md:text-[16px] text-[14px]"
                      }
                    >
                      Login
                    </button>
                  </Link> */}
                </li>
                <li>
                  {/* <Link href="https://demo.bloxat.app/" target="_blank">
                    <button
                      className={
                        !top
                          ? "btn-sm text-white outline outline-1 outline-black font-normal bg-black ml-3 cursor-pointer hover:bg-[#292929]  md:text-[16px] text-[14px]"
                          : "btn-sm text-lemon outline outline-1 font-normal outline-lemon ml-3 cursor-pointer hover:bg-lemon hover:text-black md:text-[16px] text-[14px]"
                      }
                    >
                      <span>Try Demo</span>
                    </button>
                  </Link> */}
                  <Button>Get Started</Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>{" "}
    </>
  );
}

export default Header;
