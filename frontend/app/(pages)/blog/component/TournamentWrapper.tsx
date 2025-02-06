"use client";
import React, { useEffect, useState } from "react";
import TournamentCard from "@/app/components/TournamentCard";
import TournamentStatsBar from "@/app/components/TournamentStatsbar";
import { TournamentList } from "@/app/constants";
import {
  SelectedTournamentType,
  Table,
  TournamentListType,
} from "@/app/types/tournament";
import TournamentCardSkeleton from "./TournamentCardSkeleton";
import { getTournamentData } from "@/app/api";

const TournamentWrapper = () => {
  const [selectedTournament, setSelectedTournament] =
    useState<SelectedTournamentType>();
  const [loadingStates, setLoadingStates] = useState<boolean[]>();
  const [disableClick, setDisableClick] = useState(false)

  const findTournament = TournamentList.find(
    (tournament: TournamentListType) =>
      tournament.title === selectedTournament?.title
  );

  const handleFetchData = async (body?: SelectedTournamentType) => {
    if (disableClick) return false
    let renderData: SelectedTournamentType | null = null;
    const preservedQuery = JSON.parse(localStorage.getItem('selectedTournament')!);
    if (body) {
      setSelectedTournament(body);
      renderData = body;
    }

    else if (!!preservedQuery) {

      const initialState: SelectedTournamentType = {
        title: preservedQuery.title,
        date: preservedQuery.date,
        logo: preservedQuery.logo,
        tables: preservedQuery.tables,

      };

      renderData = initialState;
      setSelectedTournament(initialState);
    }
    else {
      const defaultTournament: any = TournamentList[0];
      const data = {
        title: defaultTournament.title,
        date: defaultTournament.dates[0],
        tables: defaultTournament.tables,
        logo: (defaultTournament.logo as string | undefined),
      }
      setSelectedTournament(data);
      renderData = data;

    }
    localStorage.setItem("selectedTournament", JSON.stringify(renderData));

    try {
      setDisableClick(true)

      setLoadingStates(Array(renderData.tables?.length).fill(true));
      let presevedTables: Table[] | undefined = renderData?.tables;
      await Promise.all(
        renderData?.tables?.map(async (table: Table, index: number) => {
          const modifiedEndpoint = table.endPoint
            ?.split("_")
            .join(renderData.date?.toString());
          if (modifiedEndpoint) {
            const response = await getTournamentData(modifiedEndpoint);
            const newTableIndex: number = presevedTables?.findIndex((x) => {
              return x.id == table.id;
            })!;

            if (presevedTables && newTableIndex !== null) {
              presevedTables[newTableIndex] = {
                ...presevedTables[newTableIndex],
                data: response.data?.data,
              };
            }
            setSelectedTournament({
              ...renderData,
              tables: presevedTables,
              date: renderData?.date,
            });
            setLoadingStates((prevStates: any) => {
              const newStates = [...prevStates];
              newStates[index] = false;
              return newStates;
            });
          }
          return null;
        }) || []
      );

    } catch (error) {
      const resetRenderData: any = { ...renderData }
      resetRenderData.tables.forEach((table: any) => {
        table.data = null;
      });
      setSelectedTournament(resetRenderData)
    } finally {
      setLoadingStates(Array(renderData?.tables?.length).fill(false));
      setDisableClick(false)

    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      {/* STATS */}
      <div className="w-full flex justify-center items-center flex-col space-y-12">
        {/* <h1 className="text-xl sm:text-4xl tracking-wider font-bold text-center capitalize text-white">
          Tournaments Stats
        </h1> */}
        <TournamentStatsBar
          isDisable={disableClick}
          selectedTournament={selectedTournament}
          setSelectedTournament={setSelectedTournament}
          findTournament={findTournament}
          handleFetchData={handleFetchData}
          key={selectedTournament?.title}
        />
      </div>

      {/* Tournament Cards */}
      <div className="w-full">
        {/* <h1 className="text-xl sm:text-4xl tracking-wider font-bold text-center capitalize text-white">
          Tournaments {selectedTournament?.date}
        </h1> */}
        <div className="mt-8 justify-center sm:justify-start w-full flex flex-wrap gap-3">
          {selectedTournament?.tables?.map(
            (tableData: Table, index: number) => {
              return loadingStates?.length && loadingStates[index] ? (
                <TournamentCardSkeleton key={index} />
              ) : (
                <TournamentCard
                  key={index}
                  fullName={selectedTournament?.title}
                  tableData={tableData}
                  logo={selectedTournament.logo || ""}
                  date={selectedTournament.date}
                  title={selectedTournament?.title}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default TournamentWrapper;
