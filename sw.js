self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("smra")
      .then((cache) => {
        return cache.addAll([
          "/supermetrics-react-assignment/manifest.json",
          "/supermetrics-react-assignment/assets/images/icons/icon-144.png",
          "/supermetrics-react-assignment/",
          "/supermetrics-react-assignment/dashboard",
          "/supermetrics-react-assignment/static/js/bundle.js",
          "/supermetrics-react-assignment/static/js/main.chunk.js",
          "/supermetrics-react-assignment/static/js/vendors~main.chunk.js",
          "/supermetrics-react-assignment/static/js/1.chunk.js",
          "/supermetrics-react-assignment/static/js/0.chunk.js",
          "/supermetrics-react-assignment/favicon.png",
        ]);
      }),
  );
});

self.addEventListener("fetch", (event) => {
  if(!navigator.onLine) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          const requestUrl = event.request.clone();
          fetch(requestUrl);
        }),
    );
  }
});
