"use client";

import { useEffect, useState } from "react";
import Button from "./button";
import NavBar from "./navBart";

function Header() {
  const [timer, setTimer] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 800);
  }, []);

  return (
    <div>
      <NavBar position="fixed top-0 left-0 right-0" />
      <div className="h-250">
        <h1
          className={`text-blue-950 lg:text-8xl font-bold absolute lg:top-50 lg:left-0 z-10 sm:text-6xl sm:top-50 sm:left-0 text-4xl top-60 left-0 transition-all duration-700 ease-in-out opacity-0 ${
            timer ? "opacity-100 lg:left-30 sm:left-20 left-10" : ""
          }`}
        >
          The Power <br /> of Good Advice
        </h1>
        <p
          className={`absolute lg:top-104 lg:left-0 lg:w-110 sm:top-85 sm:left-0 sm:w-110 top-85 left-0 text-blue-950 z-10 text-2xl font-light w-70 transition-all duration-1000 ease-in-out opacity-0 ${
            timer ? "opacity-100 lg:left-30 sm:left-20 left-10" : ""
          }`}
        >
          I'm a paragraph. Click here to add your <br /> own text and edit me.
        </p>
        <Button
          name="Learn More"
          newStyle={`absolute lg:left-0 lg:top-130 sm:top-110 sm:left-0 left-0 top-115 z-10 transition-all duration-1200 ease-in-out opacity-0 ${
            timer ? "opacity-100 lg:left-30 sm:left-20 left-10" : ""
          }`}
        />
        <img
          src="images/header.png"
          className="mt-[-60px] h-250 w-full absolute top-10 left-0 right-0"
        />
      </div>
    </div>
  );
}

export default Header;
