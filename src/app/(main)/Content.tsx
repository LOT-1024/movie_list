"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonRed from "@/components/ButtonRed";
import ButtonWhite from "@/components/ButtonWhite";
import YoutubeModal from "./YoutubeModal";
import TopMovie from "./TopMovie";

const slides = [
  {
    title: "Slide 1",
    description: "This is the first slide of the Swiper carousel.",
    image:
      "https://image.tmdb.org/t/p/original/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg",
    poster:
      "https://image.tmdb.org/t/p/original/jwoaKYVqPgYemFpaANL941EF94R.jpg",
    videoId: "1xEfMnXyGkA",
  },
  {
    title: "Slide 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit commodi iure reprehenderit perferendis atque maxime dignissimos repellat possimus praesentium ipsam expedita, placeat ullam blanditiis ab obcaecati quasi beatae totam quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores doloremque consequuntur corrupti porro provident praesentium nemo accusamus quia delectus explicabo ipsa molestias, esse aspernatur aliquam expedita, dolor illum veniam officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consequuntur iste voluptates deleniti vero illum perspiciatis perferendis, magnam quibusdam harum unde facere fugiat sequi minus qui quis possimus! Nam, autem?",
    image:
      "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    poster:
      "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    videoId: "1xEfMnXyGkA",
  },
  {
    title: "Slide 3",
    description: "And this is the third and final slide.",
    image:
      "https://image.tmdb.org/t/p/original/qWPij8wKaRzmzkO29tfXRe43iVu.jpg",
    poster:
      "https://image.tmdb.org/t/p/original/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg",
    videoId: "1xEfMnXyGkA",
  },
];

const Content = () => {
  const [video, setVideo] = useState({
    videoId: "1xEfMnXyGkA",
    title: "Teto",
    status: false,
  });
  const clickHandle = (title: string, videoId: string) => {
    setVideo((prev) => ({
      ...prev,
      title,
      videoId,
      status: !prev.status,
    }));
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ hideOnClick: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card className="h-screen">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <div className="absolute left-0 top-0 z-10 flex min-h-screen w-full items-center">
                  <div className="ml-[12.5%] flex w-[21.938rem] flex-col gap-[1.875rem] text-white min-[450px]:w-[23rem] sm:w-[36.875rem]">
                    <h2 className="mb-2 text-[2.5rem] font-bold">
                      {slide.title}
                    </h2>
                    <p>{slide.description}</p>
                    <div className="flex gap-[1.25rem]">
                      <ButtonRed href="#">Watch now</ButtonRed>
                      <ButtonWhite
                        onClick={() => clickHandle(slide.title, slide.videoId)}
                      >
                        Trailer
                      </ButtonWhite>
                    </div>
                  </div>
                  <div className="relative ml-[5%] hidden h-[32.5rem] w-[21.875rem] lg:flex">
                    <Image
                      src={slide.poster}
                      fill
                      alt="Movie Poster"
                      className="rounded-2xl object-cover"
                      priority
                    />
                  </div>
                </div>
                <Image
                  src={slide.image}
                  fill
                  alt="Background Poster"
                  className="object-cover"
                  priority
                />
                <div className="absolute left-0 top-0 min-h-screen w-full bg-black/50"></div>
                <div className="shadowCustom absolute bottom-0 left-0 h-6 w-full"></div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {video.status && (
        <YoutubeModal
          videoId={video.videoId}
          title={video.title}
          onClick={() =>
            setVideo((prev) => ({ ...prev, status: !prev.status }))
          }
        />
      )}
      <TopMovie />
    </>
  );
};

export default Content;
