import { currentTimeFormats } from "../core/time";
import { ClockeyTimeResponse } from "../types/time";

export function getCurrentTime() {
  const { time, utcTime } = currentTimeFormats();
  const response: ClockeyTimeResponse = {
    success: true,
    code: 200,
    msg: "Current server time fetched successfully",
    data: {
      time,
      utcTime,
    },
  };
  return response;
}
