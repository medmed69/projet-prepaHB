const CACHE_NAME = 'my-pwa-cache-v1';
const ASSETS_TO_CACHE = [
  '',
  'index.html',
  'app.js',
  'style.css',
  'manifest.webmanifest',
  'src/assets/logo-EEL.png',
  'src/assets/beep.mp3',
];

// Installation : on met les fichiers en cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activation : suppression des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retourne depuis le cache ou depuis le réseau
        return response || fetch(event.request);
      })
      .catch(() => {
        // Optionnel : page de repli si offline et non trouvé
        if (event.request.destination === 'document') {
          return caches.match('offline.html');
        }
      })
  );
});
