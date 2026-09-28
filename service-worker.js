// Service Worker dla Parafii św. Jana Chrzciciela
const CACHE_NAME = 'parafia-cache-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/spiewnik-data.js'
];

// Instalacja – precache statycznych zasobów + natychmiastowe przejęcie
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Aktywacja – usunięcie WSZYSTKICH starych cache'ów + natychmiastowe przejęcie klientów
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch – strategia Network First z rozróżnieniem navigate vs zasoby
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        // Dla nawigacji (HTML) – pewny fallback do index.html z cache
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // Dla zasobów statycznych – fallback do cache
        return caches.match(event.request);
      })
  );
});
