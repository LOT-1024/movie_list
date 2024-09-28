"use client";
import {
  getPopularMovies,
  getPopularTvSeries,
  getTopRatedMovies,
  getTopRatedTvSeries,
} from "@/api/movieapiclient";
import SliderTop from "./SliderTop";

const slideSection = [
  {
    fetchFunction: getTopRatedMovies,
    pageTitle: "Top Rated Movie",
  },
  {
    fetchFunction: getPopularMovies,
    pageTitle: "Popular Movie",
  },
  {
    fetchFunction: getTopRatedTvSeries,
    pageTitle: "Top Rated Tv Series",
  },
  {
    fetchFunction: getPopularTvSeries,
    pageTitle: "Popular Tv Series",
  },
];

const SliderContainer = () => {
  return (
    <>
      {slideSection.map((item, i) => (
        <SliderTop
          key={i}
          fetchFunction={item.fetchFunction}
          pageTitle={item.pageTitle}
        />
      ))}
    </>
  );
};

export default SliderContainer;
