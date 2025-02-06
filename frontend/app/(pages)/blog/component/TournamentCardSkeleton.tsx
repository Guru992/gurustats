import React from "react";

const TournamentCardSkeleton = () => {
  return (
    <div className="bg-darkGray h-full flex py-4 items-center flex-col rounded-md shadow-2xl w-[90%] sm:w-[49%] md:w-[32%] lg:w-[32%] my-4 animate-pulse-slower">
      <div className="w-20 h-20 rounded-full bg-gray-300"></div>
      <h2 className="text-2xl text-center text-white font-bold mt-4">
        Ładowanie...
      </h2>
      <div className="mt-4 w-full px-6 py-2 text-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex items-center justify-between my-4">
            <div className="w-24 h-4 bg-gray-300"></div>
            <div className="w-24 h-4 bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentCardSkeleton;
