import Banner from "@/components/banner";
import Header from "@/components/header";
import Hero from "@/components/hero";
import "@seifeldinio/octa-ui/dist/style.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const FeaturesCards = dynamic(() => import("@/components/features-cards"));
const SectionOne = dynamic(() => import("@/components/section-one"));
const SectionTwo = dynamic(() => import("@/components/section-two"));
const SectionThree = dynamic(() => import("@/components/section-three"));
const SectionFour = dynamic(() => import("@/components/section-four"));
const WallOfLove = dynamic(() => import("@/components/wall-of-love"));
const Footer = dynamic(() => import("@/components/footer"));

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
        <Hero />
        {/*  Page content */}
        <main className="flex-grow max-w-6xl mx-auto border-r border-l">
          <FeaturesCards />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <WallOfLove />
        </main>

        <Footer />
      </div>
    </>
  );
}
