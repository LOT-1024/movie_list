import YoutubeCustom from "./_content/YoutubeCustomMovie";
import SimilarFilmSlider from "./_content/SimilarFilmMovie";
import { getDataDetailMovie } from "@/api/movieapi";
import { CreditType } from "@/interface/type";
import BackdropImage from "@/components/detailImage/BackdropImage";
import ImagePoster from "@/components/detailImage/ImagePoster";
import ImageActor from "@/components/detailImage/ImageActor";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const Detail = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = parseInt(params.id);
  const data = await getDataDetailMovie(id)
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen top-0 fixed z-[90] bg-white dark:bg-black flex justify-center items-center">
          <Loader2 className="w-16 h-16 animate-spin text-blue-500 dark:text-red-500" />
        </div>
      }
    >
      <section className="h-[25.875rem] sm:h-[41.875rem] xl:h-[50rem] text-white flex justify-center items-center relative">
        <BackdropImage backdrop_path={data.detailMovie.backdrop_path} title={data.detailMovie.title}/>
        <div className="dark:bg-black absolute h-6 md:h-8 w-full bottom-0 dark:shadow-[0_-5px_20px_15px_rgba(0,0,0,0.9)]"></div>
        <div className="bg-black/50 absolute h-full w-full"></div>
        <div className="flex w-4/5 max-w-[80rem] absolute items-center justify-center gap-10">
          <div className="w-[21.875rem] aspect-[9/14] relative hidden lg:flex rounded-2xl animate-scaleCenter">
            <ImagePoster poster_path={data.detailMovie.poster_path}/>
            <span className="sr-only">{data.detailMovie.title}</span>
          </div>
          <div className="flex flex-col gap-5 w-full flex-1">
            <h2 className="font-bold text-xl md:text-2xl animate-moveDown">
              {data.detailMovie.title}
            </h2>
            <p className="line-clamp-3 md:line-clamp-4 animate-moveDown1">
              {data.detailMovie.overview}
            </p>
            <div className="md:w-[65%] md:mx-auto grid grid-cols-4 gap-3 animate-moveDown2">
              {data.creditMovie.map((item:CreditType, i:number) => (
                <a
                  target="_blank"
                  href={`https://www.google.com/search?q=${encodeURIComponent(item.name)}`}
                  key={i}
                >
                  <ImageActor profile_path={item.profile_path} name={item.name}/>
                  <h2 className="w-full line-clamp-1 md:line-clamp-2 text-center">
                    {item.name}
                  </h2>
                  <h2 className="w-full line-clamp-1 md:line-clamp-2 text-center">
                    {item.character}
                  </h2>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Video Trailer */}
      <section className="mt-10">
        <div className="w-4/5 mx-auto max-w-[80rem] flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Video Trailer</h1>
          {data.trailerdetailMovie.length > 0 ? (
            <YoutubeCustom videoList={data.trailerdetailMovie} />
          ) : (
            <h2 className="mt-3 opacity-70 text-xl font-semibold">
              No Video Trailer
            </h2>
          )}
        </div>
      </section>
      {/* Similar Movie */}
      <section className="mt-10">
        <div className="w-4/5 mx-auto max-w-[80rem] flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Similar Film</h2>
          <SimilarFilmSlider similarData={data.recommendationsMovie} />
        </div>
      </section>
    </Suspense>
  );
};

export default Detail;
