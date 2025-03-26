import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://kisah.in/cdn/shop/files/Dulhe_ki_toli_mobile-min.jpg?v=1738161195",
  "https://kisah.in/cdn/shop/files/wedding_font_page_4-min.jpg?v=1738161762 ",
  "https://manyavar.scene7.com/is/image/manyavar/Manyavar%20homepage%20hero%20banner%20Without%20Copy%20Opt%202_2500x1042px?$WT_HP%2FMLP%2FWLP_Hero_D$",
  "https://manyavar.scene7.com/is/image/manyavar/Home_Page_Im_Celebrating_Festivals_D_09-12-2024-12-10?$WT_HP%2FMLP%2FWLP_Hero_D$",
];

const buttons = ["Explore Collection", "Shop Now", "Limited Edition", "Discover More"];

const vibes = [
  {
    id: 1,
    title: "Look Stylish",
    img: "https://manyavar.scene7.com/is/image/manyavar/HP_Manyavar_Whats_your_vibe_IndoWestern_D_09-12-2024-12-13?$WT_HP_Vibe%2FTrending_D$",
    link: "/men", // Redirects to men's page
  },
  {
    id: 2,
    title: "Look Elegant",
    img: "https://manyavar.scene7.com/is/image/manyavar/2109x2500_01-07-2024-10-48?$WT%5FHP%5FVibe%2FTrending%5FD$",
    link: "/men", // Redirects to men's page
  },
  {
    id: 3,
    title: "Look Fabulous",
    img: "https://manyavar.scene7.com/is/image/manyavar/HP_Mohey_Whats_your_vibe_D_09-12-2024-12-13?$WT_HP_Vibe%2FTrending_D$",
    link: "/women", // Redirects to men's page
  },
  {
    id: 4,
    title: "Formal",
    img: "https://i.pinimg.com/originals/27/6c/45/276c4543c046368f184756ad0d655bfa.jpg",
    link: "/men", // Redirects to men's page
  },
  {
    id: 5,
    title: "Athleisure",
    img: "https://manyavar.scene7.com/is/image/manyavar/Mohey_HP_Explore_Category_Saree_D_12-12-2024-09-20?$WT_WLP%2FCategory2_D$",
    link: "/men", // Redirects to men's page
  },
];

const ImageSlider = () => {
  const sliderRef = React.useRef(null);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
    swipe: true,
  };

  const vibeSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* Hero Image Slider */}
      <div className="relative w-full mt-30 -mb-8 h-[90vh] overflow-hidden">
        <Slider ref={sliderRef} {...mainSliderSettings}>
          {images.map((img, index) => (
            <div key={index} className="relative h-[80vh] flex items-center justify-center ">
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-800 transition">
                {buttons[index]}
              </button>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="items-center justify-center flex">
        <img
          src="https://img.freepik.com/premium-photo/festival-ornamental-design_758367-184487.jpg"
          alt=""
          height={80}
          width={90}
          className="mix-blend-multiply opacity-80"
        />
      </div>
      {/* What's Your Vibe Slider */}
      <div className="w- mx-auto py-5 px-4 overflow-hidden mb-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          What's Your Aura?
        </h2>
        <Slider {...vibeSliderSettings}>
          {vibes.map((vibe) => (
            <div key={vibe.id} className="px-6">
              <div className="p-6 shadow-2xl transform transition-all hover:scale-105 duration-300">
                <Link to={vibe.link}>
                  <img
                    src={vibe.img}
                    alt={vibe.title}
                    className="w-[100vw] h-[55vh] object-cover rounded-2xl"
                  />
                </Link>
                <h3 className="text-2xl font-bold text-center mt-6 text-gray-800 tracking-wide">
                  {vibe.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;