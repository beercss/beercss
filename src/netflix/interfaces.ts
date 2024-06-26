import { type ILayout } from "../shared/interfaces";

export interface IImageNetflix {
  image: string,
}

export interface INetflix extends ILayout {
  todaysRanking: Array<IImageNetflix>,
  series: Array<IImageNetflix>,
  movies: Array<IImageNetflix>,
  hot: Array<IImageNetflix>,
  myList: Array<IImageNetflix>,
}
