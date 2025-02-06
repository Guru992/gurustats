import { ValueFormatterParams } from "@ag-grid-community/core";

const parseDate = (dateStr: string) => {
  const dateParts: string[] | any = dateStr.split(".");
  return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
};

const dateComparator = (date1: string, date2: string) => {
  const parsedDate1 = parseDate(date1);
  const parsedDate2 = parseDate(date2);

  if (parsedDate1 < parsedDate2) return -1;
  if (parsedDate1 > parsedDate2) return 1;
  return 0;
};

export function generateColumns(data: any) {
  const columns: any = [];

  const firstRow = data;

  Object.keys(firstRow).forEach((key) => {
    return columns.push({
      field: key,
      header: key,
      hide: key == "BIRTHDAY" || key == "KRAJ" || key == "zawodnik",
      filter: key == "data" ? "agDateColumnFilter" : true,
      valueFormatter: (e: ValueFormatterParams) =>
        typeof e.value == "number" && e.value !== 0
          ? formatNumber(e.value)
          : e.value == 0
          ? 0
          : key === "data"
          ? reformatDate(e.value)
          : e.value,
      filterParams: {
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          const cellDate = parseDate(cellValue);
          if (cellDate < filterLocalDateAtMidnight) return -1;
          if (cellDate > filterLocalDateAtMidnight) return 1;
          return 0;
        },
        browserDatePicker: true,
        inRangeFloatingFilterDateFormat: "DD-MM-YYYY",
      },
      comparator: dateComparator,
      minWidth: key === "data" && 200,
    });
  });
  return columns;
}

export function formatNumber(value: number | string, decimalPlaces = 3) {
  if (value == 0) return 0;
  if (!value) return "";
  let num = Number(value);

  if (num % 1 !== 0) {
    return Number(num.toFixed(decimalPlaces));
  } else {
    return num;
  }
}

// to support srednia

export function formatNumberForSrednia(value: number | string, decimalPlaces = 0) {
  if (value == 0) return 0;
  if (!value) return "";
  // Convert the input value to a number
  let number = parseFloat(value as string);
  // Check if the conversion resulted in a valid number
  if (isNaN(number)) {
    return "";
  }
  // Format the number to three decimal places and return as a string
  return number.toFixed(decimalPlaces);
}


export function reformatDate(dateString: string) {
  const [day, month, year] = dateString?.split(".");
  console.log(`${day}.${month}.${year}`)

  return `${day}.${month}.${year}`;
}
