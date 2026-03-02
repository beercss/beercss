import { type ILayout } from "../shared/interfaces";

export interface IItemGmail {
  check: boolean,
  star: boolean,
}

export interface IGmail extends ILayout {
  drafts: Array<IItemGmail>,
  inbox: Array<IItemGmail>,
  sent: Array<IItemGmail>,
  important: Array<IItemGmail>,
  snoozed: Array<IItemGmail>,
  spam: Array<IItemGmail>,
  emails: Array<IItemGmail>,
  check: boolean,
  url: string,
  isMax: boolean,
}
