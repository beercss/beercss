import { query, hasClass, on, next, prev, hasType, parent, queryAll } from "../utils";

function updatePlaceholder(element: HTMLInputElement | HTMLTextAreaElement) {
  if (!element.placeholder) element.placeholder = " ";
}

function onClickLabel(e: Event) {
  const label = e.currentTarget as HTMLLabelElement;
  const field = parent(label);
  const input = query("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", field) as HTMLElement;
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
  updateFile(input, e);
}

function onKeydownColor(e: KeyboardEvent) {
  const input = e.currentTarget as HTMLInputElement;
  updateColor(input, e);
}

function onInputTextarea(e: Event) {
  const textarea = e.currentTarget as HTMLTextAreaElement;
  updateTextarea(textarea);
}

function onPasswordIconClick(e: Event) {
  const icon = e.currentTarget as HTMLElement;
  const input = query("input", parent(icon)) as HTMLInputElement;
  if (input && icon.textContent?.includes("visibility")) input.type = input.type === "password" ? "text" : "password";
}

function updateAllLabels() {
  const labels = queryAll(".field > label");
  for (let i=0; i<labels.length; i++) on(labels[i], "click", onClickLabel);
}

function updateAllInputs() {
  const inputs = queryAll(".field > input:not([type=file], [type=color], [type=range])") as NodeListOf<HTMLInputElement>;
  for (let i=0; i<inputs.length; i++) {
    on(inputs[i], "focus", onFocusInput);
    on(inputs[i], "blur", onBlurInput);
    updateInput(inputs[i]);
  }
}

function updateAllSelects() {
  const selects = queryAll(".field > select") as NodeListOf<HTMLSelectElement>;
  for (let i=0; i<selects.length; i++) {
    on(selects[i], "focus", onFocusInput);
    on(selects[i], "blur", onBlurInput);
  }
}

function updateAllFiles() {
  const files = queryAll(".field > input[type=file]") as NodeListOf<HTMLInputElement>;
  for (let i=0; i<files.length; i++) {
    on(files[i], "change", onChangeFile);
    updateFile(files[i]);
  }
}

function updateAllColors() {
  const colors = queryAll(".field > input[type=color]") as NodeListOf<HTMLInputElement>;
  for (let i=0; i<colors.length; i++) {
    on(colors[i], "change", onChangeColor);
    updateColor(colors[i]);
  }
}

function updateAllTextareas() {
  const textareas = queryAll(".field.textarea > textarea") as NodeListOf<HTMLTextAreaElement>;
  for (let i=0; i<textareas.length; i++) {
    on(textareas[i], "focus", onFocusInput);
    on(textareas[i], "blur", onBlurInput);
    on(textareas[i], "input", onInputTextarea);
    updateTextarea(textareas[i]);
  }
}

function updateAllPasswordIcons() {
  const icons = queryAll("input[type=password] ~ :is(i, a)");
  for (let i=0; i<icons.length; i++) on(icons[i], "click", onPasswordIconClick);
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
  on(nextInput, "keydown", onKeydownFile, false);
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
  on(nextInput, "keydown", onKeydownColor, false);
  updateInput(nextInput);
}

function updateTextarea(textarea: HTMLTextAreaElement) {
  updatePlaceholder(textarea);
  const field = parent(textarea) as HTMLElement;
  field.removeAttribute("style");
  if (hasClass(field, "min")) field.style.setProperty("--_size", `${Math.min(192, Math.max(textarea.scrollHeight, field.offsetHeight))}px`);
}

export function updateAllFields() {
  updateAllLabels();
  updateAllInputs();
  updateAllSelects();
  updateAllFiles();
  updateAllColors();
  updateAllTextareas();
  updateAllPasswordIcons();
}