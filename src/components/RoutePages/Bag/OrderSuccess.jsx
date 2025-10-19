import React, { useState, useEffect } from "react";
import { Check, Package, Truck, Home } from "lucide-react";

export default function OrderSuccess() {
  const [approvalStage, setApprovalStage] = useState("waiting"); // waiting, approved
  const [showTick, setShowTick] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Approval animation after 3 seconds
    setTimeout(() => {
      setApprovalStage("approved");
    }, 3000);

    // Show success tick after approval
    setTimeout(() => setShowTick(true), 3500);
    setTimeout(() => setShowContent(true), 4000);
  }, []);

  if (approvalStage === "waiting") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          {/* Loading Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="w-10 h-10 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Waiting Message */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Processing Your Order
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Wait for Myntra Team Approval
          </p>
          <p className="text-sm text-gray-500">
            This will only take a moment...
          </p>

          {/* Animated Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <div
              className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>

          {/* Progress Steps */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 font-medium">Order Placed</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-800 font-medium">
                  Awaiting Team Approval
                </p>
              </div>
              <div className="flex items-center opacity-50">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <p className="text-gray-600">Order Confirmed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Animated Check Circle */}
        <div className="flex justify-center mb-8">
          <div
            className={`relative transition-all duration-500 ${
              showTick ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Check className="w-12 h-12 text-white stroke-[3]" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-green-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Success Message */}
        <div
          className={`text-center transition-all duration-500 ${
            showContent
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Order Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-1">
            Thank you for shopping with
          </p>
          <p className="text-2xl font-bold text-pink-600 mb-8">Myntra</p>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-left">
            <div className="flex items-center justify-between mb-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="text-lg font-semibold text-gray-800">
                  #MYN2025102034
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Amount Paid</p>
                <p className="text-lg font-semibold text-green-600">₹2,499</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Order Confirmed</p>
                  <p className="text-sm text-gray-500">
                    Your order has been placed
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Package className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Packed</p>
                  <p className="text-sm text-gray-500">
                    We're packing your items
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Truck className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Shipped</p>
                  <p className="text-sm text-gray-500">On the way to you</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Home className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Delivered</p>
                  <p className="text-sm text-gray-500">Expected by Oct 24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
              Track Order
            </button>
            <button className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
              Continue Shopping
            </button>
          </div>

          {/* Footer Message */}
          <p className="text-sm text-gray-500 mt-6">
            We've sent order confirmation details to your email
          </p>
        </div>
      </div>
    </div>
  );
}
