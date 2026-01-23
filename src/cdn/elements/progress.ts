import { queryAll, hasTag, off, on, isMac, isIOS, isChrome, hasClass } from "../utils";


function onInputDocument(e: Event) {
  const progress = e.target as HTMLProgressElement;
  
  if (hasTag(progress, "progress")) {
    updateProgress(progress);
  } else {
    updateAllProgress();
  }
}

function updateProgress(progress: HTMLProgressElement) {
  requestAnimationFrame(() => {
    if (!progress.hasAttribute("value") && !progress.hasAttribute("max")) {
      const value = hasClass(progress, "circle") ? "50" : "100";
      progress.style.setProperty("--_value", value);
      progress.setAttribute("value", value);
      progress.setAttribute("max", "100");
      progress.classList.add("indeterminate");
    } else {
      progress.style.setProperty("--_value", String(progress.value));
    }
  });
}

export function updateAllProgress() {
  if (isChrome && !isMac && !isIOS) return;

  const body = document.body;
  const progresses = queryAll("progress") as NodeListOf<HTMLProgressElement>;
  if (!progresses.length) off(body, "input", onInputDocument, false);
  else on(body, "input", onInputDocument, false);
  for (let i = 0; i < progresses.length; i++) updateProgress(progresses[i]);
}
