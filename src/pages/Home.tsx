import { Link } from "react-router-dom";

export default function Home() {
  // Data Layanan (Biar kodingan rapi tidak copy-paste div berulang)
  const services = [
    { icon: "🤰", title: "Cek Kehamilan", desc: "Pemeriksaan rutin & USG" },
    { icon: "👶", title: "Persalinan", desc: "Proses melahirkan nyaman" },
    { icon: "💉", title: "Imunisasi", desc: "Jadwal imunisasi dasar" },
    { icon: "🤱", title: "KB & Nifas", desc: "Perawatan pasca melahirkan" },
  ];

  // Data Features
  const features = [
    { icon: "⭐", title: "Bidan Berpengalaman", desc: "Pelayanan oleh bidan profesional dengan pengalaman tahunan." },
    { icon: "🏠", title: "Fasilitas Lengkap", desc: "Klinik yang nyaman dan peralatan modern." },
    { icon: "💵", title: "Biaya Terjangkau", desc: "Kualitas terbaik dengan harga yang bersahabat." },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen font-sans">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center bg-pink-50 p-8 rounded-3xl shadow-lg mb-16 border border-pink-100">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 leading-tight mb-4">
            Layanan Kesehatan Ibu & Anak <span className="text-gray-800">Terpercaya</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Platform informasi dan pendaftaran digital untuk klinik bidan mandiri, memudahkan akses Anda ke layanan kesehatan terbaik dari rumah.
          </p>
          <Link
            to="/kontak"
            className="inline-block bg-pink-600 text-white font-semibold py-4 px-8 rounded-full shadow-md hover:bg-pink-700 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            KONSULTASI SEKARANG
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          {/* Placeholder Image (Ganti src dengan gambar lokalmu nanti) */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="/img/ibu-dan-bayi.jpg"
              alt="Ibu dan Bayi"
              className="relative rounded-2xl shadow-xl max-h-80 w-auto object-cover border-4 border-white rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* LAYANAN UTAMA */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Layanan Utama Kami</h2>
        <p className="text-gray-500">Kami fokus pada layanan yang paling Anda butuhkan.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((item, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 group">
            <div className="logo-emoticon text-5xl mb-4 transform group-hover:scale-110 transition duration-300">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-pink-600 transition">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-pink-50 p-10 rounded-3xl shadow-inner border border-pink-100">
        <h2 className="text-2xl font-bold text-pink-600 mb-8 text-center tracking-wide uppercase">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index} className="p-4">
              <div className="logo-emoticon text-4xl mb-4 bg-white w-16 h-16 mx-auto flex items-center justify-center rounded-full shadow-sm">{item.icon}</div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
