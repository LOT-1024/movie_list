"use client";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const TopListSwiper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="w-4/5 mx-auto text-xl font-semibold ">
      <h1 className="mt-[3.125rem] mb-[1.875rem]">{children}</h1>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true, enabled: false }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // when window width is >= 10   24px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto" onClick={() => console.log("hello")}>
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
            <div className="absolute w-full h-full bg-red-600 bg-opacity-0 hover:bg-opacity-100"></div>
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center mt-3">Movie Title</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopListSwiper;
