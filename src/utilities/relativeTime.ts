import { isAfter, isBefore } from "./diffChecker";

export function relativeTime(timestamp: Date | number | string) {
  if (timestamp === null || timestamp === undefined) {
    return {
      error:
        "Timestamp is null or undefined, please read documentation for more info",
    };
  }
  const timestampDate =
    timestamp instanceof Date ? timestamp : new Date(timestamp);

  if (timestampDate.toString() === "Invalid Date") {
    return {
      error: "invalid timestamp, please read documentation for more info",
    };
  }
  let humanTxt: string;
  const durationType = isAfter(timestamp).isAfter
    ? isAfter(timestamp)
    : isBefore(timestamp);

  if (isAfter(timestamp).isAfter) {
    if (durationType.durationInSeconds < 60) {
      humanTxt = `${Math.round(durationType.durationInSeconds)} second(s) ago`;
    } else if (durationType.durationInMinutes < 60) {
      humanTxt = `${Math.round(durationType.durationInMinutes)} minute(s) ago`;
    } else if (durationType.durationInHours < 24) {
      humanTxt = `${Math.round(durationType.durationInHours)} hour(s) ago`;
    } else {
      const months = Math.round(durationType.durationInDays / 30);
      if (months < 12) {
        humanTxt = `${months} month(s) ago`;
      } else {
        const years = Math.round(months / 12);
        humanTxt = `${years} year(s) ago`;
      }
    }
  } else {
    return {
      error: "invalid timestamp, please read documentation for more info",
    };
  }

  return {
    timestamp: Date.parse(timestampDate.toString()),
    timestampDate,
    humanReadable: humanTxt,
    isInFuture: isAfter(timestamp).isAfter,
  };
}
