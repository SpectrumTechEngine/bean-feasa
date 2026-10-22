// Bean Feasa: keeps a copy of the app so it opens without internet, and always fetches the newest version when online.
const C = 'bean-feasa-v2';
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then((c) => c.addAll(['./', 'content.js', 'icon-192.png'])).catch(() => {}));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== C).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return; // only this website's own files
  // newest first, saved copy when offline
  e.respondWith(fetch(r).then((res) => { if (res && res.ok) { const cp = res.clone(); caches.open(C).then((c) => c.put(r, cp)); } return res; })
    .catch(() => caches.match(r).then((m) => m || (r.mode === 'navigate' ? caches.match('./') : undefined))));
});
