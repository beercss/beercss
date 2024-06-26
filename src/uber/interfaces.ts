import { type ILayout } from "../shared/interfaces";

export interface IUber extends ILayout {
  from: string,
  to: string,
  street: string,
}
