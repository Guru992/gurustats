"use client";
import React from "react";
import {
  SelectedTournamentType,
  Table,
  TournamentListType,
} from "../types/tournament";
import { ICONS, TournamentList } from "../constants";

interface Props {
  selectedTournament: SelectedTournamentType | undefined;
  setSelectedTournament: (e: SelectedTournamentType) => void;
  handleFetchData: (e: SelectedTournamentType) => void;
  findTournament?: TournamentListType;
  isDisable: boolean
}

const TournamentStatsBar = ({
  isDisable,
  selectedTournament,
  setSelectedTournament,
  findTournament,
  handleFetchData,
}: Props) => {
  const showLogo = () => {
    if (selectedTournament && selectedTournament.title == "PGE Ekstraliga") {
      return ICONS.PGEELOGO;
    } else if (selectedTournament && selectedTournament.title == "SEC") {
      return ICONS.SECLOGO;
    } else if (selectedTournament && selectedTournament.title == "SGP") {
      return ICONS.SGPLOGO;
    }
    else if (selectedTournament && selectedTournament.title == "Metalkas 2. Ekstraliga") {
      return ICONS.METALOGO;
    }
    else if (selectedTournament && selectedTournament.title == "Krajowa Liga Żużlowa") {
      return ICONS.KLZLOGO

    };
  };


  const logo: any = showLogo();

  const handleSelectDate = (x: SelectedTournamentType | any) => {
    setSelectedTournament({
      ...selectedTournament,
      date: x,
    } as SelectedTournamentType);
    handleFetchData({
      tables: selectedTournament?.tables,
      date: x,
      title: selectedTournament?.title || "",
      logo: logo,
    });
  };
  return (
    <div className="w-full sm:w-[60%]  flex justify-center items-center flex-col">
      <div className="mt-6 flex py-2  bg-darkGray px-2 rounded-md text-xl font-semibold  flex-wrap w-full justify-center">
        {TournamentList.map((item: TournamentListType) => {
          return (
            <button

              key={item.title}
              onClick={() => {
                handleFetchData({
                  title: item.title,
                  tables: item.tables,
                  date: item.dates[0],
                  logo: item.logo,
                });
              }}
              disabled={selectedTournament?.title === item?.title || isDisable}
              className={`${isDisable && "cursor-not-allowed"} text-lg hover:before:bg-lightBlue text-center w-40 rounded mx-2 my-3 relative min-w-fit px-4 min-h-12 overflow-hidden bg-transparent border-2 text-lightGray shadow-sm transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-lightGray before:transition-all before:duration-500 hover:text-white hover:shadow-lightGray hover:before:left-0 ${selectedTournament?.title !== item?.title && 'hover:before:w-full'}`}
            >
              <span
                className={`${selectedTournament?.title === item?.title
                  ? "text-lightBlue"
                  : "text-white"
                  } relative z-10`}
              >
                {item.title.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      <div className="text-white flex gap-4 mt-4  flex-wrap w-full justify-center">
        {findTournament?.dates?.length
          ? findTournament?.dates?.map((x) => {
            return (
              <button
                disabled={selectedTournament?.date === x || isDisable}
                key={x}
                onClick={() => handleSelectDate(x)}
                className={`${selectedTournament?.date === x
                  ? "bg-white text-black"
                  : "bg-black text-white"
                  } border-2 border-white px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-black ${isDisable && "cursor-not-allowed"}`}
              >
                {x}
              </button>
            );
          })
          : Array.from({ length: 5 })
            .fill(null)
            .map((_, ind) => (
              <div
                key={ind}
                className="border-2 border-white px-4 py-2 rounded  h-10 w-24 cursor-pointer animate-pulse bg-lightGray"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default TournamentStatsBar;
