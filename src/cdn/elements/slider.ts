import globals from "../globals";
import { query, queryAll, hasClass, on, off, parent, hasTag, onWeak, rootSizeInPixels, isTouchable } from "../utils";

function getContainer(root: Document | ShadowRoot): Element {
  return root instanceof Document ? root.body : root.host;
}

function onInputDocument(e: Event) {
  const input = e.target as HTMLInputElement;
  if (!hasTag(input, "input") && !hasTag(input, "select")) return;

  const root = (input.getRootNode?.() ?? document) as Document | ShadowRoot;
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

function updateAllRanges(root: Document | ShadowRoot = document) {
  const container = getContainer(root);
  const ranges = queryAll(".slider > input[type=range]", root) as NodeListOf<HTMLInputElement>;
  if (!ranges.length) off(container, "input", onInputDocument, false);
  else onWeak(container as any, "input", onInputDocument, false);
  for(let i=0; i<ranges.length; i++) updateRange(ranges[i], root);
}

function onChangeInput(e: Event) {
  const isCoarse = window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
  if (!isCoarse) return;

  const input = e.target as HTMLInputElement;
  input.blur();
}

function updateRange(input: HTMLInputElement, root: Document | ShadowRoot = document) {
  onWeak(input, "change", onChangeInput);

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

  requestAnimationFrame(() => label.style.cssText = `--_start: ${start}%; --_end: ${end}%; --_value1: '${value1}'; --_value2: '${value2}';`);
}

export function updateAllSliders(root: Document | ShadowRoot = document) {
  updateAllRanges(root);
}

globals().slider = {
  updateAllSliders
}