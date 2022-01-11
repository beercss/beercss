export default {
  toCssVariables(data, theme) {
    const toStyle = (mode) => {
      let style = "";
      for (var i in theme[mode]) {
        let kebabCase = i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        style += "--"+kebabCase+": "+theme[mode][i]+";";
      }
      if (mode == "dark")
        style += "--overlay: rgba(0,0,0,.5);--active: rgba(255,255,255,.2);";
      else
        style += "--overlay: rgba(0,0,0,.5);--active: rgba(0,0,0,.1);";
      return style;
    }
    data.selectedTheme = {
      dark: toStyle("dark"),
      light: toStyle("light")
    }
  },
  updateTheme(data, url, mode) {
    if (data.themes[url]) {
      data.selectedTheme = data.themes[url];
      this.updateMode(data, mode || data.selectedMode);
      return;
    }

    if (/\#[a-fA-F0-9]{6}/.test(url)) {
      let colors = window.module$exports$google3$ux$material$theme_generator$src$theme$index$ThemeAdapter$fromColor(url);
      this.toCssVariables(data, colors);
      this.updateMode(data, mode || data.selectedMode);
      return;
    }

    let image = URL.createObjectURL(document.querySelector(url).files[0]);
    window.module$contents$google3$ux$material$theme_generator$src$theme$index_seedFromImage(image).then(color => {
      let colors = window.module$exports$google3$ux$material$theme_generator$src$theme$index$ThemeAdapter$fromColor(color);
      this.toCssVariables(data, colors);
      this.updateMode(data, mode || data.selectedMode);
    });
  },
  updateMode(data, mode) {
    data.isDark = mode
      ? mode == "dark"
      : !data.isDark;
    if (data.isDark)
      document.body.setAttribute("style", "--dark: true;"+data.selectedTheme.dark);
    else
      document.body.setAttribute("style", "--light: true;"+data.selectedTheme.light);
  }
}