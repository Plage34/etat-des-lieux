// Service Worker – État des Lieux PWA
const CACHE_NAME = 'edl-valras-v11';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

// Installation : mise en cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('Cache partiel :', err);
        // Cache ce qu'on peut, continue si un asset externe échoue
        return Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})));
      });
    })
  );
  self.skipWaiting();
});

// Activation : nettoyage ancien cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : réseau d'abord, cache en fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Mettre en cache la nouvelle version
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => {
        // Hors-ligne : servir depuis le cache
        return caches.match(event.request).then(cached => {
          return cached || new Response('Hors ligne', { status: 503, statusText: 'Offline' });
        });
      })
  );
});
