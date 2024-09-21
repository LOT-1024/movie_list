'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const SliderTop = () => {
  return (
    <section className="mt-16">
        <div className="w-4/5 mx-auto">
          <h1 className="font-bold text-2xl">Top Movies</h1>
          <Swiper
          className="mt-5"
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {Array.from({ length: 7 }, (_, i) => (
              <SwiperSlide key={i}>
                <div className="w-fit flex flex-col justify-center items-center">
                  <Link
                    href="#"          
                    className="w-[9.625rem] h-[14.375rem] md:w-[13.5rem] md:h-[20.25rem] rounded-2xl relative flex justify-center items-center"
                  >
                    <Image
                      fill
                      src={
                        "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
                      }
                      alt="Movie Poster"
                      className="rounded-2xl"
                      priority
                    />
                    <div className="w-full h-full absolute rounded-2xl group hover:bg-black/50 duration-300 flex justify-center items-center">
                      <Play
                        fill="red"
                        className="text-red-600 scale-0 group-hover:scale-100 w-14 h-14 group-hover:shadow-[0_0_23px_10px_rgba(204,0,0,0.89)] duration-300"
                      />
                    </div>
                  </Link>
                  <Link href="#" className="font-semibold mt-2">
                    Inside Out 2
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  )
}

export default SliderTop