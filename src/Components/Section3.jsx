import React from "react";
import IphoneBtn from "./IphoneBtn";
import AndroidBtn from "./AndroidBtn";
import GirlImg from "../assets/AdobeStock_350132639-scaled-2.jpeg.png";

const Section3 = () => {
  return (
    <section className="Section3 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-10 my-14 md:my-20 lg:my-30">
      <div className="Left flex flex-col gap-10">
        <div className="Text text-[#3b0f02] w-full md:w-[30.90019rem] text-center lg:text-left flex flex-col gap-8">
          <h3 className="font-bold text-[2rem] sm:text-[2.2rem]">
            At Certo, mobile security is not an afterthought, it’s what we do.
          </h3>

          <p>
            With years of experience in mobile security and spyware detection,
            our products have helped countless people safeguard their devices
            and find peace of mind.
          </p>
        </div>

        <div className="Buttons flex flex-col md:flex-row gap-5">
          <IphoneBtn label="Get Certo for iPhone" />
          <AndroidBtn />
        </div>
      </div>

      <div className="Right">
        <div className="Image_Box bg-[#FFC247] h-[22.12694rem] w-[22.12694rem] sm:h-[30.12694rem] sm:w-[30.12694rem] flex justify-center items-center">
          <img
            src={GirlImg}
            alt="girl-illustration"
            className="h-[97%] w-[96%] translate-y-[0.5px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
