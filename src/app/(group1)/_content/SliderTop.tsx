"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Movie, SliderProps } from "@/interface/type";
import { useEffect, useState } from "react";

const SkeletonItem = () => (
  <div className="w-fit flex flex-col justify-center items-center animate-pulse">
    <div className="w-[9rem] aspect-[9/14] md:w-[12.5rem] lg:w-[13.5rem] rounded-2xl bg-gray-300"></div>
    <div className="w-3/4 h-4 bg-gray-300 rounded mt-2"></div>
  </div>
);

const SliderTop = ({ fetchFunction, pageTitle }: SliderProps) => {
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skeletonCount, setSkeletonCount] = useState(2);

  useEffect(() => {
    async function fetchdata() {
      setIsLoading(true);
      try {
        const data = await fetchFunction();
        setData(data);
      } catch (err) {
        console.error(err);
        throw new Error('Error Data Fetching');
      } finally {
        setIsLoading(false);
      }
    }
    fetchdata();
  }, [fetchFunction]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 570) {
        setSkeletonCount(2);
      } else if (width < 1130) {
        setSkeletonCount(3);
      } else if (width < 1440) {
        setSkeletonCount(4);
      } else {
        setSkeletonCount(5);
      }
    };

    handleResize(); // Call once to set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          {isLoading
            ? Array(skeletonCount).fill(0).map((_, i) => (
                <SwiperSlide key={`skeleton-${i}`}>
                  <SkeletonItem />
                </SwiperSlide>
              ))
            : data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="w-fit flex flex-col justify-center items-center opacity-0 animate-fade-in">
                    <Link
                      href="#"
                      className="w-[9rem] aspect-[9/14] md:w-[12.5rem] lg:w-[13.5rem] rounded-2xl relative flex justify-center items-center"
                    >
                      <Image
                        fill
                        src={item.poster_path}
                        sizes="100%"
                        alt={`${item.title} Poster`}
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
              ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default SliderTop;