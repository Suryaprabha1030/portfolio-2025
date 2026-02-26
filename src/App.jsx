import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <div className="bg-linear-r from-bg-blue-800 to-bg-violet-500 text-white">
    // <div
    //   class="flex flex-col
    //   justify-center items-center py-5"
    // >

    //     <div
    //       className="relative w-full  h-screen bg-gradient-to-r from-[#333399]/70 to-[#ff00cc]/70
    // backdrop-blur-2xl shadow-xl"
    //     >
    //       {/* Blend Layer */}

    //       {/* <div class="hero-glow absolute top-0 left-0"> </div> */}
    //       <div className="relative z-10 w-full h-full flex flex-col items-center">
    //         {/* COMMON NAVBAR — sticks for all pages/sections */}
    //         <Navbar />

    //         {/* Intro Section */}
    //         <section id="about" className="w-full flex flex-col items-center mt-6">
    //           <Intro />
    //         </section>

    //         {/* Skills Section */}
    //         <section
    //           id="skills"
    //           className="w-full flex flex-col items-center mt-10"
    //         >
    //           <Skills />
    //         </section>
    //       </div>
    //     </div>

    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
    from-[#333399]/70 
    to-[#ff00cc]/70"
      ></div>

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <div className="fixed top-0 w-3/4 max-sm:w-full z-1000">
          <Navbar />
        </div>

        <section
          id="about"
          className="w-full flex flex-col items-center mt-6 max-sm:px-[2rem]"
        >
          <Intro />
        </section>

        <section
          id="skills"
          className="w-full flex flex-col items-center xl:mt-[rem] max-sm:px-[2rem]"
        >
          <Skills />
        </section>
        <section id="project" className="w-full flex flex-col items-center ">
          <Project />
        </section>
        <section
          id="experience"
          className="w-full flex flex-col items-center  max-sm:px-[2rem]"
        >
          <Experience />
        </section>
        <section
          id="contact"
          className="w-full flex flex-col items-center max-sm:px-[2rem] "
        >
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
