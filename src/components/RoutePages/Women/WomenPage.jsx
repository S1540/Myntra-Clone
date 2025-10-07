import React from "react";
// import MenHero from "./MenHero";
import {
  RisingStarsData,
  LuxeGrandData,
  ModelWrothyData,
  GrandGlobleData,
  categoriesData,
} from "../../../data/pocketProduct";

import RisingStars from "../../ViewPointHome/RisingStars";
import LuxeGrand from "../../ViewPointHome/LuxeGrand";
import MedalWrothy from "../../ViewPointHome/MedalWrothy";
import GrandGloble from "../../ViewPointHome/GrandGloble";
import CategorySpecial from "../../ViewPointHome/CategorySpecial";
import WomenHero from "./WomenHero";

const WomenPage = () => {
  // Rising Men
  const RisingWomen = RisingStarsData.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );

  // Luxe Grand
  const LuxeGrandWomen = LuxeGrandData.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );
  //MEDOL WROTHY
  const ModelWrothWomen = ModelWrothyData.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );
  //Grand Globle
  const GrandGlobeWomen = GrandGlobleData.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );
  // Categories
  const WomenCategories = categoriesData.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );

  return (
    <>
      <WomenHero />
      <RisingStars RisingStarsData={RisingWomen} />
      <LuxeGrand LuxeGrandData={LuxeGrandWomen} />
      <MedalWrothy ModalWrothyData={ModelWrothWomen} />
      <GrandGloble GrandGlobleData={GrandGlobeWomen} />
      <CategorySpecial CategoryData={WomenCategories} />
    </>
  );
};

export default WomenPage;
