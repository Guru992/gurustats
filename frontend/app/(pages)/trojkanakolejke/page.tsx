"use client";

import { geTtrojkanakolejkeData } from "@/app/api";
import { ICONS, keysToConvertToInt } from "@/app/constants";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatNumber } from "@/app/lib/helper";
import { AgGridReact } from "@ag-grid-community/react";
import { ColumnResizedEvent, ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const page = () => {
  const [mounted, setMounted] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState<any>([]);
  const gridRef = useRef<any>(null);

    // set page title
    useEffect(() => {
      document.title = `#TROJKANAKOLEJKE - KLASYFIKACJA GENERALNA`;
    }, []);

  const handleFetchData = async () => {
    try {
      const response = await geTtrojkanakolejkeData();
      let transformedData = response?.data?.data?.map((obj: any) => {
        delete obj?._id;
        delete obj?.ID;
        delete obj["2"];

        Object.entries(obj).forEach(([key, value]: any) => {
          if (keysToConvertToInt.includes(key)) {
            obj[key] = typeof value == 'string' ? 0 : formatNumber(value, 0);
          }
          else {
            obj[key] = value
          }
        });

        return obj;
      });

      const columnsData: any = Object.keys(
        transformedData[0]
      ).map((key, index) => ({
        field: key,
        pinned: index == 0 || index == 1 ? "left" : null,
        lockPinned: true,
        filter: key == "NICK" ? true : false
      }));


      setColumns(columnsData);
      setRowData(transformedData);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    setMounted(true);
    handleFetchData();
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);
  const autoSizeAll = useCallback(() => {
    gridRef?.current.api.autoSizeAllColumns();
  }, []);

  const onColumnResized = useCallback((params: ColumnResizedEvent) => {
  }, []);
  return (
    <div className="bg-darkBlue min-h-[90vh] flex flex-col  px-5 sm:px-10 lg:px-20 py-5 text-white">
      <div className="flex justify-center items-center flex-col text-lightGray">
        <Image
          src={ICONS.PGEELOGO}
          alt="about-profile-image-1"
          height={400}
          width={400}
        />
        <div className="space-y-6 sm:space-y-6 text-base sm:text-xl text-center mt-10">
          <p>ZASADY ZABAWY:</p>
          <p>
            1. NA KAŻDĄ KOLEJKĘ PGE EKSTRALIGI NOMINUJ TRZECH ZAWODNIKÓW Z ZASTRZEŻENIAMI:
          </p>
          <p>
            A) KAŻDY ZAWODNIK MOŻE BYĆ NOMINOWANY TYLKO RAZ W TRAKCIE TRWANIA
            CAŁEJ RUNDY ZASADNICZEJ
          </p>
          <p>
            B) KAŻDY ZAWODNIK MOŻE BYĆ NOMINOWANY TYLKO RAZ W TRAKCIE TRWANIA
            CAŁEJ FAZY PLAY-OFF
          </p>
          <p>
            2. WYPISZ ICH NA TWITTERZE Z HASHTAGIEM #TROJKANAKOLEJKE LUB NA
            GRUPIE NA FACEBOOKU
          </p>
          <p>
            3. DO KLASYFIKACJI GENERALNEJ LICZĄ SIĘ WSZYSTKIE PUNKTY I BONUSY
            ZDOBYTE PRZEZ NOMINOWAYCH ZAWODNIKÓW
          </p>
          <h6 className="text-2xl sm:text-4xl text-white">
            #TROJKANAKOLEJKE - KLASYFIKACJA GENERALNA
          </h6>
        </div>

        <div className="bg-gray-800 mt-8 w-full">
          {mounted && !!rowData?.length && (
            <div className="ag-theme-quartz h-[500px] bg-black ">
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                loadingOverlayComponentParams={true}
                loadingCellRenderer={true}
                loadingOverlayComponent={true}
                defaultColGroupDef={{}}
                pagination={true}
                paginationPageSize={20}
                paginationPageSizeSelector={[20, 40, 60]}
                onGridReady={autoSizeAll}
                autoSizeStrategy={{
                  type: "fitCellContents",
                }}
                onColumnResized={onColumnResized}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
