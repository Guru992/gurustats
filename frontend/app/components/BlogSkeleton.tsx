import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="relative flex flex-col w-[90%] sm:w-[49%] md:w-[32%] overflow-hidden bg-gray-50 justify-center cursor-pointer hover:shadow-xl">
      <div className="absolute inset-0 bg-center dark:bg-black "></div>
      <div className="group relative m-0 flex h-72 rounded-xl animate-pulse duration-1000 shadow-xl ring-gray-900/5 sm:mx-auto w-[100%]">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          {/* Placeholder image */}
          <div className="animate-pulse bg-gray-200 w-full h-full"></div>
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          {/* Placeholder text */}
          <div className="animate-pulse bg-gray-200 w-full h-10 mb-2"></div>
          <div className="animate-pulse bg-gray-200 w-full h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
