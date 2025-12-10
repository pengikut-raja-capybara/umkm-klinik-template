export default function Jadwal() {
  // Data Jadwal Praktek
  const jadwalPraktek = [
    { hari: "Senin", buka: "08.00 WIB", tutup: "16.00 WIB" },
    { hari: "Selasa", buka: "08.00 WIB", tutup: "16.00 WIB" },
    { hari: "Rabu", buka: "08.00 WIB", tutup: "16.00 WIB" },
    { hari: "Kamis", buka: "08.00 WIB", tutup: "16.00 WIB" },
    { hari: "Jumat", buka: "08.00 WIB", tutup: "16.00 WIB" },
    { hari: "Sabtu", buka: "09.00 WIB", tutup: "14.00 WIB" },
    { hari: "Minggu", buka: "Tutup", tutup: "-" },
  ];

  // Data Jadwal Imunisasi
  const jadwalImunisasi = [
    { umur: "0 Bulan", vaksin: "Hepatitis B0" },
    { umur: "1 Bulan", vaksin: "BCG, Polio 1" },
    { umur: "2 Bulan", vaksin: "DPT-HB-Hib 1, Polio 2" },
    { umur: "3 Bulan", vaksin: "DPT-HB-Hib 2, Polio 3" },
    { umur: "4 Bulan", vaksin: "DPT-HB-Hib 3, Polio 4" },
    { umur: "9 Bulan", vaksin: "Campak / MR" },
  ];

  return (
    // REVISI: max-w-4xl diubah jadi max-w-6xl biar LEBAR
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen font-sans">
      {/* HEADER HALAMAN */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Jadwal <span className="text-pink-600">Pelayanan</span>
        </h1>
        <p className="text-gray-500 mt-2">Informasi jam operasional klinik dan jadwal imunisasi dasar lengkap.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* TABEL 1: JADWAL PRAKTEK */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-100 h-full">
          <div className="flex items-center gapx-4 py-2 mb-8">
            <span className="bg-pink-100 p-3 rounded-xl text-pink-600 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div className="px-4">
              <h2 className="text-2xl font-bold text-gray-800">Jam Praktek</h2>
              <p className="text-sm text-gray-400">Waktu Indonesia Barat (WIB)</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                <tr>
                  <th className="px-4 py-2 font-semibold text-sm uppercase tracking-wider">Hari</th>
                  <th className="px-4 py-2 font-semibold text-sm uppercase tracking-wider">Jam Buka</th>
                  <th className="px-4 py-2 font-semibold text-sm uppercase tracking-wider">Jam Tutup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {jadwalPraktek.map((item, index) => (
                  <tr key={index} className="hover:bg-pink-50/50 transition">
                    <td className={`px-4 py-2 font-bold ${item.hari === "Minggu" ? "text-red-500" : "text-gray-700"}`}>{item.hari}</td>
                    <td className="px-4 py-2 text-gray-600 font-medium">{item.buka}</td>
                    <td className="px-4 py-2 text-gray-600 font-medium">{item.tutup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TABEL 2: JADWAL IMUNISASI */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 h-full flex flex-col">
          <div className="flex items-center gapx-4 py-2 mb-8">
            <span className="bg-blue-100 p-3 rounded-xl text-blue-600 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </span>
            <div className="px-4">
              <h2 className="text-2xl font-bold text-gray-800">Imunisasi Dasar</h2>
              <p className="text-sm text-gray-400">Sesuai anjuran Kemenkes RI</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 font-semibold text-sm uppercase tracking-wider w-1/3">Umur Bayi</th>
                  <th className="px-4 py-2 font-semibold text-sm uppercase tracking-wider">Jenis Vaksin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {jadwalImunisasi.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition">
                    <td className="px-4 py-2 font-bold text-gray-700">{item.umur}</td>
                    <td className="px-4 py-2 text-blue-600 font-semibold">{item.vaksin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-100 flex gap-3 items-start">
            <span className="text-yellow-600 mt-0.5 flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Catatan Penting:</strong> <br />
              Pastikan kondisi bayi sehat (tidak demam) saat akan imunisasi. Bawa selalu Buku KIA (Buku Pink).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
