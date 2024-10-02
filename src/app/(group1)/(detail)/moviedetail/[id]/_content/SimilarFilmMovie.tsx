"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Play } from "lucide-react";
import { Movie } from "@/interface/type";
import ImageSimilar from "@/components/detailImage/ImageSimilar";

const SimilarFilmSlider = ({
  similarData,
}: {
  similarData: Movie[];
}) => {
  return (
    <Swiper
      className="mt-5 w-full"
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
      {similarData.map((item, i) => (
        <SwiperSlide key={i}>
          <Link
            href={`${item.id}`}
            className="w-full aspect-[9/14] md:w-[12.5rem] lg:w-[13.5rem] rounded-2xl relative flex justify-center items-center"
          >
            <ImageSimilar poster_path={item.poster_path} name={item.title}/>
            <div className="w-full h-full absolute rounded-2xl group hover:bg-black/50 duration-300 flex justify-center items-center ease-in-out">
              <Play
                fill="red"
                className="text-red-600 scale-0 p-1 group-hover:scale-100 w-16 h-12 group-hover:shadow-[0_0_23px_10px_rgba(204,0,0,0.89)] ease-in-out rounded-xl duration-300"
              />
            </div>
          </Link>
          <Link
            href={`${item.id}`}
            className="font-semibold mt-2 line-clamp-1 hover:text-red-700 duration-300 ease-in-out text-center"
          >
            {item.title}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarFilmSlider;
