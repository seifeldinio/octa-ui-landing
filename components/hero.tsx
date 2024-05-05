"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Section from "./ui/section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import {
  Input as OctaInput,
  Button as OctaButton,
  Toggle as OctaToggle,
} from "@seifeldinio/octa-ui";

import "@/lib/additional-styles.css";

function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      // className="pt-[12rem] "
      className="pt-[9rem] "
      // -mt-[5.25rem]
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        ref={parallaxRef}
        className="container pt-40 pb-[14rem] relative max-w-6xl mx-auto"
      >
        {/* py-40 */}
        {/* Gradient overlay */}
        <div className="absolute inset-0 overflow-clip h-full w-full">
          <div className="absolute inset-0 h-full w-full hero-gradient "></div>
        </div>
        {/* Radial Overlay */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/svg/radial.svg")' }}
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Content */}
        <div className="flex flex-col items-center justify-center relative z-1 max-w-[62rem] mx-auto text-center  mb-[4rem] md:mb-20 lg:mb:[6rem] ">
          <h1
            // className="h1 mb-6"
            className="text-[40px] md:text-4xl font-semibold leading-tighter tracking-tighter mb-6"
          >
            Make beautiful websites regardless <br /> of your design experience.
          </h1>

          <span className="inline-block relative text-[#2F2F2F] mb-6">
            Beautiful, fast and modern React UI library.
          </span>

          <div className="flex flex-row items-center space-x-3 z-20">
            <Button className="rounded-full h-12 px-7 font-semibold space-x-2">
              <img src="/svg/github.svg" alt="Github" className="h-5 w-auto" />
              <span>Github</span>
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full h-12 px-7 font-semibold space-x-2"
            >
              <span> Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* FLOATING COMPONENTS */}
          <ScrollParallax isAbsolutelyPositioned>
            {/* BUTTON */}
            <div className="absolute -left-[0.5rem] bottom-[9.5rem] px-1 py-1 ">
              <OctaButton variant={"material"}>Label</OctaButton>
            </div>
            {/* TOGGLE1 */}
            <div className="absolute -left-[-5rem] bottom-[5rem] px-1 py-1 ">
              <OctaToggle label="" />
            </div>
            {/* ICON BUTTON */}
            <div className="absolute -left-[2rem] bottom-[1.5rem] px-1 py-1 ">
              <OctaButton size={"icon"} className="p-0" variant={"key"}>
                <Settings className="scale-150" />
                {/* <span>Press me</span> */}
              </OctaButton>
            </div>
            {/* INPUT */}
            <div className="absolute -left-[9rem] bottom-[-4rem] px-1 py-1 ">
              <OctaInput label="Hint" />
            </div>
            {/* TOGGLE2 */}
            <div className="absolute -right-[2.5rem] bottom-[10.5rem] px-1 py-1 ">
              {/* <OctaButton variant={"materialSecondary"}>Label</OctaButton> */}
              <OctaToggle label="" />
            </div>
            {/* OCTA GIF */}
            <div className="absolute -right-[8rem] bottom-[-3.5rem] px-1 py-1">
              <div className="w-[200px] h-[200px] overflow-hidden rounded-2xl">
                <img
                  src="/images/octa.gif"
                  alt="Octa GIF"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* ICON BUTTON GEAR PURPLE */}
            <div className="absolute -right-[-7rem] bottom-[-2rem] px-1 py-1 ">
              <OctaButton
                size={"icon"}
                className="bg-[#6750A4] hover:bg-[#7f67c3] text-white rounded-full"
                variant={"default"}
              >
                <Settings />
              </OctaButton>
            </div>
            {/* BUTTON YELLOW */}
            <div className="absolute -right-[-3rem] bottom-[-7rem] px-1 py-1 ">
              <OctaButton
                variant={"default"}
                size={"sm"}
                className="bg-[#FFF069] hover:bg-[#fff495] hover:scale-110 transition-all duration-150 ease-in-out"
              >
                Label
              </OctaButton>
            </div>
          </ScrollParallax>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
}

