import { nextTick } from "vue";
import { IHome } from "./interfaces";

const updateColor = (selector:string, color:string) => {
  var elements = $(selector);
  elements.removeClass("primary secondary tertiary error amber blue blue-grey brown cyan deep-orange deep-purple green grey indigo light-blue light-green lime orange pink purple red teal yellow");
  if (color) elements.addClass(color);
}

const updateBorderColor = (selector:string, borderColor:string) => {
  var elements = $(selector);
  elements.removeClass("primary-border secondary-border tertiary-border error-border amber-border blue-border blue-grey-border brown-border cyan-border deep-orange-border deep-purple-border green-border grey-border indigo-border light-blue-border light-green-border lime-border orange-border pink-border purple-border red-border teal-border yellow-border");
  if (borderColor) elements.addClass(borderColor);
}

const updateTextColor = (selector:string, textColor:string) => {
  var elements = $(selector);
  elements.removeClass("primary-text secondary-text tertiary-text error-text amber-text blue-text blue-grey-text brown-text cyan-text deep-orange-text deep-purple-text green-text grey-text indigo-text light-blue-text light-green-text lime-text orange-text pink-text purple-text red-text teal-text yellow-text");
  if (textColor) elements.addClass(textColor);
}

const updateElementColor = (selector:string, color:string) => {
  var elementsWithBorder = $(selector+".border");
  var elementsWithoutBorder = $(selector+":not(.border)");
  updateColor(elementsWithoutBorder, color);
  updateBorderColor(elementsWithBorder, color+"-border");
  updateTextColor(elementsWithBorder, color+"-text");
}

const updateSize = (selector:string, size:string) => {
  var elements = $(selector);
  elements.removeClass("tiny small medium large extra min max");
  if (size) elements.addClass(size);
}

const updatePosition = (selector:string, position:string) => {
  var elements = $(selector);
  elements.removeClass("left center right top middle bottom");
  if (position) elements.addClass(position);
}

const updateAlign = (selector:string, alignment:string) => {
  var elements = $(selector);
  elements.removeClass("left-align center-align right-align top-align middle-align bottom-align");
  if (alignment) elements.addClass(alignment);
}

const updateActive = (selector:string, event:any) => {
  var elements = $(selector);
  if (event.currentTarget.checked) elements.addClass("active");
  else elements.removeClass("active");
}

const updateDivider = (selector:string, event:any) => {
  var elements = $(selector);
  if (event.currentTarget.checked) elements.addClass("divider");
  else elements.removeClass("divider");
}

const updateSpace = (selector:string, space:string) => {
  var elements = $(selector);
  elements.removeClass("no-space small-space medium-space large-space");
  if (space) elements.addClass(space);
}

const updateFill = (selector:string, event:any) => {
  var elements = $(selector);
  if (event.currentTarget.checked) elements.addClass("fill");
  else elements.removeClass("fill");
}

const updateBorder = (selector:string, event:any) => {
  var elements = $(selector);
  if (event.currentTarget.checked) elements.addClass("border");
  else elements.removeClass("border");
  ui();
}

const updateRound = (selector:string, event:any) => {
  var elements = $(selector);
  if (event.currentTarget.checked) elements.addClass("round");
  else elements.removeClass("round");
}

const updateFieldType = (selector:string, type:string) => {
  var inputs = $(selector).find("input");
  var files = $(selector).find("input[type='file']");
  var labels = $(selector).find("label");
  var icons = $(selector).find("i");
  files.remove();
  inputs.removeAttr("readonly");

  if (type == "file") {
    inputs.attr("type", "text");
    labels.html("File");
    icons.html("attach_file");

    for (var j = 0; j < inputs.length; j++)
      $("<input type='file' />").insertAfter(inputs[j]);
  }

  if (type == "text") {
    labels.html("Label");
    inputs.attr("type", type);
    icons.html("search");
  }

  if (type == "password") {
    labels.html("Password");
    inputs.attr("type", type);
    icons.html("visibility");
  }

  if (type == "date") {
    labels.html("Date");
    inputs.attr("type", type);
    icons.html("today");
  }

  if (type == "time") {
    labels.html("Time");
    inputs.attr("type", type);
    icons.html("search");
  }
}

