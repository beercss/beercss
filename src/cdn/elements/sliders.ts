import { query, queryAll, hasClass, on, off, parent, hasTag, isTouchable } from "../utils";

function onInputDocument(e: Event) {
  const input = e.target as HTMLInputElement;
  if (!hasTag(input, "input") && !hasTag(input, "select")) return;

  if (input.type === "range") {
    input.focus();
    updateRange(input);
  } else {
    updateAllRanges();
  }
}

function onFocusRange(e: Event) {
  if (!isTouchable()) return;

  const input = e.target as HTMLInputElement;
  const label = parent(input) as HTMLLabelElement;
  if (hasClass(label, "vertical")) document.body.classList.add("no-scroll");
}

function onBlurRange(e: Event) {
  if (!isTouchable()) return;

  const input = e.target as HTMLInputElement;
  const label = parent(input) as HTMLLabelElement;
  if (hasClass(label, "vertical")) document.body.classList.remove("no-scroll");
}

function updateAllRanges() {
  const body = document.body;
  const ranges = queryAll(".slider > input[type=range]") as NodeListOf<HTMLInputElement>;
  if (!ranges.length) off(body, "input", onInputDocument, false);
  else on(body, "input", onInputDocument, false);
  for(let i=0; i<ranges.length; i++) updateRange(ranges[i]);
}

function rootSizeInPixels(): number {
  const size = getComputedStyle(document.documentElement).getPropertyValue("--size") || "16px";
  if (size.includes("%")) return (parseInt(size) * 16) / 100;
  if (size.includes("em")) return parseInt(size) * 16;
  return parseInt(size);
} 

function updateRange(input: HTMLInputElement) {
  on(input, "focus", onFocusRange);
  on(input, "blur", onBlurRange);

  const label = parent(input) as HTMLElement;
  const bar = query("span", label) as HTMLElement;
  const inputs = queryAll("input", label) as NodeListOf<HTMLInputElement>;
  if (!inputs.length || !bar) return;

  const rootSize = rootSizeInPixels();
  const thumb = hasClass(label, "max") ? 0 : 0.25 * rootSize * 100 / inputs[0].offsetWidth;
  const percents: Array<number> = [];
  const values: Array<number> = [];
  for (let i = 0, n = inputs.length; i < n; i++) {
    const min = parseFloat(inputs[i].min) || 0;
    const max = parseFloat(inputs[i].max) || 100;
    const value = parseFloat(inputs[i].value) || 0;
    const percent = (value - min) * 100 / (max - min);
    const fix = thumb / 2 - thumb * percent / 100;
    percents.push(percent + fix);
    values.push(value);
  }

  let percent = percents[0];
  let start = 0;
  let end = 100 - start - percent;
  let value1 = values[0];
  let value2 = values[1] || 0;
  if (inputs.length > 1) {
    percent = Math.abs(percents[1] - percents[0]);
    start = percents[1] > percents[0] ? percents[0] : percents[1];
    end = 100 - start - percent;

    if (value2 > value1) {
      value1 = values[1] || 0;
      value2 = values[0];
    }
  }

  label.style.setProperty("--_start", `${start}%`);
  label.style.setProperty("--_end", `${end}%`);
  label.style.setProperty("--_value1", `'${value1}'`);
  label.style.setProperty("--_value2", `'${value2}'`);
}

export function updateAllSliders() {
  updateAllRanges();
}