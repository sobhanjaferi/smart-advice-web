"use client";

import { useState } from "react";

function ChatBot() {
  const [openClose, setOpenClose] = useState<boolean>(false);

  const HandleOpenClose = () => {
    setOpenClose(!openClose);
  };

  return (
    <div>
      <div className="fixed lg:bottom-10 lg:right-10 sm:bottom-10 sm:right-10 bottom-5 right-5 z-90">
        <i
          className="fa-solid fa-comments py-4 pr-8 pl-4 bg-blue-950 text-white rounded-full cursor-pointer noShad transition-all duration-200 ease-in-out"
          onClick={HandleOpenClose}
        ></i>
      </div>

      <div
        className={`flex flex-col justify-end items-center lg:w-60 lg:h-100 sm:w-60 sm:h-100 w-50 h-80 shad rounded-xl fixed lg:right-25 lg:bottom-25 sm:right-25 sm:bottom-25 right-18 bottom-18 z-90 bg-white transition-all duration-500 ease-in-out ${
          openClose
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex justify-between items-center border-t-1 border-gray-300">
          <input
            type="text"
            placeholder="Type your message ..."
            className="p-4 rounded-b-xl w-full outline-0"
          />
          <div className="flex justify-between items-center text-gray-600 mr-2">
            <i className="fa-regular fa-face-smile mr-1 hover:bg-yellow-400 hover:text-black rounded-full cursor-pointer transition-all duration-200 ease-in-out"></i>
            <i className="fa-solid fa-file transition-all duration-200 ease-in-out hover:text-black cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