const updateMenu = (data:IHome, css:string) => {
  var menu = $('#app > div > nav:visible');
  var modals = $(menu).find("> .modal");
  var actives = $(menu).find("> .active");
  var radios = $("#navigation-rail input");
  var radio = $("#" + css + "-navigations");

  updatePosition(menu, css);
  updatePosition(modals, css);
  updateAlign(menu, null);

  data.isHorizontal = /top|bottom/i.test(css);
  actives.removeClass("active");
  radios.prop("checked", false);
  radio.prop("checked", true);
}

const updateAppBar = (css:string) => {
  var appBars = $("#app-bars header");
  $(appBars).removeClass("white-text");
  updateColor(appBars, css);
}

const updateHorizontalPosition = (selector:string, position:string) => {
  let elements = $(selector);
  elements.removeClass("left right center");
  if (position) elements.addClass(position);
}

const updateVerticalPosition = (selector:string, position:string) => {
  let elements = $(selector);
  elements.removeClass("top bottom middle");
  if (position) elements.addClass(position);
}

const updateHorizontalAlign = (selector:string, align:string) => {
  let elements = $(selector);
  elements.removeClass("left-align right-align center-align");
  if (align) elements.addClass(align);
}

const updateVerticalAlign = (selector:string, align:string) => {
  let elements = $(selector);
  elements.removeClass("top-align bottom-align middle-align");
  if (align) elements.addClass(align);
}

const updateIcon = (css:string) => {
  var elements = $("#icons-sample i");
  elements.removeClass("outlined");
  if (css) elements.addClass(css); 
}

const updatePage = (selector:string) => {
  ui(selector);
}

const updateProgress = (value:number) => {
  document.querySelectorAll("#progress .progress").forEach((x) => ui(x, value));
}

const formatHtml = (element:any):string => {
  function process(str:string):string {
    var div = document.createElement("div");
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
  }

  function format(node:any, level:number):any {
    var indentBefore = new Array(level++ + 1).join("  "),
      indentAfter = new Array(level - 1).join("  "),
      textNode;

    for (var i = 0; i < node.children.length; i++) {
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

  var tag = $(element).clone();
  tag.find(".overlay").remove();
  tag.find("[style*='none']").remove();

  return process(
    tag[0].outerHTML
      .replace(/\s+(id|data-ui|onclick|style|data-v-\w+)\="[^\"]*"/gi, "")
      .replace(/\s+name\="(\w+)"/gi, " name=\"$1_\"")
      .replace(/\s+(checked|disabled)=""/gi, " $1")
      .replace(/\s+[a-z-]+\=(""|"#")/gi, "")
      .replace(/\n\<\/(circle|th)\>/gi, "</$1>")
  )
  .replace(/^\s+/g, "")
  .replace(/\s+(checked|disabled)=""/gi, " $1");
}

const showSamples = (data: IHome, selector:string, modal:string|null|undefined=undefined, url:string|null|undefined=undefined) => {
  var elements = $(selector);
  data.samples = [];
  data.modalSample = modal || "#modal-samples";
  data.urlSample = url || "";

  for (var i = 0; i < elements.length; i++) {
    var element = $($(elements[i])[0].outerHTML);
    
    if (element.is("nav.left") || element.is("nav.right") || element.is("nav.top") || element.is("nav.bottom")) {
      element.find(".modal").html("");
      var html = formatHtml(element);
      var htmlFormatted = hljs.highlight("html", html).value;
    } else {
      var html = formatHtml(element);
      var htmlFormatted = hljs.highlight("html", html).value;
    }

    if (
      element.is("nav.left") ||
      element.is("nav.right") ||
      element.is("nav.top") ||
      element.is("nav.bottom") ||
      element.is(".modal") ||
      element.is(".toast") ||
      element.is("main.responsive") ||
      element.is(".fixed:not(header)")
    )
      html = "";

    data.samples.push({
      html: html,
      sourceCode: htmlFormatted,
    });
  }

  nextTick(() => {
    ui(data.modalSample);
    $(data.modalSample).scrollTop(0);
  });
}

const goTo = (selector:string) => {
  setTimeout(() => {
    let element = document.querySelector(selector);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
}

const addHomeScreen = () => {
  if (beercss && beercss.installEvent)
    beercss.installEvent.prompt();
}

export default {
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