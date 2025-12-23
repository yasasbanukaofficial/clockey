import {
  currentHour,
  formatCurrentTime,
  currentMinute,
  currentSecond,
  currentHour24Str,
  currentHour12Str,
  currentMinuteStr,
  currentSecondStr,
  currentPeriod,
} from "../core/time";
import { ClockeyTimeResponse } from "../types/time";

export function getCurrentTime() {
  const { timeAsString24, timeAsString12 } = formatCurrentTime();

  return { timeAsString12, timeAsString24 };
}

export function getCurrentTimeResponse() {
  const time = formatCurrentTime();
  const response: ClockeyTimeResponse = {
    success: true,
    code: 200,
    msg: "Current time fetched successfully",
    data: time,
  };
  return response;
}

export function getCurrentHr() {
  return currentHour();
}

export function getCurrenHrResponse() {
  const hour = currentHour();
  const response = {
    success: true,
    code: 200,
    msg: "Current hour fetched successfully",
    hour,
  };
  return response;
}

export function getCurrentMinute() {
  return currentMinute();
}

export function getCurrentMinuteResponse() {
  const minute = currentMinute();
  return {
    success: true,
    code: 200,
    msg: "Current minute fetched successfully",
    minute,
  };
}

export function getCurrentSecond() {
  return currentSecond();
}

export function getCurrentSecondResponse() {
  const second = currentSecond();
  return {
    success: true,
    code: 200,
    msg: "Current second fetched successfully",
    second,
  };
}

// String data type responses
export function getCurrentHour24Str() {
  return currentHour24Str();
}

export function getCurrentHour24StrResponse() {
  const value = currentHour24Str();
  return {
    success: true,
    code: 200,
    msg: "Current hour24 string fetched",
    value,
  };
}

export function getCurrentHour12Str() {
  return currentHour12Str();
}

export function getCurrentHour12StrResponse() {
  const value = currentHour12Str();
  return {
    success: true,
    code: 200,
    msg: "Current hour12 string fetched",
    value,
  };
}

export function getCurrentMinuteStr() {
  return currentMinuteStr();
}

export function getCurrentMinuteStrResponse() {
  const value = currentMinuteStr();
  return {
    success: true,
    code: 200,
    msg: "Current minute string fetched",
    value,
  };
}

export function getCurrentSecondStr() {
  return currentSecondStr();
}

export function getCurrentSecondStrResponse() {
  const value = currentSecondStr();
  return {
    success: true,
    code: 200,
    msg: "Current second string fetched",
    value,
  };
}

export function getCurrentPeriod() {
  return currentPeriod();
}

export function getCurrentPeriodResponse() {
  const period = currentPeriod();
  return {
    success: true,
    code: 200,
    msg: "Current period fetched successfully",
    period,
  };
}
