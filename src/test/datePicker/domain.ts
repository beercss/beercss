import { IDatePicker } from "./interfaces";

export function getData (year: number, month: number, selectedDate?: number): IDatePicker {
  const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  const current = new Date(year, month);
  const first = new Date(current.getFullYear(), current.getMonth(), 1);
  const data: IDatePicker = {
    weeks: [],
    days: [],
    months: [],
    years: [],
    month,
    year,
    todayDate: today.getTime(),
    selectedPage: "#days",
    selectedDate,
  };

  while (first.getDay() !== 0) first.setDate(first.getDate() - 1);

  const days = first;
  let i = 0;
  let j = 0;
  while (i < 42) {
    if (i < 7) data.weeks.push({ key: days.getDay(), value: getDay(days) });

    if (i % 7 === 0) j = i / 7;
    if (!data.days[j]) data.days[j] = [];

    data.days[j].push({ key: days.getTime(), value: days.getDate().toString() });
    days.setDate(days.getDate() + 1);
    i++;
  }

  for (let i = 0; i < 12; i++) data.months.push({ key: i, value: getMonth(new Date(2021, i)) });

  for (let i = current.getFullYear() - 5; i <= current.getFullYear() + 5; i++) data.years.push({ key: i, value: i.toString() });

  return data;
}

export function getMonth (date: Date): string {
  return date.toLocaleString(window.navigator.language, { month: "short" }).replace(/\W/g, "");
}

export function getDay (date: Date): string {
  return date.toLocaleString(window.navigator.language, { weekday: "short" }).substring(0, 1);
}

export default {
  getData,
  getMonth,
  getDay,
};
