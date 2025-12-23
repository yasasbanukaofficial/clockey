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

| Name                  | Example Usage                       | Output Format                                                                                        | Example Data                                                                                                                                                              |
| --------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formatCurrentTime()` | `const time = formatCurrentTime();` | `{ hr24, hr12, min, sec, period, hr24Str, hr12Str, minStr, secStr, timeAsString24, timeAsString12 }` | `{ hr24: 9, hr12: 9, min: 5, sec: 7, period: 'AM', hr24Str: '09', hr12Str: '09', minStr: '05', secStr: '07', timeAsString24: '09:05:07', timeAsString12: '09:05:07 AM' }` |
| `currentHour()`       | `const hr = currentHour();`         | `{ hour24, hour12, hour24Str, hour12Str }`                                                           | `{ hour24: 9, hour12: 9, hour24Str: '09', hour12Str: '09' }`                                                                                                              |
| `currentMinute()`     | `const min = currentMinute();`      | `{ minute, minuteStr }`                                                                              | `{ minute: 5, minuteStr: '05' }`                                                                                                                                          |
| `currentSecond()`     | `const sec = currentSecond();`      | `{ second, secondStr }`                                                                              | `{ second: 7, secondStr: '07' }`                                                                                                                                          |
| `currentHour24Str()`  | `const h = currentHour24Str();`     | `string`                                                                                             | `'09'`                                                                                                                                                                    |
| `currentHour12Str()`  | `const h = currentHour12Str();`     | `string`                                                                                             | `'09'`                                                                                                                                                                    |
| `currentMinuteStr()`  | `const m = currentMinuteStr();`     | `string`                                                                                             | `'05'`                                                                                                                                                                    |
| `currentSecondStr()`  | `const s = currentSecondStr();`     | `string`                                                                                             | `'07'`                                                                                                                                                                    |
| `currentPeriod()`     | `const p = currentPeriod();`        | `{ period }`                                                                                         | `{ period: 'AM' }`                                                                                                                                                        |

### 🧾 Time response helpers

| Name                            | Example Usage                              | Output Format                        | Example Data                                                                              |
| ------------------------------- | ------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| `getCurrentTime()`              | `const data = getCurrentTime();`           | `{ timeAsString12, timeAsString24 }` | `{ timeAsString12: '09:05:07 AM', timeAsString24: '09:05:07' }`                           |
| `getCurrentTimeResponse()`      | `res.json(getCurrentTimeResponse());`      | `{ success, code, msg, data }`       | `{ success: true, code: 200, msg: 'Current time fetched successfully', data: {...} }`     |
| `getCurrentHr()`                | `const hr = getCurrentHr();`               | returns `currentHour()`              | `{ hour24: 9, hour12: 9, hour24Str: '09', hour12Str: '09' }`                              |
| `getCurrenHrResponse()`         | `res.json(getCurrenHrResponse());`         | `{ success, code, msg, hour }`       | `{ success: true, code: 200, msg: 'Current hour fetched successfully', hour: {...} }`     |
| `getCurrentMinute()`            | `const min = getCurrentMinute();`          | returns `currentMinute()`            | `{ minute: 5, minuteStr: '05' }`                                                          |
| `getCurrentMinuteResponse()`    | `res.json(getCurrentMinuteResponse());`    | `{ success, code, msg, minute }`     | `{ success: true, code: 200, msg: 'Current minute fetched successfully', minute: {...} }` |
| `getCurrentSecond()`            | `const sec = getCurrentSecond();`          | returns `currentSecond()`            | `{ second: 7, secondStr: '07' }`                                                          |
| `getCurrentSecondResponse()`    | `res.json(getCurrentSecondResponse());`    | `{ success, code, msg, second }`     | `{ success: true, code: 200, msg: 'Current second fetched successfully', second: {...} }` |
| `getCurrentHour24Str()`         | `const h = getCurrentHour24Str();`         | `string`                             | `'09'`                                                                                    |
| `getCurrentHour24StrResponse()` | `res.json(getCurrentHour24StrResponse());` | `{ success, code, msg, value }`      | `{ success: true, code: 200, msg: 'Current hour24 string fetched', value: '09' }`         |
| `getCurrentHour12Str()`         | `const h = getCurrentHour12Str();`         | `string`                             | `'09'`                                                                                    |
| `getCurrentHour12StrResponse()` | `res.json(getCurrentHour12StrResponse());` | `{ success, code, msg, value }`      | `{ success: true, code: 200, msg: 'Current hour12 string fetched', value: '09' }`         |
| `getCurrentMinuteStr()`         | `const m = getCurrentMinuteStr();`         | `string`                             | `'05'`                                                                                    |
| `getCurrentMinuteStrResponse()` | `res.json(getCurrentMinuteStrResponse());` | `{ success, code, msg, value }`      | `{ success: true, code: 200, msg: 'Current minute string fetched', value: '05' }`         |
| `getCurrentSecondStr()`         | `const s = getCurrentSecondStr();`         | `string`                             | `'07'`                                                                                    |
| `getCurrentSecondStrResponse()` | `res.json(getCurrentSecondStrResponse());` | `{ success, code, msg, value }`      | `{ success: true, code: 200, msg: 'Current second string fetched', value: '07' }`         |
| `getCurrentPeriod()`            | `const p = getCurrentPeriod();`            | `{ period }`                         | `{ period: 'AM' }`                                                                        |
| `getCurrentPeriodResponse()`    | `res.json(getCurrentPeriodResponse());`    | `{ success, code, msg, period }`     | `{ success: true, code: 200, msg: 'Current period fetched successfully', period: {...} }` |

### 📅 Date helpers

| Name                  | Example Usage                       | Output Format                                           | Example Data                                                                                                                       |
| --------------------- | ----------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `formatCurrentDate()` | `const date = formatCurrentDate();` | `{ date: { yr, month, day, date, ordinal, fullDate } }` | `{ date: { yr: 2025, month: 'December', day: 'Wednesday', date: 24, ordinal: 'th', fullDate: 'December 24th, Wednesday, 2025' } }` |
| `currentYear()`       | `const yr = currentYear();`         | `number`                                                | `2025`                                                                                                                             |
| `currentMonth()`      | `const mon = currentMonth();`       | `{ monthNumber, monthName, monthStr }`                  | `{ monthNumber: 12, monthName: 'December', monthStr: '12' }`                                                                       |
| `currentDay()`        | `const day = currentDay();`         | `{ dayIndex, dayName }`                                 | `{ dayIndex: 3, dayName: 'Wednesday' }`                                                                                            |
| `currentDateNumber()` | `const d = currentDateNumber();`    | `{ date, dateStr }`                                     | `{ date: 24, dateStr: '24' }`                                                                                                      |
| `currentOrdinal()`    | `const ord = currentOrdinal();`     | `{ ordinal }`                                           | `{ ordinal: 'th' }`                                                                                                                |
| `currentFullDate()`   | `const full = currentFullDate();`   | `{ fullDate }`                                          | `{ fullDate: 'December 24th, Wednesday, 2025' }`                                                                                   |

### 🗂 Date response helpers

| Name                             | Example Usage                               | Output Format                   | Example Data                                                                                                           |
| -------------------------------- | ------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `getCurrentDate()`               | `res.json(getCurrentDate());`               | `{ success, code, msg, data }`  | `{ success: true, code: 200, msg: 'Current date fetched successfully', data: {...} }`                                  |
| `getCurrentYearResponse()`       | `res.json(getCurrentYearResponse());`       | `{ success, code, msg, value }` | `{ success: true, code: 200, msg: 'Current year fetched successfully', value: 2025 }`                                  |
| `getCurrentMonthResponse()`      | `res.json(getCurrentMonthResponse());`      | `{ success, code, msg, value }` | `{ success: true, code: 200, msg: 'Current month fetched successfully', value: {...} }`                                |
| `getCurrentDayResponse()`        | `res.json(getCurrentDayResponse());`        | `{ success, code, msg, value }` | `{ success: true, code: 200, msg: 'Current day fetched successfully', value: {...} }`                                  |
| `getCurrentDateNumberResponse()` | `res.json(getCurrentDateNumberResponse());` | `{ success, code, msg, value }` | `{ success: true, code: 200, msg: 'Current date number fetched successfully', value: {...} }`                          |
| `getCurrentOrdinalResponse()`    | `res.json(getCurrentOrdinalResponse());`    | `{ success, code, msg, value }` | `{ success: true, code: 200, msg: 'Current ordinal fetched successfully', value: {...} }`                              |
| `getCurrentFullDateResponse()`   | `res.json(getCurrentFullDateResponse());`   | `{ success, code, msg, value }` | `{ success: true, code: 200, msg: 'Current full date fetched successfully', value: 'December 24th, Wednesday, 2025' }` |

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

String only helper responses use `value`:

```json
{
  "success": true,
  "code": 200,
  "msg": "Current hour string fetched",
  "value": "09"
}
```

## 🌐 Links & socials

- GitHub: https://github.com/yasasbanukaofficial
- NPM: https://www.npmjs.com/~yasasbanukaofficial
- LinkedIn: https://www.linkedin.com/in/yasasbanukagunasena/

---
