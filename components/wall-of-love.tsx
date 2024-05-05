"use client";
import Slider from "react-slick";
import TestimonialCard from "@/components/ui/testimonial-card";
import BrandedButton from "@/components/ui/branded-button";

const WallOfLove = () => {
  const settings = getSliderSettings(8000);
  const settings2 = getSliderSettings(12000);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
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
              We stay close to our users and work with them daily to keep
              improving the platform. Every brand on Bloxat Built continues to
              grow and we support them every way we can.
            </p>
          </div>

          <div className="absolute z-20 h-[500px] overflow-clip overflow-y-hidden w-full">
            <div className="flex flex-row justify-center content-center items-center space-x-4 md:px-5 px-0 md:max-w-6xl mx-auto w-full">
              <Slider className="w-auto" {...settings}>
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
              </Slider>
              <Slider className="md:flex md:h-[900px] h-full" {...settings2}>
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
              </Slider>
              <Slider className="md:flex " {...settings}>
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
                <TestimonialCard
                  avatar={"OB."}
                  name={"Odessa Brekke"}
                  img={"https://media.publit.io/file/LandingPage/avatar2.webp"}
                  text={
                    "Very easy to use I am completely blown away. It really saved me months."
                  }
                />
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
