import { StaticImageData } from "next/image";

export type TournamentListType = {
  title: string;
  dates: number[];
  tables: Table[];
  logo?: string | StaticImageData;
};

export type Table = {
  title: string;
  endPoint: string;
  loading: boolean;
  data: null | any[];
  id: string;
  fullTableName: string;
};
export type SelectedTournamentType = {
  title: string;
  logo: string | undefined | StaticImageData;
  date: number;
  tables?: Table[];
};
