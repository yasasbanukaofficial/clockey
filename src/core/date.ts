export function formatCurrentDate() {
  const currentDate = new Date();
  const dayAsString = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthAsString = [
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

  const yr = currentDate.getFullYear();
  const month = monthAsString[currentDate.getMonth()];
  const day = dayAsString[currentDate.getDay()];
  const date = currentDate.getDate();
  const ordinal =
    date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";

  const fullDate = `${month} ${date}${ordinal}, ${day}, ${yr}`;

  return {
    date: { yr, month, day, date, ordinal, fullDate },
  };
}
