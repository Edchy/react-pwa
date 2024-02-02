// import "promise-polyfill/src/polyfill";
// import "whatwg-fetch";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "/" })
    .then(() => console.log("Service Worker registered"))
    .catch((err) => console.log("Service Worker not registered", err));
}
