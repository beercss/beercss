import { queryAll } from "../utils";

let _icons:any = null;
let _font = "";

function updateIcons() {
  _font = _font || getComputedStyle(document.documentElement).getPropertyValue('--font-icon').replace(/\"/g, "");
  if (_font.charAt(0) != "*") return false;

  let hasNewIcons = false;
  if (!_icons) {
    _icons = { "check": true, "check_box": true, "check_box_outline_blank": true, "indeterminate_check_box": true, "radio_button_checked": true, "radio_button_unchecked": true };
    hasNewIcons = true;
  }

  const icons = queryAll("i");
  for(let i=0; i<icons.length; i++) {
    const icon = icons[i].textContent?.trim();
    if (!icon) continue;
    if (!_icons[icon]) {
      _icons[icon] = true;
      hasNewIcons = true;
    }
  }

  return hasNewIcons;
}

async function updateFont() {
  if (!_icons) return;

  const icons = Object.keys(_icons).sort().join(",");
  const font = _font.replace("*", "");
  const response = await fetch(`https://fonts.googleapis.com/css2?family=${font}:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=${icons}`);
  const text = await response.text() || "";
  const urls = text.match(/url.+?\)/);
  if (!urls) return;

  document.fonts.add(new FontFace(_font, urls[0], {
    weight: "400",
    style: "normal",
    display: "swap"
  }));
}

export async function updateAllFonts() {
  if (updateIcons()) updateFont();
}
