import { nextTick } from "vue";
import { IHome } from "./interfaces";

const resetTheme = () => {
  $("html")[0].className = "";
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

const updateMenu = (selector:string, css:string) => {
  var menu = $(selector);
  var dataUis = menu.find("a");
  var modals = menu.find(".modal");

  $(modals).removeClass("active");
  $(dataUis).removeClass("active");

  if (!css) {
    return $(selector + " > a > div:visible").length
      ? $(selector + " > a > div").hide()
      : $(selector + " > a > div").show();
  }

  if (/left|right|top|bottom/.test(css)) {
    $(menu).removeClass("left right top bottom");
    $(menu).addClass(css);
    $(menu).find("> .modal").removeClass("left right top bottom");
    $(menu).find("> .modal").addClass(css);
  }

  if (/small|medium|large/.test(css)) {
    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).removeClass("small medium large");
      if (css != "medium") $(menu[i]).addClass(css);
    }
  }

  if (/left-align|right-align|top-align|bottom-align/.test(css)) {
    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).removeClass(
        "left-align right-align top-align bottom-align"
      );
      $(menu[i]).addClass(css);
    }
  }
}

const appBarSamples = () => {
  $("#app-bars input").on("click", function () {
    var ids = ["blue", "purple", "teal", "primary", "secondary", "tertiary"];
    var appBars = $("#app-bars header");
    appBars.removeClass("white-text");

    for (var i = 0; i < ids.length; i++) {
      appBars.removeClass(ids[i]);

      var selector = "#" + ids[i] + "-app-bars";
      if ($(selector).is(":checked")) {
        appBars.addClass(ids[i]);

        if (/blue|purple|teal/.test(ids[i]))
          appBars.addClass("white-text");
      }
    }
  });
}

const layoutSamples = () => {
  $("#layouts input").on("click", function () {
    var id = $(this).attr("id");
    var checked = $(this).is(":checked");
    var positions = ["left", "right", "center", "top", "bottom", "middle"];
    var alignments = [
      "left-align",
      "right-align",
      "center-align",
      "top-align",
      "bottom-align",
      "middle-align",
    ];
    var position = $("#positions .absolute");
    var alignment = $("#alignments article");

    if (checked && (id == "left-layouts" || id == "right-layouts"))
      $("#center-layouts")[0].checked = false;

    if (checked && (id == "top-layouts" || id == "bottom-layouts"))
      $("#middle-layouts")[0].checked = false;

    if (checked && id == "center-layouts") {
      $("#left-layouts")[0].checked = false;
      $("#right-layouts")[0].checked = false;
    }

    if (checked && id == "middle-layouts") {
      $("#top-layouts")[0].checked = false;
      $("#bottom-layouts")[0].checked = false;
    }

    if (checked && (id == "left-align-layouts" || id == "right-align-layouts"))
      $("#center-align-layouts")[0].checked = false;

    if (checked && (id == "top-align-layouts" || id == "bottom-align-layouts"))
      $("#middle-align-layouts")[0].checked = false;

    if (checked && id == "center-align-layouts") {
      $("#left-align-layouts")[0].checked = false;
      $("#right-align-layouts")[0].checked = false;
    }

    if (checked && id == "middle-align-layouts") {
      $("#top-align-layouts")[0].checked = false;
      $("#bottom-align-layouts")[0].checked = false;
    }

    $(position).removeClass("left right center top bottom middle");

    for (var i = 0; i < positions.length; i++) {
      if ($("#" + positions[i] + "-layouts").is(":checked")) {
        $(position).addClass(positions[i]);
      }
    }

    $(alignment).removeClass(
      "left-align right-align center-align top-align bottom-align middle-align"
    );

    for (var i = 0; i < alignments.length; i++) {
      if ($("#" + alignments[i] + "-layouts").is(":checked")) {
        $(alignment).addClass(alignments[i]);
      }
    }
  });
}

const updateIcons = () => {
  var i = $("i");
  if (i.is(".outlined")) i.removeClass("outlined");
  else i.addClass("outlined");
}

const updateContainer = (css:string|null|undefined=undefined) => {
  $(".container").attr("class", css ? "container " + css : "container");
}

const updatePage = (css:string) => {
  ui(css);
}

