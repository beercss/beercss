import { ILayout, ITheme } from "./interfaces";

const updateTheme = async (data: ILayout, source: any, newMode?: string) => {
  const theme = await ui("theme", data.themes.find((x: ITheme) => x.name === source) ?? source) as IBeerCssTheme;
  data.theme.dark = theme.dark;
  data.theme.light = theme.light;
  updateMode(data, newMode ? newMode : ui("mode") as string);
};

const updateMode = (data: ILayout, newMode?: string) => {
  const mode = newMode ? newMode : ui("mode") === "dark" ? "light" : "dark";
  ui("mode", mode);
  data.theme.selected = mode;
  data.isDark = mode === "dark";
};

const initTheme = (data: ILayout) => {
  void updateTheme(data, null);
};

export default {
  updateTheme,
  updateMode,
  initTheme,
};
