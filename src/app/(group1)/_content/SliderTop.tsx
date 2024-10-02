"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Play } from "lucide-react";
import { Movie, SliderProps, TvSeriesType } from "@/interface/type";
import { useEffect, useState } from "react";
import SkeletonItem from '@/components/skeleton/SkeletonPoster'
import ImageSimilar from "@/components/detailImage/ImageSimilar";

function isMovie(item: Movie | TvSeriesType): item is Movie {
  return 'title' in item;
}

const SliderTop = ({ fetchFunction, pageTitle, link }: SliderProps) => {
  const [data, setData] = useState<Movie[]|TvSeriesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [skeletonCount, setSkeletonCount] = useState(2);

  useEffect(() => {
    async function fetchdata() {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch movies. Please try again later.');
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

  const renderContent = () => {
    if (isLoading) {
      return Array(skeletonCount).fill(0).map((_, i) => (
        <SwiperSlide key={i}>
          <SkeletonItem />
        </SwiperSlide>
      ));
    }

    if (error) {
      return (
        <SwiperSlide>
          <div className="text-red-500">{error}</div>
        </SwiperSlide>
      );
    }

    if (data.length === 0) {
      return (
        <SwiperSlide>
          <div>No movies found.</div>
        </SwiperSlide>
      );
    }

    return data.map((item, i) => (
      <SwiperSlide key={i}>
          <Link
            href={`${link}/${item.id}`}
            className="w-full aspect-[9/14] md:w-[12.5rem] lg:w-[13.5rem] rounded-2xl relative flex justify-center items-center"
          >
            <ImageSimilar poster_path={item.poster_path} name={isMovie(item) ? item.title : item.name} />
            <div className="w-full h-full absolute rounded-2xl group hover:bg-black/50 duration-300 flex justify-center items-center ease-in-out">
              <Play
                fill="red"
                className="text-red-600 scale-0 p-1 group-hover:scale-100 w-16 h-12 group-hover:shadow-[0_0_23px_10px_rgba(204,0,0,0.89)] ease-in-out rounded-xl duration-300"
              />
            </div>
          </Link>
          <Link href={`${link}/${item.id}`} className="font-semibold mt-2 line-clamp-1 hover:text-red-700 duration-300 ease-in-out text-center">
            {isMovie(item) ? item.title : item.name}
          </Link>
      </SwiperSlide>
    ));
  };

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
          {renderContent()}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderTop;