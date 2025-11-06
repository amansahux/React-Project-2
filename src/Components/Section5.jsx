import { MoveRight } from "lucide-react";
import React from "react";
import HelpCenterBtn from "./HelpCenterBtn";

const Section5 = () => {
  return (
    <section className="Section5 flex justify-center items-center bg-white py-10 px-5 text-[#02033B]">
      <div className="Content flex flex-col lg:flex-row justify-center items-center gap-10">
        
        {/* Left Section */}
        <div className="LeftSection w-full md:w-[28.75rem] flex flex-col justify-start items-start gap-7 rounded-[3rem] bg-[linear-gradient(180deg,#F7C95F_0%,#FDB235_100%)] p-[3rem]">
          <h2 className="text-[1.4375rem] font-bold">Read our story</h2>

          <p>Find out why thousands trust Certo to secure their mobile world.</p>

          <button
            className="
              flex items-center justify-center gap-3 font-bold
              bg-[#4335DE] text-white 
              p-[1rem_2rem_1rem_1.25rem] rounded-[2.625rem]
              transition-all duration-300
              hover:bg-[#3528bd] hover:shadow-[0_8px_20px_rgba(67,53,222,0.4)]
              active:scale-95
              group
            "
          >
            About us
            <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Show Help Center button only between md and lg */}
          <div className="hidden md:block lg:hidden">
            <HelpCenterBtn />
          </div>
        </div>

        {/* Right Section */}
        <div className="RightSection hidden lg:flex w-full md:w-[19.25rem] flex-col justify-start items-start gap-7 rounded-[3rem] p-[3rem]">
          <h2 className="text-[1.4375rem] font-bold">Help Center</h2>

          <p>Help topics, getting started guides and FAQs.</p>

          <HelpCenterBtn />
        </div>
      </div>
    </section>
  );
};

export default Section5;
