import { query, queryAll, hasClass, on, off, parent, hasTag, isTouchable, onWeak} from "../utils";

function getContainer(root: Document | ShadowRoot): Element {
  return root instanceof Document ? root.body : root.host;
}

function onInputDocument(e: Event, root: Document | ShadowRoot) {
  const input = e.target as HTMLInputElement;
  if (!hasTag(input, "input") && !hasTag(input, "select")) return;

  if (input.type === "range") {
    input.focus();
    updateRange(input, root);
  } else {
    updateAllRanges(root);
  }
}

function onFocusRange(e: Event, root: Document | ShadowRoot) {
  if (!isTouchable()) return;

  const input = e.target as HTMLInputElement;
  const label = parent(input) as HTMLLabelElement;
  if (hasClass(label, "vertical")) getContainer(root).classList.add("no-scroll");
}

function onBlurRange(e: Event, root: Document | ShadowRoot) {
  if (!isTouchable()) return;

  const input = e.target as HTMLInputElement;
  const label = parent(input) as HTMLLabelElement;
  if (hasClass(label, "vertical")) getContainer(root).classList.remove("no-scroll");
}

function updateAllRanges(root: Document | ShadowRoot) {
  const container = getContainer(root);
  const ranges = queryAll(".slider > input[type=range]", root) as NodeListOf<HTMLInputElement>;
  if (!ranges.length) off(container, "input", (e: Event) => onInputDocument(e, root), false);
  else on(container, "input", (e: Event) => onInputDocument(e, root), false);
  for(let i=0; i<ranges.length; i++) updateRange(ranges[i], root);
}

function onChangeInput(e: Event) {
  const input = e.target as HTMLInputElement;
  requestAnimationFrame(() => input.blur());
}

function rootSizeInPixels(root: Document | ShadowRoot): number {
  const container = root instanceof Document ? root.documentElement : root.host;
  const size = getComputedStyle(container).getPropertyValue("--size") || "16px";
  if (size.includes("%")) return (parseInt(size) * 16) / 100;
  if (size.includes("em")) return parseInt(size) * 16;
  return parseInt(size);
}

function updateRange(input: HTMLInputElement, root: Document | ShadowRoot) {
  onWeak(input, "change", (e: Event) => onChangeInput(e));

  const label = parent(input) as HTMLElement;
  const bar = query("span", root, label) as HTMLElement;
  const inputs = queryAll("input", root, label) as NodeListOf<HTMLInputElement>;
  if (!inputs.length || !bar) return;

  const rootSize = rootSizeInPixels(root);
  const thumb = hasClass(label, "max") ? 0 : 0.25 * rootSize * 100 / inputs[0].offsetWidth;
  const percents: Array<number> = [];
  const values: Array<number> = [];
  for (let i = 0, n = inputs.length; i < n; i++) {
    const min = parseFloat(inputs[i].min) || 0;
    const max = parseFloat(inputs[i].max) || 100;
    const value = parseFloat(inputs[i].value) || 0;
    const percent = ((value - min) * 100) / (max - min);
    const fix = thumb / 2 - (thumb * percent) / 100;
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

export function updateAllSliders(root: Document | ShadowRoot) {
  updateAllRanges(root);
}
