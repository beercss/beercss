import { nextTick } from "vue";
import { type IHome } from "./interfaces";
import utils from "../shared/utils";
import sharedDomain from "../shared/domain";
import { type ILayout } from "../shared/interfaces";

const updateElevate = (selector: string, elevate?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["no-elevate", "small-elevate", "medium-elevate", "large-elevate"]);
  if (elevate) utils.addClass(elements, [elevate]);
};

const updateColor = (selector: string | NodeListOf<Element>, color?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["fill", "surface-variant", "surface", "background", "primary", "primary-container", "secondary", "secondary-container", "tertiary", "tertiary-container", "error", "amber", "blue", "blue-grey", "brown", "cyan", "deep-orange", "deep-purple", "green", "grey", "indigo", "light-blue", "light-green", "lime", "orange", "pink", "purple", "red", "teal", "yellow"]);
  if (color) utils.addClass(elements, [color]);
};

const updateBorderColor = (selector: string | NodeListOf<Element>, borderColor?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["primary-border", "secondary-border", "tertiary-border", "error-border", "amber-border", "blue-border", "blue-grey-border", "brown-border", "cyan-border", "deep-orange-border", "deep-purple-border", "green-border", "grey-border", "indigo-border", "light-blue-border", "light-green-border", "lime-border", "orange-border", "pink-border", "purple-border", "red-border", "teal-border", "yellow-border"]);
  if (borderColor) utils.addClass(elements, [borderColor]);
};

const updateTextColor = (selector: string | NodeListOf<Element>, textColor?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["primary-text", "secondary-text", "tertiary-text", "error-text", "amber-text", "blue-text", "blue-grey-text", "brown-text", "cyan-text", "deep-orange-text", "deep-purple-text", "green-text", "grey-text", "indigo-text", "light-blue-text", "light-green-text", "lime-text", "orange-text", "pink-text", "purple-text", "red-text", "teal-text", "yellow-text"]);
  if (textColor) utils.addClass(elements, [textColor]);
};

const updateElementColor = (selector: string, color?: string) => {
  const elementsWithBorder = utils.queryAll(selector + ".border");
  const elementsWithoutBorder = utils.queryAll(selector + ":not(.border)");
  updateBorderColor(elementsWithBorder, color && color !== "fill" ? color + "-border" : "");
  updateTextColor(elementsWithBorder, color && color !== "fill" ? color + "-text" : "");
  updateColor(elementsWithoutBorder, color);
  updateColor(elementsWithBorder, color === "fill" && selector.includes("chip") ? color : "");
};

const updateSize = (selector: string, size?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["tiny", "small", "medium", "large", "extra"]);
  if (size) utils.addClass(elements, [size]);
};

const updatePosition = (selector: string | NodeListOf<Element>, position?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left", "center", "right", "top", "middle", "bottom"]);
  if (position) utils.addClass(elements, (position || "").split(" "));
};

const updateAlign = (selector: string, alignment?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left-align", "center-align", "right-align", "top-align", "middle-align", "bottom-align"]);
  if (alignment) utils.addClass(elements, [alignment]);
};

const updateActive = (selector: string, event: any) => {
  const elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["active"]);
  else utils.removeClass(elements, ["active"]);
};

const updateDivider = (selector: string, divider?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["small", "medium", "large"]);
  if (divider) utils.addClass(elements, [divider]);
};

const updateSpace = (selector: string, space?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["space", "no-space", "small-space", "medium-space", "large-space"]);
  if (space) utils.addClass(elements, [space]);
};

const updateFill = (selector: string, event: any) => {
  const elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["fill"]);
  else utils.removeClass(elements, ["fill"]);
  ui();
};

const updateBorder = (selector: string, event: any) => {
  const elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["border"]);
  else utils.removeClass(elements, ["border"]);
  ui();
};

const updateRound = (selector: string, event: any) => {
  const elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["round"]);
  else utils.removeClass(elements, ["round"]);
  ui();
};

