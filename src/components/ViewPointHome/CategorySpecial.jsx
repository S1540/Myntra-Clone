import React from "react";
import MobileApp from "../../assets/ViewPointHome/MobileApp-Download.webp";
import { mobileCategoriesData } from "../../data/pocketProduct";

const CategorySpecial = ({ CategoryData }) => {
  return (
    <>
      <section className="max-w-full w-full px-4">
        <div className="t-5 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5 ">
          <h1>SHOP BY CATEGORY</h1>
        </div>
        <div className="w-full md:grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 hidden">
          {CategoryData.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`category-${index}`}
              className="object-cover w-full h-full cursor-pointer"
            />
          ))}
        </div>
        {/* on Mobile */}
        <div className="w-full grid grid-cols-3 md:hidden">
          {mobileCategoriesData.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`category-${index}`}
              className="object-cover w-full h-full cursor-pointer"
            />
          ))}
        </div>
        {/* DownLoad on Googleplay & AppStore */}
        <div className="px-5 py-1 hidden md:block">
          <img src={MobileApp} alt="Download-App" />
        </div>
      </section>
    </>
  );
};

export default CategorySpecial;
