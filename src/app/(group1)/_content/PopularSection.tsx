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

const slides = [
  {
    title: "The Crow",
    description:
      "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
    image:
      "https://image.tmdb.org/t/p/original/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
    poster:
      "https://image.tmdb.org/t/p/original/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
    videoId: "1xEfMnXyGkA",
  },
  {
    title: "Rebel Ridge",
    description:
      "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
    image:
      "https://image.tmdb.org/t/p/original/cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg",
    poster:
      "https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg",
    videoId: "1xEfMnXyGkA",
  },
  {
    title: "Inside Out 2",
    description:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    image:
      "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    poster:
      "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    videoId: "1xEfMnXyGkA",
  },
];

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

const PopularSection = () => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <section className="h-[16.875rem] sm:h-[41.875rem] xl:h-[50rem] text-white">
      <Swiper
        className="h-full"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="h-full relative flex items-center justify-center">
              <motion.div
                className="w-full h-full relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                <Image fill src={item.image} alt="Movie Background" />
              </motion.div>
              <span className="sr-only">{item.title}</span>
              <div className="bg-black absolute h-6 md:h-8 w-full bottom-0 shadow-[0_-5px_20px_15px_rgba(0,0,0,0.9)]"></div>
              <div className="bg-black/50 absolute h-full w-full"></div>
              <div className="flex w-4/5 absolute items-center justify-center gap-10">
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
                    className="line-clamp-3 md:line-clamp-5"
                    variants={itemsAnimation}
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    className="flex gap-4 text-xs md:text-base"
                    variants={itemsAnimation}
                  >
                    <button className="bg-red-700 px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_23px_5px_rgba(204,0,0,0.89)] duration-300">
                      Watch Now
                    </button>
                    <button className="border-2 border-solid border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black duration-500" onClick={() => setModalStatus(prev => !prev)}>
                      Watch Trailer
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-[21.875rem] h-[32.5rem] relative hidden md:flex rounded-2xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    fill
                    src={item.poster}
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
        <YoutubeModal setFunction={() => setModalStatus((prev) => !prev)} />
      )}
    </section>
  );
};

export default PopularSection;
