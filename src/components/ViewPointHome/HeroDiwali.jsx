import React from "react";
import MenBanner from "../../assets/ViewPointHome/Men-banner.webp";
import SubBanner from "../../assets/ViewPointHome/Sub-banner-1.webp";
import SubBanner2 from "../../assets/ViewPointHome/Sub-banner-2.webp";
import thinGIF from "../../assets/ViewPointHome/Banner-thin.webp";

const HeroDiwali = () => {
  return (
    <>
      <section className="px-4">
        <div>
          <img src={MenBanner} alt="Diwali-Banner" />
        </div>
        <div className="grid grid-cols-2 px-6">
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
    </>
  );
};

export default HeroDiwali;
