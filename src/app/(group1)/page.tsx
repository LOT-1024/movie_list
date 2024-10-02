import { Loader2 } from "lucide-react";
import PopularSection from "./_content/PopularSection";
import SliderContainer from "./_content/SliderContainer";
import { getMoviesPopularHero } from "@/api/movieapi";
import { Suspense } from "react";

const Home = async () => {
  const movieHero = await getMoviesPopularHero();
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen top-0 fixed z-[90] bg-white dark:bg-black flex justify-center items-center">
          <Loader2 className="w-16 h-16 animate-spin text-blue-500 dark:text-red-500" />
        </div>
      }
    >
      <PopularSection data={movieHero} />
      <SliderContainer />
    </Suspense>
  );
};

export default Home;
