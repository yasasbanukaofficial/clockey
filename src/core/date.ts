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
    date: {
      yr,
      month,
      day,
      date,
      ordinal,
      fullDate,
      dateIso: currentDate.toISOString(),
      unixSeconds: Math.floor(currentDate.getTime() / 1000),
      unixMilliseconds: currentDate.getTime(),
    },
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

export function formatCurrentDateUTC() {
  const now = new Date();

  const yr = now.getUTCFullYear();
  const month = MONTH_NAMES[now.getUTCMonth()];
  const day = DAY_NAMES[now.getUTCDay()];
  const date = now.getUTCDate();
  const ordinal =
    date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";

  const fullDate = `${month} ${date}${ordinal}, ${day}, ${yr}`;

  return {
    date: {
      yr,
      month,
      day,
      date,
      ordinal,
      fullDate,
      dateIso: now.toISOString(),
      unixSeconds: Math.floor(now.getTime() / 1000),
      unixMilliseconds: now.getTime(),
    },
  };
}

export function currentYearUTC() {
  return new Date().getUTCFullYear();
}

export function currentMonthUTC() {
  const now = new Date();
  const idx = now.getUTCMonth();
  const monthNumber = idx + 1;
  return {
    monthNumber,
    monthName: MONTH_NAMES[idx],
    monthStr: monthNumber.toString().padStart(2, "0"),
  };
}

export function currentDayUTC() {
  const now = new Date();
  const idx = now.getUTCDay();
  return {
    dayIndex: idx,
    dayName: DAY_NAMES[idx],
  };
}

export function currentDateNumberUTC() {
  const d = new Date().getUTCDate();
  return {
    date: d,
    dateStr: d.toString().padStart(2, "0"),
  };
}

export function currentOrdinalUTC() {
  const d = new Date().getUTCDate();
  const ordinal = d === 1 ? "st" : d === 2 ? "nd" : d === 3 ? "rd" : "th";
  return { ordinal };
}

export function currentFullDateUTC() {
  const now = new Date();
  const yr = now.getUTCFullYear();
  const month = MONTH_NAMES[now.getUTCMonth()];
  const day = DAY_NAMES[now.getUTCDay()];
  const date = now.getUTCDate();
  const ordinal =
    date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";
  const fullDate = `${month} ${date}${ordinal}, ${day}, ${yr}`;
  return { fullDate };
}

export function currentDateISO() {
  return new Date().toISOString();
}

export function currentDateUnixSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

export function currentDateUnixMilliseconds() {
  return new Date().getTime();
}
