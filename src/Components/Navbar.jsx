import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled, MdWatch, MdArticle } from 'react-icons/md';
import { FaTshirt } from 'react-icons/fa';
import { GiDress } from 'react-icons/gi';

const Navbar = ({ ContainerStyles }) => {
  return (
    <nav
      className={`flex items-center justify-center gap-6 py-4 px-6 shadow-md rounded-b-lg ${ContainerStyles}`}
    >
      {/* Home Link */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `group relative flex items-center gap-2 px-4 py-2 text-lg font-medium transition-all duration-300 ${
            isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
          }`
        }
      >
        <MdHomeFilled className="text-xl transition-transform group-hover:scale-110" />
        <span>Home</span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-amber-600 w-0 group-hover:w-full transition-all duration-300 nav-underline" />
      </NavLink>

      {/* Men Link */}
      <NavLink
        to="/men"
        className={({ isActive }) =>
          `group relative flex items-center gap-2 px-4 py-2 text-lg font-medium transition-all duration-300 ${
            isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
          }`
        }
      >
        <FaTshirt className="text-xl transition-transform group-hover:scale-110" />
        <span>Men</span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-amber-600 w-0 group-hover:w-full transition-all duration-300 nav-underline" />
      </NavLink>

      {/* Women Link */}
      <NavLink
        to="/women"
        className={({ isActive }) =>
          `group relative flex items-center gap-2 px-4 py-2 text-lg font-medium transition-all duration-300 ${
            isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
          }`
        }
      >
        <GiDress className="text-xl transition-transform group-hover:scale-110" />
        <span>Women</span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-amber-600 w-0 group-hover:w-full transition-all duration-300 nav-underline" />
      </NavLink>

      {/* Accessories Link */}
      <NavLink
        to="/accessories"
        className={({ isActive }) =>
          `group relative flex items-center gap-2 px-4 py-2 text-lg font-medium transition-all duration-300 ${
            isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
          }`
        }
      >
        <MdWatch className="text-xl transition-transform group-hover:scale-110" />
        <span>Accessories</span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-amber-600 w-0 group-hover:w-full transition-all duration-300 nav-underline" />
      </NavLink>

      {/* Blog Link */}
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `group relative flex items-center gap-2 px-4 py-2 text-lg font-medium transition-all duration-300 ${
            isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
          }`
        }
      >
        <MdArticle className="text-xl transition-transform group-hover:scale-110" />
        <span>Blog</span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-amber-600 w-0 group-hover:w-full transition-all duration-300 nav-underline" />
      </NavLink>
    </nav>
  );
};

export default Navbar;