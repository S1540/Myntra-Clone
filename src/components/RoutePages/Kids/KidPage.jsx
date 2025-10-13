import React from "react";
import HeroSwiper from "../../ViewPointHome/HeroSwiper";
import { KidsSwiperData } from "../../../data/pocketProduct";
import { Brands, IconicBrands } from "./Kidsdata";
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
      </section>
    </>
  );
};

export default KidPage;
