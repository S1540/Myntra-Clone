import React from "react";
import offerBanner from "../../assets/ViewPointHome/Thin-500Off.webp";
import WoMenBanner from "../../assets/Women-banner-1.webp";
import subBanner1 from "../../assets/ViewPointHome/Sub-img-1.webp";
import subBanner2 from "../../assets/ViewPointHome/Sub-img-2.webp";
import subBanner3 from "../../assets/ViewPointHome/Sub-img-3.webp";
import heroDishcountGif from "../../assets/ViewPointHome/Hero-discount.gif";
import { products, OMGproduct, CategoryItems } from "../../data/pocketProduct";
import PocketFrendly from "../ViewPointHome/PocketFrendly";
import OMGdeals from "../ViewPointHome/OMGdeals";
import CategorySpecial from "../ViewPointHome/CategorySpecial";

const WomenPage = () => {
  const womenProducts = products.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );
  const womenOMGProducts = OMGproduct.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );
  const womenCategoriesProducts = CategoryItems.filter(
    (item) => item.categories === "Women" || item.categories === "General"
  );

  return (
    <>
      <section className="px-5 md:px-10">
        <div>
          <div className="h-20 mt-8">
            <img
              src={offerBanner}
              alt="500 off"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img src={WoMenBanner} alt="Men-Banner" className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-0 mt-0">
            <img src={subBanner1} alt="" />
            <img src={subBanner2} alt="" />
            <img src={subBanner3} alt="" />
          </div>
          <div className="max-w-full w-full">
            <img src={heroDishcountGif} alt="" className="w-full " />
          </div>
        </div>
        {/* Pocket And OMG & Categories Mens */}
        <PocketFrendly products={womenProducts} />
        <OMGdeals OMGproduct={womenOMGProducts} />
        <CategorySpecial CategoryItems={womenCategoriesProducts} />
      </section>
    </>
  );
};

export default WomenPage;
