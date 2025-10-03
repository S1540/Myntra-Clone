import React from "react";
import offerBanner from "../../assets/ViewPointHome/Thin-500Off.webp";
import MenBanner from "../../assets/Men-banner-1.webp";
import subBanner1 from "../../assets/ViewPointHome/Sub-img-1.webp";
import subBanner2 from "../../assets/ViewPointHome/Sub-img-2.webp";
import subBanner3 from "../../assets/ViewPointHome/Sub-img-3.webp";
import heroDishcountGif from "../../assets/ViewPointHome/Hero-discount.gif";
import PocketHeading from "../../assets/ViewPointHome/Pocket-frendly.webp";
import { products } from "../../data/pocketProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const MenPage = () => {
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
            <img src={MenBanner} alt="Men-Banner" className="object-cover" />
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

        {/* Pocket Frendly Mens */}
        <div className="">
          <div className="py-3">
            <img src={PocketHeading} alt="Pocket-Heading" />
          </div>
          <div className="max-w-full pb-2 md:pb-4">
            <Swiper
              slidesPerView={6}
              slidesPerGroup={5}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination-pocket",
              }}
              modules={[Autoplay, Pagination]}
            >
              {products.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="max-w-64 w-full bg-white rounded-lg shadow-md cursor-pointer">
                    <img
                      src={item.image}
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-pocket mt-4 mx-auto"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenPage;
