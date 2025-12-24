export interface TimeData {
  hr24: number;
  hr12: number;
  min: number;
  sec: number;
  period: "AM" | "PM" | string;
  timeIso: string;
  unixSeconds: number;
  unixMilliseconds: number;
  timeAsString24: string;
  timeAsString12: string;
}

export interface ClockeyTimeResponse {
  success: boolean;
  code: number;
  msg: string;
  data: TimeData;
}
