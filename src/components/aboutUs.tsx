function AboutUs() {
  return (
    <div className="flex justify-between items-center relative mt-35">
      <div className="lg:w-2/4 sm:w-2/4 w-4/4 flex flex-col justify-between items-start lg:py-0 sm:py-0 px-8 py-10 h-207 absolute top-0 left-0 bottom-0">
        <p className="z-20">hello world</p>
        <p className="z-20">test</p>
      </div>

      <div className="lg:w-2/4 sm:w-2/4 w-4/4 absolute top-0 right-0 bottom-0">
        <img src="./images/main.png" className="h-207" alt="img" />
      </div>
    </div>
  );
}

export default AboutUs;
