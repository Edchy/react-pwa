const CACHE_STATIC_NAME = "static-v2";
const CACHE_DYNAMIC_NAME = "dynamic-v2";

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      console.log("[Service Worker] Precaching App Shell,", cache);
      cache.addAll([
        "/",
        "/index.html",
        "/js/app.js",
        "/images/hoppy.jpg",
        "/images/hoppy2.jpg",
        "/images/hoppy3.jpg",
        "/images/logo.svg",
        // "service-worker.js",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...", event);
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log("[Service Worker] Removing old cache.", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  if (!event.request.url.startsWith("http")) {
    return;
  }
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
          cache.put(event.request.url, response.clone());
          return response;
        });
      })
      // eslint-disable-next-line no-unused-vars
      .catch(function (err) {
        return caches.match(event.request);
      })
  );
});
