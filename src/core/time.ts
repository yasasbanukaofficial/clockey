export function formatCurrentTime() {
  const currentTime = new Date();

  let hrs24 = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  const period = hrs24 >= 12 ? "PM" : "AM";
  let hrs12 = hrs24 % 12;
  if (hrs12 === 0) hrs12 = 12;

  const pad = (n: number) => n.toString().padStart(2, "0");

  const timeAsString24 = `${pad(hrs24)}:${pad(min)}:${pad(sec)}`;
  const timeAsString12 = `${pad(hrs12)}:${pad(min)}:${pad(sec)} ${period}`;

  return {
    time: {
      hrs24,
      hrs12,
      min,
      sec,
      period,
      timeAsString24,
      timeAsString12,
    },
  };
}
