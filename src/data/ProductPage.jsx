import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, X, Star } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CratContext";

function ProductPage() {
  const { category } = useParams();
  const [priceRange, setPriceRange] = useState([100, 901]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToBag } = useCart();
  const brands = [
    { name: "Roadster" },
    { name: "Killer" },
    { name: "Mast & Harbour" },
    { name: "Provogue" },
    { name: "BIBA" },
    { name: "ASIAN" },
    { name: "DRACKFOOT" },
    { name: "HERE&NOW" },
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Brown", hex: "#8B4513" },
    { name: "Grey", hex: "#808080" },
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

  // ✅ Fetch products
  useEffect(() => {
    setLoading(true);
    fetch("/products.json")
      .then((res) => res.json())
      .then((res) => {
        const filtered = res.filter((item) => item.category === category);

        const formatted = filtered.map((p) => ({
          id: p.id,
          brand: p.brand || "Unknown",
          name: p.title,
          price: p.price,
          originalPrice: p.originalPrice || Math.round(p.price * 1.2),
          discount: p.discountPercentage
            ? `${Math.round(p.discountPercentage)}% OFF`
            : null,
          rating: p.rating || 0,
          reviews: p.reviews || "0",
          image: p.image || "",
        }));

        setProducts(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  // ✅ Apply filters
  const filteredProducts = products.filter((p) => {
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.some((b) => b.toLowerCase() === p.brand.toLowerCase());

    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];

    return brandMatch && priceMatch;
  });

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  if (!filteredProducts.length)
    return (
      <div className="bg-pink-50 min-h-screen flex items-center justify-center p-5">
        <div className="bg-white rounded-lg shadow-sm max-w-xl w-full p-12 text-center">
          <div className="w-28 h-28 bg-pink-500 rounded-full flex items-center justify-center text-6xl text-white mx-auto mb-8">
            ⚠
          </div>
          <div className="text-7xl font-bold text-pink-500 mb-6 tracking-wide">
            500
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-500 text-base mb-10 leading-relaxed">
            We're experiencing some technical difficulties on our end. Our team
            is working to fix this issue. Please try again in a moment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <button
              onClick={() => location.reload()}
              className="bg-pink-500 text-white px-8 py-3 rounded font-semibold text-sm uppercase tracking-wide hover:bg-pink-600 transition"
            >
              Try Again
            </button>
            <a
              href="/"
              className="bg-white text-pink-500 px-8 py-3 rounded font-semibold text-sm uppercase tracking-wide border border-pink-500 hover:bg-pink-50 transition"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white py-5">
      {/* Filter Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-20 z-10">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-bold">FILTERS</span>
              <button
                className="text-sm text-pink-500 font-semibold hidden md:block cursor-pointer"
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedColors([]);
                  setPriceRange([100, 901]);
                }}
              >
                CLEAR ALL
              </button>
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
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0 hidden md:block">
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
                        {brand.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-bold text-sm mb-4">PRICE</h3>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="text-xs text-gray-600 mt-1">
                  ₹{priceRange[0]} - ₹{priceRange[1]}
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
                        {color.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-gray-100 mb-3">
                    <Link to={`/productInfo/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full min-h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300
                        sm:rounded-none rounded-md"
                      />
                    </Link>

                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-semibold">
                        {product.discount}
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 p-3">
                      <button
                        onClick={() => addToBag(product)}
                        className="bg-pink-500 text-white px-4 py-2 text-sm font-semibold hover:bg-pink-600 transition-colors cursor-pointer w-28 rounded-xs"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={` text-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-100 
                          hover:text-black transition-colors cursor-pointer w-28 rounded-xs ${
                            isWishlisted(product.id)
                              ? "bg-pink-500 text-white"
                              : "bg-white"
                          }`}
                      >
                        {isWishlisted(product.id) ? "Remove" : "Wishlist"}
                      </button>
                    </div>
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
                          {product.discount && (
                            <span className="text-xs text-orange-500 font-semibold">
                              ({product.discount})
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    {product.rating > 0 && (
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center bg-green-600 text-white px-1 rounded text-xs">
                          <span>{product.rating}</span>
                          <Star className="w-2 h-2 fill-current ml-1" />
                        </div>
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

export default ProductPage;
