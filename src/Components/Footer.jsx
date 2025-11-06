
import Twitter from '../assets/Twitter.svg'
import Facebook from '../assets/Facebook.svg'
import Yt from '../assets/Yt.svg'
import React from "react";
// import FootLogo from 'certo-dark-yellow.svg'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 lg:px-20 py-16 ">
      <div className="flex flex-col justify-center  items-start ">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-6  lg:justify-self-center">
            <h2 className="text-3xl font-extrabold">Scan. Detect. Remove.</h2>

            <div className="flex items-center gap-4">
             <a href="" className='hover:bg-blue-800'> <img src={Twitter} alt="" /></a>
            <a href="" className='hover:bg-blue-600'>  <img src={Facebook} alt="" /></a>
             <a href="" className='hover:bg-red-600'> <img src={Yt} alt="" /></a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm underline opacity-90">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              © 2022 Certo Software Limited <br />
              Registered in England & Wales No. 10072356
            </p>

            <p className="text-xs opacity-90">
              Designed & developed by{" "}
              <span className="underline">Bigger Picture</span>
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <h1 className="text-4xl font-extrabold border-b border-white/40 pb-4 inline-block">
              Certo
            </h1>

            <div className="mt-8 space-y-3">
              {["iPhone", "Android", "Help", "About", "Insights"].map(
                (item) => (
                  <button
                    key={item}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-5 h-0.5 bg-amber-300 group-hover:w-8 transition-all"></div>
                    <p className="text-amber-300 text-lg font-semibold group-hover:translate-x-1 transition">
                      {item}
                    </p>
                  </button>
                )
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-amber-300 p-8 rounded-3xl text-slate-900 space-y-6 ">
            <h3 className="text-2xl font-extrabold">
              Sign up to our newsletter
            </h3>
            <p className="text-base leading-relaxed">
              Get the latest mobile security news, exclusive discounts & offers!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:flex-1 px-4 py-2 rounded-xl bg-white text-slate-900 outline-none"
              />

             <button
  className="px-6 py-2 rounded-xl bg-slate-900 text-white font-bold 
  transition-all duration-200 flex-shrink-0
  hover:bg-slate-800 hover:scale-[1.03]
  active:scale-[0.97] active:bg-slate-950"
>
  Submit
</button>

            </div>
          </div>
        </div>
      

      {/* FOOTNOTE */}
      <p className="text-xs text-gray-500 mt-10 max-w-4xl leading-relaxed xl:max-w-[550px] flex justify-center items-center 2xl:ml-18">
      Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
