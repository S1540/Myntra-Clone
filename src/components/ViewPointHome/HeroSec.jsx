import React from "react";
import firstImg from "../../assets/ViewPointHome/Thin-500Off.webp";
import heroimg1 from "../../assets/ViewPointHome/Hero-img-1.webp";
import heroimg2 from "../../assets/ViewPointHome/Hero-img-2.webp";
import subBanner1 from "../../assets/ViewPointHome/Sub-img-1.webp";
import subBanner2 from "../../assets/ViewPointHome/Sub-img-2.webp";
import subBanner3 from "../../assets/ViewPointHome/Sub-img-3.webp";
import heroDishcountGif from "../../assets/ViewPointHome/Hero-discount.gif";
import { OMGproduct, products } from "../../data/pocketProduct";
import PocketFrendly from "./PocketFrendly";
import OMGdeals from "./OMGdeals";

const HeroSec = () => {
  return (
    <>
      <section className="hero-section px-5 md:px-10 ">
        <div className="h-20 mt-8">
          <img
            src={firstImg}
            alt="500 off"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-0">
          <img src={heroimg1} alt="hero-img-1 " />
          <img src={heroimg2} alt="hero-img-2" className="lg:-ml-0.5" />
        </div>
        <div className="grid grid-cols-3 gap-0 mt-0">
          <img src={subBanner1} alt="" />
          <img src={subBanner2} alt="" />
          <img src={subBanner3} alt="" />
        </div>
        <div className="max-w-full w-full">
          <img src={heroDishcountGif} alt="" className="w-full " />
        </div>
        {/* Pocked And OMG Deals */}
        <PocketFrendly products={products} />
        <OMGdeals OMGproduct={OMGproduct} />
      </section>
    </>
  );
};

export default HeroSec;
