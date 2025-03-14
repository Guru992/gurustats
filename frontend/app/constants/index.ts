import Logo from "/public/assets/images/guru-stats-logo.png";
import PGEELOGO from "/public/assets/images/pge_new_logo.png";
import METALOGO from "/public/assets/images/meta_logo.png";
import KLZLOGO from "/public/assets/images/klz_biale-logo.jpeg";
import SECLOGO from "/public/assets/images/logo-SEC.png";
import SGPLOGO from "/public/assets/images/logo-SGP.png";
import CANALLOGO from "/public/assets/images/logo-canal.png";
import GKMLOGO from "/public/assets/images/gkm_logo.png";
import EUROSPORTLOGO from "/public/assets/images/logo-eurosport.png";
import WPLOGO from "/public/assets/images/WP_Sportowe_Fakty_ logo.png";

import ABOUT_PROFILE_1 from "/public/assets/images/about_profile_1.png";
import ABOUT_PROFILE_2 from "/public/assets/images/about_profile_2.png";
export const ICONS = {
  Logo,
  PGEELOGO,
  SGPLOGO,
  SECLOGO,
  CANALLOGO,
  GKMLOGO,
  EUROSPORTLOGO,
  WPLOGO,
  METALOGO,
  KLZLOGO,
};

export const IMAGES = {
  ABOUT_PROFILE_1,
  ABOUT_PROFILE_2,
};

export const TournamentList = [
  {
    title: "PGE Ekstraliga",
    logo: PGEELOGO,
    dates: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
    tables: [
      {
        id: Math.random().toString(36).substring(7),
        title: "Zawodnicy",
        endPoint: "pgee_",
        loading: true,
        data: null,
        fullTableName: "ZAWODNICY",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Start",
        endPoint: "pgee_",
        loading: true,
        data: null,
        fullTableName: "ALTERNATYWNE",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Dystans",
        fullTableName: "ALTERNATYWNE",
        endPoint: "pgee_",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Pary",
        fullTableName: "PARY",
        endPoint: "pgee_pary",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Drużyny",
        fullTableName: "DRUŻYNY",
        endPoint: "pgee_dru",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Biegi",
        fullTableName: "BIEGI",
        endPoint: "pgee_bg",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Tory",
        fullTableName: "TORY",
        endPoint: "pgee_tory",
        loading: true,
        data: null,
      },
    ],
  },
  {
    title: "SGP",
    logo: SGPLOGO,
    dates: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],

    tables: [
      {
        id: Math.random().toString(36).substring(7),
        title: "Klasyfikacja",
        endPoint: "sgp_gen",
        fullTableName: "GENERALNA",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        fullTableName: "ZAWODNICY",
        title: "Punkty",
        endPoint: "sgp_ind",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Średnia",
        endPoint: "sgp_ind",
        fullTableName: "ZAWODNICY",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Start",
        fullTableName: "ZAWODNICY",
        endPoint: "sgp_ind",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Dystans",
        endPoint: "sgp_ind",
        loading: true,
        fullTableName: "ZAWODNICY",
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Reprezentacje",
        fullTableName: "PAŃSTWA",
        endPoint: "sgp_pan",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Tory",
        endPoint: "sgp_tory",
        loading: true,
        fullTableName: "TORY",
        data: null,
      },
    ],
  },
  {
    title: "SEC",
    logo: SECLOGO,
    dates: [2024, 2023, 2022, 2021, 2020, 2019, 2018],

    tables: [
      {
        id: Math.random().toString(36).substring(7),
        title: "Klasyfikacja",
        endPoint: "sec_gen",
        fullTableName: "GENERALNA",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Średnia",
        fullTableName: "ZAWODNICY",
        endPoint: "sec_ind",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Start",
        endPoint: "sec_ind",
        fullTableName: "ZAWODNICY",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Dystans",
        endPoint: "sec_ind",
        loading: true,
        fullTableName: "ZAWODNICY",
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Reprezentacje",
        fullTableName: "PAŃSTWA",
        endPoint: "sec_pan",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Tory",
        fullTableName: "TORY",
        endPoint: "sec_tory",
        loading: true,
        data: null,
      },
    ],
  },

  {
    title: "Metalkas 2. Ekstraliga",
    logo: METALOGO,
    dates: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
    tables: [
      {
        id: Math.random().toString(36).substring(7),
        title: "Zawodnicy",
        endPoint: "drugaekstraliga_",
        loading: true,
        data: null,
        fullTableName: "ZAWODNICY",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Start",
        endPoint: "drugaekstraliga_",
        loading: true,
        fullTableName: "ALTERNATYWNE",

        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Dystans",
        endPoint: "drugaekstraliga_",
        loading: true,
        data: null,
        fullTableName: "ALTERNATYWNE",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Pary",
        endPoint: "drugaekstraliga_pary",
        fullTableName: "PARY",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Drużyny",
        endPoint: "drugaekstraliga_dru",
        fullTableName: "DRUŻYNY",
        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Biegi",
        endPoint: "drugaekstraliga_bg",
        fullTableName: "BIEGI",

        loading: true,
        data: null,
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Tory",
        endPoint: "drugaekstraliga_tory",
        loading: true,
        fullTableName: "TORY",
        data: null,
      },
    ],
  },
  {
    title: "Krajowa Liga Żużlowa",
    logo: KLZLOGO,
    dates: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
    tables: [
      {
        id: Math.random().toString(36).substring(7),
        title: "Zawodnicy",
        endPoint: "p2lz_",
        loading: true,
        data: null,
        fullTableName: "ZAWODNICY",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Pary",
        endPoint: "p2lz_pary",
        loading: true,
        data: null,
        fullTableName: "PARY",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Drużyny",
        endPoint: "p2lz_dru",
        loading: true,
        data: null,
        fullTableName: "DRUŻYNY",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Biegi",
        endPoint: "p2lz_bg",
        loading: true,
        data: null,
        fullTableName: "BIEGI",
      },
      {
        id: Math.random().toString(36).substring(7),
        title: "Tory",
        endPoint: "p2lz_tory",
        loading: true,
        data: null,
        fullTableName: "TORY",
      },
    ],
  },
];

