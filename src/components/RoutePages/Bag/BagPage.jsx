import React, { useState } from "react";
import { X, Tag, Info, ShoppingBag } from "lucide-react";
import { useCart } from "../../../context/CratContext";

export default function BagPage() {
  const { cart, removeFromBag } = useCart([]);
  const [selectedItems, setSelectedItems] = useState(cart.map(() => true));
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const handleSelectAll = () => {
    const allSelected = selectedItems.every((item) => item);
    setSelectedItems(cart.map(() => !allSelected));
  };

  const handleSelectItem = (index) => {
    setSelectedItems((prev) => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  const handleQuantityChange = (index, newQuantity) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = newQuantity;
      return newQuantities;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      if (selectedItems[index]) {
        return total + item.price * quantities[index];
      }
      return total;
    }, 0);
  };

  const calculateMRP = () => {
    return cart.reduce((total, item, index) => {
      if (selectedItems[index]) {
        return total + (item.originalPrice || item.price) * quantities[index];
      }
      return total;
    }, 0);
  };

  const calculateDiscount = () => {
    return calculateMRP() - calculateTotal();
  };

  const selectedCount = selectedItems.filter(Boolean).length;
  const platformFee = selectedCount > 0 ? 23 : 0;
  const finalAmount = calculateTotal() + platformFee;

  // Empty Cart UI
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your Bag is Empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add items to your bag to see them here
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded font-semibold hover:bg-pink-600 transition">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Delivery Address */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Deliver to:</span>
                <span className="font-semibold text-gray-900">821115</span>
              </div>
              <button className="px-4 py-2 border-2 border-pink-500 text-pink-500 rounded font-semibold hover:bg-pink-50 transition">
                CHANGE ADDRESS
              </button>
            </div>

            {/* Available Offers */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900">
                  Available Offers
                </h3>
              </div>
              <p className="text-sm text-gray-600 ml-8">
                10% Instant Discount on SBI Credit Card & Credit Card EMI on a
                min spend of ₹3,500.TCA
              </p>
              <button className="ml-8 mt-2 text-pink-500 font-semibold text-sm flex items-center gap-1">
                Show More
                <span className="text-xs">▼</span>
              </button>
            </div>

            {/* Items Selection */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.every((item) => item)}
                    onChange={handleSelectAll}
                    className="w-5 h-5 accent-pink-500 cursor-pointer"
                  />
                  <span className="font-semibold text-gray-900">
                    {selectedCount}/{cart.length} ITEMS SELECTED
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      selectedItems.forEach((isSelected, index) => {
                        if (isSelected) {
                          removeFromBag(cart[index].id);
                        }
                      });
                    }}
                    className="text-gray-600 font-medium hover:text-gray-900"
                  >
                    REMOVE
                  </button>
                  <button className="text-gray-600 font-medium hover:text-gray-900">
                    MOVE TO WISHLIST
                  </button>
                </div>
              </div>

              {/* Product Items */}
              <div className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <div key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        checked={selectedItems[index]}
                        onChange={() => handleSelectItem(index)}
                        className="w-5 h-5 accent-pink-500 cursor-pointer mt-2"
                      />

                      <div className="w-32 h-40 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || item.images?.[0]}
                          alt={item.name || item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.brand || "Brand Name"}
                            </h4>
                            <p className="text-gray-600 mb-1">{item.title}</p>
                            <p className="text-xs text-gray-500 mb-3">
                              {item.seller || "Sold by: Official Store"}
                            </p>

                            <div className="flex items-center gap-4 mb-3">
                              {item.size && (
                                <div className="relative">
                                  <select
                                    defaultValue={item.size}
                                    className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm font-medium cursor-pointer"
                                  >
                                    <option>{item.size}</option>
                                  </select>
                                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">
                                    ▼
                                  </span>
                                </div>
                              )}

                              <div className="relative">
                                <select
                                  value={quantities[index]}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      index,
                                      Number(e.target.value)
                                    )
                                  }
                                  className="appearance-none border border-gray-300 focus:outline-pink-500 focus:outline rounded px-3 py-1.5 pr-8 text-sm font-medium cursor-pointer"
                                >
                                  {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </select>
                                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">
                                  ▼
                                </span>
                              </div>

                              {item.stock && item.stock < 10 && (
                                <span className="bg-pink-50 text-pink-600 text-xs font-semibold px-2 py-1 rounded">
                                  {item.stock} left
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg font-bold text-gray-900">
                                ₹{item.price * quantities[index]}
                              </span>
                              {item.originalPrice && (
                                <>
                                  <span className="text-sm text-gray-400 line-through">
                                    ₹{item.originalPrice * quantities[index]}
                                  </span>
                                  <span className="text-sm font-semibold text-pink-500">
                                    {Math.round(
                                      ((item.originalPrice - item.price) /
                                        item.originalPrice) *
                                        100
                                    )}
                                    % OFF
                                  </span>
                                  <Info className="w-4 h-4 text-gray-400" />
                                </>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center">
                                <span className="text-xs">↻</span>
                              </div>
                              <span className="font-medium">14 days</span>
                              <span>return available</span>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm text-gray-700">
                                Delivery between{" "}
                                <span className="font-semibold">
                                  30 Oct - 1 Nov
                                </span>
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromBag(item.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Login Prompt */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-pink-300 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white"></div>
                </div>
                <p className="text-gray-700 font-medium">
                  Login to see items from your existing bag and wishlist.
                </p>
              </div>
              <button className="px-6 py-2 bg-white border-2 border-pink-500 text-pink-500 rounded font-semibold hover:bg-pink-50 transition">
                LOGIN NOW
              </button>
            </div>
          </div>

          {/* Right Section - Price Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 sticky top-4">
              {/* Coupons Section */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">
                  COUPONS
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Apply Coupons"
                    className="flex-1 outline-none text-sm"
                  />
                  <button className="text-pink-500 font-semibold text-sm">
                    APPLY
                  </button>
                </div>
                <p className="text-xs text-pink-500 ml-7">
                  <span className="font-semibold">Login</span> to get upto ₹300
                  OFF on first order
                </p>
              </div>

              {/* Donation Section */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">
                  SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <input type="checkbox" className="w-4 h-4 accent-pink-500" />
                  <span className="text-sm text-gray-700">
                    Donate and make a difference
                  </span>
                </div>
                <div className="flex gap-2 ml-6">
                  {["10", "20", "50", "100"].map((amount) => (
                    <button
                      key={amount}
                      className="px-3 py-1.5 border border-gray-300 rounded text-sm font-medium hover:border-pink-500 hover:text-pink-500"
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <button className="text-pink-500 text-xs font-semibold ml-6 mt-2">
                  Know More
                </button>
              </div>

              {/* Price Details */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-4">
                  PRICE DETAILS ({selectedCount}{" "}
                  {selectedCount === 1 ? "Item" : "Items"})
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total MRP</span>
                    <span className="text-gray-900">₹{calculateMRP()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount on MRP</span>
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 font-medium">
                        - ₹{calculateDiscount()}
                      </span>
                      <button className="text-pink-500 text-xs font-semibold">
                        Know More
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coupon Discount</span>
                    <button className="text-pink-500 text-xs font-semibold">
                      Apply Coupon
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fee</span>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900">₹{platformFee}</span>
                      <button className="text-pink-500 text-xs font-semibold">
                        Know More
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span className="text-gray-900">Total Amount</span>
                    <span className="text-gray-900">₹{finalAmount}</span>
                  </div>
                </div>
                <button
                  disabled={selectedCount === 0}
                  className={`w-full mt-4 py-3 rounded font-semibold transition ${
                    selectedCount === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-pink-500 text-white hover:bg-pink-600"
                  }`}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
