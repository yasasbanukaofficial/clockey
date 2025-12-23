# Clockey ⏰

Beautiful, tiny utilities for working with current time and date in Node.js with ready-to-use API response wrappers for servers and lambdas.

---

## ✨ Highlights

- Minimal, dependency-free TypeScript helpers for time & date.
- Small API response wrappers returning a consistent `{ success, code, msg, ... }` shape for easy use in Express or serverless handlers.
- Works with CommonJS and ES Modules.

---

## 💿 Installation

```bash
npm install clockey
```

---

## ⚙️ Quick Examples

CommonJS:

```js
const { formatCurrentTime, currentHour24Str } = require("clockey");
console.log(formatCurrentTime());
console.log(currentHour24Str()); // '09'
```

ESM / TypeScript:

```ts
import { getCurrentTimeResponse } from "clockey/response/timeResponse";
console.log(getCurrentTimeResponse());
```

Express example (route):

```js
const express = require("express");
const { getCurrentTimeResponse } = require("clockey/response/timeResponse");
const app = express();

app.get("/api/time", (req, res) => res.json(getCurrentTimeResponse()));
app.listen(3000);
```

---

## 📚 Methods (Quick usage)

Below are grouped, easy-to-read tables for the package exports. Each table shows usage and what the function returns.

### ⏱️ Time helpers

| Name                  | Example               | Returns                                                                   |
| --------------------- | --------------------- | ------------------------------------------------------------------------- | ------- |
| `formatCurrentTime()` | `formatCurrentTime()` | Full object: numbers, padded strings, `timeAsString24` / `timeAsString12` |
| `currentHour()`       | `currentHour()`       | `{ hour24, hour12, hour24Str, hour12Str }`                                |
| `currentMinute()`     | `currentMinute()`     | `{ minute, minuteStr }`                                                   |
| `currentSecond()`     | `currentSecond()`     | `{ second, secondStr }`                                                   |
| `currentHour24Str()`  | `currentHour24Str()`  | `'09'` (string)                                                           |
| `currentHour12Str()`  | `currentHour12Str()`  | `'09'` (string)                                                           |
| `currentMinuteStr()`  | `currentMinuteStr()`  | `'05'` (string)                                                           |
| `currentSecondStr()`  | `currentSecondStr()`  | `'07'` (string)                                                           |
| `currentPeriod()`     | `currentPeriod()`     | `{ period: 'AM'                                                           | 'PM' }` |

### 🧾 Time response helpers

| Name                            | Example                         | Returns                                                             |
| ------------------------------- | ------------------------------- | ------------------------------------------------------------------- |
| `getCurrentTime()`              | `getCurrentTime()`              | `{ timeAsString12, timeAsString24 }`                                |
| `getCurrentTimeResponse()`      | `getCurrentTimeResponse()`      | `{ success, code, msg, data }` where `data` = `formatCurrentTime()` |
| `getCurrentHr()`                | `getCurrentHr()`                | returns `currentHour()`                                             |
| `getCurrenHrResponse()`         | `getCurrenHrResponse()`         | `{ success, code, msg, hour }`                                      |
| `getCurrentMinute()`            | `getCurrentMinute()`            | returns `currentMinute()`                                           |
| `getCurrentMinuteResponse()`    | `getCurrentMinuteResponse()`    | `{ success, code, msg, minute }`                                    |
| `getCurrentSecond()`            | `getCurrentSecond()`            | returns `currentSecond()`                                           |
| `getCurrentSecondResponse()`    | `getCurrentSecondResponse()`    | `{ success, code, msg, second }`                                    |
| `getCurrentHour24Str()`         | `getCurrentHour24Str()`         | string                                                              |
| `getCurrentHour24StrResponse()` | `getCurrentHour24StrResponse()` | `{ success, code, msg, value }`                                     |
| `getCurrentHour12Str()`         | `getCurrentHour12Str()`         | string                                                              |
| `getCurrentHour12StrResponse()` | `getCurrentHour12StrResponse()` | `{ success, code, msg, value }`                                     |
| `getCurrentMinuteStr()`         | `getCurrentMinuteStr()`         | string                                                              |
| `getCurrentMinuteStrResponse()` | `getCurrentMinuteStrResponse()` | `{ success, code, msg, value }`                                     |
| `getCurrentSecondStr()`         | `getCurrentSecondStr()`         | string                                                              |
| `getCurrentSecondStrResponse()` | `getCurrentSecondStrResponse()` | `{ success, code, msg, value }`                                     |
| `getCurrentPeriod()`            | `getCurrentPeriod()`            | `{ period }`                                                        |
| `getCurrentPeriodResponse()`    | `getCurrentPeriodResponse()`    | `{ success, code, msg, period }`                                    |

### 📅 Date helpers

| Name                  | Example               | Returns                                                 |
| --------------------- | --------------------- | ------------------------------------------------------- |
| `formatCurrentDate()` | `formatCurrentDate()` | `{ date: { yr, month, day, date, ordinal, fullDate } }` |
| `currentYear()`       | `currentYear()`       | `2025` (number)                                         |
| `currentMonth()`      | `currentMonth()`      | `{ monthNumber, monthName, monthStr }`                  |
| `currentDay()`        | `currentDay()`        | `{ dayIndex, dayName }`                                 |
| `currentDateNumber()` | `currentDateNumber()` | `{ date, dateStr }`                                     |
| `currentOrdinal()`    | `currentOrdinal()`    | `{ ordinal }`                                           |
| `currentFullDate()`   | `currentFullDate()`   | `{ fullDate }`                                          |

### 🗂 Date response helpers

| Name                             | Example                          | Returns                                                |
| -------------------------------- | -------------------------------- | ------------------------------------------------------ |
| `getCurrentDate()`               | `getCurrentDate()`               | `ClockeyDateResponse` (`{ success, code, msg, data }`) |
| `getCurrentYearResponse()`       | `getCurrentYearResponse()`       | `{ success, code, msg, value }`                        |
| `getCurrentMonthResponse()`      | `getCurrentMonthResponse()`      | `{ success, code, msg, value }`                        |
| `getCurrentDayResponse()`        | `getCurrentDayResponse()`        | `{ success, code, msg, value }`                        |
| `getCurrentDateNumberResponse()` | `getCurrentDateNumberResponse()` | `{ success, code, msg, value }`                        |
| `getCurrentOrdinalResponse()`    | `getCurrentOrdinalResponse()`    | `{ success, code, msg, value }`                        |
| `getCurrentFullDateResponse()`   | `getCurrentFullDateResponse()`   | `{ success, code, msg, value }`                        |

---

## ✅ Response shapes

Success (example):

```json
{
  "success": true,
  "code": 200,
  "msg": "Current time fetched successfully",
  "data": {
    /* payload */
  }
}
```

String-only helper responses use `value`:

```json
{
  "success": true,
  "code": 200,
  "msg": "Current hour string fetched",
  "value": "09"
}
```

---

## 🤝 Contributing

PRs welcome. Keep changes small and add tests for functional changes.

---

## 🌐 Links & socials

- GitHub: https://github.com/yasasbanukaofficial
- NPM: https://www.npmjs.com/~yasasbanukaofficial
- LinkedIn: https://www.linkedin.com/in/yasasbanukagunasena/

---
