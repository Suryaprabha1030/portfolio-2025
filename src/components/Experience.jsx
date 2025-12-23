import React from "react";

const Experience = () => {
  return (
    <div className="w-full sm:min-h-screen  flex flex-col max-sm:gap-5 items-center sm:py-20 max-sm:pt-15 px-4 max-sm:px-6">
      <h1 className="text-white text-5xl max-sm:text-xl font-semibold sm:mb-20">
        My Journey
      </h1>

      <div className="relative w-full h-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full  max-sm:hidden w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2">
          <div
            className="absolute left-0 w-full h-[68%]
      bg-gradient-to-b from-white/40 to-transparent  max-sm:hidden
      animate-[lineFlow_5s_linear_infinite]"
          ></div>

          {/* Glow ball */}
          {/* <div
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 
      bg-white/80 rounded-full blur-md
      animate-[glowBall_2.5s_linear_infinite]"
          ></div> */}
        </div>

        {/* --- 1: Experience Card (Left) --- */}
        <div className="relative flex items-center sm:mb-28 max-sm:mb-8">
          {/* Line Adjust for dot */}
          {/* <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-blue-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]"></div>
          </div> */}

          <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7  max-sm:hidden rounded-full bg-black border-2 border-blue-400 flex items-center justify-center relative overflow-visible">
            {/* Inner glowing ball */}
            <div
              className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]  max-sm:hidden
       animate-pulse"
            ></div>

            {/* Outer expanding glow ring */}
            <div
              className="absolute inset-0 w-full h-full rounded-full border border-blue-400/60 
       animate-[ringSweep_2s_ease-out_infinite]  max-sm:hidden"
            ></div>
          </div>

          <div className="w-1/2 sm:pr-17 max-sm:w-full">
            <div className="bg-black/20 backdrop-blur-lg  p-6 rounded-xl">
              <p className="text-[#5ea0ff] text-sm font-medium mb-2">
                2024 APR - 2025 APR
              </p>
              <h2 className="text-white text-xl max-sm:text-lg font-semibold mb-2">
                Frontend Developer
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                {/* Leading the development of scalable UI, mentoring junior
                developers, and driving adoption of modern frontend practices. */}
                Started by developing responsive layouts and implementing
                visually appealing designs, laying the foundation for seamless
                user experiences.
              </p>

              <div className="flex flex-wrap max-md:flex- text-center md:max-md:gap-5  gap-2">
                <span className="px-3 max-md:px-2 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  React
                </span>
                <span className="px-3  max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  TypeScript
                </span>
                <span className="px-3 max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Next.js
                </span>
                <span className="px-3 max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Tailwind
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Redux
                </span>
              </div>
            </div>
          </div>

          <div className="w-1/2  max-sm:hidden"></div>
        </div>

        {/* --- 2: Education Card (Right) --- */}
        <div className="relative flex items-center sm:mb-28">
          {/* Timeline Dot */}
          {/* <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0e0f25] border-2 border-purple-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_purple]"></div>
          </div> */}

          <div className="absolute left-1/2  max-sm:hidden -translate-x-1/2 w-7 h-7 rounded-full bg-black border-2 border-blue-400 flex items-center justify-center relative overflow-visible">
            {/* Inner glowing ball */}
            <div
              className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]  max-sm:hidden
       animate-pulse"
            ></div>

            {/* Outer expanding glow ring */}
            <div
              className="absolute inset-0 w-full h-full rounded-full border border-blue-400/60 
       animate-[ringSweep_2s_ease-out_infinite]  max-sm:hidden"
            ></div>
          </div>

          <div className="w-1/2  max-sm:hidden"></div>

          <div className="w-1/2 sm:pl-10 max-sm:w-full md:max-lg:mr-5">
            <div className="bg-black/20 backdrop-blur-lg  p-6 rounded-xl">
              <p className="text-purple-300 text-sm font-medium mb-2">
                2025 APR - Present
              </p>
              <h2 className="text-white text-xl font-semibold mb-2 max-sm:text-lg">
                Senior Frontend Developer
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                Leading the development of scalable UI, mentoring junior
                developers, and driving adoption of modern frontend practices.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3  max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  React
                </span>
                <span className="px-3 max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  TypeScript
                </span>
                <span className="px-3 max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Next.js
                </span>
                <span className="px-3 max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Tailwind
                </span>
                <span className="px-3 max-md:px-2  py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Redux
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
