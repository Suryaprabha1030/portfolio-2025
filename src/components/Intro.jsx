import React from "react";
import ThreeDText from "./3dText";

const Intro = () => {
  return (
    <section className="w-full md:h-[100vh]  text-white  flex flex-col items-center justify-center max-sm:px-3 px-6 sm:py-20 max-sm:pt-15">
      {/* Introducing Path AI */}
      <p className=" text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-semibold max-md:mb-2 mb-4 max-sm:mb-0">
        Surya Chandrasekar
      </p>
      <p className=" text-5xl  max-lg:text-4xl max-md:text-3xl font-semibold mb-4  max-sm:text-xl max-md:mb-4 max-sm:mb-1">
        Frontend developer & UI enthuasist
      </p>

      {/* Big Heading */}
      <h1 className="text-lg max-md:text-sm text-center leading-tight mt-4  max-sm:text-[0.8rem] max-md:mt-2 ">
        Crafting Interactive & High-Performancen Frontend Experiences
        {/* That Sells For You. */}
      </h1>

      {/* Subtext */}
      <p className=" text-center max-w-2xl  text-lg max-md:text-sm max-sm:text-[0.8rem]">
        I design and build modern web experiences with precision and performance
        in mind.
      </p>

      {/* Email Input + Join Button */}

      {/* Talk to Path AI button */}
      <a href="/suryaprabha.pdf" download>
        <button className="mt-10 px-6 py-4 rounded-full max-sm:py-2 cursor-pointer  bg-gradient-to-r from-purple-500 to-blue-800 flex items-center gap-3 shadow-lg hover:scale-105 transition">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce max-sm:hidden">
            ⭳
          </div>

          <span className="text-lg font-semibold max-sm:text-[0.8rem]">
            Download My Resume
          </span>
        </button>
      </a>
    </section>
  );
};

export default Intro;
