import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CratContext";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { wishlist, toggleWishlist, isWishlisted } = useWishlist();
  const { addToBag } = useCart();

  const navigate = useNavigate();
  const handleAddTobag = () => {
    addToBag(product);
    navigate("/bag");
  };

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  // Use product.images array from JSON if available, otherwise fallback to single image
  const productImages = product.images || [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Image Gallery */}
        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnail Images */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
            {productImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`min-w-20 w-20 h-20 lg:w-24 lg:h-24 border-2 rounded-md cursor-pointer transition-all ${
                  selectedImage === index
                    ? "border-pink-600"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="flex items-center justify-center">
              <img
                src={productImages[selectedImage]}
                alt={product.title}
                className="w-80 md:w-full object-cover rounded-xs shadow-lg "
              />
            </div>
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {/* Brand and Title */}
          <div className="space-y-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {product.brand}
            </h1>
            <h2 className="text-lg lg:text-xl text-gray-600">
              {product.title}
            </h2>
          </div>

          {/* Rating Section */}
          <div className="inline-flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md w-fit">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-gray-900">
                {product.rating}
              </span>
              <span>⭐</span>
            </div>
            <div className="h-5 w-px bg-gray-300"></div>
            <span className="text-sm text-gray-600">
              {product.reviews} Ratings
            </span>
          </div>

          <hr className="border-gray-300" />

          {/* Price Section */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
              <p className="text-xl lg:text-2xl font-bold text-gray-900">
                ₹{product.price}
              </p>
              <p className="text-base lg:text-lg text-gray-500">
                MRP{" "}
                <span className="line-through">₹{product.originalPrice}</span>
              </p>
              <p className="text-lg lg:text-xl font-semibold text-orange-500">
                ({product.discountPercentage}% OFF)
              </p>
            </div>
            <p className="text-sm font-medium text-green-600">
              Inclusive of all taxes
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <button
              onClick={handleAddTobag}
              className="flex-1 min-w-40 flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span>Add To Bag</span>
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`flex-1 min-w-40 flex items-center justify-center gap-2 px-6 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-50 font-medium rounded-md transition-all duration-200 cursor-pointer ${
                isWishlisted(product.id)
                  ? "bg-pink-600 text-white hover:text-black"
                  : "bg-white"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>
                {isWishlisted(product.id) ? "Remove Item" : "Wishlist"}
              </span>
            </button>
          </div>

          <hr className="border-gray-300" />

          {/* Delivery & Services */}
          <div className="space-y-3">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">
              Delivery Options
            </h3>

            <div className="space-y-3">
              {/* Delivery Time */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Get it by Wed, Oct 16
                  </p>
                  <p className="text-xs text-gray-600">
                    Standard delivery in 3-4 days
                  </p>
                </div>
              </div>

              {/* Free Delivery */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    FREE Delivery
                  </p>
                  <p className="text-xs text-gray-600">On orders above ₹999</p>
                </div>
              </div>

              {/* Pay on Delivery */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Pay on Delivery Available
                  </p>
                  <p className="text-xs text-gray-600">
                    Cash, UPI & Card accepted
                  </p>
                </div>
              </div>

              {/* Easy Returns */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Easy 14 Days Return & Exchange
                  </p>
                  <p className="text-xs text-gray-600">
                    Return window closes on Oct 30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3">
              Product Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="text-gray-600 w-28">Brand:</span>
                <span className="text-gray-900 font-medium">
                  {product.brand}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-28">Category:</span>
                <span className="text-gray-900 font-medium">Fashion</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-28">Material:</span>
                <span className="text-gray-900 font-medium">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
