import { siteData } from "../content/data";
import { useJadwalLayout } from "../hooks/useLayout";

export default function Jadwal() {
  const { schedule } = siteData;
  const { jadwalLayout } = useJadwalLayout();

  // Container class based on layout
  let containerClass = "max-w-5xl";
  let gridClass = "grid lg:grid-cols-2 gap-12 items-start";
  let tableTextSize = "text-sm";

  if (jadwalLayout === "wide") {
    containerClass = "max-w-7xl";
  } else if (jadwalLayout === "compact") {
    containerClass = "max-w-4xl";
    tableTextSize = "text-xs";
  } else if (jadwalLayout === "stacked") {
    gridClass = "flex flex-col gap-8";
  }

  return (
    <main className={`${containerClass} mx-auto px-4 py-12 min-h-screen font-sans`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold theme-text">
          Jadwal <span className="theme-accent-text">Pelayanan</span>
        </h1>
        <p className="theme-muted mt-2">Informasi jam operasional klinik dan jadwal imunisasi dasar lengkap.</p>
      </div>

      <div className={gridClass}>
        <div className="theme-card p-8 rounded-3xl shadow-lg border theme-border h-full">
          <div className="flex items-center gap-x-4 py-2 mb-8">
            <span className="theme-accent-soft-bg p-3 rounded-xl theme-accent-text shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div className="px-4">
              <h2 className="text-2xl font-bold theme-text">Jam Praktek</h2>
              <p className="text-sm theme-muted">Waktu Indonesia Barat (WIB)</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border theme-border shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="theme-accent-gradient text-white">
                <tr>
                  <th className={`px-4 py-2 font-semibold uppercase tracking-wider ${tableTextSize}`}>Hari</th>
                  <th className={`px-4 py-2 font-semibold uppercase tracking-wider ${tableTextSize}`}>Jam Buka</th>
                  <th className={`px-4 py-2 font-semibold uppercase tracking-wider ${tableTextSize}`}>Jam Tutup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--border)] bg-white">
                {schedule.practice.map((item) => (
                  <tr key={item.hari} className="hover:bg-[color:var(--accent-soft)]/40 transition">
                    <td className={`px-4 py-2 font-bold ${item.hari === "Minggu" ? "text-red-500" : "theme-text"} ${tableTextSize}`}>{item.hari}</td>
                    <td className={`px-4 py-2 theme-muted font-medium ${tableTextSize}`}>{item.buka}</td>
                    <td className={`px-4 py-2 theme-muted font-medium ${tableTextSize}`}>{item.tutup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="theme-card p-8 rounded-3xl shadow-lg border theme-border h-full flex flex-col">
          <div className="flex items-center gap-x-4 py-2 mb-8">
            <span className="theme-secondary-soft-bg p-3 rounded-xl theme-secondary-text shadow-sm">
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
              <h2 className="text-2xl font-bold theme-text">Imunisasi Dasar</h2>
              <p className="text-sm theme-muted">Sesuai anjuran Kemenkes RI</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border theme-border shadow-sm mb-auto">
            <table className="w-full text-left border-collapse">
              <thead className="theme-secondary-gradient text-white">
                <tr>
                  <th className={`px-4 py-2 font-semibold uppercase tracking-wider w-1/3 ${tableTextSize}`}>Umur Bayi</th>
                  <th className={`px-4 py-2 font-semibold uppercase tracking-wider ${tableTextSize}`}>Jenis Vaksin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--border)] bg-white">
                {schedule.immunization.map((item) => (
                  <tr key={item.umur} className="hover:bg-[color:var(--secondary-soft)]/40 transition">
                    <td className={`px-4 py-2 font-bold theme-text ${tableTextSize}`}>{item.umur}</td>
                    <td className={`px-4 py-2 theme-secondary-text font-semibold ${tableTextSize}`}>{item.vaksin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 theme-surface px-4 py-2 rounded-xl border theme-border flex gap-3 items-start">
            <span className="theme-secondary-text mt-0.5 flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </span>
            <p className="text-sm theme-muted leading-relaxed">
              <strong>Catatan Penting:</strong> <br />
              {schedule.note}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
