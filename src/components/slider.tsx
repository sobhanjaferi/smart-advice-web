function Slider() {
  return (
    <>
      <div className="w-full h-100 bg-violet-600 text-white">
        {/* ================ slide one ================ */}

        <div className="w-full h-9/10 flex flex-col justify-around items-center">
          <h2 className="tracking-widest">TESTIMONIALS</h2>

          <p className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
            “I'm a testimonial. Click to <br /> edit me and add text”
          </p>

          <div>
            <p className="font-bold">Louise Maxwell</p>
            <p>Company name</p>
          </div>
        </div>

        {/* ================ slide buttons ================ */}

        <div className="flex justify-center items-center h-1/10">
          <div className="p-1.5 cursor-pointer bg-gray-600 rounded-full"></div>
          <div className="p-1.5 mx-3 cursor-pointer bg-gray-600 rounded-full"></div>
          <div className="p-1.5 cursor-pointer bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Slider;
