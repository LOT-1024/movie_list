import Image from "next/image";
import YoutubeCustom from "./_content/YoutubeCustomMovie";
import SimilarFilmSlider from "./_content/SimilarFilmMovie";
import { CreditType } from "@/interface/type";
import { getDataDetailTvSeries } from "@/api/movieapi";

const DetailTv = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = parseInt(params.id);
  const data = await getDataDetailTvSeries(id)
  return (
    <>
      <section className="h-[25.875rem] sm:h-[41.875rem] xl:h-[50rem] text-white flex justify-center items-center relative">
        <Image
          fill
          src={data.detailTvSeries.backdrop_path}
          alt={`Backdrop Image ${data.detailTvSeries.name}`}
          sizes="100%"
        />
        <div className="dark:bg-black absolute h-6 md:h-8 w-full bottom-0 dark:shadow-[0_-5px_20px_15px_rgba(0,0,0,0.9)]"></div>
        <div className="bg-black/50 absolute h-full w-full"></div>
        <div className="flex w-4/5 max-w-[80rem] absolute items-center justify-center gap-10">
          <div className="w-[21.875rem] aspect-[9/14] relative hidden lg:flex rounded-2xl animate-scaleCenter">
            <Image
              fill
              src={data.detailTvSeries.poster_path}
              sizes="100%"
              alt="Movie Poster"
              className="rounded-2xl"
              priority
            />
            <span className="sr-only">{data.detailTvSeries.name}</span>
          </div>
          <div className="flex flex-col gap-5 w-full flex-1">
            <h2 className="font-bold text-xl md:text-2xl animate-moveDown">
              {data.detailTvSeries.name}
            </h2>
            <p className="line-clamp-3 md:line-clamp-4 animate-moveDown1">
              {data.detailTvSeries.overview}
            </p>
            <div className="md:w-[65%] md:mx-auto grid grid-cols-4 gap-3 animate-moveDown2">
              {data.creditTvSeries.map((item:CreditType, i:number) => (
                <a
                  target="_blank"
                  href={`https://www.google.com/search?q=${encodeURIComponent(item.name)}`}
                  key={i}
                >
                  <Image
                    width={5000}
                    height={5000}
                    src={item.profile_path}
                    alt={`Actor ${item.name} Image`}
                    className="w-[6.75rem] aspect-[9/14] rounded-xl hover:rotate-3 cursor-pointer"
                  />
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
          {data.trailerdetailTvSeries.length > 0 ? (
            <YoutubeCustom videoList={data.trailerdetailTvSeries} />
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
          <SimilarFilmSlider similarData={data.recommendationsTvSeries} />
        </div>
      </section>
    </>
  );
};

export default DetailTv;
