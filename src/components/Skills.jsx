import React from "react";
import { skills } from "../skill";

const Skills = () => {
  return (
    <div className="w-3/4 h-[90vh] text-white  flex flex-col items-center justify-center px-10 py-10 mt-20">
      <h1 className="text-4xl font-semibold mb-2">My ToolKit</h1>
      <p className="text-xl mb-20">
        Technologies I work with daily to craft seamless and efficient user
        experiences.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4  xl:grid-cols-5 gap-13 ">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center w-40 h-40 
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
