import React from "react";
import firstImg from "../../assets/ViewPointHome/Thin-500Off.webp";
import heroimg1 from "../../assets/ViewPointHome/Hero-img-1.webp";
import heroimg2 from "../../assets/ViewPointHome/Hero-img-2.webp";
import subBanner1 from "../../assets/ViewPointHome/Sub-img-1.webp";
import subBanner2 from "../../assets/ViewPointHome/Sub-img-2.webp";
import subBanner3 from "../../assets/ViewPointHome/Sub-img-3.webp";
import heroDishcountGif from "../../assets/ViewPointHome/Hero-discount.gif";
import PocketHeading from "../../assets/ViewPointHome/Pocket-frendly.webp";
import OmgHeading from "../../assets/ViewPointHome/OMG DEALS.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { OMGproduct, products } from "../../data/pocketProduct";

const HeroSec = () => {
  return (
    <>
      <section className="hero-section px-5 md:px-10 ">
        <div className="h-20 mt-8">
          <img
            src={firstImg}
            alt="500 off"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-0">
          <img src={heroimg1} alt="hero-img-1 " />
          <img src={heroimg2} alt="hero-img-2" className="lg:-ml-0.5" />
        </div>
        <div className="grid grid-cols-3 gap-0 mt-0">
          <img src={subBanner1} alt="" />
          <img src={subBanner2} alt="" />
          <img src={subBanner3} alt="" />
        </div>
        <div className="max-w-full w-full">
          <img src={heroDishcountGif} alt="" className="w-full " />
        </div>

        {/* Pocket Frendly & OMG Offers */}
        <div className="relative">
          <div className="py-3">
            <img src={PocketHeading} alt="Pocket-Heading" />
          </div>
          <div className="max-w-full pb-5">
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
                el: ".swiper-pagination",
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
          </div>
        </div>

        {/* OMG Deals */}
        <div className="py-4">
          <div className="py-3">
            <img src={OmgHeading} alt="Pocket-Heading" />
          </div>
          <div className="max-w-full pb-5">
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
                el: ".swiper-pagination",
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
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSec;
