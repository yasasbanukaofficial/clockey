import { currentDateFormats } from "../core/date";
import { ClockeyDateResponse } from "../types/date";

export function getCurrentDate() {
  const { date } = currentDateFormats();
  const response: ClockeyDateResponse = {
    success: true,
    code: 200,
    msg: "Current date fetched successfully",
    data: date,
  };
  return response;
}
