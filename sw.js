// Service Worker: hält die App-Hülle für schnellen Start/Offline bereit.
// Die Listendaten selbst kommen live aus Firebase (nicht aus diesem Cache).
// Versionsnummer NICHT hier ändern: sie kommt aus <meta name="tw-version"> in index.html
// (index.html registriert "sw.js?v=<Version>"; neue Version = neuer Cache, alter wird gelöscht).
const VERSION = new URL(self.location.href).searchParams.get("v") || "0";
const CACHE = "einkauf-" + VERSION;
const DATEIEN = ["./", "index.html", "firebase-config.js", "katalog.js", "manifest.json", "lib/tw-version.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN.map(u => new Request(u, { cache: "reload" })))).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("einkauf-") && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Netzwerk zuerst (damit Updates sofort ankommen), Cache als Rückfall
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Versionsprüfung (lib/tw-version.js, ?twv=…) direkt ans Netz – nicht zwischenspeichern
  if (url.searchParams.has("twv")) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const kopie = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, kopie));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