const updateFieldType = (selector: string, type: string) => {
  const inputs = utils.queryAll(selector + " input");
  const files = utils.queryAll(selector + " input[type='file']");
  const colors = utils.queryAll(selector + " input[type='color']");
  const labels = utils.queryAll(selector + " label");
  const icons = utils.queryAll(selector + " i");
  utils.remove(files);
  utils.remove(colors);
  utils.removeAttribute(inputs, "readonly");
  utils.removeValue(inputs);

  if (type === "file") {
    utils.setAttribute(inputs, "type", "text");
    utils.html(labels, "File");
    utils.html(icons, "attach_file");

    for (let j = 0; j < inputs.length; j++) {
      const file = document.createElement("input");
      file.type = "file";
      inputs[j].insertAdjacentElement("beforebegin", file);
    }
  }

  if (type === "color") {
    utils.setAttribute(inputs, "type", "text");
    utils.html(labels, "Color");
    utils.html(icons, "palette");

    for (let j = 0; j < inputs.length; j++) {
      const color = document.createElement("input");
      color.type = "color";
      inputs[j].insertAdjacentElement("beforebegin", color);
    }
  }

  if (type === "text") {
    utils.html(labels, "Label");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "search");
  }

  if (type === "number") {
    utils.html(labels, "Number");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "numbers");
  }

  if (type === "password") {
    utils.html(labels, "Password");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "visibility");
  }

  if (type === "date") {
    utils.html(labels, "Date");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "today");
  }

  if (type === "time") {
    utils.html(labels, "Time");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "schedule");
  }
};

const updateMenu = (data: IHome, css: string = "") => {
  const isHorizontal = /^(top|bottom)$/i.test(css);
  const selector = isHorizontal ? "#navigation-bar1" : "#navigation-rail1";
  const menu = utils.queryAll(selector);

  updatePosition(menu, css);
  data.isHorizontal = isHorizontal;
};

const updateColorTheme = (selector: string, css: string = "") => {
  const containers = utils.queryAll(selector);
  const buttons = utils.queryAll(`${selector} button:not(.transparent, .border)`);

  utils.removeClass(containers, ["fill"]);
  utils.removeClass(buttons, ["fill"]);
  updateColor(containers, css && css !== "fill" ? css + "-container" : css);
  updateColor(buttons, css && css !== "fill" ? css : "");
};

const updateHorizontalPosition = (selector: string, position?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left", "right", "center"]);
  if (position) utils.addClass(elements, [position]);
};

const updateVerticalPosition = (selector: string, position?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["top", "bottom", "middle"]);
  if (position) utils.addClass(elements, [position]);
};

const updateHorizontalAlign = (selector: string, align?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left-align", "right-align", "center-align"]);
  if (align) utils.addClass(elements, [align]);
};

const updateVerticalAlign = (selector: string, align?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["top-align", "bottom-align", "middle-align"]);
  if (align) utils.addClass(elements, [align]);
};

const updateDirection = (selector: string, direction?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["vertical", "horizontal"]);
  if (direction && direction !== "horizontal") utils.addClass(elements, [direction], (x: Element) => !x.hasAttribute("no-direction"));
};

const updateMinMax = (selector: string, css: string = "") => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["min", "max"]);
  if (css) utils.addClass(elements, [css]);
};

const updateIcon = (css: string = "") => {
  const elements = utils.queryAll("#icons-default i");
  utils.removeClass(elements, ["fill"]);
  if (css) utils.addClass(elements, [css]);
};

const updatePage = (selector: string) => {
  ui(selector);
};

const updateProgress = (value: number) => {
  utils.queryAll("#progress progress[value]").forEach((x) => {
    const progress = x as HTMLProgressElement;
    progress.value = value;
  });
};

const formatHtml = (element: Element | null, raw: boolean = false, useInnerHtml: boolean = false): string => {
  function process(str: string): string {
    const div = document.createElement("div");
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
  }

  function format(node: any, level: number): any {
    const indentBefore = new Array(level++ + 1).join("  ");
    const indentAfter = new Array(level - 1).join("  ");
    let textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode("\n" + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      format(node.children[i], level);

      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode("\n" + indentAfter);
        node.appendChild(textNode);
      }
    }

    return node;
  }

  const tag = utils.clone(element);
  const text = useInnerHtml ? tag?.innerHTML ?? "" : tag?.outerHTML ?? "";
  if (raw) return process(text);

  utils.remove(tag?.querySelectorAll(".overlay"));
  utils.remove(tag?.querySelectorAll("[style*='none']"));

  return process(text
    .replace(/<!--v-if-->/gi, "")
    .replace(/<div class="overlay"><\/div>/gi, "")
    .replace(/\s+(wfd-id|id|data-ui|onclick|style|placeholder|tabindex|data-v-\w+)="[^"]*"/gi, "")
    .replace(/\s+name="(\w+)"/gi, " name=\"$1_\"")
    .replace(/\s+(checked|disabled)=""/gi, " $1")
    .replace(/\s+[a-z-]+=(""|"#")/gi, "")
    .replace(/\s+(tiny-padding)/gi, "")
    .replace(/\n<\/(circle|th)>/gi, "</$1>"))
    .replace(/^\s+/g, "")
    .replace(/\s+(checked|disabled)=""/gi, " $1");
};

