import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ScrollData } from "../../data/pocketProduct";
const RisingStars = ({ RisingStarsData }) => {
  return (
    <>
      {" "}
      <div className="">
        <div className="pt-8 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5 ">
          <h1>RISING STARS</h1>
        </div>
        <div className="max-w-full pb-2 md:pb-4 hidden md:block">
          <Swiper
            slidesPerView={5}
            slidesPerGroup={5}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-pocket",
            }}
            modules={[Autoplay, Pagination]}
          >
            {RisingStarsData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-80 w-full bg-white shadow-md cursor-pointer">
                  <Link to={`/product/${item.category}`}>
                    <img src={item.image} className="w-full object-cover " />{" "}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-pocket mt-4 mx-auto"></div>
        </div>
        {/* Mobile View */}
        <div className="max-w-full pb-2 md:pb-4 md:hidden">
          <Swiper
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-pocket",
            }}
            modules={[Autoplay, Pagination]}
          >
            {RisingStarsData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-80 w-full bg-white shadow-md cursor-pointer">
                  <Link to={`/product/${item.category}`}>
                    <img src={item.image} className="w-full object-cover " />{" "}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-pocket mt-4 mx-auto"></div>
        </div>
        {/* Scroll Offers */}
        <div className="flex gap-3 overflow-x-auto pb-4 md:hidden">
          {ScrollData.map((item, index) => (
            <img key={index} src={item.image} alt="" className="h-36" />
          ))}
        </div>
      </div>
    </>
  );
};
export default RisingStars;
