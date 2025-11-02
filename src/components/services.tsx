function FamusCompany() {
  return (
    <div className="w-full lg:h-80 sm:h-80 h-135 py-5 bg-blue-950 text-white flex flex-col lg:justify-center sm:justify-center justify-between items-center mt-30">

      <h1 className="font-bold lg:text-4xl sm:text-4xl text-2xl mb-15">
        We’re Good with Numbers
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col justify-between items-center">
            <span className="font-bold lg:text-7xl sm:text-5xl text-4xl">
              15
            </span>
            <span>Years of Experience</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-white mb-10 lg:mx-15 sm:mx-5"></span>
          <div className="flex flex-col justify-between items-center">
            <span className="font-bold lg:text-7xl sm:text-5xl text-4xl">
              36
            </span>
            <span>Qualified Experts</span>
          </div>

          <span className="w-2 h-2 rounded-full bg-white mb-10 lg:mx-15 sm:mx-5"></span>

          <div className="flex flex-col justify-between items-center">
            <span className="font-bold lg:text-7xl sm:text-5xl text-4xl">
              120
            </span>
            <span>Clients Every Year</span>
          </div>

          <span className="w-2 h-2 rounded-full bg-white mb-10 lg:mx-15 sm:mx-5"></span>

          <div className="flex flex-col justify-between items-center">
            <span className="font-bold lg:text-7xl sm:text-5xl text-4xl">
              9
            </span>
            <span>Intl. Partners</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamusCompany;
