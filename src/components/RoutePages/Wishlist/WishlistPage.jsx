import React from "react";
import { useWishlist } from "../../../context/WishlistContext";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

function WishlistPage() {
  const { wishlist } = useWishlist();

  if (!wishlist.length)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          {/* Empty bag illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shopping bag */}
                <path
                  d="M135 60H45L37.5 150H142.5L135 60Z"
                  fill="#F5F5F6"
                  stroke="#E0E0E0"
                  strokeWidth="2"
                />
                <path
                  d="M60 60V52.5C60 39.2 70.2 28.5 82.5 28.5H97.5C109.8 28.5 120 39.2 120 52.5V60"
                  stroke="#E0E0E0"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Sad face on bag */}
                <circle cx="75" cy="90" r="3" fill="#BDBDBD" />
                <circle cx="105" cy="90" r="3" fill="#BDBDBD" />
                <path
                  d="M75 110C75 110 82.5 105 90 105C97.5 105 105 110 105 110"
                  stroke="#BDBDBD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Text content */}
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            No Items Found
          </h1>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            We couldn't find any items matching your search. Try adjusting your
            filters or search terms.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link to={"/"}>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded transition-colors duration-200 cursor-pointer">
                CONTINUE SHOPPING
              </button>
            </Link>

            <Link to={"/"}>
              <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded transition-colors duration-200 cursor-pointer">
                CLEAR FILTERS
              </button>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 text-left">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              You may also like
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Dresses", "Shirts", "Shoes", "Accessories", "Jeans"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer transition-colors duration-200"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="pt-4">
        <Link to={"/"}>Home</Link>
        {"/ "}
        <Link to={"/men"}>Men</Link>
        {"/ "}
        <Link to={"/login"}>Login</Link>
      </div>
      <div className="flex flex-wrap gap-4 p-4 mt-5">
        {wishlist.length === 0 ? (
          <p className="text-center w-full text-gray-500">
            No items in your wishlist
          </p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 w-48 md:w-56 bg-white relative overflow-hidden"
            >
              {/* Cross Delete Button */}
              <div className="absolute top-2 right-2 z-10 cursor-pointer bg-white/80 hover:bg-red-500 hover:text-white text-gray-700 rounded-full px-1 py-0.5 transition-all duration-300 shadow w-7 h-7 place-items-center">
                <p className="text-xl leading-none">✕</p>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 md:h-56 object-cover rounded-t-lg"
                />
                {item.discount && (
                  <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.discount}
                  </span>
                )}
              </div>

              {/* Details Section */}
              <div className="p-3 py-4 space-y-3">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-black font-bold text-sm">₹{item.price}</p>
                  {item.rating > 0 && (
                    <div className="flex items-center space-x-1 text-xs text-green-600 font-semibold">
                      <span>{item.rating}</span>
                      <span>⭐</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default WishlistPage;
