import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample video URLs
const videos = [
  "https://cdn.pixabay.com/video/2024/03/20/204803-925552205_large.mp4",
  "https://cdn.pixabay.com/video/2022/10/23/136133-764371501_tiny.mp4",
  "https://media.istockphoto.com/id/2158124249/video/joyful-friends-carrying-the-groom-on-their-shoulders-and-dancing-for-the-wedding-ceremony.mp4?s=mp4-640x640-is&k=20&c=KsXJWiJVSjJ1LBLololdDVydNfdgx7QZILwmDrkmDdA=",
  "https://media.istockphoto.com/id/2158110251/video/bride-entering-the-wedding-venue-beneath-the-phoolon-ki-chadar-along-with-the-family-members.mp4?s=mp4-640x640-is&k=20&c=oNgoZhOZxndIU2cKDyYNfocCoxu1o1oxsQO71n8I70E=",
  "https://media.istockphoto.com/id/2155741414/video/cherished-moments-of-bride-and-groom-dancing-joyfully-with-family-and-friends-during-the.mp4?s=mp4-640x640-is&k=20&c=Tvghvwt2RxZIB_N9w04vzJB5m4MfXxbLlsUiqYYDTB8=",
];

// Custom Arrow Component
const CustomArrow = ({ onClick, direction }) => (
  <button
    className={`absolute top-1/2 transform -translate-y-1/2 
      ${direction === "prev" ? "-left-12" : "-right-12"} 
      bg-white/20 backdrop-blur-md text-white p-4 rounded-full shadow-xl transition-all 
      hover:bg-white/30 hover:scale-110 focus:outline-none z-10 opacity-0 group-hover:opacity-100`}
    onClick={onClick}
  >
    {direction === "prev" ? <FaChevronLeft size={22} /> : <FaChevronRight size={22} />}
  </button>
);

const TrendingLooksSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto my-12 px-6">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-10 uppercase tracking-widest">
        Trending Looks To Watch
      </h2>
      <div className="relative group">
        <Slider {...settings} className="relative">
          {videos.map((video, index) => (
            <div key={index} className="px-3">
              <div
                className="relative flex justify-center transition-transform duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Video Wrapper with Overlay */}
                <div
                  className={`relative rounded-xl overflow-hidden shadow-2xl border-[3px] border-transparent transition-all 
                  ${
                    hoveredIndex === index
                      ? "border-blue-500/50 scale-105"
                      : "scale-95"
                  }`}
                >
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    className="w-[300px] h-[450px] object-cover rounded-xl transition-all duration-300"
                  />
                  {/* Gradient Overlay (Only on Hovered Video) */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-100 transition duration-500"></div>
                  )}
                  {/* Play Button (Only on Hovered Video) */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center transition duration-500">
                      <div className="p-5 bg-white/80 rounded-full shadow-md animate-pulse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-12 h-12 text-gray-900"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 3.75a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.125.66L12 15.786l-7.125 5.124A.75.75 0 0 1 4.5 20.25V3.75z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingLooksSlider;
