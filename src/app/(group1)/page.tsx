import PopularSection from "./_content/PopularSection";
import SliderContainer from "./_content/SliderContainer";
import { getMoviesPopularHero } from "@/api/movieapi";

const Home = async () => {
  const movieHero = await getMoviesPopularHero()
  return (
    <>
      <PopularSection data={movieHero}/>
      <SliderContainer/>
    </>
  );
};

export default Home;
