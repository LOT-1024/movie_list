import { Play } from "lucide-react";
import ImageSimilar from "@/components/detailImage/ImageSimilar";
import Link from "next/link";
import { Pagination } from "@/components/List/Pagination";
import { TvSeriesType } from "@/interface/type";
import { getDiscoverTvSeries, searchTvSeries } from "@/api/movieapi";

const ContentList = async ({query, currentPage}:{query:string, currentPage:number}) => {
  let data: { tvseries: TvSeriesType[]; totalPages: number } = {
    tvseries: [],
    totalPages: 0,
  };
  if (query) {
    data = await searchTvSeries(query, currentPage);
  } else {
    data = await getDiscoverTvSeries(currentPage);
  }
  return (
    <section className="w-4/5 max-w-[80rem] mx-auto mt-3 md:mt-5 lg:mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
        {data.tvseries.map((item, i) => (
          <div key={i}>
            <Link
              href={`/tvdetail/${item.id}`}
              className="block w-full aspect-[9/14] relative"
            >
              <ImageSimilar
                poster_path={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                name={item.name}
              />
              <div className="w-full h-full absolute rounded-2xl group hover:bg-black/50 duration-300 flex justify-center items-center ease-in-out">
                <Play
                  fill="red"
                  className="text-red-600 scale-0 p-1 group-hover:scale-100 w-16 h-12 group-hover:shadow-[0_0_23px_10px_rgba(204,0,0,0.89)] ease-in-out rounded-xl duration-300"
                />
              </div>
            </Link>
            <Link
              href={`/tvdetail/${item.id}`}
              className="font-semibold mt-2 line-clamp-1 hover:text-red-700 duration-300 ease-in-out text-center"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination currentPage={currentPage} totalPages={data.totalPages}/>
      </div>
    </section>
  );
};

export default ContentList;
