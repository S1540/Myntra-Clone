import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiBars3 } from "react-icons/hi2";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CratContext";

const Header = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();

  const navlinks = [
    { name: "MEN", path: "/men" },
    { name: "WOMEN", path: "/women" },
    { name: "KIDS", path: "/kids" },
    { name: "HOME", path: "/home" },
    { name: "BEAUTY", path: "/beauty" },
    { name: "GENZ", path: "/genz" },
    { name: "STUDIO", path: "/studio" },
  ];

  // Login handler
  const handleLoginClick = () => {
    navigate("/login");
  };

  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <>
      <header className="bg-white shadow-md shadow-gray-200 fixed top-0 left-0 right-0 w-full z-50 px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <HiBars3
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="text-3xl text-gray-800 cursor-pointer md:hidden"
            />
            {/* Mobile Menu */}
            {isOpenMenu && (
              <>
                <div
                  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpenMenu ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  {/* Header inside drawer */}
                  <div className="flex items-center justify-between px-4 py-4 border-b">
                    <span className="text-lg font-semibold text-gray-800">
                      Menu
                    </span>
                    <button
                      onClick={() => setIsOpenMenu(false)}
                      className="text-gray-600 hover:text-pink-600 text-xl"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Nav links */}
                  <nav className="p-4">
                    <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-800">
                      {navlinks.map((link, index) => (
                        <li key={index}>
                          <NavLink
                            to={link.path}
                            onClick={() => setIsOpenMenu(false)}
                            className={({ isActive }) =>
                              isActive
                                ? "text-pink-600 border-b-2 border-pink-600 pb-1 transition-colors"
                                : "hover:text-pink-600 transition-colors"
                            }
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Extra bottom section (optional, like profile or logout links) */}
                  <div className="mt-auto border-t p-4 text-sm text-gray-700 flex flex-col gap-4 font-medium">
                    <p className="hover:text-pink-600 cursor-pointer">
                      Profile
                    </p>
                    <p className="hover:text-pink-600 cursor-pointer">Orders</p>
                    <p className="hover:text-pink-600 cursor-pointer">
                      Wishlist
                    </p>
                    <p className="hover:text-pink-600 cursor-pointer">
                      Contact Us
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Logo */}
            <div className="w-20 h-10 md:h-12 flex-shrink-0">
              <NavLink to="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-L2_hvNjcMysNA1DKWVpUAF5qtyn5wI_jYg&s"
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
              {/* Profile with Hover Dropdown */}
              <div
                className="relative flex flex-col items-center"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <FaRegUser className="text-xl text-gray-800 cursor-pointer" />
                <span className="text-xs hidden md:block">Profile</span>

                {/* Hover Dropdown */}
                {isProfileHovered && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg border border-t-0 border-gray-200 rounded-sm w-56 py-4 px-6">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">
                        Welcome
                      </h3>
                      <p className="text-xs text-gray-500">
                        To access account and manage orders
                      </p>
                    </div>

                    <button
                      onClick={handleLoginClick}
                      className="w-full py-2 px-4 border border-pink-500 text-pink-500 font-semibold text-sm hover:bg-pink-50 transition-colors rounded-sm mb-4 cursor-pointer"
                    >
                      LOGIN / SIGNUP
                    </button>

                    <div className="border-t border-gray-200 pt-3">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="hover:text-pink-600 cursor-pointer">
                          Orders
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Wishlist
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Gift Cards
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Contact Us
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Myntra Insider
                        </li>
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 mt-3 pt-3">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="hover:text-pink-600 cursor-pointer">
                          Myntra Credit
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Coupons
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Saved Cards
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Saved VPA
                        </li>
                        <li className="hover:text-pink-600 cursor-pointer">
                          Saved Addresses
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className=" relative flex flex-col items-center">
                <Link to={"/wishlist"}>
                  {" "}
                  {
                    <span className="absolute -top-2 md:right-1 -right-2 w-4 h-4 rounded-full bg-pink-600 text-white text-xs flex items-center justify-center">
                      {wishlist.length}{" "}
                    </span>
                  }
                  <FaRegHeart className="text-xl text-gray-800 cursor-pointer ml-2" />
                  <span className="text-xs hidden md:block">Wishlist</span>{" "}
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link to={"/bag"}>
                  {
                    <span className="absolute top-5 lg:top-3 right-2 lg:right-6 w-4 h-4 rounded-full bg-pink-600 text-white text-xs flex items-center justify-center">
                      {cart.length}{" "}
                    </span>
                  }

                  <HiOutlineShoppingBag className="text-xl text-gray-800 cursor-pointer" />
                </Link>
                <span className="text-xs hidden md:block">Bag</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-2 md:hidden pb-2">
          <input
            type="text"
            placeholder="Search for brands and products... "
            className="max-w-full w-full bg-white px-4 py-1 rounded-full outline-0 shadow-sm shadow-gray-300"
          />
        </div>
      </header>

      {/* Space below header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
