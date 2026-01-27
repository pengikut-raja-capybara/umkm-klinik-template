# 🏥 Klinik Bidanku - Platform Layanan Kesehatan Ibu & Anak

Website modern untuk Klinik Bidanku yang menyediakan informasi dan pendaftaran digital untuk layanan kesehatan ibu dan anak. Dibangun dengan teknologi terkini menggunakan React dan Tailwind CSS.

![Status](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Daftar Isi
- [Tentang Project](#-tentang-project)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [Struktur Folder](#-struktur-folder)
- [Instalasi & Setup](#-instalasi--setup)
- [Cara Menjalankan](#-cara-menjalankan)
- [Tim Pengembang](#-tim-pengembang)
- [Informasi Akademik](#-informasi-akademik)

---

## 📖 Tentang Project

**Klinik Bidanku** adalah sebuah website layanan kesehatan yang berfokus pada:
- 🤰 Pemeriksaan kehamilan dan pendampingan
- 👶 Perawatan bayi dan anak
- 💉 Program imunisasi
- 🏥 Layanan persalinan 24 jam
- 📱 Akses digital untuk kemudahan pasien

Project ini merupakan **tugas akhir semester** untuk mata kuliah Pemrograman Berbasis Web, menggabungkan versi HTML murni (syarat tugas) dengan implementasi React yang lebih modern untuk menunjukkan pemahaman mendalam tentang web development.

---

## ✨ Fitur Utama

### Frontend
- ✅ **Responsive Design** - Optimal di semua ukuran layar (mobile, tablet, desktop)
- ✅ **Modern UI/UX** - Desain yang clean dan user-friendly
- ✅ **Multi-Page Navigation** - 5 halaman utama dengan routing yang smooth
- ✅ **Video Integration** - Video tour fasilitas klinik
- ✅ **Animated Components** - Efek hover dan transisi yang menarik
- ✅ **Persistent Audio Player (React)** - Pemutar musik relaksasi yang tetap berjalan saat berpindah halaman (SPA)
- ✅ **Dark/Light Mode Ready** - Support untuk theme switching (future enhancement)

### Halaman Website
1. **Home** - Landing page dengan informasi layanan dan keunggulan klinik
2. **Tentang Kami** - Profil bidan, visi misi, dan galeri fasilitas
3. **Jadwal** - Jadwal praktek dan layanan klinik
4. **Edukasi** - Artikel dan informasi kesehatan ibu & anak
5. **Kontak** - Formulir kontak dan informasi lokasi

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **React 18+** - JavaScript library untuk UI
- **TypeScript** - Type-safe development
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Build & Package Manager
- **Bun** - Fast JavaScript runtime & package manager
- **Node.js** - JavaScript runtime

### Development Tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

### Hosting
- **Vercel** - Deployment dan hosting (konfigurasi tersedia)

---

## 📁 Struktur Folder

```
Klinik Bidanku/
├── 📄 index.html              # Entry point HTML
├── 📄 vite.config.ts          # Konfigurasi Vite
├── 📄 tsconfig.json           # Konfigurasi TypeScript
├── 📄 package.json            # Dependency management
├── 📄 vercel.json             # Konfigurasi Vercel deployment
├── 📄 eslint.config.js        # ESLint configuration
│
├── 📁 public/                 # Static assets
│   ├── img/                   # Gambar statis
│   ├── video/                 # Video statis
│   ├── audio/                 # Audio statis
│   └── site.webmanifest       # PWA manifest
│
├── 📁 html/                   # Versi HTML murni (Syarat Tugas)
│   ├── index.html
│   ├── tentang.html
│   ├── jadwal.html
│   ├── edukasi.html
│   ├── kontak.html
│   ├── img/                   # Gambar untuk halaman HTML
│   ├── video/                 # Video untuk halaman HTML
│   ├── audio/                 # Audio untuk halaman HTML
│   ├── js/                    # JavaScript vanilla
│   └── favicon/               # Favicon files
│
├── 📁 src/                    # Source code React
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point React
│   ├── index.css              # Global styles
│   │
│   ├── 📁 components/         # Reusable components
│   │   ├── Navbar.tsx         # Navigation component
│   │   ├── Footer.tsx         # Footer component
│   │   └── AudioPlayer.tsx    # Pemutar audio relaksasi persisten
│   │
│   └── 📁 pages/              # Page components
│       ├── Home.tsx
│       ├── Tentang.tsx
│       ├── Jadwal.tsx
│       ├── Edukasi.tsx
│       └── Kontak.tsx
│
└── 📁 node_modules/           # Dependencies (auto-generated)
```

---

## 💻 Instalasi & Setup

### Prasyarat
- **Node.js** v18+ atau **Bun** v1.0+
- **Git** untuk version control
- Text editor (VS Code recommended)

### Langkah-Langkah Instalasi

#### 1. Clone Repository
```bash
git clone https://github.com/anggaalfiansah/klinik-bidanku
cd "klinik-bidanku"
```

#### 2. Install Dependencies
**Menggunakan Bun:**
```bash
bun install
```

**Atau Menggunakan npm:**
```bash
npm install
```

---

## 🚀 Cara Menjalankan

### Development Server
**Menggunakan Bun:**
```bash
bun run dev
```

**Menggunakan npm:**
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production
**Menggunakan Bun:**
```bash
bun run build
```

**Menggunakan npm:**
```bash
npm run build
```

Output akan ada di folder `dist/`

### Preview Production Build
```bash
bun run preview
```

### Linting Code
```bash
bun run lint
```

### Akses Versi HTML Murni
Buka file `html/index.html` di browser untuk melihat versi HTML murni (syarat tugas).

---

## 📸 Screenshots

### Halaman Home
- Hero section dengan call-to-action
- Service cards dengan efek hover
- Section "Why Choose Us" yang menarik

### Halaman Tentang
- Profil bidan dengan foto
- Visi & misi dengan layout grid
- Galeri fasilitas dengan hover effects
- Video tour klinik

### Halaman Lainnya
- Jadwal praktek yang responsif
- Artikel edukasi kesehatan
- Form kontak dan lokasi

---

## 👥 Tim Pengembang

| No. | Nama | NIM |
|-----|------|-----|
| 1 | ANGGA ALFIANSAH | 240101010032 |
| 2 | RISSQI AGUNG RAHMADANI | 240101010038 |
| 3 | MOCHAMAD RIVALDI ARIEF | 220101010138 |
| 4 | THERESIA TITA PABURA | 250101020028 |
| 5 | SALSA NUR FATIHA | 250101020086 |

---

## 🎓 Informasi Akademik

- **Mata Kuliah**: Pemrograman Berbasis Web
- **Kelas**: SI503
- **Program Studi**: PJJ Sistem Informasi S1
- **Universitas**: UNSIA (Universitas Siber dan Sains Ada)
- **Dosen Pengampu**: Ir. Ahmad Chusyairi, M.Kom., CDS., IPM., ASEAN Eng
- **Semester**: 2025/2026 Ganjil

---

## 📝 Catatan Penting

### Struktur Dual Versi
Project ini memiliki **dua versi**:

1. **Versi HTML Murni** (`/html` folder)
   - Memenuhi syarat tugas kuliah
   - Menggunakan HTML, CSS, dan JavaScript vanilla
   - Dapat dijalankan langsung dengan membuka file HTML di browser

2. **Versi React Modern** (`/src` folder)
   - Implementasi advanced dengan React
   - Menunjukkan pemahaman web development modern
   - Memerlukan build process dengan Vite

Kedua versi menampilkan konten dan desain yang sama.

### Quality Assurance
- ✅ Responsive design tested di berbagai ukuran layar
- ✅ Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- ✅ Performance optimization dengan Vite
- ✅ Code linting dengan ESLint

---

## 📄 Lisensi

Project ini dibuat untuk keperluan akademik dan distribusi terbatas untuk mata kuliah Pemrograman Berbasis Web.

---

## 🔗 Links Penting

- **Repository**: [GitHub](https://github.com/anggaalfiansah/klinik-bidanku)
- **Live Demo**: [Vercel Deployment](https://klinik-bidanku.vercel.app)

---

## 💡 Tips untuk Pengembang

1. **Sebelum coding**, pastikan sudah menjalankan `bun install`
2. **Gunakan TypeScript** untuk type safety
3. **Follow ESLint rules** untuk konsistensi kode
4. **Test di mobile** untuk memastikan responsive design
5. **Commit messages** harus deskriptif dan meaningful

---

## 📞 Support & Kontak

Untuk pertanyaan atau saran mengenai project ini, silakan hubungi salah satu anggota tim atau dosen pengampu.

---

<div align="center">

**Dibuat untuk tugas mata kuliah Pemrograman Berbasis Web**

UNSIA | SI503 | 2025-2026

</div>