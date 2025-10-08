import React, { useState } from "react";
import { Search, X, Star } from "lucide-react";

function KidPage() {
  const [priceRange, setPriceRange] = useState([100, 901]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const brands = [
    { name: "Roadster", count: 653 },
    { name: "Killer", count: 525 },
    { name: "Mast & Harbour", count: 424 },
    { name: "Provogue", count: 339 },
    { name: "BIBA", count: 298 },
    { name: "ASIAN", count: 251 },
    { name: "DRACKFOOT", count: 250 },
    { name: "HERE&NOW", count: 226 },
  ];

  const colors = [
    { name: "Black", count: 2731, hex: "#000000" },
    { name: "White", count: 1585, hex: "#FFFFFF" },
    { name: "Brown", count: 1266, hex: "#8B4513" },
    { name: "Grey", count: 1198, hex: "#808080" },
  ];

  const products = [
    {
      id: 1,
      brand: "JQR",
      name: "Men Lightweight Sneakers",
      price: 883,
      originalPrice: 1699,
      discount: "48% OFF",
      rating: 4.4,
      reviews: "1k",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      brand: "JQR",
      name: "Men SIGNATURE Color Blocked Sneaker",
      price: 883,
      originalPrice: 1699,
      discount: "48% OFF",
      rating: 0,
      reviews: 0,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      brand: "ASIAN",
      name: "Men Colourblocked Sneakers",
      price: 749,
      originalPrice: 1499,
      discount: "50% OFF",
      rating: 3.9,
      reviews: "3.9k",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      brand: "ASIAN",
      name: "Men Colourblocked Sneakers",
      price: 509,
      originalPrice: 1499,
      discount: "66% OFF",
      rating: 4.2,
      reviews: "1.5k",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      brand: "JQR",
      name: "Men Memory Foam Sneakers",
      price: 883,
      originalPrice: 1699,
      discount: "48% OFF",
      rating: 3.9,
      reviews: "64",
      image:
        "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      brand: "ASIAN",
      name: "Men Running Shoes",
      price: 749,
      originalPrice: 1499,
      discount: "50% OFF",
      rating: 4.1,
      reviews: "2.3k",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    },
  ];

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Filter Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-14 z-10">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-bold">FILTERS</span>
              <button className="text-sm text-pink-500 font-semibold">
                CLEAR ALL
              </button>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs flex items-center">
                  Rs. 10 To Rs. 901
                  <X className="w-3 h-3 ml-2" />
                </span>
              </div>
            </div>
            <div className="text-sm">
              Sort by: <span className="font-semibold">Recommended</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Sticky */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-6 pb-8">
              {/* Brand Filter */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm">BRAND</h3>
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand.name}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => toggleBrand(brand.name)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        {brand.name}{" "}
                        <span className="text-gray-400">({brand.count})</span>
                      </span>
                    </label>
                  ))}
                  <button className="text-sm text-pink-500 font-semibold mt-2">
                    + 272 more
                  </button>
                </div>
              </div>

              {/* Price Filter */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-sm mb-4">PRICE</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="100"
                    max="901"
                    color="#EB008B"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="text-xs text-gray-600">
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                  </div>
                </div>
              </div>

              {/* Color Filter */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm">COLOR</h3>
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <label
                      key={color.name}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color.name)}
                        onChange={() => toggleColor(color.name)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-sm text-gray-700">
                        {color.name}{" "}
                        <span className="text-gray-400">({color.count})</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gray-100 mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-semibold">
                        AD
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm">{product.brand}</h3>
                    <p className="text-sm text-gray-600 truncate">
                      {product.name}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-sm">
                        Rs. {product.price}
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className="text-xs text-gray-400 line-through">
                            Rs. {product.originalPrice}
                          </span>
                          <span className="text-xs text-orange-500 font-semibold">
                            ({product.discount})
                          </span>
                        </>
                      )}
                    </div>
                    {product.rating > 0 && (
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center bg-green-600 text-white px-1 rounded text-xs">
                          <span>{product.rating}</span>
                          <Star className="w-2 h-2 fill-current ml-1" />
                        </div>
                        <span className="text-xs text-gray-500">
                          | {product.reviews}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidPage;
