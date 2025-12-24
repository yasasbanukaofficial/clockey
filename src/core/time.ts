const pad = (n: number) => n.toString().padStart(2, "0");

export function formatCurrentTime() {
  const now = new Date();

  const hr24 = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const period = hr24 >= 12 ? "PM" : "AM";
  const hr12 = hr24 % 12 || 12;

  return {
    hr24,
    hr12,
    min,
    sec,
    period,
    hr24Str: pad(hr24),
    hr12Str: pad(hr12),
    minStr: pad(min),
    secStr: pad(sec),
    timeAsString24: `${pad(hr24)}:${pad(min)}:${pad(sec)}`,
    timeAsString12: `${pad(hr12)}:${pad(min)}:${pad(sec)} ${period}`,
  };
}

export function currentHour() {
  const currentTime = new Date();
  const hr24 = currentTime.getHours();
  const hr12 = hr24 % 12 || 12;

  return {
    hour24: hr24,
    hour12: hr12,
    hour24Str: pad(hr24),
    hour12Str: pad(hr12),
  };
}

export function currentMinute() {
  const currentTime = new Date();
  const minute = currentTime.getMinutes();
  return {
    minute,
    minuteStr: pad(minute),
  };
}

export function currentSecond() {
  const currentTime = new Date();
  const second = currentTime.getSeconds();
  return {
    second,
    secondStr: pad(second),
  };
}

// String Based Responses
export function currentHour24Str() {
  return currentHour().hour24Str;
}

export function currentHour12Str() {
  return currentHour().hour12Str;
}

export function currentMinuteStr() {
  return currentMinute().minuteStr;
}

export function currentSecondStr() {
  return currentSecond().secondStr;
}

export function currentPeriod() {
  const hr24 = new Date().getHours();
  const period = hr24 >= 12 ? "PM" : "AM";
  return { period };
}

export function formatCurrentTimeUTC() {
  const now = new Date();

  const hr24 = now.getUTCHours();
  const min = now.getUTCMinutes();
  const sec = now.getUTCSeconds();

  const period = hr24 >= 12 ? "PM" : "AM";
  const hr12 = hr24 % 12 || 12;

  return {
    hr24,
    hr12,
    min,
    sec,
    period,
    hr24Str: pad(hr24),
    hr12Str: pad(hr12),
    minStr: pad(min),
    secStr: pad(sec),
    timeAsString24: `${pad(hr24)}:${pad(min)}:${pad(sec)}`,
    timeAsString12: `${pad(hr12)}:${pad(min)}:${pad(sec)} ${period}`,
  };
}

export function currentHourUTC() {
  const now = new Date();
  const hr24 = now.getUTCHours();
  const hr12 = hr24 % 12 || 12;

  return {
    hour24: hr24,
    hour12: hr12,
    hour24Str: pad(hr24),
    hour12Str: pad(hr12),
  };
}

export function currentMinuteUTC() {
  const minute = new Date().getUTCMinutes();
  return {
    minute,
    minuteStr: pad(minute),
  };
}

export function currentSecondUTC() {
  const second = new Date().getUTCSeconds();
  return {
    second,
    secondStr: pad(second),
  };
}

export function currentHour24StrUTC() {
  return currentHourUTC().hour24Str;
}

export function currentHour12StrUTC() {
  return currentHourUTC().hour12Str;
}

export function currentMinuteStrUTC() {
  return currentMinuteUTC().minuteStr;
}

export function currentSecondStrUTC() {
  return currentSecondUTC().secondStr;
}

export function currentPeriodUTC() {
  const hr24 = new Date().getUTCHours();
  const period = hr24 >= 12 ? "PM" : "AM";
  return { period };
}
