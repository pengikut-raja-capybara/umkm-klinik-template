export default function Tentang() {
  // Data Misi
  const missions = [
    "Memberikan pelayanan kesehatan ibu & anak secara profesional dan humanis.",
    "Menyediakan informasi kesehatan yang akurat dan mudah diakses.",
    "Mendukung proses persalinan aman dan nyaman bagi setiap ibu.",
    "Mengoptimalkan teknologi digital untuk meningkatkan kenyamanan pasien.",
  ];

  // Data Fasilitas (Galeri)
  const facilities = [
    { src: "/img/ruang-tunggu.png", alt: "Ruang Tunggu Klinik" },
    { src: "/img/ruang-periksa.png", alt: "Ruang Periksa Klinik" },
    { src: "/img/ruang-inap.png", alt: "Ruang Inap Klinik" },
  ];

  // Data Why Choose Us
  const reasons = [
    "Bidan berpengalaman dan tersertifikasi.",
    "Fasilitas lengkap dan nyaman untuk ibu & anak.",
    "Layanan cepat, responsif, dan ramah keluarga.",
    "Akses informasi kesehatan yang mudah melalui platform digital.",
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen font-sans">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-pink-100">
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Tentang <span className="text-pink-600">Kami</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Klinik Bidanku adalah layanan kesehatan ibu & anak yang berfokus pada pendampingan kehamilan, persalinan, imunisasi, dan perawatan bayi. Kami hadir untuk memberikan pengalaman pelayanan
            yang ramah, profesional, dan terpercaya bagi keluarga Indonesia.
          </p>
        </div>

        {/* PROFIL BIDAN */}
        <div className="mb-12 bg-pink-50 p-6 rounded-2xl border border-pink-100">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center gap-2">👩‍⚕️ Profil Bidan</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Foto Bidan (Pastikan file ada di public/img/) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-300 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition"></div>
              <img
                src="/img/bidan-foto.png"
                alt="Bidan Siti Aisyah Nurhayati"
                className="relative rounded-xl shadow-md w-[200px] h-[240px] object-cover border-4 border-white transform group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">Bidan Siti Aisyah Nurhayati, S.Tr.Keb</h3>
              <span className="inline-block bg-white text-pink-600 text-xs font-bold px-3 py-1 rounded-full mt-2 mb-4 shadow-sm">Head Midwife / Kepala Bidan</span>
              <p className="text-gray-600 leading-relaxed text-lg">
                Seorang bidan berpengalaman lebih dari 15 tahun dalam membantu proses persalinan, pendampingan kehamilan, dan edukasi kesehatan ibu & anak. Dengan pendekatan yang lembut dan penuh
                empati, beliau selalu memastikan setiap ibu merasa aman dan nyaman selama proses pelayanan.
              </p>
            </div>
          </div>
        </div>

        {/* VISI & MISI */}
        <div className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">🚀 Visi</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 h-full">
              <p className="text-gray-700 italic font-medium leading-relaxed">
                "Menjadi klinik bidan terpercaya yang memberikan layanan berkualitas, edukatif, dan ramah keluarga melalui sistem kesehatan digital yang modern."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">🎯 Misi</h2>
            <ul className="space-y-3">
              {missions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="text-pink-500 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GALERI FASILITAS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fasilitas Klinik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {facilities.map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md group border border-gray-100">
                <div className="overflow-hidden">
                  <img src={item.src} alt={item.alt} className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-3 bg-white text-center text-sm font-semibold text-gray-600">{item.alt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KENAPA MEMILIH KAMI */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-8 rounded-2xl text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Mengapa Memilih Klinik Bidanku?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <span className="bg-white text-pink-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">{index + 1}</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
