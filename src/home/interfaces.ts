import { type ILayout } from "../shared/interfaces";

export interface ISample {
  html: string,
  sourceCode: string,
}

export interface IHome extends ILayout {
  indexOfMenu: number,
  samples: Array<ISample>,
  name: string,
  dialogSample: string,
  urlSample: string,
  svgSample: string,
  mediaCard: number,
  mediaImage: number,
  layout: number,
  isHorizontal: boolean,
  isHorizontalSlider: boolean,
  isRtl: boolean,
  isMax: boolean,
  isExplore: boolean,
}
