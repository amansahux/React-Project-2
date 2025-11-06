import React from "react";
import HeroPic from "../assets/home-header-2.png.png";
import MobilePic from "../assets/android-dashboard-certo-2.png.png";

const RightHero = () => {
  return (
    <div className="Right_Hero">
      <div className="Hero_Img relative flex justify-end items-end mx-5 my-10 bg-indigo-700
        h-[80vmin] w-[90vmin]
        xl:h-[30.34963rem] xl:w-[30.34963rem]
        2xl:h-[43.34963rem] 2xl:w-[43.34963rem] xl:mr-0">

        <img
          src={HeroPic}
          alt="hero-img"
          className="h-[97%] w-[97%] object-cover object-center"
        />

        <img
          src={MobilePic}
          alt="mobile-dashboard"
          className="hidden absolute
            top-[clamp(50px,5vw,100px)] left-[clamp(50px,5vw,100px)]
            md:top-[clamp(200px,25vw,500px)] md:left-[clamp(80px,20vw,500px)]
            xl:top-25 xl:left-25
            h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[30vh]
            object-cover object-center"
        />
      </div>
    </div>
  );
};

export default RightHero;
