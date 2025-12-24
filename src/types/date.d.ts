export interface DateData {
  yr: number;
  month: string;
  day: string;
  date: number;
  ordinal: string;
  fullDate: string;
  dateIso: string;
  unixSeconds: number;
  unixMilliseconds: number;
}

export interface ClockeyDateResponse {
  success: boolean;
  code: number;
  msg: string;
  data: DateData;
}
