window.beercss = {};

window.addEventListener("load", () => {
    let url = "/sw.js";
    navigator.serviceWorker.register(url);
});

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    window.beercss.installEvent = e;
});