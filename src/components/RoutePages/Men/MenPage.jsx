import React from "react";
import MenHero from "./MenHero";
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

const MenPage = () => {
  // Rising Men
  const RisingMen = RisingStarsData.filter(
    (item) => item.categories === "Men" || item.categories === "General"
  );

  // Luxe Grand
  const LuxeGrandMen = LuxeGrandData.filter(
    (item) => item.categories === "Men" || item.categories === "General"
  );
  //MEDOL WROTHY
  const ModelWrothMen = ModelWrothyData.filter(
    (item) => item.categories === "Men" || item.categories === "General"
  );
  //Grand Globle
  const GrandGlobeMen = GrandGlobleData.filter(
    (item) => item.categories === "Men" || item.categories === "General"
  );
  // Categories
  const MenCategories = categoriesData.filter(
    (item) => item.categories === "Men" || item.categories === "General"
  );

  return (
    <>
      <MenHero />
      <RisingStars RisingStarsData={RisingMen} />
      <LuxeGrand LuxeGrandData={LuxeGrandMen} />
      <MedalWrothy ModalWrothyData={ModelWrothMen} />
      <GrandGloble GrandGlobleData={GrandGlobeMen} />
      <CategorySpecial CategoryData={MenCategories} />
    </>
  );
};

export default MenPage;
