import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Table } from "../types/tournament";
import { IoIosArrowRoundForward } from "react-icons/io";
import { formatNumber, formatNumberForSrednia } from "../lib/helper";

interface Data {
  MSC?: number;
  KLUB?: string;
  SREDNIA?: number;
  SST?: number;
  SDY?: number;
  PLUSMINUS?: number;
  PKTTABELA?: number;
  B2?: number;
  TOR?: string;
  ZWA?: number;
  PANSTWO?: string;
  RAZEM?: number;
  PKT?: number;
  ŚREDNIA?: number;
  MIJANKI?: number;
  sort_by: number;
  PROCZWA: number;
  ZAWODNIK?: string;
  PARY: string;
  MSCTABELA?: number;
  PARA: string;
}

interface TableRow {
  sort_by: number;
}

interface Props {
  tableData?: Table;
  date?: number;
  logo?: StaticImageData | string;
  title?: string;
  fullName?: string;
}

const TournamentCard: React.FC<Props> = ({
  tableData,
  date,
  logo,
  title,
  fullName
}) => {
  const endPoint = tableData?.endPoint
    ?.split("_")
    ?.join(date?.toString() ?? "");

  // @ts-ignore
  const allRowsData: Data[][] | undefined | any = tableData?.data;

  const renderData = () => {
    let result: any = [];

    if (
      (title === "PGE Ekstraliga" || title === "Metalkas 2. Ekstraliga") &&
      allRowsData?.length
    ) {
      switch (tableData?.title) {
        case "Zawodnicy":
          result = allRowsData?.map((x: Data) => ({
            "#": x.MSC!,
            ZAWODNIK: x.ZAWODNIK!,
            SREDNIA: formatNumber(x.SREDNIA!, 3),
            sort_by: x.MSC!
          }));
          break;
        case "Start":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SST! ? formatNumber(x.SST! * 100, 1) + "%" : "",
            sort_by: x?.SST!
          }));
          break;
        case "Dystans":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SDY! ? formatNumber(x.SDY! * 100, 1) + "%" : "",
            sort_by: x.SDY!
          }));
          break;
        case "Pary":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            "PARY ": x.PARA!,
            "+/-": x.PLUSMINUS!.toString(),
            sort_by: +x.PLUSMINUS!
          }));
          break;
        case "Drużyny":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            KLUB: x.KLUB!,
            PUNKTY: x.PKTTABELA!,
            sort_by: x.MSCTABELA!
          }));
          break;
        case "Biegi":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            KLUB: x.KLUB!,
            "Biegi nr 2": formatNumber(x.B2!, 2),
            sort_by: x.B2!
          }));
          break;
        case "Tory":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            KLUB: x.TOR!,
            MIJANKI: formatNumber(x.MIJANKI!, 2),
            sort_by: x.MIJANKI!
          }));
          break;
        default:
          break;
      }
    } else if (title === "SGP" && allRowsData?.length) {
      switch (tableData?.title) {
        case "Klasyfikacja":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            RAZEM: x.RAZEM!,
            sort_by: x.MSC!
          }));
          break;
        case "Punkty":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            PKT: x.PKT!,
            sort_by: x.PKT!
          }));
          break;
        case "Średnia":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            ŚREDNIA: x.SREDNIA!,
            sort_by: x.SREDNIA!
          }));
          break;
        case "Start":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SST! ? formatNumber(x.SST! * 100, 1) + "%" : "",
            sort_by: x.SST!
          }));
          break;
        case "Dystans":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SDY! ? formatNumber(x.SDY! * 100, 1) + "%" : "",
            sort_by: x.SDY!
          }));
          break;
        case "Reprezentacje":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            PAŃSTWO: x.PANSTWO!,
            PKT: x.PKT!,
            sort_by: x.PKT!
          }));
          break;
        case "Tory":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            PAŃSTWO: x.TOR!,
            MIJANKI: x.MIJANKI!,
            sort_by: x.MIJANKI!
          }));
          break;
        default:
          break;
      }
    } else if (title === "SEC" && allRowsData?.length) {
      switch (tableData?.title) {
        case "Klasyfikacja":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,

            RAZEM: x.RAZEM!,
            sort_by: x.MSC!
          }));
          break;

        case "Średnia":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            ŚREDNIA: x.SREDNIA!,
            sort_by: x.SREDNIA!
          }));
          break;

        case "Start":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SST! ? formatNumber(x.SST! * 100, 1) + "%" : "",
            sort_by: x.SST!
          }));
          break;
        case "Dystans":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SDY! ? formatNumber(x.SDY! * 100, 1) + "%" : "",
            sort_by: x.SDY!
          }));
          break;
        case "Reprezentacje":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            PAŃSTWO: x.PANSTWO!,
            PKT: x.PKT!,
            sort_by: x.PKT!
          }));
          break;
        case "Tory":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            PAŃSTWO: x.TOR!,
            MIJANKI: x.MIJANKI!,
            sort_by: x.MIJANKI!
          }));
          break;
        default:
          break;
      }
    } else if (title === "Krajowa Liga Żużlowa" && allRowsData?.length) {
      switch (tableData?.title) {
        case "Zawodnicy":
          result = allRowsData?.map((x: Data) => ({
            "#": x.MSC!,
            ZAWODNIK: x.ZAWODNIK!,
            SREDNIA: formatNumber(x.SREDNIA!, 3),
            sort_by: x.MSC!
          }));
          break;
        case "Start":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SST! ? formatNumber(x.SST! * 100, 1) + "%" : "",
            sort_by: x.SST!
          }));
          break;
        case "Dystans":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            ZAWODNIK: x.ZAWODNIK!,
            Skuteczność: x.SDY! ? formatNumber(x.SDY! * 100, 1) + "%" : "",
            sort_by: x.SDY!
          }));
          break;
        case "Pary":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            "PARY ": x.PARA!,
            "+/-": x.PLUSMINUS!.toString(),
            sort_by: x.PLUSMINUS!
          }));
          break;
        case "Drużyny":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            KLUB: x.KLUB!,
            PUNKTY: x.PKTTABELA!,
            sort_by: x.MSCTABELA!
          }));
          break;
        case "Biegi":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            KLUB: x.KLUB!,
            "Biegi nr 2": x.B2!,
            sort_by: x.B2!
          }));
          break;
        case "Tory":
          result = allRowsData?.map((x: Data, index: number) => ({
            "#": index + 1,
            KLUB: x.TOR!,
            "WYGRANE POLE A": x.ZWA!,
            sort_by: x.ZWA!
          }));
          break;
        default:
          break;
      }
    }

    if (
      tableData?.title === "Zawodnicy" ||
      tableData?.title === "Drużyny" ||
      tableData?.title === "Klasyfikacja"
    ) {
      result.sort(
        (a: { sort_by: number }, b: { sort_by: number }) =>
          Number(a.sort_by) - Number(b.sort_by)
      );
    } else {
      result.sort(
        (a: { sort_by: number }, b: { sort_by: number }) =>
          Number(b.sort_by) - Number(a.sort_by)
      );
    }

    const keysToRender = result.length
      ? Object.keys(result[0]).filter((key) => key !== "sort_by")
      : [];
    const slicedData = result?.slice(0, 10);
    return (
      <>
        {/* Header */}
        <div className="flex flex-row justify-between my-4 min-w-full font-semibold  sm:font-bold items-start text-sm sm:text-base">
          {keysToRender.map((key, index) => (
            <p
              key={key}
              className={` text-lightGray  ${index == 1 && "text-center"}
            ${index == 0 && "text-left"}
            ${index == 2 && "text-right"} w-[33%]`}
            >
              {key}
            </p>
          ))}
        </div>

        {/* Row Values */}

        {slicedData.map((x: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-between my-4 min-w-full text-[11px] sm:text-base lg:text-sm"
            >
              {keysToRender.map((key: string) => {
                // console.log({ [key]: x[key] });
                return (
                  <p
                    key={key}
                    className={`w-[33%] text-lightGray truncate first:text-left last:text-right`}
                  >
                    {key === "#"
                      ? `${index + 1}`
                      : typeof x[key] === "number"
                      ? key === "SREDNIA" || key === "ŚREDNIA"
                        ? formatNumberForSrednia(x[key], 3)
                        : key === "MIJANKI" || key === "Biegi nr 2"
                        ? formatNumberForSrednia(x[key], 2)
                        : formatNumber(x[key], 0)
                      : x[key]}
                  </p>
                );
              })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="bg-darkGray h-full flex items-center flex-col rounded-md shadow-2xl w-[100%]  md:w-[49%] lg:w-[32%] my-4">
        <Image
          src={logo as StaticImageData}
          alt={"tournament-logo"}
          objectFit="contain"
          width={100}
          height={100}
          className="my-6 rounded"
        />
        <h2 className="text-lg text-center text-white font-bold">
          {tableData?.title}
        </h2>
        <div className="mt-4 w-full px-2  py-2 text-center ">
          {renderData()}
          <Link
            className="text-darkYellow no-underline flex justify-center items-center"
            href={{
              pathname: `/tournament/${endPoint}`,
              query: {
                league: fullName,
                table: tableData?.fullTableName,
                date: date
              }
            }}
          >
            <button
              className="flex relative transition-all w-min-content
                before:w-0 before:h-0.5 before:absolute before:bottom-0 before:right-0  before:transition-all before:duration-500
                hover:before:w-full hover:before:left-0 hover:before:bg-darkYellow"
            >
              Pokaż całą tabelę <IoIosArrowRoundForward size={30} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TournamentCard;
