/* Membungkus worker tesseract.js: data bahasa Arab diambil dari ara-data.js, bukan dari jaringan. */
importScripts("ara-data.js");
(function () {
  var realFetch = self.fetch ? self.fetch.bind(self) : null;
  var bytes = null;
  function araBytes() {
    if (!bytes) {
      var bin = atob(self.__ARA_GZ_B64), n = bin.length, u = new Uint8Array(n), i;
      for (i = 0; i < n; i++) u[i] = bin.charCodeAt(i);
      bytes = u;
    }
    return bytes;
  }
  self.fetch = function (url, opts) {
    if (/ara\.traineddata/.test(String(url))) {
      return Promise.resolve(new Response(araBytes(), { status: 200, headers: { "Content-Type": "application/octet-stream" } }));
    }
    return realFetch ? realFetch(url, opts) : Promise.reject(new Error("fetch tidak tersedia"));
  };
})();
importScripts("worker.min.js");
