"use client";

import { useState, useEffect } from "react";

function Business() {
  const [scroll, setScroll] = useState<Boolean>(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY >= 700) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", HandleScroll);

    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between items-center mt-20">
      <p
        className={`text-violet-600 transition-all duration-1000 opacity-0 mr-[100px] ${
          scroll ? "opacity-100 ml-[100px]" : ""
        }`}
      >
        SERVICES
      </p>
      <p
        className={`text-blue-950 text-center font-bold text-4xl mt-10 mx-2 transition-all duration-1000 opacity-0 ml-[150px] ${
          scroll ? "opacity-100 mr-[150px]" : ""
        }`}
      >
        Taking Your Business to <br /> the Next Level
      </p>

      <div className="flex lg:flex-row justify-around items-center sm:flex-row flex-col w-full mt-30">
        <div
          className={`flex flex-col justify-between items-center m-5 opacity-0 transition-all duration-1400 ${
            scroll ? "opacity-100" : ""
          }`}
        >
          <div className="mb-15 relative">
            <div className="w-25 h-25 bg-violet-400 rounded-full"></div>
            <div className="w-20 h-20 bg-violet-600 z-20 rounded-full absolute top-[-15px] left-[-25px]"></div>
            <div className="bg-black w-2.5 h-2.5 rounded-full absolute left-[-23px] bottom-[-15px]"></div>
          </div>
          <h2 className="text-shadow-blue-950">Business Plans</h2>
          <p className="text-gray-500 text-center text-xl">
            I'm a paragraph. Click here to add <br /> your own text and edit me.
          </p>
        </div>

        <div
          className={`flex flex-col justify-between items-center m-5 opacity-0 transition-all duration-1800 ${
            scroll ? "opacity-100" : ""
          }`}
        >
          <div className="relative mb-10 w-30 h-30">
            <div className="bg-black w-2.5 h-2.5 rounded-full absolute top-0 left-5"></div>
            <div className="rounded-full w-15 h-3 bg-violet-400 rotate-45 absolute bottom-10 left-0"></div>
            <div className="w-30 h-3 rounded-full bg-violet-600 z-20 rotate-135 absolute bottom-15 right-[-25px]"></div>
          </div>
          <h2 className="text-shadow-blue-950">Accounting Services</h2>
          <p className="text-gray-500 text-center text-xl">
            I'm a paragraph. Click here to add <br /> your own text and edit me.
          </p>
        </div>

        <div
          className={`flex flex-col justify-between items-center m-5 opacity-0 transition-all duration-2400 ${
            scroll ? "opacity-100" : ""
          }`}
        >
          <div className="w-23 h-23 mb-15 relative">
            <div className="w-12 h-12 bg-violet-600 z-20 absolute top-0 left-0"></div>
            <div className="w-17 h-17 bg-violet-400 absolute right-0 bottom-0"></div>
            <div className="bg-black w-2.5 h-2.5 rounded-full absolute bottom-[-15px] right-[-15px]"></div>
          </div>
          <h2 className="text-shadow-blue-950">Finance Optimization</h2>
          <p className="text-gray-500 text-center text-xl">
            I'm a paragraph. Click here to add <br /> your own text and edit me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
