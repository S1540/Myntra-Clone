import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

const LuxeGrand = ({ LuxeGrandData }) => {
  return (
    <>
      <div className="">
        <div className="t-5 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5 hidden md:block ">
          <h1>LUXE GRAND REDUCTION DEALS</h1>
        </div>
        <div className="max-w-full pb-2 md:pb-4 hidden md:block">
          <Swiper
            slidesPerView={6}
            slidesPerGroup={5}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-custom",
            }}
            modules={[Autoplay, Pagination]}
          >
            {LuxeGrandData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-64 w-full bg-white rounded-lg shadow-md cursor-pointer">
                  <Link to={`/product/${item.category}`}>
                    <img src={item.image} className="w-full object-cover " />{" "}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-custom mt-4 mx-auto"></div>
        </div>
        {/* Mobile View */}

        <div className="pt-4 md:hidden">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/JULY/7/WmOyAnfw_c6d65ab162d746889e1ba742df4753ae.jpg"
            alt=""
          />
        </div>
        <div className="max-w-full md:hidden">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-custom",
            }}
            modules={[Autoplay, Pagination]}
          >
            {LuxeGrandData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-64 w-full bg-white rounded-lg shadow-md cursor-pointer">
                  <Link to={`/product/${item.category}`}>
                    <img src={item.image} className="w-full object-cover " />{" "}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom mt-4 mx-auto"></div>
        </div>
        {/* Ads */}
        <div className="grid grid-cols-1 md:hidden">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/JULY/7/cbyunjrz_a620698174b64a39ab0be2c07dfcec56.jpeg"
            alt=""
            className="object-cover -mt-2"
          />
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_390,c_limit,fl_progressive/w_390,h_198,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/OCTOBER/19/FbjvzfCX_d05ce36fe00a4145bc7ca386138d4190.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LuxeGrand;
