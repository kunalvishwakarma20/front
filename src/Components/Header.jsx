import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart, FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import logo from "../assets/Screenshot_2025-01-31_005833-removebg-preview.png";
import user from "../assets/user.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopContext } from "../context/shopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const suggestions = [
    "Kurta", "Lehenga", "Sherwani", "Saree", "Anarkali Suit",
    "Churidar", "Patiala Suit", "Bandhgala", "Nehru Jacket", "Jodhpuri Suit"
  ];

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    navigate(`/category/${suggestion.toLowerCase()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        setSearchQuery(filteredSuggestions[selectedIndex]);
        setShowSuggestions(false);
        navigate(`/category/${filteredSuggestions[selectedIndex].toLowerCase()}`);
        setSelectedIndex(-1);
      } else if (searchQuery) {
        navigate(`/search/${searchQuery.toLowerCase()}`);
      }
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery) {
      navigate(`/search/${searchQuery.toLowerCase()}`);
    }
  };

  const textSlides = [
    "Exclusive discounts for first-time shoppers. Sign up and save!",
    "Shop the latest arrivals in Fashion and Accessories, now with great deals!",
    "Fast and secure checkout with multiple payment options.",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <header className="fixed top-0  w-full shadow-md ring-slate-900/5 z-20 bg-white ">
      {/* Flashbar Text Slider */}
      <div className="bg-[#511D00] text-white text-center py-2 text-xs md:text-sm">
        <Slider {...sliderSettings}>
          {textSlides.map((text, index) => (
            <div key={index} className="text-center px-2">
              <p>{text}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Navbar Section */}
      <div className="flex justify-between items-center max-w-[1900px] min-w-[300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-auto max-w-[150px] sm:max-w-[120px] md:max-w-[130px] lg:max-w-[140px] xl:max-w-[160px] object-contain pr-4"
            />
          </Link>
        </div>

        {/* Navigation + Search */}
        <div className="hidden md:flex justify-center items-center gap-x-4 md:gap-x-6  pr-2">
          <Navbar ContainerStyles="flex gap-x-1 sm:gap-x-2 md:gap-x-3  " />

          {/* Search Bar with Auto-Suggest */}
          <div className="relative w-40 md:w-52 lg:w-64 xl:w-72">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="w-full border rounded-full shadow-sm px-3 py-2 outline-none text-sm"
            />
            <button
              onClick={handleSearchSubmit}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white px-3 py-1 rounded-full"
            >
              <FaSearch />
            </button>

            {/* Auto-Suggest Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border shadow-md mt-1 rounded-lg z-10">
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 text-sm cursor-pointer ${
                      selectedIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Cart & Login */}
        <div className="flex items-center ">
          <NavLink to="/cart-page" className="relative flex items-center text-gray-900">
            <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full hover:ring-amber-600" />
            <span className="relative -top-3 right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-amber-900 rounded-full">
              {getTotalCartItems()}
            </span>
          </NavLink>

          <NavLink
            to="/login"
            className="flex items-center justify-center gap- bg-blue-500 text-white  py-2 rounded-md shadow-md transition-all duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 px-4"
          >
            <img src={user} className="h-5 w-5 md:h-6 md:w-6" alt="Login" />
            <span className="font-medium text-sm md:text-base">Login</span>
          </NavLink>


          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpened ? <MdClose className="text-red-600 h-7 w-7" /> : <MdMenu className="text-gray-900 h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 mt-2 relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full border rounded-full shadow-sm px-3 py-2 outline-none text-sm"
        />
        <button
          onClick={handleSearchSubmit}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white px-3 py-1 rounded-full"
        >
          <FaSearch />
        </button>

        {/* Auto-Suggest Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border shadow-md mt-1 rounded-lg z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  selectedIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpened && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute h-[90vh] right-0 w-full sm:w-64 p-4 sm:p-6 bg-white shadow-md rounded-lg ring-1 ring-slate-900/5 z-50 -mt-10"
        >
          <Navbar ContainerStyles="flex flex-col gap-4 items-start" />
        </motion.div>
      )}
    </header>
  );
};

export default Header;