const updateModal = (css:string) => {
  $("#modal").attr("class", css);
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
    
    if (element.is(".menu")) {
      element.find(".modal").html("");
      var html = formatHtml(element);
      var htmlFormatted = hljs.highlight("html", html).value;
    } else {
      var html = formatHtml(element);
      var htmlFormatted = hljs.highlight("html", html).value;
    }

    if (
      element.is(".menu") ||
      element.is(".modal") ||
      element.is(".toast") ||
      element.is(".container") ||
      element.is(".fixed:not(header)")
    )
      html = "";

    data.samples.push({
      html: html,
      sourceCode: htmlFormatted,
    });
  }

  nextTick(() => {
    ui();
    ui(data.modalSample);
    $(data.modalSample).scrollTop(0);
  });
}

const toastSamples = () => {
  $("#toasts input").on("click", function () {
    var ids = ["top"];
    var toasts = $("#toasts .toast");

    for (var i = 0; i < ids.length; i++) {
      toasts.removeClass(ids[i]);

      var selector = "#" + ids[i] + "-toasts";
      if ($(selector).is(":checked")) {
        if (["top"].indexOf(ids[i]) != -1) toasts.addClass(ids[i]);
      }
    }
  });
}

const tabSamples = () => {
  $("#tabs input").on("click", function () {
    var ids = ["left", "right", "left-align", "center-align", "right-align"];
    var pages = $("#tabs .page");
    var tabs = $("#tabs .tabs");

    for (var i = 0; i < ids.length; i++) {
      pages.removeClass(ids[i]);
      tabs.removeClass(ids[i]);

      var selector = "#" + ids[i] + "-tabs";
      if ($(selector).is(":checked")) {
        if (["left", "right"].indexOf(ids[i]) != -1) pages.addClass(ids[i]);
        if (["left-align", "center-align", "right-align"].indexOf(ids[i]) != -1)
          tabs.addClass(ids[i]);
      }
    }
  });
}

const chipSamples = () => {
  $("#chips input").on("click", function () {
    var ids = ["brown", "indigo", "red", "small", "large", "active"];
    var chips = $("#chips nav .chip:not(.border)");
    var chipsBorder = $("#chips nav .chip.border");

    for (var i = 0; i < ids.length; i++) {
      chips.removeClass(ids[i] + "2");
      chips.removeClass(ids[i]);
      chips.removeClass(ids[i] + "-border");
      chips.removeClass(ids[i] + "-text");

      chipsBorder.removeClass(ids[i] + "2");
      chipsBorder.removeClass(ids[i]);
      chipsBorder.removeClass(ids[i] + "-border");
      chipsBorder.removeClass(ids[i] + "-text");

      var selector = "#" + ids[i] + "-chips";
      if ($(selector).is(":checked")) {
        if (["small", "medium", "large", "active"].indexOf(ids[i]) == -1) {
          chips.addClass(ids[i] + "2");
          chips.addClass(ids[i] + "-text");
          chipsBorder.addClass(ids[i] + "-border");
          chipsBorder.addClass(ids[i] + "-text");
        } else {
          chips.addClass(ids[i]);
          chipsBorder.addClass(ids[i]);
        }
      }
    }
  });
}

const badgeSamples = () => {
  $("#badges input").on("click", function () {
    var ids = ["blue", "purple", "teal"];
    var badges = $("#badges .badge:not(.border)");
    var badgesBorder = $("#badges .badge.border");

    for (var i = 0; i < ids.length; i++) {
      badges.removeClass(ids[i]);
      badges.removeClass(ids[i] + "-border");
      badges.removeClass(ids[i] + "-text");

      badgesBorder.removeClass(ids[i]);
      badgesBorder.removeClass(ids[i] + "-border");
      badgesBorder.removeClass(ids[i] + "-text");

      var selector = "#" + ids[i] + "-badges";
      if ($(selector).is(":checked")) {
        badges.addClass(ids[i]);
        badgesBorder.addClass(ids[i] + "-border");
        badgesBorder.addClass(ids[i] + "-text");
      }
    }
  });
}

const listSamples = () => {
  $("#list input").on("click", function () {
    var ids = ["middle-align", "top-align", "bottom-align", "divider"];
    var rows = $("#list .row");

    rows.removeClass("middle-align");
    rows.removeClass("top-align");
    rows.removeClass("bottom-align");
    rows.removeClass("divider");

    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-lists";
      if ($(selector).is(":checked")) {
        rows.addClass(ids[i]);
      }
    }
  });
}

const tableSamples = () => {
  $("#table input").on("click", function () {
    var ids = ["no-space", "medium-space", "large-space", "center-align", "right-align", "min"];
    var table = $("#table table");

    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-tables";
      if ($(selector).is(":checked")) table.addClass(ids[i]);
      else table.removeClass(ids[i]);
    }
  });
}