const showSamples = (data: IHome, selector: string, name: string, dialog?: string | null, url?: string | null, useInnerHtml: boolean = false) => {
  const elements = utils.queryAll(selector);
  let text = "";
  let textFormatted = "";
  data.name = name;
  data.samples = [];
  data.dialogSample = dialog ?? "#dialog-samples";
  data.urlSample = url ?? "";
  if (!data.svgSample) data.svgSample = hljs.highlight("html", formatHtml(utils.query("#svg-sample > svg"), true)).value;

  for (let i = 0; i < elements.length; i++) {
    const element = utils.clone(elements[i]);

    if (utils.is(element, ["nav.left", "nav.right", "nav.top", "nav.bottom"])) {
      utils.html(element?.querySelectorAll("dialog"), "");
      text = formatHtml(element, false, useInnerHtml);
      textFormatted = hljs.highlight("html", text).value;
    } else {
      text = formatHtml(element, false, useInnerHtml);
      textFormatted = hljs.highlight("html", text).value;
    }

    if (utils.is(element, ["nav.left", "nav.right", "nav.top", "nav.bottom", "dialog", ".snackbar", "main.responsive", ".fixed:not(header, footer, thead, tfoot)"])) { text = ""; }

    data.samples.push({
      html: (name === "Tooltips") ? `<div class="center-align">${text}</div>` : text,
      sourceCode: textFormatted,
    });
  }

  nextTick(() => {
    const element = utils.query(data.dialogSample);
    element?.scrollTo(0, 0);
    setTimeout(() => {
      ui(data.dialogSample);
    }, 180);
  });
};

const goTo = (selector: string) => {
  setTimeout(() => {
    const element = utils.query(selector);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
};

const addHomeScreen = () => {
  utils.install();
};

const updateTheme = (data: ILayout) => {
  const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b", "#000000", "#ffffff"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  sharedDomain.updateTheme(data, color);
};

const updateBlur = (selector: string, blur?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["blur", "small-blur", "medium-blur", "large-blur"]);
  if (blur) utils.addClass(elements, [blur]);
};

const updateShadow = (selector: string, shadow?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["shadow", "no-shadow", "top-shadow", "bottom-shadow", "left-shadow", "right-shadow"]);
  if (shadow) utils.addClass(elements, [shadow]);
};

const updateLine = (selector: string, line?: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["no-line", "tiny-line", "small-line", "medium-line", "large-line", "extra-line"]);
  if (line) utils.addClass(elements, [line]);
};

const updateRtlLtr = (data: IHome) => {
  data.isRtl = !data.isRtl;
  if (data.isRtl) document.body.setAttribute("dir", "rtl");
  else document.body.removeAttribute("dir");
};

const updateShape = (selector: string, shape: string) => {
  const shapes = /arch|arrow|boom|bun|burst|circle|clamshell|clamshell|diamond|fan|flower|gem|ghost-ish|heart|leaf-clover4|leaft-clover8|loading-indicator|oval|pentagon|pill|pixel-circle|pixel-triangle|puffy|semicircle|sided-cookie4|sided-cookie6|sided-cookie7|sided-cookie9|sided-cookie12|slanted|soft-boom|soft-burst|square|sunny|triangle|very-sunny/g;
  const elements = Array.from(utils.queryAll(selector));
  for(const element of elements)
    element.className = element.className.replace(shapes, shape);
};

const updateRotate = (selector: string, rotate: string) => {
  const elements = utils.queryAll(selector);
  utils.removeClass(elements, ["fast-rotate", "slow-line", "rotate"]);
  if (rotate) utils.addClass(elements, [rotate]);
};

export default {
  updateElevate,
  updateColor,
  updateBorderColor,
  updateTextColor,
  updateElementColor,
  updateSize,
  updatePosition,
  updateAlign,
  updateActive,
  updateDivider,
  updateSpace,
  updateFill,
  updateBorder,
  updateRound,
  updateFieldType,
  updateHorizontalPosition,
  updateHorizontalAlign,
  updateVerticalPosition,
  updateVerticalAlign,
  updateDirection,
  updateProgress,
  updateColorTheme,
  updateIcon,
  updateMenu,
  updatePage,
  updateMinMax,
  addHomeScreen,
  formatHtml,
  goTo,
  showSamples,
  updateTheme,
  updateBlur,
  updateShadow,
  updateLine,
  updateRtlLtr,
  updateShape,
  updateRotate,
};
