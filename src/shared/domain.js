export default {
  async updateTheme(data, from, mode) {
    if (!from) from = data.theme;

    if (!mode) mode = data.theme.selected;

    if (data.themes[from]) {
      data.theme = await ui("theme", { from: data.themes[from], mode: mode });
      data.isDark = data.theme.selected == "dark";
      return;
    }

    data.theme = await ui("theme", { from: from, mode: mode });
    data.isDark = data.theme.selected == "dark";
  },
  updateMode(data) {
    let mode = data.theme.selected == "dark" ? "light" : "dark";
    this.updateTheme(data, data.theme, mode);
  }
}