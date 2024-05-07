"use client";
// import Slider from "react-slick";
import BrandedButton from "@/components/ui/branded-button";
import TestimonialCard from "@/components/ui/testimonial-card";
import { animateWithGsap } from "@/lib/animation";
import { testimonials } from "@/lib/contants";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const WallOfLove = () => {
  const settings = getSliderSettings(8000);
  const settings2 = getSliderSettings(12000);

  useGSAP(() => {
    animateWithGsap(".wall-title", { opacity: 1 });

    animateWithGsap(
      ".wall-of-love-animation",
      { scale: 1, opacity: 1, delay: 0.2, duration: "0.8" }

      // { scale: 1, opacity: 1, ease: "power1" }
      // { scrub: 1 }
    );
  }, []);

  return (
    <section className="relative">
      <div className="md:max-w-6xl md:mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20">
          <div className="wall-title md:max-w-3xl md:mx-auto text-center pb-12 md:pb-16">
            <div className="flex flex-row items-center justify-center content-center">
              <h2 className="font-bold text-4xl tracking-tighter mb-4">
                Wall of Love
              </h2>
              <img
                src="/images/heart.webp"
                className="animate-bounce h-[40px] w-auto ml-3"
                alt=""
              />
            </div>
            <p className="text-sm tracking-tight text-[#5F5F5F]">
              We are deeply connected to our users, collaborating with them
              daily to enhance Octa UI. Every brand leveraging Octa UI continues
              to flourish, and we provide unwavering support every step of the
              way.
            </p>
          </div>

          <div className="absolute z-20 md:pr-10 pr-0 md:pl-0 pl-5 h-[500px] overflow-clip overflow-y-hidden w-full">
            <div className="wall-of-love-animation flex flex-row justify-center items-center md:space-x-4 space-x-0 md:px-5 px-0 md:max-w-6xl md:mx-auto w-full ">
              <Slider className="md:w-auto w-full" {...settings}>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    avatar={testimonial.avatar}
                    name={testimonial.name}
                    img={testimonial.img}
                    text={testimonial.text}
                    bgColor={testimonial.bgColor}
                  />
                ))}
              </Slider>
              <Slider
                className="md:flex hidden md:h-[900px] h-full"
                {...settings2}
              >
                {testimonials.reverse().map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    avatar={testimonial.avatar}
                    name={testimonial.name}
                    img={testimonial.img}
                    text={testimonial.text}
                    bgColor={testimonial.bgColor}
                  />
                ))}
              </Slider>
              <Slider className="md:flex hidden" {...settings}>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    avatar={testimonial.avatar}
                    name={testimonial.name}
                    img={testimonial.img}
                    text={testimonial.text}
                    bgColor={testimonial.bgColor}
                  />
                ))}
              </Slider>
            </div>
          </div>

          {/* Background gradient */}

          <div className="flex relative h-[500px] w-auto z-10 px-7 rounded-3xl overflow-clip">
            <div className="wall-gradient absolute inset-0 w-full h-full " />
          </div>

          {/* <img
            className="flex h-[500px] w-auto z-10 px-7"
            src="https://media.publit.io/file/LandingPage/gradient.webp"
            alt=""
            // data-aos="zoom-out"
            // data-aos-duration="1000"
            // data-aos-delay="300"
            loading="lazy"
          /> */}
        </div>
        <div className="flex w-full items-center justify-center mb-20">
          <BrandedButton />
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;

function getSliderSettings(speed: number) {
  return {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: speed,
    cssEase: "linear",
    pauseOnHover: false,
    vertical: true,
  };
}
