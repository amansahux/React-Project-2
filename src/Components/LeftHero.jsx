import React from "react";
import IphoneBtn from "./IphoneBtn";
import AndroidBtn from "./AndroidBtn";

const LeftHero = () => {
  return (
    <div className="Left_Hero">
      <div className="Hero_Text flex flex-col justify-center items-center xl:justify-end xl:items-end text-[#02033B] xl:w-[40rem]">
        <h2 className="text-[2.3rem] sm:text-[3.5rem] md:text-[3.8rem] font-bold md:font-extrabold text-center xl:text-left">
          Your mobile privacy is our mission
        </h2>

        <p className="font-medium text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] text-center py-10 2xl:py-16 xl:text-left">
          Think your phone has been hacked? Our trusted apps make it easy for
          you to scan, detect and remove threats from your iPhone and Android
          devices.
        </p>
      </div>

      <div className="Hero_Btn flex flex-col gap-3 md:gap-4 lg:gap-5 sm:flex-row items-center justify-center xl:justify-start">
        <IphoneBtn label="Get Certo for iPhone" />
        <AndroidBtn />
      </div>
    </div>
  );
};

export default LeftHero;
