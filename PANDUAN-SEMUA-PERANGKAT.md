# Panduan membuka Nuskha di berbagai perangkat

Nuskha adalah aplikasi web untuk membaca PDF Arab dan mengenali teks hasil pindai (OCR). Gunakan peramban modern di komputer Windows, Mac, Linux, Chromebook, HP Android, iPhone, atau tablet. Dukungan fitur dapat berbeda menurut perangkat dan versi peramban.

**Jangan membuka `index.html` dengan klik dua kali.** Jalankan melalui alamat web agar fitur PDF dan OCR dapat bekerja.

## Pilih cara membuka

| Kebutuhan | Cara | Laptop harus menyala? |
| --- | --- | --- |
| Mencoba di komputer ini | Jalankan server lokal | Ya |
| Membuka di HP atau komputer lain dalam satu Wi-Fi | Gunakan alamat IP laptop | Ya |
| Membuka dari mana saja dan memasang untuk penggunaan offline | Unggah aplikasi ke hosting HTTPS sekali | Tidak |

## 1. Membuka di laptop Windows ini

1. Buka folder proyek yang berisi `START-PHONE.cmd`.
2. Klik dua kali **START-PHONE.cmd**.
3. Biarkan jendela server tetap terbuka.
4. Buka **http://localhost:8001** di Chrome atau Edge.
5. Tekan **Buka PDF**, lalu pilih dokumen.

Python sudah tersedia di laptop ini. Jika menyalin proyek ke komputer Windows lain, komputer itu juga memerlukan Python 3 untuk menjalankan peluncur ini. Tutup server dengan **Ctrl+C**. Jika server sudah berjalan, cukup buka alamatnya tanpa menjalankan peluncur lagi.

## 2. Membuka di HP, tablet, atau komputer lain melalui Wi-Fi

1. Sambungkan perangkat dan laptop ke **Wi-Fi yang sama**.
2. Jalankan `START-PHONE.cmd` di laptop.
3. Pada informasi jaringan yang muncul, cari bagian **Wi-Fi**, lalu **IPv4 Address**.
4. Di peramban perangkat lain, ketik `http://ALAMAT-IP:8001`, dengan mengganti `ALAMAT-IP` menggunakan angka IPv4 tersebut.
5. Tekan **Buka PDF** dan pilih berkas yang tersimpan di perangkat itu.

Contoh: jika IPv4 laptop adalah `192.168.1.10`, buka **http://192.168.1.10:8001**.

Periksa kembali alamat IPv4 setiap kali berganti atau menyambungkan ulang Wi-Fi karena alamat IP bisa berubah.

Gunakan Chrome di Android, Safari di iPhone/iPad, atau peramban modern di komputer. Jangan menggunakan `localhost` di HP: alamat itu menunjuk ke HP sendiri, bukan laptop.

