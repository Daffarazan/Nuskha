/* Nuskha: simpan semua file di perangkat supaya jalan tanpa internet. */
var CACHE = "nuskha-v1";
var FILES = [
 "./",
 "./icon-192.png",
 "./icon-512.png",
 "./index.html",
 "./manifest.webmanifest",
 "./vendor/ara-data.js",
 "./vendor/core/tesseract-core-lstm.wasm.js",
 "./vendor/core/tesseract-core-simd-lstm.wasm.js",
 "./vendor/fonts/amiri-arabic-400-normal.woff2",
 "./vendor/fonts/amiri-arabic-700-normal.woff2",
 "./vendor/fonts/amiri-latin-400-normal.woff2",
 "./vendor/fonts/amiri-latin-700-normal.woff2",
 "./vendor/fonts/hanken-grotesk-latin-400-normal.woff2",
 "./vendor/fonts/hanken-grotesk-latin-500-normal.woff2",
 "./vendor/fonts/hanken-grotesk-latin-600-normal.woff2",
 "./vendor/pdf.min.js",
 "./vendor/pdf.worker.min.js",
 "./vendor/tesseract.min.js",
 "./vendor/worker-wrapper.js",
 "./vendor/worker.min.js"
];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
    if (hit) return hit;
    return fetch(e.request).catch(function () {
      if (e.request.mode === "navigate") return caches.match("./index.html");
      return Response.error();
    });
  }));
});
