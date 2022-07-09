import { nextTick } from "vue";
import { IHome } from "./interfaces";
import utils from "../shared/utils";

const updateShadow = (selector:any, shadow?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["no-shadow", "small-shadow", "medium-shadow", "large-shadow"]);
  if (shadow) utils.addClass(elements, [shadow]);
}

const updateColor = (selector:any, color?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["primary", "secondary", "tertiary", "error", "amber", "blue", "blue-grey", "brown", "cyan", "deep-orange", "deep-purple", "green", "grey", "indigo", "light-blue", "light-green", "lime", "orange", "pink", "purple", "red", "teal", "yellow"]);
  if (color) utils.addClass(elements, [color]);
}

const updateBorderColor = (selector:any, borderColor?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["primary-border", "secondary-border", "tertiary-border", "error-border", "amber-border", "blue-border", "blue-grey-border", "brown-border", "cyan-border", "deep-orange-border", "deep-purple-border", "green-border", "grey-border", "indigo-border", "light-blue-border", "light-green-border", "lime-border", "orange-border", "pink-border", "purple-border", "red-border", "teal-border", "yellow-border"]);
  if (borderColor) utils.addClass(elements, [borderColor]);
}

const updateTextColor = (selector:any, textColor?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["primary-text", "secondary-text", "tertiary-text", "error-text", "amber-text", "blue-text", "blue-grey-text", "brown-text", "cyan-text", "deep-orange-text", "deep-purple-text", "green-text", "grey-text", "indigo-text", "light-blue-text", "light-green-text", "lime-text", "orange-text", "pink-text", "purple-text", "red-text", "teal-text", "yellow-text"]);
  if (textColor) utils.addClass(elements, [textColor]);
}

const updateElementColor = (selector:string, color?:string) => {
  let elementsWithBorder = utils.queryAll(selector + ".border");
  let elementsWithoutBorder = utils.queryAll(selector + ":not(.border)");
  updateBorderColor(elementsWithBorder, color ? color + "-border" : "");
  updateTextColor(elementsWithBorder, color ? color + "-text" : "");
  updateColor(elementsWithoutBorder, color);
}

const updateSize = (selector:string, size?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["tiny", "small", "medium", "large", "extra", "min", "max"]);
  if (size) utils.addClass(elements, [size]);
}

const updatePosition = (selector:any, position?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left", "center", "right", "top", "middle", "bottom"]);
  if (position) utils.addClass(elements, [position]);
}

const updateAlign = (selector:any, alignment?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left-align", "center-align", "right-align", "top-align", "middle-align", "bottom-align"]);
  if (alignment) utils.addClass(elements, [alignment]);
}

const updateActive = (selector:string, event:any) => {
  let elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["active"]);
  else utils.removeClass(elements, ["active"]);
}

const updateDivider = (selector:string, event:any) => {
  let elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["divider"]);
  else utils.removeClass(elements, ["divider"]);
}

const updateSpace = (selector:string, space?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["no-space", "small-space", "medium-space", "large-space"]);
  if (space) utils.addClass(elements, [space]);
}

const updateFill = (selector:string, event:any) => {
  let elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["fill"]);
  else utils.removeClass(elements, ["fill"]);
  ui();
}

const updateBorder = (selector:string, event:any) => {
  let elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["border"]);
  else utils.removeClass(elements, ["border"]);
  ui();
}

const updateRound = (selector:string, event:any) => {
  let elements = utils.queryAll(selector);
  if (event.currentTarget.checked) utils.addClass(elements, ["round"]);
  else utils.removeClass(elements, ["round"]);
  ui();
}

const updateFieldType = (selector:string, type:string) => {
  let inputs = utils.queryAll(selector + " input");
  let files = utils.queryAll(selector + " input[type='file']");
  let labels = utils.queryAll(selector + " label");
  let icons = utils.queryAll(selector + " i");
  utils.remove(files);
  utils.removeAttribute(inputs, "readonly");

  if (type == "file") {
    utils.setAttribute(inputs, "type", "text");
    utils.html(labels, "File");
    utils.html(icons, "attach_file");

    for (let j = 0; j < inputs.length; j++) {
      let file = document.createElement("input");
      file.type = "file";
      inputs[j].insertAdjacentElement("afterend", file);
    }
  }

  if (type == "text") {
    utils.html(labels, "Label");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "search");
  }

  if (type == "password") {
    utils.html(labels, "Password");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "visibility");
  }

  if (type == "date") {
    utils.html(labels, "Date");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "today");
  }

  if (type == "time") {
    utils.html(labels, "Time");
    utils.setAttribute(inputs, "type", type);
    utils.html(icons, "search");
  }
}

