import ContentList from "./_content/ContentList";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const Movies = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen top-0 fixed z-[90] bg-white dark:bg-black flex justify-center items-center">
          <Loader2 className="w-16 h-16 animate-spin text-blue-500 dark:text-red-500" />
        </div>
      }
    >
      <ContentList query={query} currentPage={currentPage}/>
    </Suspense>
  );
};

export default Movies;
