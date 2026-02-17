# 🏥 UMKM Klinik Template

Template website modern untuk UMKM Klinik yang responsif dan data-driven. Solusi siap pakai untuk klinik kesehatan ibu dan anak. Dibangun dengan React 19, TypeScript, Tailwind CSS, dan Vite untuk performa optimal.

![Status](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1+-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Tentang Template

**UMKM Klinik Template** adalah template website lengkap untuk klinik kesehatan ibu dan anak yang menyediakan:
- 🤰 Informasi pemeriksaan kehamilan dan pendampingan
- 👶 Layanan perawatan bayi dan anak  
- 💉 Program imunisasi
- 🏥 Jadwal persalinan dan layanan 24 jam
- 📱 Akses digital mudah untuk pasien

Template ini adalah **hasil tugas mata kuliah Pemrograman Berbasis Web** (UNSIA SI503 2025/2026) yang dikembangkan untuk disebarkan sebagai template UMKM, menggabungkan:
- ✅ Versi HTML murni: dokumentasi syarat tugas (`/html` folder)
- ✅ Versi React modern: implementasi production-ready (`/src` folder)
- ✅ Fully customizable: mudah disesuaikan dengan brand klinik apapun

---

## ✨ Fitur Utama

### 🎨 UI/UX
- **Responsive Design** - Mobile-first, optimal di semua ukuran layar
- **Modern Styling** - Pure Tailwind CSS, tidak ada manual CSS di components
- **Animated Effects** - Smooth transitions dan hover effects
- **Accessibility** - ARIA labels dan semantic HTML

### 🎭 Tema & Layout
- **5 Tema Warna** - Soft Rose, Ocean Teal, Sunrise, Forest, Slate Gold
- **Real-Time Theme Switching** - Ubah tanpa reload halaman
- **Multi-Layout System** - 3-5 layout variants per halaman
- **Floating Switcher** - Panel kontrol di bottom-left corner

### 📊 Arsitektur
- **Data-Driven** - Centralized content dalam single `src/content/data.ts`
- **Context API** - State management dengan persistent localStorage
- **TypeScript** - Full type safety di seluruh project
- **React Router V6** - Client-side routing yang smooth

### 📄 Halaman
1. **Home** - Landing page dengan hero, services, testimonials
2. **Edukasi** - Carousel artikel kesehatan ibu & anak
3. **Jadwal** - Jadwal praktek dan layanan klinik
4. **Kontak** - Formulir kontak + lokasi interaktif
5. **Tentang** - Profil bidan, visi-misi, galeri fasilitas

### ⚡ Performa
- **Gzip Compression** - Automatic asset compression
- **Image Optimization** - Smart image format & quality
- **Code Splitting** - Vendor code terpisah untuk caching
- **Minification** - Terser untuk smaller bundles
- **SVG Optimization** - Reduce file size secara otomatis

### 🎵 Bonus
- **Persistent Audio Player** - Music player yang tetap jalan saat berpindah halaman
- **Video Tour** - Integrasi video fasilitas klinik

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19+ · TypeScript · Tailwind CSS 4+ |
| **Routing** | React Router 7+ |
| **Build** | Vite · Bun |
| **Styling** | Tailwind CSS · CSS Custom Properties |
| **Code Quality** | ESLint · TypeScript Compiler |
| **Optimization** | Vite Image Optimizer · Compression Plugin |
| **Hosting** | Vercel (konfigurasi tersedia) |
| **Package Manager** | Bun atau npm |

---

## 📁 Struktur Project

```
umkm-klinik-template/
├── 📄 vite.config.ts  
├── 📄 tsconfig.json 
├── 📄 eslint.config.js
├── 📄 tailwind.config.ts 
│
├── 📁 src/ code
│   ├── App.tsx 
│   ├── main.tsx        
│   ├── index.css
│   │
│   ├── 📁 components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── AudioPlayer.tsx
│   │
│   ├── 📁 pages/
│   │   ├── Home.tsx
│   │   ├── Edukasi.tsx 
│   │   ├── Jadwal.tsx 
│   │   ├── Kontak.tsx
│   │   └── Tentang.tsx 
│   │
│   ├── 📁 hooks/
│   │   └── useLayout.tsx
│   │
│   └── 📁 content/
│       └── data.ts
│
├── 📁 public/
│   ├── img/ · video/ · audio/
│   └── site.webmanifest
│
└── 📄 package.json 
```
---
## � Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/pengikut-raja-capybara/umkm-klinik-template.git
cd umkm-klinik-template
```

### 2. Install Dependencies
```bash
# Menggunakan Bun (recommended)
bun install

# Atau npm
npm install
```

### 3. Jalankan Development Server
```bash
bun run dev
# atau: npm run dev
```
Akses di `http://localhost:5173`

### 4. Build untuk Production
```bash
bun run build
# atau: npm run build
```

Hasil build ada di folder `dist/`

### Command Lainnya
```bash
bun run preview    # Preview production build
bun run lint       # Check code dengan ESLint
```

---

## 🔧 Konfigurasi Build

Vite config sudah teroptimasi dengan:
- ✅ **Image Optimization** - 80% quality dengan format conversion
- ✅ **Gzip Compression** - Asset compression otomatis
- ✅ **Terser Minification** - Code minification
- ✅ **Vendor Splitting** - React & react-router di chunk terpisah
- ✅ **No Source Maps** - Production mode tanpa source maps

---

## 📋 Prasyarat

- **Node.js** v18.x+ atau **Bun** v1.0+
- **Git** untuk version control
- Text editor (VS Code recommended)

---

## 🌍 Versi HTML Murni

Buka langsung di browser tanpa build:
```bash
# Windows
start html/index.html

# macOS
open html/index.html

# Linux
xdg-open html/index.html
```

Versi ini menggunakan vanilla HTML, CSS, dan JavaScript. Menunjukkan syarat tugas kuliah.

---

## 🔀 Fork & Contribusi

### Fork Repository
1. Klik tombol **Fork** di GitHub
2. Clone fork Anda:
   ```bash
   git clone https://github.com/YOUR_USERNAME/umkm-klinik-template.git
   cd umkm-klinik-template
   ```
3. Buat branch baru untuk fitur:
   ```bash
   git checkout -b feature/nama-fitur
   ```

### Development Workflow
1. Edit code dan test di `http://localhost:5173`
2. Follow ESLint rules: `bun run lint`
3. Commit dengan pesan deskriptif:
   ```bash
   git commit -m "feat: deskripsi perubahan"
   ```
4. Push ke branch Anda:
   ```bash
   git push origin feature/nama-fitur
   ```
5. Buat Pull Request ke repository utama

### Commit Message Convention
```
feat:     fitur baru
fix:      perbaikan bug
docs:     dokumentasi
style:    formatting, semicolon (tidak ada perubahan logic)
refactor: refactoring code
perf:     performa improvement
test:     test code
```

---

## 👥 Tim Pengembang (Original)

| Nama | NIM |
|------|-----|
| ANGGA ALFIANSAH | 240101010032 |
| RISSQI AGUNG RAHMADANI | 240101010038 |
| MOCHAMAD RIVALDI ARIEF | 220101010138 |
| THERESIA TITA PABURA | 250101020028 |
| SALSA NUR FATIHA | 250101020086 |

**Diperbarui oleh:** Raja Capybara (Advanced Features)

---

## 🎓 Informasi Akademik

| Keterangan | Detail |
|-----------|--------|
| **Mata Kuliah** | Pemrograman Berbasis Web |
| **Kelas** | SI503 |
| **Program Studi** | PJJ Sistem Informasi S1 |
| **Universitas** | UNSIA (Universitas Siber dan Sains Ada) |
| **Dosen Pengampu** | Ir. Ahmad Chusyairi, M.Kom., CDS., IPM., ASEAN Eng |
| **Semester** | 2025/2026 Ganjil |

---

## � Advanced Features

### Theme System
- 5 tema dengan CSS custom properties
- Real-time switching tanpa reload
- localStorage persistence

### Layout Variants
- Home: 5 variants (Hero Left, Center, Split, Minimal, Stack)
- Edukasi: 3 variants (Split, Full, Stacked)
- Jadwal: 3 variants (Wide, Compact, Stacked)
- Kontak: 4 variants (Map Left/Right, Map Full, Form Only)
- Tentang: 4 variants (Profile Left/Right/Top, Facilities Focus)

### Data Architecture
```typescript
// src/content/data.ts
export const siteData = {
  themes: [/* 5 complete themes */],
  layouts: {
    home: { active: string, variants: [...] },
    edukasi: { active: string, variants: [...] },
    jadwal: { active: string, variants: [...] },
    kontak: { active: string, variants: [...] },
    tentang: { active: string, variants: [...] },
  },
  pages: { /* page content */ },
  footer: { /* footer content */ }
}
```

### Context Management
```typescript
// React Context API untuk theme & layout state
// Persistent dengan localStorage
// Per-page layout control
```

---

## ✅ Quality Assurance

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)
- ✅ TypeScript type safety
- ✅ ESLint code quality
- ✅ Automatic image optimization
- ✅ Asset compression & minification
- ✅ Performance optimized with Vite

