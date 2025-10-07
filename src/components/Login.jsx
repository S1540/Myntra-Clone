import React, { useState } from "react";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked && mobileNumber) {
      console.log("Login submitted");
    }
  };

  return (
    <>
      <section className="py-10 bg-pink-50 min-h-screen">
        <div className="max-w-96 mx-auto bg-white px-4 ">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/7/22/0c40543a-4c7d-4c8d-b846-017c317a280a1753193775786-Unisex-[300-off].jpg"
            alt="Myntra Offer"
            className="w-full h-52"
          />

          <div className="mt-8">
            {/* Login/Signup Toggle */}
            <div className="flex items-center gap-2 mb-6">
              <button
                type="button"
                className="text-sm font-bold text-gray-800  cursor-pointer"
              >
                Login
              </button>
              <span className="text-sm text-gray-400">or</span>
              <button
                type="button"
                className="text-sm font-bold text-gray-500  cursor-pointer hover:text-gray-800"
              >
                Signup
              </button>
            </div>

            {/* Mobile Number Input */}
            <div className="mb-4">
              <input
                type="tel"
                placeholder="+91 | Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="border border-gray-300 w-full py-3 px-4 text-sm focus:outline-none focus:border-gray-500"
                maxLength="10"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-pink-500 cursor-pointer"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  By continuing, I agree to the{" "}
                  <span className="text-pink-500 font-medium cursor-pointer hover:text-pink-600">
                    Terms of Use
                  </span>{" "}
                  &{" "}
                  <span className="text-pink-500 font-medium cursor-pointer hover:text-pink-600">
                    Privacy Policy
                  </span>
                </span>
              </label>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-pink-500 text-white font-semibold py-3 text-sm hover:bg-pink-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!isChecked}
            >
              CONTINUE
            </button>

            {/* Trouble Logging In */}
            <div className="mt-6 text-center">
              <span className="text-xs text-gray-600 font-medium">
                Have trouble logging in?{" "}
                <span className="text-pink-500 cursor-pointer hover:text-pink-600">
                  Get help
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-96 mx-auto mt-6 text-center">
          <p className="text-xs text-gray-500">
            New to Myntra?{" "}
            <span className="text-pink-500 font-semibold cursor-pointer hover:text-pink-600">
              Create Account
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
