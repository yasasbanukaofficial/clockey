export function isBefore(timestamp: Date | number | string) {
  const date = new Date();
  let isBefore: boolean;
  let duration: number;
  if (timestamp instanceof Date) {
    isBefore = date.getTime() > timestamp.getTime();
    duration = date.getTime() - timestamp.getTime();
  } else if (typeof timestamp === "string") {
    const tsDate = new Date(timestamp);
    isBefore = date.getTime() > tsDate.getTime();
    duration = date.getTime() - tsDate.getTime();
  } else {
    isBefore = Date.now() > timestamp;
    duration = Date.now() - timestamp;
  }
  return {
    isBefore,
    durationInMs: Math.abs(duration),
    durationInSeconds: Math.abs(duration) / 1000,
    durationInMinutes: Math.abs(duration) / (1000 * 60),
    durationInHours: Math.abs(duration) / (1000 * 60 * 60),
    durationInDays: Math.abs(duration) / (1000 * 60 * 60 * 24),
  };
}

export function isAfter(timestamp: Date | number | string) {
  const date = new Date();
  let isAfter: boolean;
  let duration: number;
  if (timestamp instanceof Date) {
    isAfter = date.getTime() < timestamp.getTime();
    duration = timestamp.getTime() - date.getTime();
  } else if (typeof timestamp === "string") {
    const tsDate = new Date(timestamp);
    isAfter = date.getTime() < tsDate.getTime();
    duration = tsDate.getTime() - date.getTime();
  } else {
    isAfter = Date.now() < timestamp;
    duration = timestamp - Date.now();
  }
  return {
    isAfter,
    durationInMs: Math.abs(duration),
    durationInSeconds: Math.abs(duration) / 1000,
    durationInMinutes: Math.abs(duration) / (1000 * 60),
    durationInHours: Math.abs(duration) / (1000 * 60 * 60),
    durationInDays: Math.abs(duration) / (1000 * 60 * 60 * 24),
  };
}
