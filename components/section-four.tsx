import React from "react";

const SectionFour = () => {
  return (
    <section className="flex flex-row items-center h-[185px] border-b">
      <div className="flex items-center justify-start border-r px-14 h-full w-full">
        <h2 className="text-3xl font-semibold tracking-tighter">
          Fastest ReactJS, <br /> UI library.
        </h2>
      </div>
      <div className="flex items-center justify-center border-r p-8 h-full w-1/2">
        <img
          src="/logo/logo-dark.webp"
          alt="Octa UI"
          className="h-[62px] w-auto"
        />
      </div>
      <div className="flex items-center justify-center border-r p-8 h-full w-1/2">
        <img src="/svg/npm.svg" alt="NPM" className="h-[48px] w-auto" />
      </div>
      <div className="flex items-center justify-center border-r p-8 h-full w-1/2">
        <img src="/svg/nextjs.svg" alt="NextJS" className="h-[62px] w-auto" />
      </div>
      <div className="flex items-center justify-center p-8 h-full w-1/2">
        <img src="/svg/react.svg" alt="React" className="h-[62px] w-auto" />
      </div>
    </section>
  );
};

export default SectionFour;
