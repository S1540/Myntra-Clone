import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navlinks = [
    { name: "MEN", path: "/men" },
    { name: "WOMEN", path: "/women" },
    { name: "KIDS", path: "/kids" },
    { name: "HOME", path: "/home" },
    { name: "BEAUTY", path: "/beauty" },
    { name: "GENZ", path: "/genz" },
    { name: "STUDIO", path: "/studio" },
  ];

  return (
    <>
      <header className="bg-white shadow-md shadow-gray-200 fixed top-0 left-0 right-0 w-full z-50 px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <HiBars3 className="text-3xl text-gray-800 cursor-pointer md:hidden" />

            {/* Logo */}
            <div className="w-20 h-10 md:h-12 flex-shrink-0">
              <NavLink to="/">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
                  alt="Myntra Logo"
                  className="w-full h-full object-cover"
                />
              </NavLink>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-7 text-sm font-semibold text-gray-800">
            {navlinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-600 border-b-2 border-pink-600 transition-colors"
                    : "hover:text-pink-600 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block relative max-w-md w-full mx-4">
            <IoSearchOutline className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full py-2 pl-10 pr-3 text-sm bg-[#F5F5F6] focus:border focus:border-gray-200 focus:bg-transparent outline-0 rounded-sm text-gray-500"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-6 font-medium">
              <div className="flex flex-col items-center">
                <FaRegUser className="text-xl text-gray-800 cursor-pointer" />
                <span className="text-xs hidden md:block">Profile</span>
              </div>
              <div className="flex flex-col items-center">
                <FaRegHeart className="text-xl text-gray-800 cursor-pointer" />
                <span className="text-xs hidden md:block">Wishlist</span>
              </div>
              <div className="flex flex-col items-center">
                <HiOutlineShoppingBag className="text-xl text-gray-800 cursor-pointer" />
                <span className="text-xs hidden md:block">Bag</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Space below header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
