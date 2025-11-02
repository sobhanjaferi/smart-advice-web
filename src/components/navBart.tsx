"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "./button";

interface TnavItems {
  id: number;
  name: string;
  link: string;
}

function NavBar({ position }: { position: string }) {
  const [scroll, setScroll] = useState<Boolean>(false);
  const [navList, setNavList] = useState<Boolean>(true);
  const [timer, setTimer] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 800);
  }, []);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY >= 20) {
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

  const handleOpenClose = () => {
    setNavList(!navList);
  };

  const pagePath = usePathname();
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Services",
      link: "/Services",
    },
    {
      id: 3,
      name: "About",
      link: "/About",
    },
    {
      id: 4,
      name: "Testimonials",
      link: "/Testimonials",
    },
    {
      id: 5,
      name: "Clients",
      link: "/Clients",
    },
    {
      id: 6,
      name: "Contact",
      link: "/Contact",
    },
  ];

  return (
    <nav
      className={`flex justify-between items-center h-10
      py-8 px-5 z-100 transition-all
      duration-700 ease-in-out
      ${position} ${scroll ? "bg-white shad opacity-100" : ""}`}
    >
      <h1 className="text-3xl text-blue-950 font-bold sm:ml-[-10px] sm:text-2xl ">
        BizBud
      </h1>

      <div className="fixed right-7.5 top-6 flex justify-center items-center">
        <i
          className={`cursor-pointer fa-solid fa-list block lg:opacity-0 sm:opacity-0 transition-all duration-400 ease-in-out ${
            navList ? "rotate-180 text-violet-600" : "rotate-0"
          }`}
          onClick={handleOpenClose}
        ></i>
      </div>
      <div
        className={`flex flex-col justify-center items-center lg:flex lg:justify-center lg:items-center lg:flex-row lg:mt-0 lg:mr-[-30px] sm:flex sm:justify-between sm:items-center sm:flex-row sm:mt-0 sm:mr-[-30px] transition-all duration-700 ease-in-out lg:opacity-0 sm:opacity-0 ${
          timer ? "lg:opacity-100 lg:mr-[0px] sm:opacity-100 sm:mr-[0px]" : ""
        }  ${
          navList
            ? "opacity-100 mr-0 pointer-events-auto"
            : "opacity-0 mr-[-30px] pointer-events-none"
        } ${
          scroll ? "bg-white" : ""
        } lg:mr-0 sm:mr-0 lg:rounded-none lg:p-0 sm:p-0 mt-75 mr-0 rounded-xl p-2`}
      >
        <ul className="lg:flex-row sm:mr-2 sm:flex-row flex flex-col justify-center items-center">
          {navItems.map((item: TnavItems) => (
            <Link key={item.id} href={item.link}>
              <li
                className={`lg:mr-5 sm:mx-1 transition-all duration-500 ease-in-out hover:text-violet-600 ${
                  pagePath == item.link ? "text-violet-600" : ""
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        <Button
          name="Call Now"
          newStyle="lg:mt-0 lg:px-7 lg:py-2 lg:mr-0 sm:mt-0 sm:px-4 sm:py-1 sm:mr-0"
        />
      </div>
    </nav>
  );
}

export default NavBar;
