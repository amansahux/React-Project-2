import React from "react";

const AndroidBtn = () => {
  return (
    <button
      className="group flex font-bold items-center gap-3 justify-center py-4 pl-5 pr-[2.3rem] rounded-[2.625rem]
                border-2 border-[#02033B] text-[#02033B]
                transition-all duration-300 ease-out
                hover:bg-[#02033B] hover:text-[#FFC247] hover:shadow-[0_6px_20px_rgba(255,194,71,0.4)] hover:-translate-y-1
                active:translate-y-0 active:scale-[0.98] active:shadow-[0_3px_10px_rgba(255,194,71,0.5)]"
    >
      Get Certo for Android
    </button>
  );
};

export default AndroidBtn;
