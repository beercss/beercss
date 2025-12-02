import { query, next, prev, hasType, parent, queryAll, onWeak } from "../utils";

function updatePlaceholder(element: HTMLInputElement | HTMLTextAreaElement) {
  if (!element.placeholder) element.placeholder = " ";
}

function onClickLabel(e: Event, root: Document | ShadowRoot) { // Added root
  const label = e.currentTarget as HTMLLabelElement;
  const field = parent(label);
  const input = query("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", root, field) as HTMLElement;
  if (input) input.focus();
}

function onFocusInput(e: Event) {
  const input = e.currentTarget as HTMLInputElement;
  updateInput(input);
}

function onBlurInput(e: Event) {
  const input = e.currentTarget as HTMLInputElement;
  updateInput(input);
}

function onChangeFile(e: Event) {
  const input = e.currentTarget as HTMLInputElement;
  updateFile(input);
}

function onChangeColor(e: Event) {
  const input = e.currentTarget as HTMLInputElement;
  updateColor(input);
}

function onKeydownFile(e: KeyboardEvent) {
  const input = e.currentTarget as HTMLInputElement;
  updateFile(input);
}

function onKeydownColor(e: KeyboardEvent) {
  const input = e.currentTarget as HTMLInputElement;
  updateColor(input);
}

function onInputTextarea(e: Event) {
  const textarea = e.currentTarget as HTMLTextAreaElement;
  updateTextarea(textarea);
}

function onPasswordIconClick(e: Event, root: Document | ShadowRoot) { // Added root
  const icon = e.currentTarget as HTMLElement;
  const input = query("input", root, parent(icon)) as HTMLInputElement;
  if (input && icon.textContent?.includes("visibility")) input.type = input.type === "password" ? "text" : "password";
}

function updateAllLabels(root: Document | ShadowRoot) { // Added root
  const labels = queryAll(".field > label", root);
  for (let i=0; i<labels.length; i++) onWeak(labels[i], "click", (e: Event) => onClickLabel(e, root));
}

function updateAllInputs(root: Document | ShadowRoot) { // Added root
  const inputs = queryAll(".field > input:not([type=file], [type=color], [type=range])", root) as NodeListOf<HTMLInputElement>;
  for (let i=0; i<inputs.length; i++) {
    onWeak(inputs[i], "focus", onFocusInput);
    onWeak(inputs[i], "blur", onBlurInput);
    updateInput(inputs[i]);
  }
}

function updateAllSelects(root: Document | ShadowRoot) { // Added root
  const selects = queryAll(".field > select", root) as NodeListOf<HTMLSelectElement>;
  for (let i=0; i<selects.length; i++) {
    onWeak(selects[i], "focus", onFocusInput);
    onWeak(selects[i], "blur", onBlurInput);
  }
}

function updateAllFiles(root: Document | ShadowRoot) { // Added root
  const files = queryAll(".field > input[type=file]", root) as NodeListOf<HTMLInputElement>;
  for (let i=0; i<files.length; i++) {
    onWeak(files[i], "change", onChangeFile);
    updateFile(files[i]);
  }
}

function updateAllColors(root: Document | ShadowRoot) { // Added root
  const colors = queryAll(".field > input[type=color]", root) as NodeListOf<HTMLInputElement>;
  for (let i=0; i<colors.length; i++) {
    onWeak(colors[i], "change", onChangeColor);
    updateColor(colors[i]);
  }
}

function updateAllTextareas(root: Document | ShadowRoot) { // Added root
  const textareas = queryAll(".field.textarea > textarea", root) as NodeListOf<HTMLTextAreaElement>;
  for (let i=0; i<textareas.length; i++) {
    onWeak(textareas[i], "focus", onFocusInput);
    onWeak(textareas[i], "blur", onBlurInput);
    updateTextarea(textareas[i]);
  }
}

function updateAllPasswordIcons(root: Document | ShadowRoot) { // Added root
  const icons = queryAll("input[type=password] ~ :is(i, a)", root);
  for (let i=0; i<icons.length; i++) on(icons[i], "click", (e: Event) => onPasswordIconClick(e, root));
}

function updateInput(input: HTMLInputElement) {
  if (hasType(input, "number") && !input.value) input.value = "";
  updatePlaceholder(input);
}

function updateFile(input: HTMLInputElement, e?: KeyboardEvent) {
  if (e?.key === "Enter") {
    const previousInput = prev(input) as HTMLInputElement;
    if (!hasType(previousInput, "file")) return;
    previousInput.click(); return;
  }

  const nextInput = next(input) as HTMLInputElement;
  if (!hasType(nextInput, "text")) return;
  nextInput.value = input.files ? Array.from(input.files).map((x) => x.name).join(", ") : "";
  nextInput.readOnly = true;
  onWeak(nextInput, "keydown", onKeydownFile, false);
  updateInput(nextInput);
}

function updateColor(input: HTMLInputElement, e?: KeyboardEvent) {
  if (e?.key === "Enter") {
    const previousInput = prev(input) as HTMLInputElement;
    if (!hasType(previousInput, "color")) return;
    previousInput.click(); return;
  }

  const nextInput = next(input) as HTMLInputElement;
  if (!hasType(nextInput, "text")) return;
  nextInput.readOnly = true;
  nextInput.value = input.value;
  onWeak(nextInput, "keydown", onKeydownColor, false);
  updateInput(nextInput);
}

function updateTextarea(textarea: HTMLTextAreaElement) {
  updatePlaceholder(textarea);
}

export function updateAllFields(root: Document | ShadowRoot) {
  updateAllLabels(root);
  updateAllInputs(root);
  updateAllSelects(root);
  updateAllFiles(root);
  updateAllColors(root);
  updateAllTextareas(root);
  updateAllPasswordIcons(root);
}