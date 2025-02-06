"use client";
import {
  getPlayerData,
  getTeamData,
  getPlayerDataSec,
  getPlayerDataSgp,
  getZawodnicyDataById,
  getGeneraliaDataById,
  getDrunzyDataByID,
  getFullTableDataById
} from "@/app/api";
import { formatNumber, generateColumns, reformatDate } from "@/app/lib/helper";
import { useParams, useSearchParams } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);
const TournamentDetail = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const gridRef = useRef<any>(null);
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  const [headerData, setHeaderData] = useState<any>({});
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const fullTableName = searchParams.get("fullTableName");
  const currentLeague: string = searchParams.get("currentLeague") || "";
  const date: any = searchParams.get("date");
  const endPoint = searchParams.get("ep") || "";

  const addPagination = data.length > 90;

  // set page title
  useEffect(() => {
    document.title = `Gurustats - Level 3`;
  }, []);

  useEffect(() => {
    setMounted(true);
    handleFetchData();
    const statsData = JSON.parse(localStorage.getItem("stats-data")!);

    if (!statsData) {
      handleGetHeaderData();
    } else {
      setHeaderData(statsData);
    }
  }, []);

  const autoSizeAll = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  async function handleGetHeaderData() {
    let statsData: any = {};
    const fullTableData = await getFullTableDataById(
      params.detail?.toString(),
      endPoint
    );
    statsData = fullTableData.data.data;

    let data: any = {};

    // For Rider Only=================================
    if (
      fullTableName == "ALTERNATYWNE" ||
      fullTableName === "ZAWODNICY" ||
      fullTableName == "GENERALNA"
    ) {
      let response: any = null;
      if (currentLeague === "SGP" || currentLeague == "SEC") {
        if (fullTableName == "GENERALNA") {
          response = await getZawodnicyDataById(
            params.detail?.toString(),
            currentLeague?.toLowerCase(),
            date
          );
        } else {
          response = await getGeneraliaDataById(
            params.detail?.toString(),
            currentLeague?.toLowerCase(),
            date
          );
        }

        statsData = { ...statsData, ...response?.data?.data };
      }
      if (
        currentLeague === "PGE Ekstraliga" ||
        currentLeague === "Metalkas 2. Ekstraliga" ||
        currentLeague === "Krajowa Liga Żużlowa"
      ) {
        data.Średnia = statsData?.SREDNIA.toFixed(3);
        data.Punkty = statsData?.PKT;
        data.Bonusy = statsData?.BON;
        data.Biegi = statsData?.BIEGI;
      } else if (currentLeague === "SGP") {
        data.PKTGP = statsData?.PKTGP;
        data.WYGRANE = statsData?.WYGRANE;
        data.TOP3 = statsData?.PODIUM;
        data.Średnia = statsData?.SREDNIA.toFixed(3);
      } else if (currentLeague === "SEC") {
        data.RAZEM = statsData?.RAZEM;
        data.WYGRANE = statsData?.WYGRANE;
        data.TOP3 = statsData?.PODIUM;
        data.Średnia = statsData?.SREDNIA.toFixed(3);
      }
    }
    // For Teams Only=================================
    else if (
      fullTableName == "TORY" ||
      fullTableName == "BIEGI" ||
      fullTableName == "DRUŻYNY"
    ) {
      let curLeague = null;

      if (currentLeague === "PGE Ekstraliga") {
        curLeague = "pgee";
      } else if (currentLeague === "Metalkas 2. Ekstraliga") {
        curLeague = "drugaekstraliga";
      } else if (currentLeague === "Krajowa Liga Żużlowa") {
        curLeague = "p2lz";
      } else {
        curLeague = currentLeague?.toLowerCase();
      }
      const response = await getDrunzyDataByID(
        params.detail?.toString(),
        currentLeague,
        date
      );
      statsData = response.data.data;
      data.MSC = statsData?.MSCTABELA;
      data["PKT TABELA"] = statsData?.PKTTABELA;
      data["BON TABELA"] = statsData?.BONTABELA;
      data["+/-"] = statsData?.PLUSMINUS;
      data.KLUB = statsData?.KLUB;
    }
    setHeaderData(data);
  }

  const handleFetchData = async () => {
    try {
      let response = null;
      if (type == "team") {
        if (
          params.id.includes("meta") ||
          params.id.includes("drugaekstraliga") ||
          params.id.includes("krajowa") ||
          params.id.includes("p2lz") ||
          params.id.includes("pge")
        ) {
          response = await getTeamData(params.detail.toString());
        }
      } else if (type == "rider") {
        if (
          params.id.includes("meta") ||
          params.id.includes("drugaekstraliga") ||
          params.id.includes("krajowa") ||
          params.id.includes("p2lz") ||
          params.id.includes("pge")
        ) {
          response = await getPlayerData(params.detail.toString());
        } else if (params.id.includes("sgp")) {
          response = await getPlayerDataSgp(params.detail.toString());
        } else if (params.id.includes("sec")) {
          response = await getPlayerDataSec(params.detail.toString());
        }
      }
      let transformedData = response?.data?.data?.map((obj: any) => {
        delete obj?._id;
        delete obj?.id;
        Object.entries(obj).forEach(([key, value]: any) => {
          if (typeof value == "number") {
            obj[key] = formatNumber(value);
          } else {
            obj[key] = value;
          }
        });

        return obj;
      });
      const newCols = generateColumns(transformedData[0]);
      setColumns(newCols);
      setData(transformedData);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      floatingFilter: true,
      suppressHeaderMenuButton: true,
      suppressMovable: true,
      suppressFloatingFilterButton: true,
      suppressFloatingMenuButton: true,
      minWidth: 50,
      maxWidth: 350
    };
  }, []);

  console.log({ data });

  return (
    <div className="bg-darkBlue min-h-[90vh] flex flex-col  px-5 sm:px-10 lg:px-20 py-5 text-white">
      <div className="rounded min-h-52 py-8  w-full flex flex-col justify-center px-4 lg:px-20 bg-darkGray overflow-x-auto">
        <div className="flex ">
          {/* <Image src={imagePlaceholder} alt="player-image" objectFit="contain"
            width={300}
            height={300}
            className="my-6 rounded-md" /> */}
          <div className=" py-8 flex flex-col items-center justify-around ">
            {loading && !headerData.KLUB && !!headerData ? (
              <p className="text-gray-500 animate-pulse duration-500">
                Ładowanie...
              </p>
            ) : (
              <p className="text-2xl sm:text-4xl md:text-5xl font-semibold ">
                {data[0]?.zawodnik || headerData.KLUB}
              </p>
            )}
          </div>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-baseline  justify-center mt-0 border-2 ${
            type == "rider" && "md:grid-cols-3 lg:grid-cols-6"
          }`}
        >
          {type === "rider" && (
            <div className="border-2  py-8 flex flex-col items-center justify-around space-y-3">
              <p className="font-semibold items-center">Państwo</p>
              <div>
                {loading ? (
                  <p className="text-gray-500 animate-pulse duration-500">
                    Ładowanie...
                  </p>
                ) : (
                  <p>{data[0]?.KRAJ || data[0]?.kraj}</p>
                )}
              </div>
            </div>
          )}

          {type == "rider" && (
            <div className="border-2  py-8 flex flex-col items-center justify-around space-y-3">
              <p className="font-semibold items-center">Data urodzenia</p>
              {loading ? (
                <p className="text-gray-500 animate-pulse duration-500">
                  Ładowanie...
                </p>
              ) : (
                <p>
                  {(data[0]?.BIRTHDAY && reformatDate(data[0]?.BIRTHDAY)) ||
                    "No data"}
                </p>
              )}
            </div>
          )}
          {Object.entries(headerData)?.map((x: any, index: number) => {
            if (x[0] == "KLUB") return null;
            return (
              <div
                className="border-2  py-8 flex flex-col items-center justify-around space-y-3"
                key={index}
              >
                <p className="font-semibold items-center">{x[0]}</p>
                <p>{x[1] === 0 ? 0 : x[1] ? x[1] : "no data"}</p>
              </div>
            );
          })}
        </div>
      </div>
      {mounted && !!data?.length && (
        <div className="ag-theme-quartz h-[500px] bg-black ">
          <AgGridReact
            ref={gridRef}
            rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            loadingOverlayComponentParams={true}
            loadingCellRenderer={true}
            loadingOverlayComponent={true}
            pagination={addPagination}
            paginationPageSize={addPagination ? 20 : data?.length}
            paginationPageSizeSelector={[20, 40, 60]}
            onGridReady={autoSizeAll}
            autoSizeStrategy={{
              type: "fitCellContents"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TournamentDetail;
