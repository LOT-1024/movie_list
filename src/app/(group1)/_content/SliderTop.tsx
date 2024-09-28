"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Movie, SliderProps } from "@/interface/type";
import { useEffect, useState } from "react";

const SliderTop = ({ fetchFunction, pageTitle }: SliderProps) => {
  const [data, setData] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await fetchFunction()
        setData(data)
      } catch (err) {
        console.error(err)
        throw new Error('Error Data Fetching')
      }
    }
    fetchdata()
  }, [])

  return (
    <section className="mt-16">
      <div className="w-4/5 max-w-[80rem] mx-auto">
        <h1 className="font-bold text-2xl">{pageTitle}</h1>
        <Swiper
          className="mt-5"
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            570: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1130: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-fit flex flex-col justify-center items-center">
                <Link
                  href="#"
                  className="w-[9rem] aspect-[9/14] md:w-[12.5rem] lg:w-[13.5rem] rounded-2xl relative flex justify-center items-center"
                >
                  <Image
                    fill
                    src={item.poster_path}
                    alt="Movie Poster"
                    className="rounded-2xl"
                    priority
                  />
                  <div className="w-full h-full absolute rounded-2xl group hover:bg-black/50 duration-300 flex justify-center items-center">
                    <Play
                      fill="red"
                      className="text-red-600 scale-0 p-1 group-hover:scale-100 w-16 h-12 group-hover:shadow-[0_0_23px_10px_rgba(204,0,0,0.89)] rounded-xl duration-300"
                    />
                  </div>
                </Link>
                <Link href="#" className="font-semibold mt-2 line-clamp-1">
                  {item.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderTop;
