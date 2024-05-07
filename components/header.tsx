"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MenuSvg from "@/public/svg/menu-svg";
import { Triangle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [top, setTop] = useState(true);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !mobileMenuRef.current?.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".menu-button")
      ) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setOpenNav((prevOpenNav) => !prevOpenNav);
  };

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
          !top && "backdrop-blur-md shadow-sm mt-0",
          openNav && "bg-white bg-opacity-100 shadow-2xl"
        )}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-16">
            <nav>
              <ul className="flex flex-row items-center space-x-3">
                <li>
                  <div className="flex-shrink-0 mr-2">
                    <Link href="/">
                      <img
                        src="/logo/logo.webp"
                        className="h-[46px] w-auto"
                        alt=""
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </li>

                <li>
                  <Link
                    href={"https://github.com/seifeldinio/octa-ui"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"ghost"} className="hover:bg-transparent">
                      Repo
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href={"mailto:hello@seifradwane.com"}>
                    <Button variant={"ghost"} className="hover:bg-transparent">
                      Contact
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className="md:flex hidden flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center space-x-3">
                <li>
                  <Link
                    href={"https://docs.octaui.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"outline"}>Docs</Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.npmjs.com/package/octa-ui"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Get Started</Button>
                  </Link>
                </li>
              </ul>
            </nav>

            <Button
              className="ml-auto md:hidden hover:bg-transparent bg-transparent menu-button"
              size={"icon"}
              variant={"ghost"}
              onClick={toggleNav}
            >
              <MenuSvg openNavigation={openNav} />
            </Button>
          </div>

          {openNav && (
            <nav
              ref={mobileMenuRef}
              className="md:hidden flex flex-col items-center justify-center content-center pb-2 pt-2 px-1"
            >
              <Link
                href={"https://docs.octaui.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-lg text-md m-2 content-center justify-center transition-color duration-200 border-[1.5px] border-[#5d5d5d] w-full"
              >
                <Triangle className="h-[15px] w-[15px] " />{" "}
                <span className="text-[18px] font-normal text-sm">Docs</span>
              </Link>
              <Link
                href={"https://www.npmjs.com/package/octa-ui"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-lg text-md m-2 content-center justify-center transition-color duration-200 border-[1.5px] border-[#000000] bg-[#171717] text-white w-full"
              >
                <span className="text-[18px] font-normal text-sm">
                  Get Started
                </span>
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
