import React from "react";

const HelpCenterBtn = () => {
  return (
    <button
      className=" whitespace-nowrap
  flex items-center justify-center gap-3 font-bold
  border-2 border-[#02033B] text-[#02033B]
  p-[1rem_2rem_1rem_1.25rem] rounded-[2.625rem]
  transition-all duration-300 
  hover:bg-[#02033B] hover:text-white
  active:scale-95
  group
"
    >
      Visit help center
    </button>
  );
};

export default HelpCenterBtn;
