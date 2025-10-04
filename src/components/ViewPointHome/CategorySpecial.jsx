import React from "react";
import CategoryHeading from "../../assets/ViewPointHome/Category-heading.webp";
import MobileApp from "../../assets/ViewPointHome/MobileApp-Download.webp";

const CategorySpecial = ({ CategoryItems }) => {
  return (
    <>
      <section className="max-w-full w-full px-4">
        <div>
          <img src={CategoryHeading} alt="Category-Heading" />
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {CategoryItems.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`category-${index}`}
              className="object-cover w-full h-full cursor-pointer"
            />
          ))}
        </div>
        {/* DownLoad on Googleplay & AppStore */}
        <div className="px-5 py-1">
          <img src={MobileApp} alt="Download-App" />
        </div>
      </section>
    </>
  );
};

export default CategorySpecial;
