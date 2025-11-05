import React from "react";


import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <section className=" Hero_Section pt-10 sm:pt-14 md:pt-18 lg:pt-30 px-3 sm:px-6 md:px-8 flex flex-col justify-center items-center xl:justify-end 2xl:max-h-[810px] xl:flex-row xl:gap-10 2xl:20  xl:px-0">
      <LeftHero />
     <RightHero/>
    </section>
  );
};

export default Hero;
