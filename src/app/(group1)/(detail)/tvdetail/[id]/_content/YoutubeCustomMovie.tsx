"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const YoutubeCustom = ({
  videoList,
}: {
  videoList: { name: string; key: string }[];
}) => {
  const firstLink = {
    name: videoList[0].name,
    key: videoList[0].key,
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(firstLink);
  const [isLoading, setIsLoading] = useState({
    mainThumbnail: true,
    swiperThumbnails: Array(videoList.length).fill(true),
  });

  const handleMainThumbnailLoad = () => {
    setIsLoading((prev) => ({ ...prev, mainThumbnail: false }));
  };

  const handleSwiperThumbnailLoad = (index: number) => {
    setIsLoading((prev) => ({
      ...prev,
      swiperThumbnails: prev.swiperThumbnails.map((item, i) =>
        i === index ? false : item
      ),
    }));
  };

  return (
    <>
      <div className="mt-3 w-full aspect-video relative flex flex-col gap-4">
        {!isLoaded && (
          <>
            <h2 className="opacity-70 text-xl font-semibold line-clamp-1">
              {currentUrl.name}
            </h2>
            <button
              className="w-full h-full flex justify-center items-center"
              onClick={() => setIsLoaded((prev) => !prev)}
            >
              <Image
                height={5000}
                width={5000}
                src={`https://img.youtube.com/vi/${currentUrl.key}/0.jpg`}
                alt={`${currentUrl.name} Thumbnail`}
                onLoad={handleMainThumbnailLoad}
                className={`w-full aspect-video ${isLoading.mainThumbnail ? "hidden" : "block"}`}
                priority
              />
              <Play
                fill="red"
                className="text-red-600 w-14 h-14 absolute border-4 border-red-600 rounded-full p-1 shadow-[0_0_23px_10px_rgba(204,0,0,0.89)]"
              />
            </button>
          </>
        )}

        {isLoaded && (
          <>
            <h2 className="opacity-70 text-xl font-semibold line-clamp-1">
              {currentUrl.name}
            </h2>
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${currentUrl.key}?autoplay=1`}
              title={currentUrl.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        )}
      </div>
      <Swiper
        className="w-full"
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {videoList.map((item, i) => (
          <SwiperSlide key={i}>
            <button
              onClick={() => {
                setCurrentUrl(item);
                setIsLoaded(false);
                setIsLoading((prev) => ({ ...prev, mainThumbnail: true }));
              }}
            >
              <Image
                width={5000}
                height={5000}
                src={`https://img.youtube.com/vi/${item.key}/0.jpg`}
                alt={`${item.name} Thumbnail`}
                onLoad={() => handleSwiperThumbnailLoad(i)}
                className={`w-full h-auto aspect-video ${isLoading.swiperThumbnails[i] ? "hidden" : "block"}`}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default YoutubeCustom;
