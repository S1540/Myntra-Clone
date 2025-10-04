import React from "react";
import OmgHeading from "../../assets/ViewPointHome/OMG DEALS.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
// import { OMGproduct } from "../../data/pocketProduct";

const OMGdeals = ({ OMGproduct }) => {
  return (
    <>
      <div className="">
        <div className="py-3">
          <img src={OmgHeading} alt="Pocket-Heading" />
        </div>
        <div className="max-w-full pb-2 md:pb-4">
          <Swiper
            slidesPerView={5}
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
              el: ".swiper-pagination-custom",
            }}
            modules={[Autoplay, Pagination]}
          >
            {OMGproduct.map((item, i) => (
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

          <div className="swiper-pagination-custom mt-4 mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default OMGdeals;
