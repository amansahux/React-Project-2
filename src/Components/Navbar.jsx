import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import HelpCenterBtn from "./HelpCenterBtn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Navbar Main Section */}
      <nav className="bg-[#F3F8FF] w-full py-[1.5rem] px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[6rem] flex justify-between items-center">
        {/* Logo */}
        <div className="Logo">
          <img
            src={Logo}
            alt="Logo"
            className="w-[6rem] lg:w-[7.8125rem] xl:w-[8rem]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="MenuItems hidden md:flex gap-[4rem] lg:gap-[6rem] md:text-[0.9rem] lg:text-[1.1875rem] items-center">
          <div className="Links flex items-center text-[#02033B] gap-[3rem] font-bold">
            {["Iphone", "Android", "Help"].map((item) => (
              <h3
                key={item}
                className="transition-all duration-300 hover:text-[#4335DE] hover:-translate-y-[2px]"
              >
                {item}
              </h3>
            ))}
            <h3 className="flex items-center gap-2 transition-all duration-300 hover:text-[#4335DE] hover:-translate-y-[2px]">
              Company <ChevronDown />
            </h3>
          </div>

          <button
            className="bg-[#4335DE] rounded-[2.625rem] py-[1rem] px-[1.25rem] text-white font-[800] text-[1rem]
            shadow-md transition-all duration-300 hover:bg-[#5145FF]
            hover:scale-105 active:scale-95 active:shadow-inner
            focus:outline-none focus:ring-2 focus:ring-[#4335DE]/50"
          >
            Sign in
          </button>
        </div>

        {/* Hamburger (Visible Only on Mobile) */}
        <div
          className="Hamburger md:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </div>
      </nav>

      {/* 🔹 Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-start justify-start p-8 gap-8 text-[#02033B] font-bold text-lg z-50 transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <div
          className="absolute top-5 right-5 cursor-pointer text-[#4335DE]"
          onClick={() => setMenuOpen(false)}
        >
          <X size={30} />
        </div>

        <h3 className="mt-16 hover:text-[#4335DE] transition-all duration-300">
          Iphone
        </h3>
        <h3 className="hover:text-[#4335DE] transition-all duration-300">
          Android
        </h3>
        <h3 className="hover:text-[#4335DE] transition-all duration-300">
          Help
        </h3>
        <h3 className="flex items-center gap-2 hover:text-[#4335DE] transition-all duration-300">
          Company <ChevronDown />
        </h3>

        <button
          className="bg-[#4335DE] text-white py-3 px-8 rounded-full font-semibold shadow-md hover:bg-[#5145FF] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Sign in
        </button>
       <div className="absolute bottom-5 left-5"> <HelpCenterBtn/></div>
      </div>
    </>
  );
};

export default Navbar;
