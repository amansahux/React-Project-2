import React, { useContext } from "react";
import Star from "../assets/Frame.svg";
import Peacock from "../assets/Peacock.svg";
import NewYorkPost from "../assets/NewYorkPost.svg";
import FinantialTiming from "../assets/FinantialTiming.svg";
import Reader from "../assets/Reader.svg";
import Wired from "../assets/Wired.svg";
import ZdNet from "../assets/ZdNet.svg";
import { ReviewDataContext } from "./ReviewCOntext";

const Testimonials = () => {
  const { ReviewData } = useContext(ReviewDataContext);
  
  return (
    <section className="Testimonials bg-gradient-to-b from-[#F7C95F] to-[#FDB235] w-full py-16  gap-8">
      <h1 className="text-[#02033B] py-[2rem] px-[2rem] text-[2rem] font-bold xl:py-[6rem] xl:px-[6rem] 2xl:w-[800px] xl:text-[2.25rem]">
        Loved by thousands of iPhone and Android users alike
      </h1>

      <div className="Reviews flex items-center justify-center sm:justify-start  overflow-x-auto mx-2">
        {ReviewData.map((elem, idx) => {
          return (
            <div key={idx} className="flex w-[350px] h-[350px] p-[2rem] flex-col justify-center items-center md:justify-start md:items-start gap-[1.5rem] rounded-[3rem] shrink-0  bg-white box-shadow: 12px 12px 20px 0 rgba(0, 0, 0, 0.10) mx-10">
              <div className="stars flex">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className="text-[#02033B] leading-[1.25rem] text-[14px]">
               {elem.Review}
              </p>
              <h2 className="text-[#02033B] font-bold ">{elem.Reviewer}</h2>
            </div>
          );
        })}
      </div>

      <div className="Companyies hidden xl:flex  justify-start items-center p-20  gap-20">
        <h3 className="text-[#02033B] font-bold  text-[19px]">Featured in:</h3>

        <div className="SVGs flex gap-[2.25rem] items-center">
          <img src={Peacock} alt="" />
          <img src={NewYorkPost} alt="" />
          <img src={FinantialTiming} alt="" />
          <img src={Reader} alt="" />
          <img src={Reader} alt="" />
          <img src={ZdNet} alt="" />
          <img src={Wired} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
