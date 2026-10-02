# Portofolio — Mochammad Aldiansyah 🏖️🌊

Website portofolio pribadi interaktif bertema pesisir pantai dan neo-brutalisme modern. Dilengkapi dengan simulasi ombak 2D canvas, fisika gerak dinamis, karakter pantai interaktif, dan arsitektur kode React 19 + TypeScript + Vite yang rapi.

Dibuat oleh **Mochammad Aldiansyah** — [github.com/MochammadAldiansyah](https://github.com/MochammadAldiansyah).

---

## Fitur Utama

- **Fisika Air Canvas Real-Time**: Simulasi ombak laut, gelembung udara mengapung, ikan berenang, dan riak air interaktif saat diklik murni berbasis HTML5 2D Canvas (tanpa library WebGL berat).
- **Karakter Pantai Interaktif**: Bebek karet yang bisa di-drag dan dilempar ke air, kepiting pantai, serta burung camar terbang dengan dialog jenaka yang saling terhubung.
- **Showcase Proyek Flagship**: Tampilan kartu proyek interaktif lengkap dengan modal studi kasus dan metrik teknis.
- **Visualisasi Tech Stack Pipeline**: Pipeline grafis interaktif untuk memamerkan tools dan alur teknologi yang dikuasai.
- **Milestone Timeline**: Rekam jejak pengalaman dan pendidikan dengan progress bar vertikal yang terisi otomatis mengikuti posisi scroll.
- **Kontak Bento Dock**: Terminal kontak interaktif dengan fitur 3D card flip untuk catatan developer.
- **Desain Neo-Brutalist Coastal**: Perpaduan palet warna laut tropis, pasir pantai hangat, tipografi monospace tegas, dan drop-shadow solid.

---

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Motion**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React & Simple Icons

---

## Cara Menjalankan & Menyesuaikan

### 1. Install Dependensi
```bash
npm install
```

### 2. Sesuaikan Data
Semua data teks, proyek, kontak, dan keahlian terpusat rapi dalam satu file data:
- Buka file `src/data/portfolioData.ts`.
- Bagian `profileData` → nama, tagline, pendidikan, bio, kontak.
- Bagian `projectsData` → daftar proyek (sudah diisi dari repo GitHub yang di-pin).
- Bagian `experienceData` → riwayat pendidikan & pengalaman (masih placeholder, silakan isi).
- Bagian `techStackData` → daftar teknologi yang dikuasai.
- Ganti avatar profil: taruh foto Anda di `public/` dan update `avatarUrl` di `src/data/portfolioData.ts`.
- Ganti file CV: taruh file PDF resume Anda di `public/cv.pdf`.

### 3. Ganti Gambar Preview Proyek
Letakkan screenshot tiap proyek di `public/projects/` dengan nama berikut (agar cocok dengan `imageUrl` di `portfolioData.ts`):
- `noekarta.png`
- `periksa_id.png`
- `journal.png`
- `pageturn.png`
- `bioguard.png`
- `rpl-archive.png`

Jika file belum ada, website otomatis menampilkan placeholder bergaya (tidak error).

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka browser di `http://localhost:5173`.

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build siap deploy akan langsung berada di folder `dist/`.

---

## Struktur Folder

```text
Aldiansyah/
├── public/              # Aset statis, ikon, avatar, dan file CV
├── src/
│   ├── components/      # Komponen antarmuka modular
│   │   ├── contact/     # Section kontak, bento dock & ocean canvas
│   │   ├── hero/        # Hero section, physics stage, karakter pantai
│   │   ├── journey/     # Rekam jejak & timeline progress
│   │   ├── navigation/  # Navbar floating
│   │   ├── profile/     # Profil teknis & stage arsitektur
│   │   ├── projects/    # Showcase proyek, dock filter, modal kasus
│   │   ├── tech/        # Tech stack pipeline & dekorasi pantai
│   │   └── ui/          # Komponen tombol taktil & notifikasi
│   ├── data/            # Data terpusat (portfolioData.ts)
│   ├── hooks/           # Custom hooks (Lenis scroll, card tilt, dll)
│   ├── types/           # Definisi TypeScript
│   ├── App.tsx          # Komponen utama halaman
│   ├── main.tsx         # Entry point aplikasi
│   └── index.css        # Konfigurasi Tailwind CSS v4
├── package.json
└── vite.config.ts
```

---

## Deploy ke Vercel / Netlify

Website ini adalah Single Page Application (SPA) murni berbasis Vite. Anda bisa langsung menautkan repository ini ke Vercel atau Netlify tanpa konfigurasi server tambahan.

---

## Lisensi

Proyek ini merupakan karya pribadi. Seluruh hak cipta dilindungi oleh pemilik proyek.
