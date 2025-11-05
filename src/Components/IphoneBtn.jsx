import React from 'react'
import { MoveRight } from "lucide-react";

const IphoneBtn = () => {
  return (
    <button
            className="flex font-bold items-center gap-3 justify-center py-4 pl-5 pr-[2.3rem] rounded-[2.625rem] 
             bg-[#FFC247] whitespace-nowrap text-[#02033B] shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
             transition-all duration-300 ease-out
             hover:bg-[#ffb800] hover:shadow-[0_8px_20px_rgba(255,194,71,0.6)] hover:-translate-y-1
             active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.2)] active:scale-[0.98]"
          >
            Get Certo for iPhone
            <span>
              <MoveRight />
            </span>
          </button>
  )
}

export default IphoneBtn
