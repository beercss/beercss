export interface IKeyValue {
  key: number,
  value: string,
}

export interface IDatePicker {
  weeks: Array<IKeyValue>,
  days: Array<Array<IKeyValue>>,
  months: Array<IKeyValue>,
  years: Array<IKeyValue>,
  month: number,
  year: number,
  todayDate: number,
  selectedPage: string,
  selectedDate?: number,
}
