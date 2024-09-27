import PopularSection from "./_content/PopularSection";
import SliderTop from "./_content/SliderTop";
import { getMoviesPopularHero, getPopularMovies, getPopularTvSeries, getTopRatedMovies, getTopRatedTvSeries } from "@/api/movieapi";

const Home = async () => {
  const movieHero = await getMoviesPopularHero()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()
  const topRatedTvSeries = await getTopRatedTvSeries()
  const popularTvSeries = await getPopularTvSeries()
  return (
    <>
      <PopularSection data={movieHero}/>
      <SliderTop data={topRatedMovies} pageTitle="Top Rated Movie"/>
      <SliderTop data={popularMovies} pageTitle="Popular Movie"/>
      <SliderTop data={topRatedTvSeries} pageTitle="Top Rated Tv Series"/>
      <SliderTop data={popularTvSeries} pageTitle="Popular Tv Series"/>
    </>
  );
};

export default Home;
