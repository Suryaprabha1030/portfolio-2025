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

export default function Navbar() {
  const [active, setActive] = useState("about");

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="w-full backdrop-blur-sm bg-black/30 font-semibold flex flex-row justify-between items-center shadow rounded px-10 py-3">
      <h1 className="text-2xl">surya chandrasekar</h1>

      <ul className="flex flex-row gap-5 text-md">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={
                active === item.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-800  bg-clip-text text-transparent"
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
