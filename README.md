# STAR ASN Launcher + Location Test (PWA iPhone)

PWA independen untuk **membuka situs login resmi** dan untuk **menguji fungsi koordinat tetap di dalam aplikasi PWA sendiri**. Ini bukan aplikasi resmi STAR ASN dan tidak mengubah GPS sistem iPhone atau data lokasi yang diberikan situs pihak ketiga.

## Koordinat tetap
- Latitude: `-6.2212607`
- Longitude: `106.8321831`
- `153m` dari tautan peta umumnya menunjukkan ketinggian pandangan peta, **bukan** altitude GPS sehingga tidak digunakan sebagai altitude.

## Cara terbitkan memakai repository `fluckinesia/bintang`
1. Ekstrak ZIP, lalu upload **isi foldernya** (index.html, manifest.webmanifest, app.js, styles.css, sw.js, dan folder icons) ke **root** repository `fluckinesia/bintang` melalui **Add file → Upload files**. File Android yang sudah ada boleh tetap disimpan.
2. Klik **Commit changes**.
3. Di GitHub buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih `Deploy from a branch`, pilih `main` dan `/(root)`, kemudian **Save**.
5. Setelah Pages berhasil dipublikasikan, akses `https://fluckinesia.github.io/bintang/` dari **Safari** di iPhone.
6. Tap **Bagikan → Tambahkan ke Layar Utama** / **Add to Home Screen** untuk memasang PWA.

> URL publik baru berfungsi setelah GitHub Pages benar-benar sukses dipublikasikan. PWA tidak bisa langsung diinstal dari file ZIP di iPhone.

## Batasan penting
- PWA ini menyediakan objek `window.LocationTest.getCurrentPosition()` yang mengembalikan koordinat **simulasi tetap** untuk fitur pengujian di PWA.
- PWA tidak memodifikasi `navigator.geolocation` milik Safari atau website lain.
- Saat tombol **Buka halaman login** digunakan, STAR ASN dibuka di halaman terpisah. Situs tersebut dapat membaca **lokasi asli** perangkat sesuai izin yang diberikan pengguna. PWA ini tidak memiliki hak untuk mengganti hasilnya.
- Halaman pihak ketiga tidak dapat disisipkan/mengendalikan lokasi dari PWA domain lain karena keamanan *same-origin policy*.

## Memeriksa secara lokal
Buka `index.html` untuk melihat UI; service worker dan instalasi PWA memerlukan HTTPS atau localhost. Hindari memasukkan data login ke PWA. Kredensial hanya dimasukkan di situs resmi yang dibuka lewat tautan HTTPS.
