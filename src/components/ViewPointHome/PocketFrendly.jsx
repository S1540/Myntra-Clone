import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import PocketHeading from "../../assets/ViewPointHome/Pocket-frendly.webp";
// import { products } from "../../data/pocketProduct";

const PocketFrendly = ({ products }) => {
  return (
    <>
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
    </>
  );
};

export default PocketFrendly;
