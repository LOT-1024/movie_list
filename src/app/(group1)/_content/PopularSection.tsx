"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import YoutubeModal from "./YoutubeModal";
import { Movie } from "@/interface/type";

const containerAnimation = {
  starter: {},
  ended: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemsAnimation = {
  starter: {
    y: -20,
    opacity: 0,
  },
  ended: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

const PopularSection = ({ data }: { data: Movie[] }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [movieId, setMovieId] = useState(1022789);

  function modalHandler(itemId:number) {
    setMovieId(itemId);
    setModalStatus((prev) => !prev);
  }

  return (
    <section className="h-[16.875rem] sm:h-[41.875rem] xl:h-[50rem] text-white">
      <Swiper
        className="h-full"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ disableOnInteraction: false }}
        loop={true}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="h-full relative flex items-center justify-center">
              <motion.div
                className="w-full h-full relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                <Image
                  fill
                  src={item.backdrop_path}
                  alt={`Movie ${item.title} Background`}
                />
              </motion.div>
              <span className="sr-only">{item.title}</span>
              <div className="bg-black absolute h-6 md:h-8 w-full bottom-0 shadow-[0_-5px_20px_15px_rgba(0,0,0,0.9)]"></div>
              <div className="bg-black/50 absolute h-full w-full"></div>
              <div className="flex w-4/5 max-w-[80rem] absolute items-center justify-center gap-10">
                <motion.div
                  className="flex flex-col gap-5 w-full flex-1"
                  variants={containerAnimation}
                  initial={"starter"}
                  whileInView={"ended"}
                >
                  <motion.h2
                    className="font-bold text-xl md:text-2xl"
                    variants={itemsAnimation}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="line-clamp-3 md:line-clamp-4"
                    variants={itemsAnimation}
                  >
                    {item.overview}
                  </motion.p>
                  <motion.div
                    className="flex gap-4 text-xs md:text-base"
                    variants={itemsAnimation}
                  >
                    <button className="bg-red-700 px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_23px_5px_rgba(204,0,0,0.89)] duration-300">
                      Watch Now
                    </button>
                    <button
                      className="border-2 border-solid border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black duration-500"
                      onClick={() => modalHandler(item.id)}
                    >
                      Watch Trailer
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-[21.875rem] aspect-[9/14] relative hidden lg:flex rounded-2xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    fill
                    src={item.poster_path}
                    sizes="100%"
                    alt="Movie Poster"
                    className="rounded-2xl"
                    priority
                  />
                  <span className="sr-only">{item.title}</span>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalStatus && (
        <YoutubeModal
          setFunction={() => setModalStatus((prev) => !prev)}
          id={movieId}
        />
      )}
    </section>
  );
};

export default PopularSection;
