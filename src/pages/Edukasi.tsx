import { useEffect, useState } from "react";

// Data Dummy untuk Carousel
const carouselItems = [
  {
    id: 1,
    category: "Info Kehamilan",
    title: "Pentingnya Gizi Ibu Hamil",
    desc: "Zat besi dan Asam Folat adalah nutrisi krusial. Kekurangan nutrisi ini dapat menyebabkan anemia. Pastikan konsumsi sayuran hijau dan protein cukup.",
    color: "from-pink-500 to-pink-600",
    dotColor: "bg-pink-500",
    icon: (
      <svg className="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    category: "Tumbuh Kembang",
    title: "Manfaat ASI Eksklusif",
    desc: "ASI adalah makanan terbaik bagi bayi 0-6 bulan. Mengandung antibodi alami yang melindungi bayi dari infeksi virus dan bakteri serta mencegah stunting.",
    color: "from-blue-500 to-blue-600",
    dotColor: "bg-blue-500",
    icon: (
      <svg className="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    category: "Pencegahan",
    title: "Jadwal Imunisasi Dasar",
    desc: "Lindungi si kecil dengan imunisasi lengkap (BCG, Polio, Campak). Cek jadwal lengkap di menu 'Jadwal' atau konsultasikan langsung dengan Bidan.",
    color: "from-green-500 to-green-600",
    dotColor: "bg-green-500",
    icon: (
      <svg className="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function Edukasi() {
  // State untuk Carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  // Logic Prev Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // --- AUTO PLAY LOGIC ---
  useEffect(() => {
    // Set interval 5000ms (5 detik)
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Bersihkan interval jika komponen di-unmount atau user pindah slide manual
    // (Agar timer reset ulang setelah user klik tombol)
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency currentIndex

  // Data Slide Aktif
  const activeSlide = carouselItems[currentIndex];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white px-4 py-12 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Ruang <span className="text-pink-600">Edukasi</span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg">Panduan lengkap kesehatan Ibu & Anak serta persiapan persalinan.</p>
        </div>

        {/* --- CAROUSEL SECTION (Topik Minggu Ini) --- */}
        <div className="relative bg-white rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-50 overflow-hidden mb-10 transition duration-300">
          <div className="md:flex min-h-[300px]">
            {/* Bagian Visual / Icon (Kiri) - Dinamis berdasarkan Color */}
            <div className={`md:w-1/3 bg-gradient-to-br ${activeSlide.color} p-8 flex flex-col items-center justify-center text-white relative transition-colors duration-500`}>
              {/* Tombol Navigasi Mobile (Overlay) */}
              <div className="absolute inset-x-0 flex justify-between px-4 md:hidden z-10">
                <button onClick={prevSlide} className="p-2 bg-white/20 rounded-full hover:bg-white/40">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={nextSlide} className="p-2 bg-white/20 rounded-full hover:bg-white/40">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="text-center animate-fade-in-up">
                <div className="mx-auto justify-items-center mb-4">{activeSlide.icon}</div>
                <h3 className="text-xl mx-auto font-bold opacity-90">Topik Minggu Ini</h3>
              </div>
            </div>

            {/* Bagian Konten (Kanan) */}
            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center relative">
              {/* Tombol Navigasi (Pojok Kanan Atas) */}
              <div className="hidden md:flex absolute top-6 right-6 gap-2">
                <button onClick={prevSlide} className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-pink-600 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-pink-600 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>{activeSlide.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{activeSlide.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{activeSlide.desc}</p>

                {/* Indikator Dots */}
                <div className="flex gap-2">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? `w-8 ${activeSlide.dotColor}` : "w-2 bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID LIST (Dua Kolom) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* KOLOM 1: SYARAT DOKUMEN (Ordered List) [cite: 95] */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-pink-500 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pink-100 rounded-full blur-2xl opacity-50"></div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="bg-pink-100 text-pink-600 p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </span>
              Syarat Dokumen
            </h3>

            <ol className="space-y-1">
              <li className="flex items-start bg-gray-50 p-2 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-pink-500 text-white font-bold rounded-full text-sm mr-4">1</span>
                <span className="text-gray-700 font-medium pt-1">Fotokopi KTP Suami & Istri (2 Lembar)</span>
              </li>
              <li className="flex items-start bg-gray-50 p-2 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-pink-500 text-white font-bold rounded-full text-sm mr-4">2</span>
                <span className="text-gray-700 font-medium pt-1">Fotokopi Kartu Keluarga (KK)</span>
              </li>
              <li className="flex items-start bg-gray-50 p-2 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-pink-500 text-white font-bold rounded-full text-sm mr-4">3</span>
                <span className="text-gray-700 font-medium pt-1">Buku KIA (Buku Pink) Wajib Dibawa</span>
              </li>
              <li className="flex items-start bg-gray-50 p-2 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-pink-500 text-white font-bold rounded-full text-sm mr-4">4</span>
                <span className="text-gray-700 font-medium pt-1">Kartu BPJS Kesehatan (Status Aktif)</span>
              </li>
            </ol>
          </div>

          {/* KOLOM 2: PERLENGKAPAN (Unordered List) [cite: 100] */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-blue-500 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50"></div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </span>
              Perlengkapan Persalinan
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 text-blue-500 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-700">Pakaian Ganti Ibu (Daster Kancing Depan)</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-blue-500 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-700">Pakaian Bayi Lengkap (Baju, Topi, Sarung Tangan)</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-blue-500 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-700">Popok / Diapers Newborn (Secukupnya)</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-blue-500 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-700">Perlengkapan Mandi & Handuk</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-blue-500 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-700">Pembalut Nifas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