Laptop harus tetap menyala, tidak dalam mode tidur, dan server harus tetap berjalan. Cara ini tidak memerlukan hosting, tetapi alamat HTTP jaringan lokal **tidak mendukung penyimpanan offline melalui service worker**. Fitur offline memerlukan konteks aman seperti HTTPS. [Penjelasan MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

## 3. Membuka dari mana saja tanpa bergantung pada laptop

Lakukan penyiapan berikut sekali dari komputer yang terhubung ke internet:

1. Buka [Netlify Drop](https://app.netlify.com/drop).
2. Cari **folder aplikasi bagian dalam**, yaitu folder `nuskha-offline` yang langsung berisi `index.html`, `sw.js`, `manifest.webmanifest`, ikon, dan folder `vendor`.
3. Seret folder tersebut ke area unggah Netlify. Jangan hanya mengunggah `index.html`; PDF dan OCR membutuhkan berkas dalam `vendor`.
4. Ikuti petunjuk akun atau pengelolaan situs yang ditampilkan agar situs dapat dikelola kembali.
5. Setelah publikasi selesai, salin alamat **HTTPS** yang diberikan.
6. Buka alamat tersebut pada setiap perangkat yang ingin digunakan. Simpan sebagai bookmark atau pasang ke layar utama.

Netlify mendukung publikasi dengan menyeret folder proyek. [Panduan resmi Netlify](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/)

Folder yang diunggah akan menjadi berkas situs yang dapat diakses pengunjung. Unggah hanya berkas aplikasi; jangan menambahkan PDF pribadi ke folder itu. PDF yang dipilih melalui tombol **Buka PDF** diproses di perangkat pengguna.

## 4. Memasang ke layar utama

Gunakan **alamat HTTPS hasil publikasi** untuk langkah ini. Nama menu bisa berbeda menurut bahasa dan versi peramban.

| Perangkat | Langkah |
| --- | --- |
| Android / tablet Android | Buka situs di Chrome, lalu pilih tombol **Pasang aplikasi** jika muncul, atau menu **⋮ → Instal aplikasi / Tambahkan ke layar utama**. |
| iPhone / iPad | Buka situs di Safari, tekan **Bagikan → Tambah ke Layar Utama → Tambah**. Jika ada pilihan **Buka sebagai Aplikasi Web**, aktifkan. |
| Windows / Mac / Linux / Chromebook | Buka di Chrome atau Edge, lalu pilih **Pasang aplikasi** atau ikon instal di bilah alamat jika tersedia. Jika tidak tersedia, simpan bookmark dan gunakan melalui peramban. |

Langkah Safari mengikuti [panduan Apple](https://support.apple.com/en-mide/guide/iphone/iphea86e5236/27/ios/27).

## 5. Memastikan aplikasi bisa digunakan tanpa internet

Lakukan pada **setiap perangkat** yang akan dipakai:

1. Buka Nuskha dari alamat HTTPS saat internet masih tersambung.
2. Pada pemuatan pertama, tunggu pesan **Siap dipakai tanpa internet**. Berkas aplikasi sekitar 12 MB, sehingga waktu unduh bergantung pada koneksi.
3. Jika sudah dipasang, buka juga Nuskha dari ikon aplikasi saat masih tersambung.
4. Siapkan PDF yang sudah diunduh ke perangkat. Berkas yang hanya ada di penyimpanan cloud mungkin masih membutuhkan internet untuk diambil.
5. Matikan Wi-Fi dan data seluler, lalu tutup dan buka kembali aplikasi.
6. Coba buka PDF dan jalankan OCR pada halaman pindai untuk memastikan keduanya bekerja pada perangkat tersebut.

Jangan menghapus data situs atau cache aplikasi jika ingin mempertahankan berkas offline. Peramban atau sistem dapat menghapus penyimpanan situs ketika ruang perangkat terbatas. Jika aplikasi tidak bisa dibuka offline, sambungkan internet lalu buka kembali. Hindari mode privat untuk pemakaian offline rutin.

## 6. Menjalankan server dari Mac atau Linux

Bagian ini hanya diperlukan jika Mac/Linux akan menjadi komputer server. Untuk sekadar membuka aplikasi, gunakan alamat Wi-Fi atau HTTPS seperti langkah sebelumnya.

Dengan Python 3 tersedia, buka Terminal pada folder proyek bagian luar yang berisi folder aplikasi `nuskha-offline`, lalu jalankan:

```sh
python3 -m http.server 8001 --bind 0.0.0.0 --directory nuskha-offline
```

Buka **http://localhost:8001** pada komputer tersebut. Untuk perangkat lain, lihat alamat IP Wi-Fi komputer melalui pengaturan jaringan lalu gunakan `http://ALAMAT-IP:8001`. Tekan **Ctrl+C** untuk menghentikan server.

## Jika tidak berhasil

| Masalah | Yang perlu dilakukan |
| --- | --- |
| Alamat tidak terbuka di HP | Pastikan Wi-Fi sama, IP benar, laptop tidak tidur, dan server masih berjalan. |
| Wi-Fi kampus, kantor, atau tamu memblokir koneksi | Coba jaringan rumah tepercaya atau hotspot HP, lalu sambungkan laptop ke hotspot dan periksa ulang IP laptop. |
| Windows Firewall meminta izin | Izinkan akses pada jaringan privat yang dipercaya. Jangan mematikan firewall seluruhnya. |
| Port 8001 sudah digunakan | Jika server Nuskha masih berjalan, gunakan server itu. Jangan membuka peluncur kedua. |
| Tombol instal tidak muncul | Gunakan HTTPS dan periksa menu peramban. Aplikasi tetap bisa dibuka sebagai situs. |
| Pesan siap offline tidak muncul | Periksa koneksi dan gunakan HTTPS. Pesan hanya ditampilkan sekali ketika penanda lokal belum tersimpan; uji membuka ulang tanpa internet untuk memastikan. |
| OCR lambat atau gagal pada dokumen besar | Coba dokumen atau jumlah halaman lebih kecil dan tutup aplikasi lain untuk mengurangi penggunaan memori. |

Server lokal membagikan isi folder aplikasi kepada perangkat yang dapat menjangkaunya. Gunakan jaringan tepercaya dan jangan menyimpan dokumen pribadi di folder aplikasi.

Panduan ini disusun dari konfigurasi proyek dan dokumentasi terkait. Pengoperasian langsung di Android, iPhone/iPad, Mac, dan Linux belum diuji dalam sesi ini.
