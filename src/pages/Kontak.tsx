import { useState, type ChangeEvent, type FormEvent } from "react";

// Interface untuk State Data
interface FormDataState {
  nama: string;
  whatsapp: string;
  layanan: string;
  keluhan: string;
}

export default function Kontak() {
  // State untuk data formulir
  const [formData, setFormData] = useState<FormDataState>({
    nama: "",
    whatsapp: "",
    layanan: "Cek Hamil (ANC)", // Default value match option
    keluhan: "",
  });

  // Handle perubahan input dengan Tipe Data yang aman
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Logic Submit ke WhatsApp
  const handleKirimWA = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format Pesan dengan Encode URI agar aman di URL
    const message = `Halo Bidan, saya *${formData.nama}*.%0A` + `No WA: ${formData.whatsapp}%0A` + `Ingin daftar: *${formData.layanan}*.%0A` + `Keluhan/Catatan: ${formData.keluhan}`;

    // Redirect ke API WA
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Hubungi <span className="text-pink-600">Kami</span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">Konsultasi kesehatan Ibu & Anak kini lebih mudah.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* --- KOLOM KIRI: INFO & MAPS --- */}
          <div className="space-y-8">
            {/* Kartu Lokasi */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-200 relative overflow-hidden group hover:shadow-2xl transition duration-300">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pink-100 rounded-full blur-2xl opacity-50 group-hover:bg-pink-200 transition"></div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">📍 Lokasi Klinik</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Jl. Kita Masih Panjang No. 1
                <br />
                (Dekat Posyandu), Kecamatan Ibu dan Anak.
                <br />
                {/* UPDATE JAM BUKA AGAR SESUAI JADWAL */}
                <span className="text-pink-600 font-semibold text-sm block mt-2">
                  Senin - Jumat: 08.00 - 16.00 WIB
                  <br />
                  Sabtu: 09.00 - 14.00 WIB
                </span>
              </p>

              {/* Dummy Maps Embed */}
              <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-medium">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1511.546025029246!2d106.82121053646382!3d-6.29831165673253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1765185626546!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Kartu Kontak Cepat */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-2">Butuh Bantuan Darurat?</h3>
              <p className="opacity-90 mb-4 text-sm">Untuk persalinan darurat 24 Jam, silakan telepon langsung.</p>
              <a href="tel:081234567890" className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition shadow-sm">
                📞 Telepon Bidan
              </a>
            </div>
          </div>

          {/* --- KOLOM KANAN: FORMULIR --- */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-200 relative">
            <form onSubmit={handleKirimWA} className="space-y-6">
              {/* Input Nama */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {/* Icon User SVG */}
                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-pink-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="nama"
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition duration-200"
                    placeholder="Masukkan nama Ibu..."
                  />
                </div>
              </div>

              {/* Input WhatsApp */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">No. WhatsApp</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {/* Icon Phone SVG */}
                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-pink-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    name="whatsapp"
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition duration-200"
                    placeholder="Contoh: 0812..."
                  />
                </div>
              </div>

              {/* Select Layanan */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Jenis Layanan</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {/* Icon List SVG */}
                    <svg className="h-5 w-5 text-gray-400 group-focus-within:text-pink-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <select
                    name="layanan"
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition duration-200 appearance-none cursor-pointer"
                  >
                    <option>Cek Hamil (ANC)</option>
                    <option>Imunisasi Anak</option>
                    <option>KB & Nifas</option>
                    <option>Persalinan</option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Textarea Keluhan */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Keluhan / Catatan</label>
                <textarea
                  name="keluhan"
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 h-32 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition duration-200 resize-none"
                  placeholder="Tulis keluhan atau request jam kunjungan..."
                ></textarea>
              </div>

              {/* TOMBOL SUBMIT */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                {/* WA Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Konsultasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
