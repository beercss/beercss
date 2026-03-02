import { type ILayout } from "../shared/interfaces";

export interface IItemYoutube {
  title: string,
  image: string,
}

export interface IYoutube extends ILayout {
  itens: Array<IItemYoutube>,
  whatsHot: Array<IItemYoutube>,
  yourVideos: Array<IItemYoutube>,
  isLoaded: boolean,
  url: string,
  check: boolean,
  isMax: boolean
}