export default Hero;

//  <section className="relative z-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[800px]">
//         {/* Hero content */}
//         <div className="pt-32 pb-12 md:pt-40 md:pb-20">
//           {/* Section header */}
//           <div className="text-center pb-12 md:pb-16">
//             <h1
//               className="text-[40px] md:text-4xl font-bold leading-tighter tracking-tighter mb-4"
//               data-aos="zoom-y-out"
//             >
//               Fastest. Most Reliable. <br /> App Builder for Ecommerce brands.
//             </h1>
//             <div className="max-w-3xl mx-auto">
//               <p
//                 className="md:text-xl text-[16px] text-[#9D9D9D] mb-8"
//                 data-aos="zoom-y-out"
//                 data-aos-delay="150"
//               >
//                 Bloxat Built is the fastest way to create & launch your AR
//                 powered app. ✨
//               </p>
//               <div
//                 className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
//                 data-aos="zoom-y-out"
//                 data-aos-delay="300"
//               >
//                 <div>
//                   {/* <Link href="https://demo.bloxat.app/" target="_blank">
//                     <button
//                       className="btn text-black bg-lemon hover:bg-[#e0ff63] md:w-full w-[150px] mb-4 sm:w-auto sm:mb-0 "
//                       // href="#0"
//                     >
//                       Try Demo
//                     </button>
//                   </Link> */}
//                 </div>
//                 {/* <div>
//                   <a
//                     className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
//                     href="#0"
//                   >
//                     Learn more
//                   </a>
//                 </div> */}
//               </div>
//             </div>
//           </div>

//           {/* Hero image */}
//           <div>
//             {/* <div className="flex flex-col justify-center ">
//                 <img
//                   className="mx-auto mt-[-60px] "
//                   src="https://media.publit.io/file/StockPics/landing-hero.webp"
//                   width="1068"
//                   // height="432"
//                   alt="Hero"
//                 />
//               </div> */}
//             {/* <button
//                 className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   setVideoModalOpen(true);
//                 }}
//                 aria-controls="modal"
//               >
//                 <svg
//                   className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
//                   <path d="M10 17l6-5-6-5z" />
//                 </svg>
//                 <span className="ml-3">Watch the full video (2 min)</span>
//               </button> */}

//             <div
//               className="relative flex justify-center z-20"
//               data-aos="zoom-out-up"
//               data-aos-delay="450"
//             >
//               <img
//                 className="md:visible absolute invisible mx-auto mt-[-60px]"
//                 src="https://media.publit.io/file/LandingPage/hero-less.webp"
//                 alt="Hero"
//               />

//               {/* <img
//                 className="md:visible absolute invisible mx-auto mt-[-60px]"
//                 src="https://media.publit.io/file/LandingPage/landing-hero.webp"
//                 // effect="blur"
//                 // placeholderSrc="https://media.publit.io/file/LandingPage/landing-hero.webp"
//                 // loading="lazy"
//                 // width="1068"
//                 // quality="high"
//                 // width={1068}
//                 // height={0}
//                 alt="Hero"
//               /> */}

//               <img
//                 className="md:invisible absolute visible mx-auto mt-[-20px] w-[300px]"
//                 src="https://media.publit.io/file/LandingPage/sm-screen-less.webp"
//                 // effect="blur"
//                 // placeholderSrc="https://media.publit.io/file/LandingPage/sm-screen.webp"
//                 // width={300}
//                 // height={0}
//                 // loading="lazy"
//                 alt=""
//               />
//             </div>
//             {/* Modal */}
//             {/* <Modal
//               id="modal"
//               ariaLabel="modal-headline"
//               show={videoModalOpen}
//               handleClose={() => setVideoModalOpen(false)}
//             >
//               <div className="relative pb-9/16">
//                 <iframe
//                   className="absolute w-full h-full"
//                   src="https://player.vimeo.com/video/174002812"
//                   title="Video"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </Modal> */}
//           </div>
//         </div>
//       </div>
//     </section>
