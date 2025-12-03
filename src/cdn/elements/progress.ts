import { queryAll, hasTag, off, on, isMac, isIOS, isChrome } from "../utils";


function onInputDocument(e: Event) {
  const progress = e.target as HTMLProgressElement;
  
  if (hasTag(progress, "progress")) {
    updateProgress(progress);
  } else {
    updateAllProgress();
  }
}

function updateProgress(progress: HTMLProgressElement) {
  progress.style.setProperty("--_value", String(progress.value));
}

export function updateAllProgress() {
  if (isChrome && !isMac && !isIOS) return;

  const body = document.body;
  const progresses = queryAll("progress") as NodeListOf<HTMLProgressElement>;
  if (!progresses.length) off(body, "input", onInputDocument, false);
  else on(body, "input", onInputDocument, false);
  for (let i = 0; i < progresses.length; i++) updateProgress(progresses[i]);
}
