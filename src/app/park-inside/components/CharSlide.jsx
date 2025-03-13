"use client";
import React from "react";
import CharCard from "./CharCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
const CharSlide = () => {
  return (
    <div className="bg-[#212121] pt-[70px] pb-[100px]">
      <div className="ml-[max(5%,calc((100vw-1250px)/2))] bg-[url(/ParkPage/csbgwhite.webp)] pt-[55px] pb-[65px] gap-[54px] flex flex-col pl-[70px]">
        <div className="mr-[133px]">
          <motion.h1
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="fsans-600 text-[#092241] pb-2 text-3xl whitespace-nowrap overflow-hidden leading-[33px] border-b-[#092241] border-opacity-[0.34] border-b-[1px]"
          >
            Defining Characteristics of KSH Chakan, Maharashtra
          </motion.h1>
        </div>
        <div className="flex gap-[40px] items-end">
          <div className="flex gap-[15px]">
            <button
              id="chl"
              className="w-10 h-10 flex items-center justify-center"
            >
              <img className="h-10 w-10" src="/ParkPage/chl.svg" alt="" />
            </button>
            <button
              id="chr"
              className="w-10 h-10 flex items-center justify-center"
            >
              <img className="h-10 w-10" src="/ParkPage/chr.svg" alt="" />
            </button>
          </div>
          {/* <Swiper
            modules={[Navigation, FreeMode]}
            navigation={{
              prevEl: "#chl",
              nextEl: "#chr",
            }}
            spaceBetween={40}
            slidesPerView={3.5} // Show 3 slides at a time
            speed={300}
            loop={true}
            freeMode={true}
            preventInteractionOnTransition={true}
            allowTouchMove={false}
            touchMoveStopPropagation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 43,
              },
            }}
          >
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
          </Swiper> */}

          <Swiper
            slidesPerGroup={1}
            className="xl:w-full sm:w-[90%] mx-auto customsw"
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{ nextEl: "#chl", prevEl: "#chr" }}
            speed={500} // Smooth transition
            loop={true}
            grabCursor={true} // Enables draggable cursor effect
            touchMoveStopPropagation={false} // Prevents weird touch behavior
            allowTouchMove={true} // Enables dragging/swiping
            breakpoints={{
              250: { slidesPerView: 1, spaceBetween: 10 },
              400: { slidesPerView: 1.2, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              769: { slidesPerView: 3, spaceBetween: 20 },
              1279: { slidesPerView: 2.5, spaceBetween: 20 },
              1366: { slidesPerView: 2.5, spaceBetween: 40 },
              1536: { slidesPerView: 3, spaceBetween: 40 },
              1920: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
            <SwiperSlide>
              <CharCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CharSlide;