---

## 📄 Lisensi

MIT License - Dibuat untuk keperluan akademik.

---

## 🔗 Links

| Link | URL |
|------|-----|
| **GitHub Repository** | [pengikut-raja-capybara/umkm-klinik-template](https://github.com/pengikut-raja-capybara/umkm-klinik-template) |
| **Live Demo** | [https://pengikut-raja-capybara.github.io/umkm-klinik-template/](https://pengikut-raja-capybara.github.io/umkm-klinik-template/) |
| **Report Issues** | [GitHub Issues](https://github.com/pengikut-raja-capybara/umkm-klinik-template/issues) |

---

## 💡 Developer Tips

1. **Mulai development** dengan `bun run dev`
2. **TypeScript first** - gunakan type annotations
3. **Follow lint** - jalankan `bun run lint` sebelum commit
4. **Mobile testing** - test di berbagai ukuran layar
5. **Check build size** - jalankan `bun run build` dan lihat `dist/` folder
6. **Commit sering** - dengan pesan yang meaningful
7. **Update data** - edit `src/content/data.ts` untuk perubahan content

---

## 📞 Support

Untuk pertanyaan atau saran:
- 💬 Buat issue di GitHub
- 📧 Hubungi anggota tim
- 👨‍🏫 Tanyakan ke dosen pengampu

---

<div align="center">

**UMKM Klinik Template 🏥**

Template untuk UMKM Klinik Kesehatan

Pemrograman Berbasis Web | UNSIA SI503 | 2025-2026

_Developed by the Team · Enhanced by Raja Capybara_

Template siap pakai untuk Klinik UMKM di seluruh Indonesia

</div>
</div>