export const defaultTableColumns: any = {
  "PGE Ekstraliga": {
    ZAWODNICY: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      KLUB: "KLUB",
      SREDNIA: "SREDNIA",
      PKT: "PKT",
      BON: "BON",
      BIEGI: "BIEGI",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      D: "D",
      W: "W",
      U: "U",
      T: "T",
      ZW: "%ZW",
      DOM: "DOM",
      WYJAZD: "WYJAZD",
      TORA: "A",
      TORB: "B",
      TORC: "C",
      TORD: "D",
    },
    ALTERNATYWNE: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      KLUB: "KLUB",
      SST: "SKUT START",
      SDY: "SKUT DYST",
      STARTPLUS: "START +",
      STARTMINUS: "START -",
      STARTBILANS: "BILANS START",
      DYSTPLUS: "DYST +",
      DYSTMINUS: "DYST -",
      DYSTBILANS: "BILANS DYST",
    },
    PARY: {
      PARA: "PARA",
      KLUB: "KLUB",
      SREDNIA: "SREDNIA",
      BIEGI: "BIEGI",
      PKT: "PKT",
      PKTRYWAL: "PKT RYWAL",
      PLUSMINUS: "+/-",
      SREDNIADOM: "ŚR DOM",
      BIEGIDOM: "BIEGI DOM",
      SREDNIAWYJAZD: "ŚR WYJ",
      BIEGIWYJAZD: "BIEGI WYJ",
      Z: "Z",
      R: "R",
      P: "P",
      WYNIK51: "5:1",
      WYNIK42: "4:2",
      WYNIK33: "3:3",
      WYNIK24: "2:4",
      WYNIK15: "1:5",
    },
    DRUŻYNY: {
      MSCTABELA: "MSC",
      KLUB: "KLUB",
      PKTTABELA: "PKTTABELA",
      BONTABELA: "BONTABELA",
      PKTZDOBYTE: "PKTZDOBYTE",
      PKTSTRACONE: "PKTSTRACONE",
      PLUSMINUS: "+/-",
      Z: "Z",
      R: "R",
      P: "P",
      PKTPER15: "PKTPER15",
      PKTDOMPER15: "PKTDOMPER15",
      PKTWYJAZDPER15: "PKTWYJAZDPER15",
      WIEK: "ŚR.WIEKU",

      TRIUMFY: "IND.TRIUMFY",
      BONUSY: "PKT BONUSOWE",
      WYNIK51: "5:1/5:0",
      WYNIK42: "4:2/3:2",
      WYNIK33: "3:3",
      WYNIK24: "24:/2:3",
      WYNIK15: "1:5/0:5",
      WYNIK3321: "3:3(2+1)",
      WYNIK3330: "3:3(3+0)",
      PKTJUNIORZY: "PKTJUNIORZY",
      PKTPOL: "PKTPOLACY",
      PKTOBCO: "PKTOBCO",
      PROCPKTPOL: "%PKTPOLACY",
      PROCPKTOBCO: "%PKTOBCO",
    },

    BIEGI: {
      KLUB: "KLUB",
      B1: "B1",
      B2: "B2",
      B3: "B3",
      B4: "B4",
      B5: "B5",
      B6: "B6",
      B7: "B7",
      B8: "B8",
      B9: "B9",
      B10: "B10",
      B11: "B11",
      B12: "B12",
      B13: "B13",
      B14: "B14",
      B15: "B15",
    },
    TORY: {
      TOR: "TOR",
      MIJANKI: "MIJANKI",
      ZWA: "ZW TOR A",
      ZWB: "ZW TOR B",
      ZWC: "ZW TOR C",
      ZWD: "ZW TOR D",
      PROCZWA: "%ZW TOR A",
      PROCZWB: "%ZW TOR B",
      PROCZWC: "%ZW TOR C",
      PROCZWD: "%ZW TOR D",
      PKTA: "PKT TOR A",
      PKTB: "PKT TOR B",
      PKTC: "PKT TOR C",
      PKTD: "PKT TOR D",
      PROCPKTA: "%PKT TOR A",
      PROCPKTB: "%PKT TOR B",
      PROCPKTC: "%PKT TOR C",
      PROCPKTD: "%PKT TOR D",
    },
  },

  SGP: {
    ZAWODNICY: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      PANSTWO: "PAŃSTWO",
      PKT: "PKT",
      PKTGP: "PKTGP",
      BIEGI: "BIEGI",
      SREDNIA: "SREDNIA",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      D: "D",
      W: "W",
      U: "U",
      T: "T",
      PROCZW: "%ZW",
      TORA: "A",
      TORB: "B",
      TORC: "C",
      TORD: "D",
    },

    GENERALNA: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      PANSTWO: "PANSTWO",
      R1: "R1",
      S1: "S1",
      R2: "R2",
      R3: "R3",
      R4: "R4",
      R5: "R5",
      R6: "R6",
      S2: "S2",
      R7: "R7",
      R8: "R8",
      R9: "R9",
      R10: "R10",
      R11: "R11",
      R12: "R12",
      RAZEM: "RAZEM",
      WYGRANE: "WYGRANE",
      PODIUM: "TOP 3",
      FINALY: "FINALY",
      POLFINALY: "POLFINALY",
      SKUTFINALY: "SKUTFINALY",
      SKUTPOLFINALY: "SKUTPOLFINALY",
    },
    PAŃSTWA: {
      PANSTWO: "PANSTWO",
      PKT: "PKT",
      BIEGI: "BIEGI",
      SREDNIA: "SREDNIA",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      PROCZW: "%ZW",
      WYGRANE: "WYGRANE",
      PODIUM: "TOP 3",
      FINALY: "FINALY",
      POLFINALY: "POLFINALY",
    },

    TORY: {
      RUNDA: "RUNDA",
      TOR: "TOR",
      ZWA: "ZW TOR A",
      ZWB: "ZW TOR B",
      ZWC: "ZW TOR C",
      ZWD: "ZW TOR D",
      PROCZWA: "%ZW TOR A",
      PROCZWB: "%ZW TOR B",
      PROCZWC: "%ZW TOR C",
      PROCZWD: "%ZW TOR D",
      PKTA: "PKT TOR A",
      PKTB: "PKT TOR B",
      PKTC: "PKT TOR C",
      PKTD: "PKT TOR D",
      PROCPKTA: "%PKT TOR A",
      PROCPKTB: "%PKT TOR B",
      PROCPKTC: "%PKT TOR C",
      PROCPKTD: "%PKT TOR D",
    },
  },

  SEC: {
    ZAWODNICY: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      PANSTWO: "PAŃSTWO",
      PKT: "PKT",
      // PKTGP: "PKTGP",
      BIEGI: "BIEGI",
      SREDNIA: "SREDNIA",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      D: "D",
      W: "W",
      U: "U",
      T: "T",
      PROCZW: "%ZW",
      TORA: "A",
      TORB: "B",
      TORC: "C",
      TORD: "D",
    },

    GENERALNA: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      PANSTWO: "PANSTWO",
      R1: "R1",
      R2: "R2",
      R3: "R3",
      R4: "R4",
      RAZEM: "RAZEM",
      WYGRANE: "WYGRANE",
      PODIUM: "TOP 3",
      FINALY: "FINALY",
      POLFINALY: "BARAŻE",
      SKUTFINALY: "SKUTFINAŁY",
      SKUTPOLFINALY: "SKUTBARAŻE",
    },
    PAŃSTWA: {
      PANSTWO: "PANSTWO",
      PKT: "PKT",
      BIEGI: "BIEGI",
      SREDNIA: "SREDNIA",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      PROCZW: "%ZW",
      WYGRANE: "WYGRANE",
      PODIUM: "TOP 3",
      FINALY: "FINALY",
      POLFINALY: "BARAŻE",
    },

    TORY: {
      RUNDA: "RUNDA",
      TOR: "TOR",
      ZWA: "ZW TOR A",
      ZWB: "ZW TOR B",
      ZWC: "ZW TOR C",
      ZWD: "ZW TOR D",
      PROCZWA: "%ZW TOR A",
      PROCZWB: "%ZW TOR B",
      PROCZWC: "%ZW TOR C",
      PROCZWD: "%ZW TOR D",
      PKTA: "PKT TOR A",
      PKTB: "PKT TOR B",
      PKTC: "PKT TOR C",
      PKTD: "PKT TOR D",
      PROCPKTA: "%PKT TOR A",
      PROCPKTB: "%PKT TOR B",
      PROCPKTC: "%PKT TOR C",
      PROCPKTD: "%PKT TOR D",
    },
  },

  "Metalkas 2. Ekstraliga": {
    ZAWODNICY: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      KLUB: "KLUB",
      SREDNIA: "SREDNIA",
      PKT: "PKT",
      BON: "BON",
      BIEGI: "BIEGI",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      D: "D",
      W: "W",
      U: "U",
      T: "T",
      ZW: "%ZW",
      DOM: "DOM",
      WYJAZD: "WYJAZD",
      TORA: "A",
      TORB: "B",
      TORC: "C",
      TORD: "D",
    },
    ALTERNATYWNE: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      KLUB: "KLUB",
      SST: "SKUT START",
      SDY: "SKUT DYST",
      STARTPLUS: "START +",
      STARTMINUS: "START -",
      STARTBILANS: "BILANS START",
      DYSTPLUS: "DYST +",
      DYSTMINUS: "DYST -",
      DYSTBILANS: "BILANS DYST",
    },
    PARY: {
      PARA: "PARA",
      KLUB: "KLUB",
      SREDNIA: "SREDNIA",
      BIEGI: "BIEGI",
      PKT: "PKT",
      PKTRYWAL: "PKT RYWAL",
      PLUSMINUS: "+/-",
      SREDNIADOM: "ŚR DOM",
      BIEGIDOM: "BIEGI DOM",
      SREDNIAWYJAZD: "ŚR WYJ",
      BIEGIWYJAZD: "BIEGI WYJ",
      Z: "Z",
      R: "R",
      P: "P",
      WYNIK51: "5:1",
      WYNIK42: "4:2",
      WYNIK33: "3:3",
      WYNIK24: "2:4",
      WYNIK15: "1:5",
    },
    DRUŻYNY: {
      MSCTABELA: "MSC",
      KLUB: "KLUB",
      PKTTABELA: "PKTTABELA",
      BONTABELA: "BONTABELA",
      PKTZDOBYTE: "PKTZDOBYTE",
      PKTSTRACONE: "PKTSTRACONE",
      PLUSMINUS: "+/-",
      Z: "Z",
      R: "R",
      P: "P",
      PKTPER15: "PKTPER15",
      PKTDOMPER15: "PKTDOMPER15",
      PKTWYJAZDPER15: "PKTWYJAZDPER15",
      WIEK: "ŚR.WIEKU",

      TRIUMFY: "IND.TRIUMFY",
      BONUSY: "PKT BONUSOWE",
      WYNIK51: "5:1/5:0",
      WYNIK42: "4:2/3:2",
      WYNIK33: "3:3",
      WYNIK24: "24:/2:3",
      WYNIK15: "1:5/0:5",
      WYNIK3321: "3:3(2+1)",
      WYNIK3330: "3:3(3+0)",
      PKTJUNIORZY: "PKTJUNIORZY",
      PKTPOL: "PKTPOLACY",
      PKTOBCO: "PKTOBCO",
      PROCPKTPOL: "%PKTPOLACY",
      PROCPKTOBCO: "%PKTOBCO",
    },

    BIEGI: {
      KLUB: "KLUB",
      B1: "B1",
      B2: "B2",
      B3: "B3",
      B4: "B4",
      B5: "B5",
      B6: "B6",
      B7: "B7",
      B8: "B8",
      B9: "B9",
      B10: "B10",
      B11: "B11",
      B12: "B12",
      B13: "B13",
      B14: "B14",
      B15: "B15",
    },
    TORY: {
      TOR: "TOR",
      MIJANKI: "MIJANKI",
      ZWA: "ZW TOR A",
      ZWB: "ZW TOR B",
      ZWC: "ZW TOR C",
      ZWD: "ZW TOR D",
      PROCZWA: "%ZW TOR A",
      PROCZWB: "%ZW TOR B",
      PROCZWC: "%ZW TOR C",
      PROCZWD: "%ZW TOR D",
      PKTA: "PKT TOR A",
      PKTB: "PKT TOR B",
      PKTC: "PKT TOR C",
      PKTD: "PKT TOR D",
      PROCPKTA: "%PKT TOR A",
      PROCPKTB: "%PKT TOR B",
      PROCPKTC: "%PKT TOR C",
      PROCPKTD: "%PKT TOR D",
    },
  },

  "Krajowa Liga Żużlowa": {
    ZAWODNICY: {
      MSC: "MSC",
      ZAWODNIK: "ZAWODNIK",
      KLUB: "KLUB",
      SREDNIA: "SREDNIA",
      PKT: "PKT",
      BON: "BON",
      BIEGI: "BIEGI",
      P3: "3",
      P2: "2",
      P1: "1",
      P0: "0",
      D: "D",
      W: "W",
      U: "U",
      T: "T",
      PROCZW: "%ZW",
      DOM: "DOM",
      WYJAZD: "WYJAZD",
      TORA: "A",
      TORB: "B",
      TORC: "C",
      TORD: "D",
    },

    PARY: {
      PARA: "PARA",
      KLUB: "KLUB",
      SREDNIA: "SREDNIA",
      BIEGI: "BIEGI",
      PKT: "PKT",
      PKTRYWAL: "PKT RYWAL",
      PLUSMINUS: "+/-",
      SREDNIADOM: "ŚR DOM",
      BIEGIDOM: "BIEGI DOM",
      SREDNIAWYJAZD: "ŚR WYJ",
      BIEGIWYJAZD: "BIEGI WYJ",
      Z: "Z",
      R: "R",
      P: "P",
      WYNIK51: "5:1",
      WYNIK42: "4:2",
      WYNIK33: "3:3",
      WYNIK24: "2:4",
      WYNIK15: "1:5",
    },
    DRUŻYNY: {
      MSCTABELA: "MSC",
      KLUB: "KLUB",
      PKTTABELA: "PKTTABELA",
      BONTABELA: "BONTABELA",
      PKTZDOBYTE: "PKTZDOBYTE",
      PKTSTRACONE: "PKTSTRACONE",
      PLUSMINUS: "+/-",
      Z: "Z",
      R: "R",
      P: "P",
      PKTPER15: "PKTPER15",
      PKTDOMPER15: "PKTDOMPER15",
      PKTWYJAZDPER15: "PKTWYJAZDPER15",
      WIEK: "ŚR.WIEKU",

      TRIUMFY: "IND.TRIUMFY",
      BONUSY: "PKT BONUSOWE",
      WYNIK51: "5:1/5:0",
      WYNIK42: "4:2/3:2",
      WYNIK33: "3:3",
      WYNIK24: "24:/2:3",
      WYNIK15: "1:5/0:5",
      WYNIK3321: "3:3(2+1)",
      WYNIK3330: "3:3(3+0)",
      PKTJUNIORZY: "PKTJUNIORZY",
      PKTPOL: "PKTPOLACY",
      PKTOBCO: "PKTOBCO",
      PROCPKTPOL: "%PKTPOLACY",
      PROCPKTOBCO: "%PKTOBCO",
    },

    BIEGI: {
      KLUB: "KLUB",
      B1: "B1",
      B2: "B2",
      B3: "B3",
      B4: "B4",
      B5: "B5",
      B6: "B6",
      B7: "B7",
      B8: "B8",
      B9: "B9",
      B10: "B10",
      B11: "B11",
      B12: "B12",
      B13: "B13",
      B14: "B14",
      B15: "B15",
    },
    TORY: {
      TOR: "TOR",
      ZWA: "ZW TOR A",
      ZWB: "ZW TOR B",
      ZWC: "ZW TOR C",
      ZWD: "ZW TOR D",
      PROCZWA: "%ZW TOR A",
      PROCZWB: "%ZW TOR B",
      PROCZWC: "%ZW TOR C",
      PROCZWD: "%ZW TOR D",
      PKTA: "PKT TOR A",
      PKTB: "PKT TOR B",
      PKTC: "PKT TOR C",
      PKTD: "PKT TOR D",
      PROCPKTA: "%PKT TOR A",
      PROCPKTB: "%PKT TOR B",
      PROCPKTC: "%PKT TOR C",
      PROCPKTD: "%PKT TOR D",
    },
  },
  // Separation=============================================
  ZAWODNICY: {
    MSC: "MSC",
    ZAWODNIK: "ZAWODNIK",
    KLUB: "KLUB",
    SREDNIA: "SREDNIA",
    PKT: "PKT",
    BON: "BON",
    BIEGI: "BIEGI",
    P3: "3",
    P2: "2",
    P1: "1",
    P0: "0",
    D: "D",
    W: "W",
    U: "U",
    T: "T",
    ZW: "%ZW",
    DOM: "DOM",
    WYJAZD: "WYJAZD",
    TORA: "A",
    TORB: "B",
    TORC: "C",
    TORD: "D",
  },

  ALTERNATYWNE: {
    MSC: "MSC",
    ZAWODNIK: "ZAWODNIK",
    KLUB: "KLUB",
    SST: "SKUT START",
    SDY: "SKUT DYST",
    STARTPLUS: "START +",
    STARTMINUS: "START -",
    STARTBILANS: "BILANS START",
    DYSTPLUS: "DYST +",
    DYSTMINUS: "DYST -",
    DYSTBILANS: "BILANS DYST",
  },

  PARY: {
    PARA: "PARA",
    KLUB: "KLUB",
    SREDNIA: "SREDNIA",
    BIEGI: "BIEGI",
    PKT: "PKT",
    PKTRYWAL: "PKT RYWAL",
    PLUSMINUS: "+/-",
    SREDNIADOM: "ŚR DOM",
    BIEGIDOM: "BIEGI DOM",
    SREDNIAWYJAZD: "ŚR WYJ",
    BIEGIWYJAZD: "BIEGI WYJ",
    Z: "Z",
    R: "R",
    P: "P",
    WYNIK51: "5:1",
    WYNIK42: "4:2",
    WYNIK33: "3:3",
    WYNIK24: "2:4",
    WYNIK15: "1:5",
  },

  DRUŻYNY: {
    KLUB: "KLUB",
    PKTTABELA: "PKTTABELA",
    BONTABELA: "BONTABELA",
    PKTZDOBYTE: "PKTZDOBYTE",
    PKTSTRACONE: "PKTSTRACONE",
    PLUSMINUS: "PLUSMINUS",
    Z: "Z",
    R: "R",
    P: "P",
    PKTPER15: "PKTPER15",
    PKTDOMPER15: "PKTDOMPER15",
    PKTWYJAZDPER15: "PKTWYJAZDPER15",
    WIEK: "WIEK",
    TRIUMFY: "TRIUMFY",
    BONUSY: "BONUSY",
    WYNIK51: "WYNIK51",
    WYNIK42: "WYNIK42",
    WYNIK33: "WYNIK33",
    WYNIK24: "WYNIK24",
    WYNIK15: "WYNIK15",
    WYNIK3321: "WYNIK3321",
    WYNIK3330: "WYNIK3330",
    PKTJUNIORZY: "PKTJUNIORZY",
    PKTPOL: "PKTPOL",
    PKTOBCO: "PKTOBCO",
    PROCPKTPOL: "PROCPKTPOL",
    PROCPKTOBCO: "PROCPKTOBCO",
    "liczba zm takt": "liczba zm takt",
    "śr pkt takt": "śr pkt takt",
    "liczba zm zwyklych": "liczba zm zwyklych",
    "śr pkt zwyklych": "śr pkt zwyklych",
    STARTWYG: "STARTWYG",
    STARTPOR: "STARTPOR",
    DYSTWYG: "DYSTWYG",
    DYSTPOR: "DYSTPOR",
    STARTBIL: "STARTBIL",
    DYSTBIL: "DYSTBIL",
    MSCTABELA: "MSCTABELA",
  },

  BIEGI: {
    KLUB: "KLUB",
    B1: "B1",
    B2: "B2",
    B3: "B3",
    B4: "B4",
    B5: "B5",
    B6: "B6",
    B7: "B7",
    B8: "B8",
    B9: "B9",
    B10: "B10",
    B11: "B11",
    B12: "B12",
    B13: "B13",
    B14: "B14",
    B15: "B15",
  },
  TORY: {
    TOR: "TOR",
    ZWA: "ZW TOR A",
    ZWB: "ZW TOR B",
    ZWC: "ZW TOR C",
    ZWD: "ZW TOR D",
    PROCZWA: "%ZW TOR A",
    PROCZWB: "%ZW TOR B",
    PROCZWC: "%ZW TOR C",
    PROCZWD: "%ZW TOR D",
    PKTA: "PKT TOR A",
    PKTB: "PKT TOR B",
    PKTC: "PKT TOR C",
    PKTD: "PKT TOR D",
    PROCPKTA: "%PKT TOR A",
    PROCPKTB: "%PKT TOR B",
    PROCPKTC: "%PKT TOR C",
    PROCPKTD: "%PKT TOR D",
  },
  GENERALNA: {
    ZAWODNIK: "ZAWODNIK",
    PANSTWO: "PANSTWO",
    R9: "R9",
    R8: "R8",
    R1: "R1",
    R2: "R2",
    R3: "R3",
    MSC: "MSC",
    R4: "R4",
    R5: "R5",
    R6: "R6",
    R7: "R7",
    R10: "R10",
    RAZEM: "RAZEM",
    WYGRANE: "WYGRANE",
    PODIUM: "PODIUM",
    POLFINALY: "POLFINALY",
    FINALY: "FINALY",
    SKUTFINALY: "SKUTFINALY",
    SKUTPOLFINALY: "SKUTPOLFINALY",
  },
  PAŃSTWA: {
    WYGRANE: "WYGRANE",
    PODIUM: "PODIUM",
    POLFINALY: "POLFINALY",
    FINALY: "FINALY",
    PANSTWO: "PANSTWO",
    P3: "P3",
    P2: "P2",
    P0: "P0",
    P1: "P1",
    PKT: "PKT",
    BIEGI: "BIEGI",
    PROCZW: "PROCZW",
    SREDNIA: "SREDNIA",
  },
};

export const keysToConvertToInt = [
  "ID",
  "MSC",
  "MSC2023",
  "KARY",
  "PKT",
  "PKTK2Z1",
  "PKTK2Z2",
  "PKTK2Z3",
  "PKTK1Z1",
  "PKTK1Z2",
  "PKTK1Z3",
  "K1",
  "K2",
  "K3",
  "K4",
  "K5",
  "K6",
  "K7",
  "K8",
  "K9",
  "K10",
  "K11",
  "K12",
  "K13",
  "K14",
  "PO1",
  "PO2",
  "PO3",
  "PO4",
  "PO5",
  "PO6",
  "R1",
  "R2",
  "R3",
  "R4",
  "R5",
  "R6",
  "R7",
  "R8",
  "R9",
  "R10",
  "R11",
  "R12",
  "R13",
  "R14",
  "R15",
  "R16",
  "R17",
  "R18",
  "POTOTAL",
];
export const STRAPI_URL =process.env.NEXT_PUBLIC_STRAPI_URL