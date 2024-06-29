import { type ILayout } from "../shared/interfaces";

export interface IMusicPlayer extends ILayout {
  showPage: boolean,
  wallpaper: string,
  title: string,
  showWallpaper: boolean,
  time: number,
}
