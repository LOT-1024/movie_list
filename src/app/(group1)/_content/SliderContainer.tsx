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
    link: '/moviedetail'
  },
  {
    fetchFunction: getPopularMovies,
    pageTitle: "Popular Movie",
    link: '/moviedetail'
  },
  {
    fetchFunction: getTopRatedTvSeries,
    pageTitle: "Top Rated Tv Series",
    link: '/tvdetail'
  },
  {
    fetchFunction: getPopularTvSeries,
    pageTitle: "Popular Tv Series",
    link: '/tvdetail'
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
          link = {item.link}
        />
      ))}
    </>
  );
};

export default SliderContainer;
