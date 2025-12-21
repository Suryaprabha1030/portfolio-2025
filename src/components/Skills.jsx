import React from "react";
import { skills } from "../skill";

const Skills = () => {
  return (
    <div className="w-3/4 md:h-[90vh] text-white flex flex-col items-center justify-center px-10 py-20 md:max-2xl:mt-[10rem]">
      <h1 className="text-4xl max-md:text-3xl font-semibold mb-2">
        My ToolKit
      </h1>
      <p className="text-xl text-center max-md:text-[1.1rem] max-md:mb-10 mb-20">
        Technologies I work with daily to craft seamless and efficient user
        experiences.
      </p>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:max-xl:grid-cols-6 xl:grid-cols-5 gap-13 ">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center w-40 sm:max-xl:w-25 sm:max-xl:h-25 h-40 
              bg-black/30 backdrop-blur-lg rounded-xl 
              hover:scale-105 transition duration-300"
            >
              <Icon size={40} className="text-white" />
              <p className="mt-2 text-sm text-white">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
