import { ILayout } from "../shared/interfaces";

export interface ISample {
  html:string,
  sourceCode:string
}

export interface IHome extends ILayout {
  indexOfMenu:number,
  samples: Array<ISample>,
  modalSample: string,
  urlSample: string,
  mediaCard: number,
  mediaImage: number,
  layout: number,
  isHorizontal: boolean
}