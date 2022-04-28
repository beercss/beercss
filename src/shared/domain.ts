import { ILayout } from "./interfaces";

const updateTheme = async(data: ILayout, from: any, mode: string | undefined) => {
  if (!from) from = data.theme;

  if (!mode) mode = data.theme?.selected;

  let theme = data.themes.find(x => x. name == from);

  data.theme = await ui("theme", { from: theme || from, mode: mode });
  data.isDark = (mode || data.theme?.selected) == "dark";
}

const updateMode = (data: ILayout) => {
  let mode = data.theme?.selected == "dark" ? "light" : "dark";
  updateTheme(data, data.theme, mode);
}

const initTheme = (data: ILayout) => {
  data.isDark = /dark/.test(document.body.getAttribute("style") || "");
}

export default {
  updateTheme,
  updateMode,
  initTheme
}