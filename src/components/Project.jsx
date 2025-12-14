import React from "react";
import ImageCarousel from "./ImageCarousel";

const Project = () => {
  const carouselImages = [
    "/cafe.png",
    "/cafe2.png",
    "/cafe3.png",
    // "/cafe4.png",
  ];
  const turfCarouselImages = [
    "/turf1.png",
    "/turf2.png",
    "/turf3.png",
    "/turf4.png",
    "/turf5.png",
    "/turf6.png",
    "/turf7.png",
    // "/cafe4.png",
  ];
  return (
    <div className="w-3/4 h-[90vh] text-white  flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-5xl font-semibold mb-10">My Project</h1>
      <div className="grid grid-cols-2 gap-20">
        <div className="w-[30rem] h-[25rem] shadow bg-black/20 backdrop-blur-lg  rounded-lg">
          <div className="w-full h-[14rem] rounded-lg">
            <ImageCarousel
              images={carouselImages}
              autoSlide={true}
              slideInterval={2000}
            />
          </div>
          <div className="flex flex-col justify-center items-start py-2  px-2">
            <h1 className="text-lg font-medium pb-2">
              {" "}
              Coffee Shop WebApp – Shopping & Table Reservation
            </h1>
            <p className="text-gray-300 text-[0.8rem]">
              I developed a responsive Coffee Shop web application using
              Next.js, React, TypeScript, Tailwind CSS, and React Context. The
              app allows users to reserve tables. Users can also browse
              products, add items to a wishlist or cart, and place orders.
              Integrated QR-based payment ensures fast and secure transactions.
              {/* The platform is optimized for both desktop and mobile, providing a
              seamless and user-friendly experience. */}
            </p>
          </div>

          <button className="ml-2 px-4 mt-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-800 flex items-center gap-3 shadow-lg hover:scale-105 transition">
            <a
              href="https://cafe-dark.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-md font-semibold">Demo</span>
            </a>
          </button>
        </div>
        <div className="w-[30rem] h-[25rem] shadow bg-black/20 backdrop-blur-lg  rounded-lg">
          <div className="w-full h-[14rem] bg-white rounded-lg">
            <ImageCarousel
              images={turfCarouselImages}
              autoSlide={true}
              slideInterval={2000}
            />
          </div>
          <div className="flex flex-col justify-center items-start  py-2 px-2">
            <h1 className="text-lg font-medium pb-2"> Turf Booking Web app</h1>
            <p className="text-gray-300 text-[0.8rem]">
              Developed a fully responsive turf booking platform using Vite,
              Tailwind CSS, and TypeScript. Integrated a powerful booking engine
              for easy slot reservations and QR-based payment for secure,
              instant transactions. Optimized for smooth user experience across
              all devices
            </p>

            <button className=" px-4 mt-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-800 flex items-center gap-3 shadow-lg hover:scale-105 transition">
              <a
                href="http://turf-website.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-md font-semibold">Demo</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
