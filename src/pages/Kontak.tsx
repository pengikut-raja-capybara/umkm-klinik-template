import { useState, type ChangeEvent, type FormEvent } from "react";
import { siteData } from "../content/data";
import { useKontakLayout } from "../hooks/useLayout";

interface FormDataState {
  nama: string;
  whatsapp: string;
  layanan: string;
  keluhan: string;
}

export default function Kontak() {
  const { contact } = siteData;
  const { kontakLayout } = useKontakLayout();
  const [formData, setFormData] = useState<FormDataState>({
    nama: "",
    whatsapp: "",
    layanan: contact.serviceOptions[0],
    keluhan: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKirimWA = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message =
      `Halo Bidan, saya *${formData.nama}*.%0A` +
      `No WA: ${formData.whatsapp}%0A` +
      `Ingin daftar: *${formData.layanan}*.%0A` +
      `Keluhan/Catatan: ${formData.keluhan}`;

    window.open(`https://wa.me/${contact.waNumber}?text=${message}`, "_blank");
  };

  // Determine layout styling
  let containerClass = "max-w-6xl";
  let gridClass = "grid md:grid-cols-2 gap-10 items-start";
  let mapOrder = "order-1";
  let formOrder = "order-2";
  let mapDisplay = true;

  if (kontakLayout === "map-left") {
    mapOrder = "order-1";
    formOrder = "order-2";
  } else if (kontakLayout === "map-right") {
    mapOrder = "order-2";
    formOrder = "order-1";
  } else if (kontakLayout === "map-full") {
    containerClass = "max-w-4xl";
    gridClass = "flex flex-col gap-10";
    mapOrder = "order-1";
    formOrder = "order-2";
  } else if (kontakLayout === "form-only") {
    containerClass = "max-w-3xl";
    gridClass = "flex justify-center";
    mapDisplay = false;
  }

  return (
    <main className="min-h-screen theme-page px-4 py-12 font-sans">
      <div className={`${containerClass} mx-auto`}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold theme-text tracking-tight">
            {contact.header.split(" ")[0]} <span className="theme-accent-text">{contact.header.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="theme-muted mt-3 text-lg max-w-2xl mx-auto">{contact.subheader}</p>
        </div>

        <div className={gridClass}>
          {mapDisplay && (
            <div className={`space-y-8 ${mapOrder}`}>
              <div className="theme-card p-8 rounded-3xl shadow-xl border theme-border relative overflow-hidden group hover:shadow-2xl transition duration-300">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 theme-accent-soft-bg rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition" />

                <h3 className="text-2xl font-bold theme-text mb-4 flex items-center gap-2">📍 {contact.locationTitle}</h3>
                <p className="theme-muted leading-relaxed mb-6">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="theme-accent-text font-semibold text-sm block mt-2">
                    {contact.hours.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </p>

                <div className="w-full h-48 theme-surface rounded-2xl flex items-center justify-center theme-muted font-medium">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="theme-accent-gradient p-8 rounded-3xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-2">{contact.emergencyTitle}</h3>
                <p className="opacity-90 mb-4 text-sm">{contact.emergencyNote}</p>
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="inline-flex items-center gap-2 theme-card text-[color:var(--accent)] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition shadow-sm"
                >
                  📞 Telepon Bidan
                </a>
              </div>
            </div>
          )}

          <div className={`theme-card p-8 md:p-10 rounded-3xl shadow-2xl border theme-border relative ${formOrder} ${kontakLayout === "form-only" ? "w-full" : ""}`}>
            <form onSubmit={handleKirimWA} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-bold theme-text mb-2 ml-1">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 theme-muted group-focus-within:text-[color:var(--accent)] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="nama"
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-[color:var(--accent)] rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent outline-none transition duration-200"
                    placeholder="Masukkan nama Ibu..."
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold theme-text mb-2 ml-1">No. WhatsApp</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 theme-muted group-focus-within:text-[color:var(--accent)] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="w-full border-2 border-[color:var(--accent)] rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent outline-none transition duration-200"
                    placeholder="Contoh: 0812..."
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold theme-text mb-2 ml-1">Jenis Layanan</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 theme-muted group-focus-within:text-[color:var(--accent)] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="w-full border-2 border-[color:var(--accent)] rounded-xl pl-12 pr-4 py-4 focus:bg-white focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent outline-none transition duration-200 appearance-none cursor-pointer"
                    value={formData.layanan}
                  >
                    {contact.serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none theme-muted">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold theme-text mb-2 ml-1">Keluhan / Catatan</label>
                <textarea
                  name="keluhan"
                  onChange={handleChange}
                  className="w-full border-2 border-[color:var(--accent)] rounded-xl p-4 h-32 focus:bg-white focus:ring-2 focus:ring-[color:var(--accent)] focus:border-transparent outline-none transition duration-200 resize-none"
                  placeholder="Tulis keluhan atau request jam kunjungan..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full theme-secondary-bg hover-theme-secondary-strong-bg text-white font-bold text-lg py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-[color:var(--secondary-soft)]/60 flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
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
