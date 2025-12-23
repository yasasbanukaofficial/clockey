export function currentTimeFormats() {
  const currentTime = new Date();

  const hrs = currentTime.getHours();
  const utcHr = currentTime.getUTCHours();

  const min = currentTime.getMinutes();
  const utcMin = currentTime.getUTCMinutes();

  const sec = currentTime.getSeconds();
  const utcSec = currentTime.getUTCSeconds();

  const period = hrs >= 12 ? "PM" : "AM";

  const timeAsString = `${hrs}:${min}:${sec} ${period}`;
  const utctimeAsString = `${utcHr}:${utcMin}:${utcSec}`;

  return {
    time: { timeAsString, hrs, min, sec, period },
    utcTime: { utctimeAsString, utcHr, utcMin, utcSec },
  };
}
