import React from "react";
import ThreeDText from "./3dText";

const Intro = () => {
  return (
    <section className="w-full md:h-[100vh] text-white  flex flex-col items-center justify-center px-6 py-20">
      {/* Introducing Path AI */}
      <p className=" text-5xl max-lg:text-4xl max-md:text-3xl font-semibold max-md:mb-2 mb-4">
        surya chandrasekar
      </p>
      <p className=" text-5xl  max-lg:text-4xl max-md:text-3xl font-semibold mb-4 max-md:mb-2 ">
        Frontend developer & UI enthuasist
      </p>

      {/* Big Heading */}
      <h1 className="text-lg max-md:text-sm text-center leading-tight mt-4 max-md:mt-2 ">
        Crafting Interactive & High-Performance
        {/* <br /> */}
        Frontend Experiences
        {/* That Sells For You. */}
      </h1>

      {/* Subtext */}
      <p className=" text-center max-w-2xl text-lg max-md:text-sm">
        I design and build modern web experiences with precision and performance
        in mind.
      </p>

      {/* Email Input + Join Button */}

      {/* Talk to Path AI button */}
      <a href="/Suryaprabha CV 2025.pdf" download>
        <button className="mt-10 px-6 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-800 flex items-center gap-3 shadow-lg hover:scale-105 transition">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
            ⭳
          </div>

          <span className="text-lg font-semibold">Download My Resume</span>
        </button>
      </a>
    </section>
  );
};

export default Intro;
