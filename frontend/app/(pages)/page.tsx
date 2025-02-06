import TournamentWrapper from "./blog/component/TournamentWrapper";
import BlogsWrapper from "../components/BlogsWrapper";
interface Props {
  searchParams: {
    page: number | null;
  };
}
const PAGE_SIZE = 2;

export default async function Home({ searchParams }: Props) {
  const currentPageNumber = searchParams?.page || 1;

  return (
    <main className="bg-darkBlue min-h-[90vh] flex flex-col items-center py-4">
      <div className="mt-6 space-y-12 flex flex-col  w-[90vw]  sm:w-[95vw]">
        <TournamentWrapper />
        <div className="w-full flex justify-center flex-col ">
          <h1 className="text-3xl sm:text-5xl tracking-wider font-bold text-center capitalize text-white">
            Blogs
          </h1>
          <BlogsWrapper
            currentPage={currentPageNumber}
            pageSize={3}
            showPagination={true}
          />
        </div>
      </div>
    </main>
  );
}
