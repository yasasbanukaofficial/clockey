export function createTimer() {
  let startTime: number | null = null;

  return {
    start: () => {
      startTime = performance.now();
    },
    end: () => {
      if (startTime === null) {
        return null;
      }
      const elapsed = performance.now() - startTime;
      startTime = null;
      return {
        elapsedMs: elapsed,
        elapsedSec: elapsed / 1000,
        elapsedMin: elapsed / 60000,
        elapsedHrs: elapsed / 3600000,
        text: `${elapsed.toFixed(2)} ms`,
      };
    },
  };
}
