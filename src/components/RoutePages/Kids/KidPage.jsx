import React from "react";
import HeroSwiper from "../../ViewPointHome/HeroSwiper";
import { KidsSwiperData } from "../../../data/pocketProduct";
import {
  Brands,
  IconicBrands,
  FashionEssentials,
  ExploreMore,
  KidsSpace,
  BudgetBuy,
} from "./Kidsdata";
import { Link } from "react-router-dom";

const KidPage = () => {
  return (
    <>
      <section className="py-5 px-2">
        <HeroSwiper HeroSwiperData={KidsSwiperData} />
        {/* Fevourite Brands */}
        <div>
          <h1 className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
            FEAVOURITE BRANDS
          </h1>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {Brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt=""
                className="max-w-44 w-full object-cover cursor-pointer"
              />
            ))}
          </div>
        </div>
        {/* Iconic Brands */}
        <div>
          <h1 className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
            ICONIC BRANDS
          </h1>
          <div className="grid grid-cols-5">
            {IconicBrands.map((brand, index) => (
              <Link to={`/product/${brand.category}`}>
                <img
                  key={index}
                  src={brand.image}
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Fashion Essentials */}
        <div>
          <h1 className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
            FASHION & ESSENTIALS
          </h1>
          <div className="grid grid-cols-5">
            {FashionEssentials.map((brand, index) => (
              <Link to={`/product/${brand.category}`}>
                <img
                  key={index}
                  src={brand.image}
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Explore More */}
        <div>
          <h1 className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
            EXPLORE MORE
          </h1>
          <div className="grid grid-cols-2">
            {ExploreMore.map((brand, index) => (
              <Link to={`/product/${brand.category}`}>
                <img
                  key={index}
                  src={brand.image}
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* kids Space */}
        <div>
          <h1 className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
            THE KID'S SPACE
          </h1>
          <div className="grid grid-cols-2">
            {KidsSpace.map((brand, index) => (
              <Link to={`/product/${brand.category}`}>
                <img
                  key={index}
                  src={brand.image}
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* Budget Buy */}
        <div>
          <h1 className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
            BUDGET BUY
          </h1>
          <div className="grid grid-cols-6">
            {BudgetBuy.map((brand, index) => (
              <Link to={`/product/${brand.category}`}>
                <img
                  key={index}
                  src={brand.image}
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KidPage;
