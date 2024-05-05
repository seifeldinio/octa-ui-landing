import dynamic from "next/dynamic";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Head from "next/head";

const FeaturesCards = dynamic(() => import("@/components/features-cards"));
const SectionOne = dynamic(() => import("@/components/section-one"));

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden bg-[#FAFAFA] text-[#171717]">
        <Banner />

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow max-w-6xl mx-auto ">
          {/* border-l border-r */}
          <Hero />

          <FeaturesCards />
          <SectionOne />
          {/* <Hero /> */}
          {/* <Hero /> */}
          {/*  Page sections */}
          {/* <HeroHome /> */}
          {/* <BrandsSlider /> */}

          {/* <SectionOne /> */}
          {/* <SectionTwo /> */}
          {/* <SectionThree /> */}
          {/* <SectionFour /> */}
          {/* <SectionFive /> */}
          {/* <SectionSix /> */}
          {/* <SectionSeven /> */}
          {/* <SectionNine /> */}
          {/* <WallOfLove /> */}
          {/* <LastSection /> */}
        </main>

        {/*  Site footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

// <main className="flex min-h-screen flex-col items-center justify-between p-24">
//   <h1>Hello yaba</h1>
// </main>
