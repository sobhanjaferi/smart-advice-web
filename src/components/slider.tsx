"use client";

import { useState } from "react";

function Slider() {
  const [slide1, setSlide1] = useState<boolean>(false);
  const [slide2, setSlide2] = useState<boolean>(false);
  const [slide3, setSlide3] = useState<boolean>(false);

  const HandleSlide1 = () => {
    setSlide1(!slide1);
    setSlide2(false);
    setSlide3(false);
  };

  const HandleSlide2 = () => {
    setSlide2(!slide2);
    setSlide1(false);
    setSlide3(false);
  };

  const HandleSlide3 = () => {
    setSlide3(!slide3);
    setSlide1(false);
    setSlide2(false);
  };

  return (
    <div className="h-100 bg-violet-600 relative mb-10">
      <div className="flex flex-col justify-around items-center text-white absolute top-0 left-0 right-0 bottom-0">
        <h2>TESTIMONIALS</h2>
        <p className="font-bold lg:text-5xl sm:text-5xl text-2xl">
          “I'm a testimonial. Click to <br /> edit me and add text”
        </p>

        <div>
          <p className="font-bold">Josh Phillips</p>
          <p>Company name</p>
        </div>

        <div className="flex justify-around items-center">
          <span
            className={`p-1 rounded-full cursor-pointer ${
              slide1 ? "bg-white" : "bg-gray-500"
            }`}
            onClick={HandleSlide1}
          ></span>
          <span
            className={`p-1 rounded-full mx-3 cursor-pointer ${
              slide2 ? "bg-white" : "bg-gray-500"
            }`}
            onClick={HandleSlide2}
          ></span>
          <span
            className={`p-1 rounded-full cursor-pointer ${
              slide3 ? "bg-white" : "bg-gray-500"
            }`}
            onClick={HandleSlide3}
          ></span>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Slider;
