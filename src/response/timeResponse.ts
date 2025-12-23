import { formatCurrentTime } from "../core/time";
import { ClockeyTimeResponse } from "../types/time";

export function getCurrentTime() {
  const { time } = formatCurrentTime();
  const response: ClockeyTimeResponse = {
    success: true,
    code: 200,
    msg: "Current time fetched successfully",
    data: time,
  };
  return response;
}
