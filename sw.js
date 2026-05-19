const CACHE_NAME = "sarf-app-v1";
const urlsToCache = [
  "/sarf-sy/",
  "/sarf-sy/index.html",
  "/sarf-sy/style.css",
  "/sarf-sy/script.js",
  "/sarf-sy/manifest.json",
  "/sarf-sy/img/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});