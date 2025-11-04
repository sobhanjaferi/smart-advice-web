"use client";

import { useEffect, useState } from "react";

function Slider() {
  const [scroll, setScroll] = useState<Boolean>(false);
  const [scrollMobile, setScrollMobile] = useState<Boolean>(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY >= 2300) {
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

  useEffect(() => {
    const HandleScrollMobile = () => {
      if (window.scrollY >= 3200) {
        setScrollMobile(true);
      } else {
        setScrollMobile(false);
      }
    };

    window.addEventListener("scroll", HandleScrollMobile);

    return () => {
      window.removeEventListener("scroll", HandleScrollMobile);
    };
  }, []);

  return (
    <>
      <div className="w-full h-150 bg-violet-600 text-white">
        {/* ================ slide one ================ */}

        <div className="w-full h-9/10 flex flex-col justify-around items-center">
          <h2
            className={`tracking-widest opacity-0 translate-y-[-50px] transition-all duration-1000 ${
              scroll ? "opacity-100 translate-y-[0px]" : ""
            }`}
          >
            TESTIMONIALS
          </h2>

          <p
            className={`font-bold text-3xl sm:text-4xl lg:text-5xl text-center translate-x-[-100px] opacity-0 transition-all duration-1200 ${
              scroll ? "opacity-100 translate-x-[0]" : ""
            }`}
          >
            “I'm a testimonial. Click to <br /> edit me and add text”
          </p>

          <div>
            <p className="font-bold">Louise Maxwell</p>
            <p>Company name</p>
          </div>
        </div>

        {/* ================ slide buttons ================ */}

        <div className="flex justify-center items-center h-1/10">
          <div className="p-1 cursor-pointer bg-gray-100 rounded-full"></div>
          <div className="p-1 mx-3 cursor-pointer bg-gray-100 rounded-full"></div>
          <div className="p-1 cursor-pointer bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Slider;
