import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ScrollDiscoverStore } from "../../data/pocketProduct";

const GrandGloble = ({ GrandGlobleData }) => {
  return (
    <>
      <div className="">
        <div className="t-5 pb-2 md:py-12 md:text-2xl font-bold tracking-widest text-gray-700 md:px-5 hidden md:block">
          <h1>GRAND GLOBLE BRANDS</h1>
        </div>
        <div className="max-w-full pb-2 md:pb-4 hidden md:block">
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
        {/* Mobile View */}
        <section className="md:hidden">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/JULY/7/rTUC89TL_8d9f1b204456485597bfd2a086fd1b1a.jpeg"
              alt=""
            />
            {/* Swiper */}
            <div className="max-w-full pb-2">
              <Swiper
                slidesPerView={3}
                slidesPerGroup={2}
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
              {/* <div className="swiper-pagination-pocket mt-4 mx-auto"></div> */}
              {/* Scroll Offers */}
              <div className="flex gap-3 overflow-x-auto pb-4 md:hidden">
                {ScrollDiscoverStore.map((item, index) => (
                  <img key={index} src={item.image} alt="" className="h-44" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GrandGloble;
