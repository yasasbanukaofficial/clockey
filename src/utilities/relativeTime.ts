import { isAfter, isBefore } from "./diffChecker";

export function relativeTime(timestamp: Date | number | string) {
  if (timestamp === null || timestamp === undefined) {
    return {
      error:
        "timestamp is either null or undefined, please read documentation for more info",
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

  const afterResult = isAfter(timestamp);
  if ("error" in afterResult) {
    return afterResult;
  }

  const beforeResult = isBefore(timestamp);
  if ("error" in beforeResult) {
    return beforeResult;
  }

  const isFuture = afterResult.isAfter;
  const duration = isFuture ? afterResult : beforeResult;

  if (duration.durationInSeconds < 60) {
    const v = Math.round(duration.durationInSeconds);
    humanTxt = `${v} second${v === 1 ? "" : "s"} ${
      isFuture ? "from now" : "ago"
    }`;
  } else if (duration.durationInMinutes < 60) {
    const v = Math.round(duration.durationInMinutes);
    humanTxt = `${v} minute${v === 1 ? "" : "s"} ${
      isFuture ? "from now" : "ago"
    }`;
  } else if (duration.durationInHours < 24) {
    const v = Math.round(duration.durationInHours);
    humanTxt = `${v} hour${v === 1 ? "" : "s"} ${
      isFuture ? "from now" : "ago"
    }`;
  } else if (duration.durationInDays < 30) {
    const v = Math.round(duration.durationInDays);
    humanTxt = `${v} day${v === 1 ? "" : "s"} ${isFuture ? "from now" : "ago"}`;
  } else {
    const months = Math.round(duration.durationInDays / 30);
    if (months < 12) {
      humanTxt = `${months} month${months === 1 ? "" : "s"} ${
        isFuture ? "from now" : "ago"
      }`;
    } else {
      const years = Math.round(months / 12);
      humanTxt = `${years} year${years === 1 ? "" : "s"} ${
        isFuture ? "from now" : "ago"
      }`;
    }
  }

  return {
    timestamp: Date.parse(timestampDate.toString()),
    timestampDate,
    humanReadable: humanTxt,
    isInFuture: isFuture,
  };
}
