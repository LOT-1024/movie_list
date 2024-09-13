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

const TopListSwiper = () => {
  return (
    <div className="w-full">
      <h1>Trending Movies</h1>
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
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="min-h-[20rem] w-4/5"
      >
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="relative h-[14.5rem] w-[9.625rem] rounded-2xl lg:h-[20.25rem] lg:w-[13.5rem] mx-auto">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg`}
              alt="Poster Movie"
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-center">Movie Title</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopListSwiper;
