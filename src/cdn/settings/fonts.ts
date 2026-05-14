import { queryAll } from "../utils";

const _icons = ["check", "check_box", "check_box_outline_blank", "indeterminate_check_box", "radio_button_checked", "radio_button_unchecked"];
let _fontIcon = "";

function updateIcons() {
  _fontIcon = _fontIcon || getComputedStyle(document.documentElement).getPropertyValue('--font-icon').replace(/\"/g, "");
  if (_fontIcon.indexOf(" Auto") == -1) return false;

  let hasNewIcons = false;
  const icons = queryAll("i");
  for(let i=0; i<icons.length; i++) {
    const iconName = icons[i].textContent?.trim();
    if (!iconName || _icons.indexOf(iconName) != -1) continue;

    hasNewIcons = true;
    _icons.push(iconName);
  }
  
  return hasNewIcons;
}

async function updateFont() {
  const name = _fontIcon.replace(" Auto", "");
  const response = await fetch(`https://fonts.googleapis.com/css2?family=${name}:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=${_icons.sort().join(',')}`);
  const text = await response.text() || "";
  const matches = text.match(/url.+?\)/);
  if (!matches) return;

  document.fonts.add(new FontFace(_fontIcon, matches[0], {
    weight: "400",
    style: "normal",
    display: "swap"
  }));
}

export async function updateAllFonts() {
  if (updateIcons()) updateFont();
}
