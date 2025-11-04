function HappyClients() {
  return (
    <div className="w-full">
      <div className="bg-gray-300 flex justify-center items-end h-25 p-3 text-blue-950 font-bold">
        OUR HAPPY CLIENTS
      </div>

      <hr className="text-white" />
      <hr className="text-white" />

      <div className="bg-gray-300 flex lg:flex-row sm:flex-row flex-col justify-around items-center">
        <div className="text-white lg:text-xl sm:text-lg text-xl mt-10 pb-3 border-b-3 border-white">
          <span className="p-2 bg-blue-950 font-bold mr-[5px]">BAR</span>
          <span className="p-2 bg-blue-950 font-bold">121</span>
        </div>

        <div className="lg:text-2xl sm:text-lg text-2xl text-blue-950 mt-10 border-b-3 border-white">
          H U N T E R
        </div>

        <div className="font-extrabold lg:text-2xl sm:text-lg text-2xl text-blue-950 font-serif mt-10 border-b-3 border-white">
          Loco Graphix
        </div>

        <div className="lg:text-2xl sm:text-lg text-2xl text-blue-950 font-bold mt-10 border-b-3 border-white">
          Mid Dreams
        </div>

        <div className="lg:text-2xl sm:text-lg text-2xl text-blue-950 font-bold mt-10 border-b-3 border-white">
          DAVE JONES
        </div>
      </div>
    </div>
  );
}

export default HappyClients;
