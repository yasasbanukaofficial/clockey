export interface TimeData {
  hrs24: number;
  hrs12: number;
  min: number;
  sec: number;
  period: "AM" | "PM" | string;
  timeAsString24: string;
  timeAsString12: string;
}

export interface ClockeyTimeResponse {
  success: boolean;
  code: number;
  msg: string;
  data: TimeData;
}
