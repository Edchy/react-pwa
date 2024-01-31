self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...", event);
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...", event);
});

self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetching...", event);
  // event.respondWith(null);
  event.respondWith(fetch(event.request));
});
