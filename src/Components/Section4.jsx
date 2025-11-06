import React, { useContext } from "react";
import EyePic from "../assets/spyware-detection-loading.png";
import KeyLogger from "../assets/keylogger-detection-loading.png";
import Tracking from "../assets/find-tracking-apps-loading.png";
import Mobile from "../assets/Intergity.png";
import Threat from "../assets/threat-removal-loading.png";
import EasyUse from "../assets/easy-to-use-loading.png";

const icons = {
  EyePic,
  KeyLogger,
  Tracking,
  Mobile,
  Threat,
  EasyUse,
};

import IphoneBtn from "./IphoneBtn";
import AndroidBtn from "./AndroidBtn";
import { CardDataContext } from "./CardContext";

const Section4 = () => {
  const { CardsData } = useContext(CardDataContext);

  return (
    <section className="Section4 bg-gradient-to-b from-[#F3F8FF] to-[#E7EFFA] my-10 text-[#02033B] flex justify-center items-center flex-col gap-20 px-5 py-20  text-center ">
      <h2 className="font-bold  text-[2rem] sm:text-[2.2rem] ">
        Get your freedom back, stop mobile spyware today
      </h2>

     <div className="bg-white w-full lg:max-w-[52.5rem] shadow-[12px_12px_20px_0px_rgba(0,0,0,0.10)] rounded-[48px] md:p-[2.3rem] p-[5rem] ">
  <div className="flex gap-14 flex-wrap justify-center items-center">
    {CardsData.map((elem, idx) => (
      <div
        key={idx}
        className={`Card w-full md:mb-6 md:w-[12.5rem] flex flex-col justify-center items-center text-[#02033B] gap-6 ${
          idx >= CardsData.length - 3 ? "hidden md:flex" : ""
        }`}
      >
        <img src={icons[elem.pic]} alt={elem.Symbol} />

        <h2 className="text-[1.1875rem] font-bold tracking-[-0.025rem] whitespace-nowrap">
          {elem.Symbol}
        </h2>

        <p className="leading-[1.5rem]">{elem.Desc}</p>
      </div>
    ))}

    <div className="Buttons hidden md:flex flex-col md:flex-row gap-5 mt-10">
      <IphoneBtn />
      <AndroidBtn />
    </div>
  </div>
</div>


      <div className="Buttons flex flex-col md:flex-row gap-5 md:hidden">
        <IphoneBtn />
        <AndroidBtn />
      </div>
    </section>
  );
};

export default Section4;
