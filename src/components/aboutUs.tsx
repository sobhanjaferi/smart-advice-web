function AboutUs() {
  return (
    <div className="relative h-150 w-full">
      <div className="absolute top-0 left-0 sm:left-0 lg:left-1/2 right-0 bottom-0 z-10 h-full w-full sm:w-full lg:w-1/2">
        <img
          src="./images/main.png"
          className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
        />
      </div>

      <div className="flex justify-center items-center w-full sm:w-full lg:w-1/2 z-20 px-5 sm:pl-20 absolute top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col justify-around items-start w-full h-140">
          <h1 className="text-violet-600 text-2xl">ABOUT</h1>

          <p className="font-bold text-4xl text-blue-950">
            Our Experts Are <br /> the Finest
          </p>

          <div>
            <p className="w-4/5 text-gray-900">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to
            </p>

            <br />

            <p className="w-4/5 text-gray-900">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
