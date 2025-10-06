import React from "react";
import {
  RisingStarsData,
  LuxeGrandData,
  HeroSwiperData,
} from "../../data/pocketProduct";
import RisingStars from "./RisingStars";
import HeroSwiper from "./HeroSwiper";
import LuxeGrand from "./LuxeGrand";

const HeroSec = () => {
  return (
    <>
      <section className="hero-section my-10 ">
        <HeroSwiper HeroSwiperData={HeroSwiperData} />

        {/* Pocked And OMG Deals */}
        <RisingStars RisingStarsData={RisingStarsData} />
        <LuxeGrand LuxeGrandData={LuxeGrandData} />
      </section>
    </>
  );
};

export default HeroSec;
