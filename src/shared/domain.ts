import { ILayout, ITheme } from "./interfaces";

const updateTheme = async(data: ILayout, source: any) => {
  let theme = await ui("theme", data.themes.find((x:ITheme) => x.name == source) || source);
  let mode = ui("mode");
  data.theme.dark = theme.dark;
  data.theme.light = theme.light;
  data.theme.selected = mode;
  data.isDark = mode == "dark";
}

const updateMode = (data: ILayout) => {
  let mode = ui("mode", ui("mode") == "dark" ? "light" : "dark");

  data.theme.selected = mode;
  data.isDark = mode == "dark";
}

const initTheme = async (data: ILayout) => {
  updateTheme(data, null);
}

export default {
  updateTheme,
  updateMode,
  initTheme
}