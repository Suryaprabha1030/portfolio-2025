// import { Icon } from "@iconify/react";
// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const pathname = location.pathname;

//   return (
//     <div className="w-full backdrop-blur-sm bg-black/30 font-semibold  flex flex-row justify-between items-center shadow rounded  px-10 py-3">
//       <h1 className="text-2xl">surya chandrasekar</h1>

//       <ul className="flex flex-row gap-5 text-md">
//         <li>
//           <a
//             href="#about"
//             className={
//               pathname == "/#about"
//                 ? "bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-transparent"
//                 : "text-white"
//             }
//           >
//             About
//           </a>
//         </li>
//         <li>Skills</li>
//         <li>Experience</li>
//         <li>Project</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// // black
// // circle placing absolute
// // white opacity blur

// // mouse hr circle color choosing

// // bg-black or dark coor gredient
// // blend GradientTexture
// // white opacity

// // mouuseenter listner

"use client";

import { useState } from "react";
import menuIcon from "./menu.svg";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [navOpen, setNavOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="w-full backdrop-blur-sm bg-black/30 font-semibold flex flex-row justify-between items-center shadow lg:rounded-b-xl px-10 py-3">
      <h1 className="text-2xl">Surya chandrasekar</h1>
      <img
        src={menuIcon}
        className="w-5 h-5 xl:hidden"
        onClick={() => setNavOpen(!navOpen)}
      />
      <ul
        className={`lg:flex md:flex-row flex-col md:max-lg:justify-center md:max-lg:gap-7  md:max-lg:items-center
    max-lg:absolute max-lg:top-14 max-lg:py-10 max-lg:text-lg max-lg:right-0 max-lg:rounded-b-lg
    max-lg:px-10 max-lg:bg-gradient-to-r
    from-[#333399] to-[#ff00cc]
    z-10 max-lg:w-full gap-5 text-md
    ${navOpen ? "flex" : "hidden"} lg:flex
  `}
      >
        {/* <ul
        className={`flex lg:flex-row flex-col max-lg:absolute max-lg:top-14 max-lg:right-0 max-lg:px-10 max-lg:bg-gradient-to-r 
    from-[#333399] 
    to-[#ff00cc] z-10 max-lg:w-full gap-5 text-md ${
      navOpen ? "max-lg:block" : "max-lg:hidden lg:block"
    }`}
      > */}
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={
                active === item.id
                  ? "lg:bg-gradient-to-r from-blue-500 to-blue-800  bg-clip-text text-transparent max-lg:bg-black"
                  : "text-white"
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
