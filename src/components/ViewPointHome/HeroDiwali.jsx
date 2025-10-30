import React from "react";

import SubBanner from "../../assets/ViewPointHome/Sub-banner-1.webp";
import SubBanner2 from "../../assets/ViewPointHome/Sub-banner-2.webp";
import thinGIF from "../../assets/ViewPointHome/Banner-thin.webp";
import { MobileViewHero } from "../../data/pocketProduct";
import { Link } from "react-router-dom";

const HeroDiwali = () => {
  return (
    <>
      <section className="px-4 hidden md:block">
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/28/YWKQhCcx_88ea5537529241b78b96ab335d499c54.jpg"
            alt=""
            className="cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2">
          <Link to={"/women"}>
            <img
              src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/27/IhJhvosd_44f5245515e945cb8f6b965244a5c535.png"
              className="w-full object-cover cursor-pointer"
            />
          </Link>
          <Link to={"/men"}>
            <img
              src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/27/1FCkPMmA_453519c807c34f0f86c6af438ecfab12.png"
              className="w-full object-cover cursor-pointer"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 px-10">
          <img
            src={SubBanner}
            alt="Diwali-Banner"
            className="w-full object-cover"
          />
          <img
            src={SubBanner2}
            alt="Diwali-Banner"
            className="w-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <img
            src={thinGIF}
            alt="Diwali-Banner"
            className="w-full object-cover mx-auto"
          />
        </div>
      </section>
      {/* Mobile View */}
      <section>
        <div className="grid grid-cols-5 gap-2 pt-4 md:hidden">
          {MobileViewHero.map((item, index) => (
            <Link to={`/product/${item.category}`}>
              <img src={item.image} alt="" />{" "}
            </Link>
          ))}
        </div>
        {/* Offer */}
        <div className="grid grid-cols-1 md:hidden">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/w_390,h_83,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/JUNE/16/3YmkuFYP_87910d7a037e44ea95e677e7f6f5a918.jpg"
            alt=""
            className="w-full object-cover"
          />
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_390,c_limit,fl_progressive/w_390,h_238,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/SEPTEMBER/5/Cj4QHqgG_40acdf53d3b3464ab3a858e3aacf8565.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default HeroDiwali;