const inputSamples = () => {
  $("#border-inputs,#round-inputs,#fill-inputs,#small-inputs,#medium-inputs,#large-inputs,#extra-inputs,#text-inputs,#password-inputs,#file-inputs,#date-inputs,#time-inputs").on("click", function () {
    var ids = [
      "border",
      "fill",
      "round",
      "small",
      "large",
      "extra",
      "text",
      "password",
      "file",
      "date",
      "time",
    ];
    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-inputs";

      if (["text", "password", "file", "date", "time"].indexOf(ids[i]) !== -1) {
        if ($(selector).is(":checked")) {
          var inputs = $(
            "#inputs input[type='text'], #inputs input[type='password'], #inputs input[type='date'], #inputs input[type='time']"
          );
          var files = $("#inputs input[type='file']");
          var labels = $("#inputs .field.label > label");
          var icons = $("#inputs .field.label > i");
          files.remove();

          if (ids[i] == "file") {
            inputs.attr("type", "text");
            labels.html("File");
            icons.html("attach_file");

            for (var j = 0; j < inputs.length; j++)
              $("<input type='file' />").insertAfter(inputs[j]);
          }

          if (ids[i] == "text") {
            labels.html("Label");
            inputs.attr("type", ids[i]);
            icons.html("search");
          }

          if (ids[i] == "password") {
            labels.html("Password");
            inputs.attr("type", ids[i]);
            icons.html("visibility");
          }

          if (ids[i] == "date") {
            labels.html("Date");
            inputs.attr("type", ids[i]);
            icons.html("today");
          }

          if (ids[i] == "time") {
            labels.html("Time");
            inputs.attr("type", ids[i]);
            icons.html("schedule");
          }
        }
      } else {
        if ($(selector).is(":checked"))
          $("#inputs .field").addClass(ids[i]);
        else $("#inputs .field").removeClass(ids[i]);
      }
    }
    ui();
  });
}

const selectSamples = () => {
  $("#border-selects,#round-selects,#fill-selects,#small-selects,#medium-selects,#large-selects,#extra-selects").on("click", function () {
    var ids = ["border", "fill", "round", "small", "large", "extra"];
    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-selects";
      if ($(selector).is(":checked")) $("#selects .field").addClass(ids[i]);
      else $("#selects .field").removeClass(ids[i]);
    }
    ui();
  });
}

const textareaSamples = () => {
  $("#border-textareas,#round-textareas,#fill-textareas,#small-textareas,#medium-textareas,#large-textareas,#extra-textareas").on("click", function () {
    var ids = ["border", "fill", "round", "small", "large", "extra"];
    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-textareas";

      if ($(selector).is(":checked"))
        $("#textareas .field").addClass(ids[i]);
      else $("#textareas .field").removeClass(ids[i]);
    }
    ui();
  });
}

const rowSamples = () => {
  $("#no-space-rows,#small-space-rows,#medium-space-rows,#large-space-rows,#min-rows").on("click", function () {
    var ids = ["no-space", "medium-space", "large-space", "min"];
    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-rows";
      if ($(selector).is(":checked")) $("#rows .row").addClass(ids[i]);
      else $("#rows .row").removeClass(ids[i]);
    }
  });
}

const progressSamples = () => {
  $("#0-progress,#30-progress,#60-progress,#100-progress,#default-progress,#light-green-progress,#orange-progress").on("click", function () {
    var ids = ["0", "30", "60", "100", "light-green", "orange"];
    $("#progress .progress").removeClass("light-green");
    $("#progress .progress").removeClass("orange");

    for (var i = 0; i < ids.length; i++) {
      var selector = "#" + ids[i] + "-progress";

      if ($(selector).is(":checked")) {
        if (["light-green", "orange"].indexOf(ids[i]) != -1)
          $("#progress .progress").addClass(ids[i]);
        else
          document.querySelectorAll("#progress .progress").forEach((x) => ui(x, ids[i]));
      }
    }
  });
}

export default {
  addHomeScreen,
  appBarSamples,
  badgeSamples,
  chipSamples,
  formatHtml,
  goTo,
  inputSamples,
  layoutSamples,
  listSamples,
  progressSamples,
  resetTheme,
  rowSamples,
  selectSamples,
  showSamples,
  tabSamples,
  tableSamples,
  textareaSamples,
  toastSamples,
  updateContainer,
  updateIcons,
  updateMenu,
  updateModal,
  updatePage
}