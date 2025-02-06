"use client";
import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import {
  ColDef,
  ModuleRegistry,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
  ValueFormatterParams
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { usePathname, useSearchParams } from "next/navigation";
import {
  getDrunzyDataByID,
  getGeneraliaDataById,
  getTournamentData,
  getZawodnicyDataById
} from "@/app/api";
import { formatNumber, formatNumberForSrednia } from "@/app/lib/helper";
import { useRouter } from "next/navigation";
import { defaultTableColumns } from "@/app/constants";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface Props {
  params: {
    id: string;
  };
}

const FullTournamentDetail = ({ params }: Props) => {
  const [rowData, setRowData] = useState([]);

  const [drunzyData, setDrunzyData] = useState<any>([]);
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "500px" }),
    []
  );
  const gridRef = useRef<any>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [generalinaData, setGeneralinaData] = useState<any>([]);
  const searchParam = useSearchParams();
  const fullTableName: any = searchParam.get("table")?.trim() || "";
  const currentLeague: any = searchParam.get("league")?.trim() || "";
  const date: any = searchParam.get("date")?.trim() || "";
  const pathName = usePathname();
  const router = useRouter();
  const newCols: any = generateColumns();
  const [columnDefs, setColumnDefs] = useState<ColDef[]>(newCols);

  // set page title
  useEffect(() => {
    document.title = `Tournament - ${currentLeague} ${date} - ${fullTableName}`;
  }, []);

  function percentageFormatter(
    params: ValueFormatterParams,
    decimal: number = 0
  ): string {
    return params.value == null
      ? ""
      : formatNumber(params.value * 100, decimal) + "%";
  }

  function generateColumns() {
    let columns: any = [];
    // keys to be percentage Formatted
    const keys = [
      "PROCPKTA",
      "PROCPKTB",
      "PROCPKTC",
      "PROCPKTD",
      "SST",
      "%POJ",
      "PROCPKTPOL",
      "PROCPKTOBCO",
      "PROCZW",
      "SKUTFINALY",
      "SKUTPOLFINALY",
      "PROCZWA",
      "PROCZWB",
      "PROCZWC",
      "PROCZWD"
    ];
    let _columns: { [key: string]: string } = currentLeague
      ? defaultTableColumns[currentLeague][fullTableName]
      : [];
    const columnsData: { field: string; headerName: string }[] = Object.keys(
      _columns
    ).map((key, index) => {
      let obj: any = {};
      obj.valueFormatter = (e: ValueFormatterParams) =>
        e.value == 0 ? 0 : e.value;
      if (key == "SDY") {
        obj.valueFormatter = (e: ValueFormatterParams) =>
          percentageFormatter(e, 1);
      }
      if (key == "ZW") {
        obj.valueFormatter = (e: ValueFormatterParams) =>
          percentageFormatter(e);
      }
      if (keys.includes(key)) {
        obj.valueFormatter = (e: ValueFormatterParams) =>
          percentageFormatter(e, 0);
      }
      if (key == "id" || key == "_id") {
        obj.hide = true;
      }
      obj.field = key;
      obj.headerName = _columns[key] || key;
      if (
        (fullTableName === "BIEGI" || fullTableName === "TORY") &&
        (currentLeague === "PGE Ekstraliga" ||
          currentLeague == "Metalkas 2. Ekstraliga" ||
          currentLeague == "Krajowa Liga Żużlowa")
      ) {
        obj.pinned = index == 0 ? "left" : null;
      } else if (
        fullTableName === "PAŃSTWA" &&
        (currentLeague === "SGP" || currentLeague === "SEC")
      ) {
        obj.pinned = index == 0 ? "left" : null;
      } else {
        obj.pinned = index == 0 || index == 1 ? "left" : null;
      }
      return obj;
    });

    columns = [...columnsData];

    return columns;
  }

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      floatingFilter: true,
      suppressHeaderMenuButton: true,
      suppressMovable: true,
      suppressFloatingFilterButton: true,
      minWidth: 50,
      maxWidth: 350
    };
  }, []);

  async function handleClick(e: any) {
    if (!e?.data?.id) return false;
    let statsData = e.data;
    let type = "";
    let curLeague = null;
    let data: any = {};
    // For Rider Only=================================
    if (
      fullTableName == "ALTERNATYWNE" ||
      fullTableName === "ZAWODNICY" ||
      fullTableName == "GENERALNA"
    ) {
      type = "rider";
      if (currentLeague === "SGP" || currentLeague == "SEC") {
        let response = null;
        if (!generalinaData?.length) {
          if (fullTableName == "GENERALNA") {
            response = await getZawodnicyDataById(
              statsData?.id,
              currentLeague?.toLowerCase(),
              date
            );
          } else {
            response = await getGeneraliaDataById(
              statsData?.id,
              currentLeague?.toLowerCase(),
              date
            );
          }
          statsData = { ...response?.data?.data, ...e.data };
        } else {
          statsData = { ...generalinaData, ...e.data };
        }
      }
      if (
        currentLeague === "PGE Ekstraliga" ||
        currentLeague === "Metalkas 2. Ekstraliga" ||
        currentLeague === "Krajowa Liga Żużlowa"
      ) {
        data.Średnia = statsData?.SREDNIA;
        data.Punkty = statsData?.PKT;
        data.Bonusy = statsData?.BON;
        data.Biegi = statsData?.BIEGI;
      } else if (currentLeague === "SGP") {
        data.PKTGP = statsData?.PKTGP;
        data.WYGRANE = statsData?.WYGRANE;
        data.TOP3 = statsData?.PODIUM;
        data.Średnia = statsData?.SREDNIA;
      } else if (currentLeague === "SEC") {
        data.RAZEM = statsData?.RAZEM;
        data.WYGRANE = statsData?.WYGRANE;
        data.TOP3 = statsData?.PODIUM;
        data.Średnia = statsData?.SREDNIA;
      }
      curLeague = currentLeague;
    }
    // For Teams Only=================================
    else if (
      fullTableName == "TORY" ||
      fullTableName == "BIEGI" ||
      fullTableName == "DRUŻYNY"
    ) {
      if (!drunzyData?.length) {
        if (currentLeague === "PGE Ekstraliga") {
          curLeague = "pgee";
        } else if (currentLeague === "Metalkas 2. Ekstraliga") {
          curLeague = "drugaekstraliga";
        } else if (currentLeague === "Krajowa Liga Żużlowa") {
          curLeague = "p2lz";
        } else {
          curLeague = currentLeague?.toLowerCase();
        }
        const response = await getDrunzyDataByID(statsData.id, curLeague, date);
        setDrunzyData(response?.data?.data);
        statsData = response.data.data;
      } else {
        statsData = drunzyData;
      }
      data.MSC = statsData?.MSCTABELA;
      data["PKT TABELA"] = statsData?.PKTTABELA;
      data["BON TABELA"] = statsData?.BONTABELA;
      data["+/-"] = statsData?.PLUSMINUS;
      data.KLUB = statsData?.KLUB;
      type = "team";
    }
    localStorage.setItem("stats-data", JSON.stringify(data));
    router.push(
      `${pathName}/${e.data?.id}?type=${type}&ep=${params.id}&fullTableName=${fullTableName}&currentLeague=${curLeague}&date=${date}`
    );
  }

  const handleFetchData = async () => {
    try {
      gridRef.current!.api.showLoadingOverlay();
      const response = await getTournamentData(params.id);
      let transformedData = response?.data?.data.map((obj: any) => {
        delete obj?._id;
        Object.entries(obj).forEach((entry: [string, number | any]) => {
          const [key, value] = entry;
          if (typeof value === "number") {
            obj[key] = isNaN(value)
              ? 0
              : key === "SREDNIA"
              ? formatNumberForSrednia(+value, 3)
              : formatNumber(+value);
          }
          if (typeof value === "string") {
            obj[key] = value ? value : null;
          }
        });
        return obj;
      });
      // sorting tables
      if (fullTableName?.includes("DRUŻYNY")) {
        let sortedData = transformedData.sort((a: any, b: any) => {
          return a.MSCTABELA - b.MSCTABELA;
        });
        setRowData(sortedData);
      } else if (fullTableName?.includes("BIEGI")) {
        let sortedData = transformedData.sort((a: any, b: any) => {
          return b.B2 - a.B2;
        });
        setRowData(sortedData);
      } else if (
        fullTableName?.includes("ZAWODNICY") ||
        fullTableName?.includes("ALTERNATYWNE") ||
        fullTableName?.includes("GENERALNA")
      ) {
        if (currentLeague === "SGP") {
          // Define the possible round columns
          const possibleRoundColumns = [
            ...Array.from({ length: 12 }, (_, i) => `R${i + 1}`),
            "S1",
            "S2"
          ];

          // Check which round columns are present in the first item of the response
          let presentRoundColumns: string[] = [];
          if (transformedData.length > 0) {
            presentRoundColumns = possibleRoundColumns.filter(
              (col) => col in transformedData[0]
            );
          }
          const processedResponse = columnDefs.filter((item: any) => {
            if (
              !possibleRoundColumns.includes(item.field) ||
              presentRoundColumns.includes(item.field)
            ) {
              return true;
            }
            return false;
          });
          gridRef.current!.api.setGridOption("columnDefs", processedResponse);
        }
        let sortedData = transformedData.sort((a: any, b: any) => {
          return a.MSC - b.MSC;
        });
        setRowData(sortedData);
      } else {
        setRowData(transformedData);
      }

      gridRef.current!.api.hideOverlay();
    } catch (error) {
      gridRef.current!.api.showNoRowsOverlay();
    } finally {
    }
  };

  const fetchData = useCallback(() => {
    if (columnDefs.length > 0) {
      handleFetchData();
    }
  }, []);

  const autoSizeStrategy = useMemo<
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy
  >(() => {
    return {
      type: "fitCellContents"
    };
  }, []);


  return (
    <div className="bg-darkBlue min-h-[90vh] flex flex-col  px-5 sm:px-10 lg:px-20 py-5 text-white">
      <div className="text-white text-left my-3 flex items-center gap-4 ">
        <div className="size-6">
          <IoArrowBackCircleOutline
            size={22}
            color="white"
            onClick={() => router.back()}
          />
        </div>
        <h4 className="sm:text-2xl md:text-xl text-sm ">
          {fullTableName} - {currentLeague} {date}
        </h4>
      </div>
      <div style={containerStyle}>
        <div className="ag-theme-quartz" style={gridStyle}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              ...defaultColDef,
              resizable: true
            }}
            onRowClicked={handleClick}
            // pagination={addPagination}
            // paginationPageSize={20}
            // paginationPageSizeSelector={[20, 40, 60]}
            autoSizeStrategy={autoSizeStrategy}
            onGridReady={fetchData}
            overlayLoadingTemplate="Ładowanie..."
            suppressColumnVirtualisation={true}
            alwaysShowHorizontalScroll={true}
            alwaysShowVerticalScroll={true}
            scrollbarWidth={12}
          />
        </div>
      </div>
    </div>
  );
};
export default FullTournamentDetail;
