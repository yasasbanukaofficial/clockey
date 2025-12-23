const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatCurrentDate() {
  const currentDate = new Date();

  const yr = currentDate.getFullYear();
  const month = MONTH_NAMES[currentDate.getMonth()];
  const day = DAY_NAMES[currentDate.getDay()];
  const date = currentDate.getDate();
  const ordinal =
    date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";

  const fullDate = `${month} ${date}${ordinal}, ${day}, ${yr}`;

  return {
    date: { yr, month, day, date, ordinal, fullDate },
  };
}

export function currentYear() {
  return new Date().getFullYear();
}

export function currentMonth() {
  const now = new Date();
  const idx = now.getMonth();
  const monthNumber = idx + 1;
  return {
    monthNumber,
    monthName: MONTH_NAMES[idx],
    monthStr: monthNumber.toString().padStart(2, "0"),
  };
}

export function currentDay() {
  const now = new Date();
  const idx = now.getDay();
  return {
    dayIndex: idx,
    dayName: DAY_NAMES[idx],
  };
}

export function currentDateNumber() {
  const d = new Date().getDate();
  return {
    date: d,
    dateStr: d.toString().padStart(2, "0"),
  };
}

export function currentOrdinal() {
  const d = new Date().getDate();
  const ordinal = d === 1 ? "st" : d === 2 ? "nd" : d === 3 ? "rd" : "th";
  return { ordinal };
}

export function currentFullDate() {
  const now = new Date();
  const yr = now.getFullYear();
  const month = MONTH_NAMES[now.getMonth()];
  const day = DAY_NAMES[now.getDay()];
  const date = now.getDate();
  const ordinal =
    date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";
  const fullDate = `${month} ${date}${ordinal}, ${day}, ${yr}`;
  return { fullDate };
}
