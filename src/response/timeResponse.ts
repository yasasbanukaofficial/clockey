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
  formatCurrentTimeUTC,
  currentHourUTC,
  currentMinuteUTC,
  currentSecondUTC,
  currentHour24StrUTC,
  currentHour12StrUTC,
  currentMinuteStrUTC,
  currentSecondStrUTC,
  currentPeriodUTC,
  currentTimeISO,
  currentTimeUnixSeconds,
  currentTimeUnixMilliseconds,
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

export function getCurrentTimeUTC() {
  const { timeAsString24, timeAsString12 } = formatCurrentTimeUTC();
  return { timeAsString12, timeAsString24 };
}

export function getCurrentTimeUTCResponse() {
  const time = formatCurrentTimeUTC();
  const response: ClockeyTimeResponse = {
    success: true,
    code: 200,
    msg: "Current UTC time fetched successfully",
    data: time,
  };
  return response;
}

export function getCurrentHrUTC() {
  return currentHourUTC();
}

export function getCurrentHrUTCResponse() {
  const hour = currentHourUTC();
  const response = {
    success: true,
    code: 200,
    msg: "Current UTC hour fetched successfully",
    hour,
  };
  return response;
}

export function getCurrentMinuteUTC() {
  return currentMinuteUTC();
}

export function getCurrentMinuteUTCResponse() {
  const minute = currentMinuteUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC minute fetched successfully",
    minute,
  };
}

export function getCurrentSecondUTC() {
  return currentSecondUTC();
}

export function getCurrentSecondUTCResponse() {
  const second = currentSecondUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC second fetched successfully",
    second,
  };
}

export function getCurrentHour24StrUTC() {
  return currentHour24StrUTC();
}

export function getCurrentHour24StrUTCResponse() {
  const value = currentHour24StrUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC hour24 string fetched",
    value,
  };
}

export function getCurrentHour12StrUTC() {
  return currentHour12StrUTC();
}

export function getCurrentHour12StrUTCResponse() {
  const value = currentHour12StrUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC hour12 string fetched",
    value,
  };
}

export function getCurrentMinuteStrUTC() {
  return currentMinuteStrUTC();
}

export function getCurrentMinuteStrUTCResponse() {
  const value = currentMinuteStrUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC minute string fetched",
    value,
  };
}

export function getCurrentSecondStrUTC() {
  return currentSecondStrUTC();
}

export function getCurrentSecondStrUTCResponse() {
  const value = currentSecondStrUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC second string fetched",
    value,
  };
}

export function getCurrentPeriodUTC() {
  return currentPeriodUTC();
}

export function getCurrentPeriodUTCResponse() {
  const period = currentPeriodUTC();
  return {
    success: true,
    code: 200,
    msg: "Current UTC period fetched successfully",
    period,
  };
}

export function getcurrentTimeISO() {
  return currentTimeISO();
}

export function getcurrentTimeISOResponse() {
  const value = currentTimeISO();
  return {
    success: true,
    code: 200,
    msg: "Current time ISO 8601 fetched successfully",
    value,
  };
}

export function getCurrentTimeUnixSeconds() {
  return currentTimeUnixSeconds();
}

export function getCurrentTimeUnixSecondsResponse() {
  const value = currentTimeUnixSeconds();
  return {
    success: true,
    code: 200,
    msg: "Current time Unix seconds fetched successfully",
    value,
  };
}

export function getCurrentTimeUnixMilliseconds() {
  return currentTimeUnixMilliseconds();
}

export function getCurrentTimeUnixMillisecondsResponse() {
  const value = currentTimeUnixMilliseconds();
  return {
    success: true,
    code: 200,
    msg: "Current time Unix milliseconds fetched successfully",
    value,
  };
}
