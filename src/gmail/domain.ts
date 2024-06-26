import { type IItemGmail } from "./interfaces";

const checkAll = (emails: Array<IItemGmail>, check: boolean) => {
  for (let i = 0; i < emails.length; i++) { emails[i].check = check; }
};

const check = (email: IItemGmail) => {
  email.check = !email.check;
};

const star = (email: IItemGmail) => {
  email.star = !email.star;
};

export default {
  checkAll,
  check,
  star,
};
