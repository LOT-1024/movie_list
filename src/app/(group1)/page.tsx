import { Loader2 } from "lucide-react";
import PopularSection from "./_content/PopularSection";
import SliderContainer from "./_content/SliderContainer";
import { Suspense } from "react";

const Home = async () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen top-0 fixed z-[90] bg-white dark:bg-black flex justify-center items-center">
          <Loader2 className="w-16 h-16 animate-spin text-blue-500 dark:text-red-500" />
        </div>
      }
    >
      <PopularSection />
      <SliderContainer />
    </Suspense>
  );
};

export default Home;
