# Nuskha

Pembaca PDF Arab berbasis web dengan OCR dan dukungan penggunaan offline.
PDF yang dipilih diproses di perangkat pengguna.

## Jalankan secara lokal

Dengan Python 3 terpasang, jalankan dari folder repositori:

```sh
python -m http.server 8001 --bind 127.0.0.1 --directory nuskha-offline
```

Buka http://localhost:8001. Pada macOS/Linux, gunakan `python3` jika diperlukan.

Untuk akses HP melalui Wi-Fi yang sama pada Windows, klik dua kali
`START-PHONE.cmd` dan ikuti petunjuknya. Biarkan komputer dan server menyala.

## Pasang di perangkat

Publikasikan folder `nuskha-offline` melalui hosting HTTPS untuk pemasangan
dan penggunaan offline di perangkat lain. Folder ini berisi semua aset aplikasi;
tidak diperlukan proses build.

Lihat [panduan Bahasa Indonesia](PANDUAN-SEMUA-PERANGKAT.md) untuk langkah
Windows, Mac, Linux, Android, iPhone, iPad, hosting, dan pemecahan masalah.

Pengoperasian PDF/OCR pada semua perangkat belum diuji. Pengenalan teks
bergantung pada kualitas dokumen dan kemampuan perangkat.
