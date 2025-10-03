import React from "react";
import { GiReturnArrow } from "react-icons/gi";
import { SiMediamarkt } from "react-icons/si";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="px-4 py-10 bg-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-b border-gray-500 pb-8">
          {/* Col-1 */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <h1 className="pb-4 text-xs font-bold tracking-wide text-black">
              ONLINE SHOPPING
            </h1>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Kids</a>
            <a href="">Beauty</a>
            <a href="">Home</a>
            <a href="">Genz</a>
            <a href="">Gift Card</a>
            <a href="">Myntra Insider</a>
          </div>

          {/* Col-2 */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <h1 className="pb-4 text-xs font-bold tracking-wide text-black">
              CUSTOMER POLICIES
            </h1>
            <a href="">Contact US</a>
            <a href="">FAQ</a>
            <a href="">T&C</a>
            <a href="">Terms Of Use</a>
            <a href="">Track Order</a>
            <a href="">Shipping</a>
            <a href="">Cancellation</a>
            <a href="">Returns</a>
            <a href="">Privacy Policy</a>
            <a href="">Grievance Redressal</a>
          </div>

          {/* Col-3 */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <h1 className="pb-4 text-xs font-bold tracking-wide text-black">
              MORE INFO
            </h1>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Site Map</a>
            <a href="">Corporate Information</a>
            <a href="">White Hat</a>
            <a href="">Cleartrip</a>
            <a href="">Myntra Global</a>
          </div>

          {/* Col-4 */}
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <h1 className="pb-2 text-xs font-bold tracking-wide text-black">
              MOST TRUST
            </h1>

            <div className="flex gap-2">
              <SiMediamarkt size={40} />
              <h1 className="text-black font-medium">
                100% ORIGINAL{" "}
                <span className="font-normal text-gray-600">
                  guarantee for all products at myntra.com
                </span>
              </h1>
            </div>

            <div className="flex gap-2">
              <GiReturnArrow size={40} />
              <h1 className="text-black font-medium">
                Return within 14days{" "}
                <span className="font-normal text-gray-600">
                  of receiving your order
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
