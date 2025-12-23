export interface TimeData {
  timeAsString: string;
  hrs: number;
  min: number;
  sec: number;
  period: "AM" | "PM" | string;
}

export interface UTCTimeData {
  utctimeAsString: string;
  utcHr: number;
  utcMin: number;
  utcSec: number;
}

export interface Time {
  time: TimeData;
  utcTime: UTCTimeData;
}

export interface ClockeyTimeResponse {
  success: boolean;
  code: number;
  msg: string;
  data: Time;
}
