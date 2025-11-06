import React from "react";
import CardImage from "../assets/CardImage1.png";
import CardImage2 from "../assets/figure2.png";
import CardImage3 from "../assets/figure3.png";
import IphoneBtn from "./IphoneBtn";

const Section7 = () => {
  return (
    <section className="Section7  text-[#02033B]  px-10 md:px-10 lg:px-20 lg:px-[12rem] lg:py-[5.25rem] py-20 bg-[#F3F8FF]">
      <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] whitespace-nowrap font-extrabold text-center my-10">
        Latest insights
      </h1>
      <div className="w-full px-4 py-10">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          {/* CARD 1 */}
          <div className="bg-white rounded-[48px] overflow-hidden shadow-md hover:shadow-lg transition max-w-[20rem] justify-self-center">
            <div className="relative">
              <img src={CardImage} className="w-full h-48 object-cover" />
              <span className="absolute top-4 left-4 px-5 py-2 bg-sky-50 rounded-full text-slate-900 text-sm font-bold">
                Expertise
              </span>
            </div>

            <div className="px-10 py-8 flex flex-col gap-4">
              <h3 className="text-slate-900 text-xl font-bold leading-tight">
                Signs Your Ex Is Spying On You
              </h3>
              <p className="text-gray-700 text-sm">
                In an ideal world, after a relationship ends both you and your
                ex will move on. But what if they can’t let go, and start spying
                on your...
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-[48px] overflow-hidden shadow-md hover:shadow-lg transition max-w-[20rem]  justify-self-center">
            <div className="relative">
              <img src={CardImage2} className="w-full h-48 object-cover" />
              <span className="absolute top-4 left-4 px-5 py-2 bg-sky-50 rounded-full text-slate-900 text-sm font-bold">
                Guides
              </span>
            </div>

            <div className="px-10 py-8 flex flex-col gap-4">
              <h3 className="text-slate-900 text-xl font-bold leading-tight">
                How to Remove a Hacker from Your Samsung Phone
              </h3>
              <p className="text-gray-700 text-sm">
                Samsung is the second most popular manufacturer of smartphones
                in the world, with a market share of 28.19% compared to Apple’s
                28.43% as...
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-[48px] overflow-hidden shadow-md hover:shadow-lg transition max-w-[20rem] justify-self-center">
            <div className="relative">
              <img src={CardImage3} className="w-full h-48 object-cover" />
              <span className="absolute top-4 left-4 px-5 py-2 bg-sky-50 rounded-full text-slate-900 text-sm font-bold">
                Expertise
              </span>
            </div>

            <div className="px-10 py-8 flex flex-col gap-4">
              <h3 className="text-slate-900 text-xl font-bold leading-tight">
                Is Your Cell Phone Under Surveillance?
              </h3>
              <p className="text-gray-700 text-sm">
                In today’s surveillance state, it can feel like your every move
                is being watched. Although your mind may be conjuring up images
                of CCTV...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn flex justify-center items-center mt-16">
        <IphoneBtn label={'View all insights'}/>
      </div>
    </section>
  );
};

export default Section7;
