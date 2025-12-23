import React from "react";
import { skills } from "../skill";

const Skills = () => {
  return (
    <div className="w-3/4 max-sm:w-full md:h-[90vh] text-white flex flex-col items-center justify-center px-10 max-sm:px-6 sm:py-20 max-sm:pt-15 md:max-2xl:mt-[10rem] 2xl:mt-30">
      <h1 className="text-4xl max-md:text-3xl max-sm:text-xl font-semibold mb-2">
        My ToolKit
      </h1>
      <p className="text-xl text-center max-md:text-[1.1rem] max-md:mb-10 mb-20 max-sm:text-[0.8rem]">
        Technologies I work with daily to craft seamless and efficient user
        experiences.
      </p>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 max-sm:grid-cols-3 lg:grid-cols-4 lg:max-xl:grid-cols-6 xl:grid-cols-5 gap-13 max-sm:gap-5">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center w-40 sm:max-xl:w-25 sm:max-xl:h-25 h-40 max-sm:h-20 max-sm:w-20
              bg-black/30 backdrop-blur-lg rounded-xl 
              hover:scale-105 transition duration-300"
            >
              <Icon size={40} className="text-white" />
              <p className="mt-2 text-sm text-white max-sm:text-[0.7rem]">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
