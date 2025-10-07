import React from "react";
import {
  RisingStarsData,
  LuxeGrandData,
  // HeroSwiperData,
  ModelWrothyData,
  GrandGlobleData,
  categoriesData,
} from "../../data/pocketProduct";
import RisingStars from "./RisingStars";
import HeroSwiper from "./HeroSwiper";
import LuxeGrand from "./LuxeGrand";
import MedalWrothy from "./MedalWrothy";
import GrandGloble from "./GrandGloble";
import CategorySpecial from "./CategorySpecial";
import HeroDiwali from "./HeroDiwali";

const HeroSec = () => {
  return (
    <>
      <section className="hero-section my-10 px-2 ">
        {/* <HeroSwiper HeroSwiperData={HeroSwiperData} /> */}
        <HeroDiwali />

        {/* Pocked And OMG Deals */}
        <RisingStars RisingStarsData={RisingStarsData} />
        <LuxeGrand LuxeGrandData={LuxeGrandData} />
        <MedalWrothy ModalWrothyData={ModelWrothyData} />
        <GrandGloble GrandGlobleData={GrandGlobleData} />
        <CategorySpecial CategoryData={categoriesData} />
      </section>
    </>
  );
};

export default HeroSec;
