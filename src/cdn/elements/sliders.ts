import { query, queryAll, hasClass, on, off, parent } from "../utils";

function updateAllRanges(e?: Event) {
  if (e) {
    const input = e.currentTarget as HTMLInputElement;
    if (input.type === "range") { updateRange(input); return; }
  }

  const ranges = queryAll(".slider > input[type=range]") as NodeListOf<HTMLInputElement>;
  if (!ranges.length) off(globalThis, "input", updateAllRanges, false);
  else on(globalThis, "input", updateAllRanges, false);
  for(let i=0; i<ranges.length; i++) updateRange(ranges[i]);
}

function updateRange(input: HTMLInputElement) {
  const parentTarget = parent(input) as HTMLElement;
  const bar = query("span", parentTarget) as HTMLElement;
  const inputs = queryAll("input", parentTarget) as NodeListOf<HTMLInputElement>;
  if (!inputs.length || !bar) return;

  const rootSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16;
  const thumb = hasClass(parentTarget, "max") ? 0 : 0.25 * rootSize * 100 / inputs[0].offsetWidth;
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

  parentTarget.style.setProperty("---start", `${start}%`);
  parentTarget.style.setProperty("---end", `${end}%`);
  parentTarget.style.setProperty("---value1", `'${value1}'`);
  parentTarget.style.setProperty("---value2", `'${value2}'`);
}

export function updateAllSliders() {
  updateAllRanges();
}