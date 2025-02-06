import axios from "axios";

export const TOURNAMENT_BASE_URL =
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_GURU_STATS_ENDPOINT
    : process.env.NEXT_PUBLIC_GURU_STATS_ENDPOINT;

export const getTournamentData = (param: string) => {
  return axios.get(`${TOURNAMENT_BASE_URL}/${param}`);
};
export const getGeneraliaDataById = (
  param: string,
  league: string,
  year: string
) => {
  return axios.get(
    `${TOURNAMENT_BASE_URL}/gen/${param}?league=${league}&year=${year}`
  );
};
export const getDrunzyDataByID = (
  param: string,
  league: string,
  year: string
) => {
  return axios.get(
    `${TOURNAMENT_BASE_URL}/dru/${param}?league=${league}&year=${year}`
  );
};
export const getZawodnicyDataById = (
  param: string,
  league: string,
  year: string
) => {
  return axios.get(
    `${TOURNAMENT_BASE_URL}/ind/${param}?league=${league}&year=${year}`
  );
};
export const getFullTableDataById = (id: string, league: string) => {
  return axios.get(
    `${TOURNAMENT_BASE_URL}/fullTableData/${id}?league=${league}`
  );
};

export const getPlayerData = (param: string) => {
  return axios.get(`${TOURNAMENT_BASE_URL}/zawpl/${param}`);
};
export const getTeamData = (param: string) => {
  return axios.get(`${TOURNAMENT_BASE_URL}/drupl/${param}`);
};
export const getPlayerDataSgp = (param: string) => {
  return axios.get(`${TOURNAMENT_BASE_URL}/zawsgp/${param}`);
};
export const getPlayerDataSec = (param: string) => {
  return axios.get(`${TOURNAMENT_BASE_URL}/zawsec/${param}`);
};
export const geTtrojkanakolejkeData = () => {
  return axios.get(`${TOURNAMENT_BASE_URL}/trojkanakolejke`);
};
