import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSwiper = ({ HeroSwiperData }) => {
  return (
    <>
      <div className="max-w-full">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={1}
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
          {HeroSwiperData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-full w-full bg-white shadow-md cursor-pointer">
                <img src={item.image} className="w-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-pocket mt-4 mx-auto"></div>
      </div>
    </>
  );
};

export default HeroSwiper;
