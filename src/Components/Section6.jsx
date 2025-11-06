import React from 'react'
import IphoneBtn from "./IphoneBtn";
import AndroidBtn from "./AndroidBtn";

const Section6 = () => {
  return (
 <section className="Section6 py-10 px-5 bg-gradient-to-b from-[#2925CC] to-[#4B48E5] py-[3rem] md:py-[4rem] lg:py-[5rem] xl:py-[5.25rem] px-5 xl:px-[17.6rem]">
    <div className="Content flex flex-col gap-10 text-center text-white text-[1.125rem]">
        <h2 className='font-bold text-[2.125rem]  text-white 
'>Is someone spying on your phone?</h2>
        <h6>Find out with Certo</h6>
        <div className="buttons flex flex-col justify-center items-center gap-6 md:flex-row">
            <IphoneBtn/>
            <AndroidBtn className="border-white text-white hover:bg-white hover:text-[#02033B]"/>
        </div>
        
    </div>
 </section>
  )
}

export default Section6
