import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const GrandGloble = ({ GrandGlobleData }) => {
  return (
    <>
      <div className="">
        <div className="t-5 pb-2 md:py-15 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5">
          <h1>GRAND GLOBLE BRANDS</h1>
        </div>
        <div className="max-w-full pb-2 md:pb-4">
          <Swiper
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-pocket",
            }}
            modules={[Autoplay, Pagination]}
          >
            {GrandGlobleData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-80 w-full bg-white shadow-md cursor-pointer">
                  <img src={item.image} className="w-full object-cover " />
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

export default GrandGloble;
