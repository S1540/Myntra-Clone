import React from "react";

import SubBanner from "../../../assets/ViewPointHome/Sub-banner-1.webp";
import SubBanner2 from "../../../assets/ViewPointHome/Sub-banner-2.webp";
import thinGIF from "../../../assets/ViewPointHome/Banner-thin.webp";

const WomenHero = () => {
  return (
    <div>
      <section className="px-4 my-8">
        <div>
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/27/4HphvxSA_4c3a3907c47b434cbb5596dff1636f63.png"
            alt="Diwali-Banner"
          />
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
    </div>
  );
};

export default WomenHero;
