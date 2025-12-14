// components/ImageCarousel.tsx
import { useState, useEffect } from "react";

const ImageCarousel = ({ images, autoSlide = true, slideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[14rem] object-fit transition duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicators */}
      {/* <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageCarousel;

// components/ImageCarousel.jsx
// import { useState, useEffect } from "react";

// const ImageCarousel = ({ images, autoSlide = true, slideInterval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     setPrevIndex(currentIndex);
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     setIsAnimating(true);
//   };

//   const prevSlide = () => {
//     setPrevIndex(currentIndex);
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     setIsAnimating(true);
//   };

//   useEffect(() => {
//     if (!autoSlide) return;
//     const interval = setInterval(nextSlide, slideInterval);
//     return () => clearInterval(interval);
//   }, [currentIndex, autoSlide, slideInterval]);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg h-64">
//       {images.map((img, idx) => {
//         let className =
//           "absolute top-0 left-0 w-full h-[15rem] object-fit transition-all duration-700";

//         if (idx === currentIndex) {
//           className += " translate-x-0 opacity-100 z-20";
//         } else if (idx === prevIndex) {
//           className += " -translate-x-full opacity-0 z-10";
//         } else {
//           className += " translate-x-full opacity-0 z-0";
//         }

//         return (
//           <img
//             key={idx}
//             src={img}
//             alt={`Slide ${idx + 1}`}
//             className={className}
//           />
//         );
//       })}

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
//       >
//         &#10095;
//       </button>

//       {/* Indicators */}
//       {/* <div className="flex justify-center mt-2 space-x-2">
//         {images.map((_, idx) => (
//           <span
//             key={idx}
//             className={`h-2 w-2 rounded-full cursor-pointer ${
//               idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
//             }`}
//             onClick={() => {
//               setPrevIndex(currentIndex);
//               setCurrentIndex(idx);
//             }}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default ImageCarousel;
