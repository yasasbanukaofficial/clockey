import {
  formatCurrentDate,
  currentYear,
  currentMonth,
  currentDay,
  currentDateNumber,
  currentOrdinal,
  currentFullDate,
} from "../core/date";
import { ClockeyDateResponse } from "../types/date";

export function getCurrentDate() {
  const { date } = formatCurrentDate();
  const response: ClockeyDateResponse = {
    success: true,
    code: 200,
    msg: "Current date fetched successfully",
    data: date,
  };
  return response;
}

export function getCurrentYear() {
  return currentYear();
}

export function getCurrentYearResponse() {
  const value = currentYear();
  return {
    success: true,
    code: 200,
    msg: "Current year fetched successfully",
    value,
  };
}

export function getCurrentMonth() {
  return currentMonth();
}

export function getCurrentMonthResponse() {
  const value = currentMonth();
  return {
    success: true,
    code: 200,
    msg: "Current month fetched successfully",
    value,
  };
}

export function getCurrentDay() {
  return currentDay();
}

export function getCurrentDayResponse() {
  const value = currentDay();
  return {
    success: true,
    code: 200,
    msg: "Current day fetched successfully",
    value,
  };
}

export function getCurrentDateNumber() {
  return currentDateNumber();
}

export function getCurrentDateNumberResponse() {
  const value = currentDateNumber();
  return {
    success: true,
    code: 200,
    msg: "Current date number fetched successfully",
    value,
  };
}

export function getCurrentOrdinal() {
  return currentOrdinal();
}

export function getCurrentOrdinalResponse() {
  const value = currentOrdinal();
  return {
    success: true,
    code: 200,
    msg: "Current ordinal fetched successfully",
    value,
  };
}

export function getCurrentFullDate() {
  return currentFullDate();
}

export function getCurrentFullDateResponse() {
  const value = currentFullDate();
  return {
    success: true,
    code: 200,
    msg: "Current full date fetched successfully",
    value,
  };
}
