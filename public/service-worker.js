self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...", event);
  event.waitUntil(
    caches.open("static").then((cache) => {
      console.log("[Service Worker] Precaching App Shell,", cache);
      cache.add("/");
      cache.add("index.html");
      // cache.add("service-worker.js");
      cache.add("js/app.js");
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...", event);
});

self.addEventListener("fetch", (event) => {
  // console.log("[Service Worker] Fetching...", event);
  // event.respondWith(null);
  // event.respondWith(fetch(event.request));

  event.respondWith(
    (async function () {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;
      return fetch(event.request);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        const cache = await caches.open("dynamic-v1");
        cache.put(event.request.url, response.clone());
        return response;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((_) => {
        return caches.match(event.request);
      })
  );
});