const updateMenu = (data:IHome, css?:string) => {
  let menu = utils.queryAll("#app > div > nav.m.l");
  let modals = utils.queryAll("#app > div > nav.m.l > .modal");
  let actives = utils.queryAll("#app > div > nav.m.l > .active");
  let radios = utils.queryAll("#navigation-rail input");
  let radio = utils.queryAll("#" + css + "-navigations");

  updatePosition(menu, css);
  updatePosition(modals, css);
  updateAlign(menu, null);

  data.isHorizontal = /top|bottom/i.test(css);
  utils.removeClass(actives, ["active"]);
  utils.setAttribute(radios, "checked", false);
  utils.setAttribute(radio, "checked", true);
}

const updateAppBar = (css?:string) => {
  let appBars = utils.queryAll("#app-bars header");
  updateColor(appBars, css);
  if (/blue|teal|purple/i.test(css)) utils.addClass(appBars, ["white-text"]);
  else utils.removeClass(appBars, ["white-text"]);
}

const updateHorizontalPosition = (selector:string, position?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left", "right", "center"]);
  if (position) utils.addClass(elements, [position]);
}

const updateVerticalPosition = (selector:string, position?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["top", "bottom", "middle"]);
  if (position) utils.addClass(elements, [position]);
}

const updateHorizontalAlign = (selector:string, align?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["left-align", "right-align", "center-align"]);
  if (align) utils.addClass(elements, [align]);
}

const updateVerticalAlign = (selector:string, align?:string) => {
  let elements = utils.queryAll(selector);
  utils.removeClass(elements, ["top-align", "bottom-align", "middle-align"]);
  if (align) utils.addClass(elements, [align]);
}

const updateIcon = (css?:string) => {
  let elements = utils.queryAll("#icons-sample i");
  utils.removeClass(elements, ["outlined"]);
  if (css) utils.addClass(elements, [css]); 
}

const updatePage = (selector:string) => {
  ui(selector);
}

const updateProgress = (value:number) => {
  utils.queryAll("#progress .progress").forEach((x) => ui(x, value));
}

const formatHtml = (element:any):string => {
  function process(str:string):string {
    let div = document.createElement("div");
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
  }

  function format(node:any, level:number):any {
    let indentBefore = new Array(level++ + 1).join("  "),
      indentAfter = new Array(level - 1).join("  "),
      textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode("\n" + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      format(node.children[i], level);

      if (node.lastElementChild == node.children[i]) {
        textNode = document.createTextNode("\n" + indentAfter);
        node.appendChild(textNode);
      }
    }

    return node;
  }

  let tag = utils.clone(element);
  utils.remove(tag.querySelectorAll(".overlay"));
  utils.remove(tag.querySelectorAll("[style*='none']"));

  return process(
    tag.outerHTML
      .replace(/\s+(id|data-ui|onclick|style|data-v-\w+)\="[^\"]*"/gi, "")
      .replace(/\s+name\="(\w+)"/gi, " name=\"$1_\"")
      .replace(/\s+(checked|disabled)=""/gi, " $1")
      .replace(/\s+[a-z-]+\=(""|"#")/gi, "")
      .replace(/\n\<\/(circle|th)\>/gi, "</$1>")
  )
  .replace(/^\s+/g, "")
  .replace(/\s+(checked|disabled)=""/gi, " $1");
}

const showSamples = (data: IHome, selector:string, name: string, modal?:string, url?:string) => {
  let elements = utils.queryAll(selector);
  let text = "";
  let textFormatted = "";
  data.name = name;
  data.samples = [];
  data.modalSample = modal || "#modal-samples";
  data.urlSample = url || "";

  for (let i = 0; i < elements.length; i++) {
    let element = utils.clone(elements[i]);
    
    if (utils.is(element, ["nav.left", "nav.right", "nav.top", "nav.bottom"])) {
      utils.html(element.querySelectorAll(".modal"), "");
      text = formatHtml(element);
      textFormatted = hljs.highlight("html", text).value;
    } else {
      text = formatHtml(element);
      textFormatted = hljs.highlight("html", text).value;
    }

    if (utils.is(element, ["nav.left", "nav.right", "nav.top", "nav.bottom", ".modal", ".toast", "main.responsive", ".fixed:not(header)"]))
      text = "";

    data.samples.push({
      html: text,
      sourceCode: textFormatted,
    });
  }

  nextTick(() => {
    ui(data.modalSample);
    let element = utils.query(data.modalSample);
    element?.scrollTo(0, 0);
  });
}

const goTo = (selector:string) => {
  setTimeout(() => {
    let element = utils.query(selector);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
}

const addHomeScreen = () => {
  if (beercss && beercss.installEvent)
    beercss.installEvent.prompt();
}

export default {
  updateShadow,
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
  updateProgress,
  updateAppBar,
  updateIcon,
  updateMenu,
  updatePage,
  addHomeScreen,
  formatHtml,
  goTo,
  showSamples,
}