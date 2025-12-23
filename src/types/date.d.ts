export interface DateData {
  yr: number;
  month: string;
  day: string;
  date: number;
  fullDate: string;
}

export interface ClockeyDateResponse {
  success: boolean;
  code: number;
  msg: string;
  data: DateData;
}
