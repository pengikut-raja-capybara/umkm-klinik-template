import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { siteData } from "../content/data";
import {
  useHomeLayout,
  useEdukasiLayout,
  useJadwalLayout,
  useKontakLayout,
  useTentangLayout,
} from "../hooks/useLayout";

const THEME_STORAGE_KEY = "template-theme";

function applyTheme(themeId: string) {
  document.documentElement.setAttribute("data-theme", themeId);
}

export default function ThemeSwitcher() {
  const location = useLocation();
  const themes = useMemo(() => siteData.themes, []);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    if (typeof window === "undefined") return siteData.settings.defaultTheme;
    return window.localStorage.getItem(THEME_STORAGE_KEY) || siteData.settings.defaultTheme;
  });

  const { homeLayout, setHomeLayout } = useHomeLayout();
  const { edukasiLayout, setEdukasiLayout } = useEdukasiLayout();
  const { jadwalLayout, setJadwalLayout } = useJadwalLayout();
  const { kontakLayout, setKontakLayout } = useKontakLayout();
  const { tentangLayout, setTentangLayout } = useTentangLayout();

  // Determine current page and get its layout variants
  const currentPage = location.pathname;
  let currentLayoutId = homeLayout;
  let currentSetLayout = setHomeLayout;
  let layoutVariants: Array<{ id: string; label: string; [key: string]: unknown }> = siteData.layouts.home.variants;
  let pageLabel = "Home";

  if (currentPage === "/edukasi") {
    currentLayoutId = edukasiLayout;
    currentSetLayout = setEdukasiLayout;
    layoutVariants = siteData.layouts.edukasi.variants;
    pageLabel = "Edukasi";
  } else if (currentPage === "/jadwal") {
    currentLayoutId = jadwalLayout;
    currentSetLayout = setJadwalLayout;
    layoutVariants = siteData.layouts.jadwal.variants;
    pageLabel = "Jadwal";
  } else if (currentPage === "/kontak") {
    currentLayoutId = kontakLayout;
    currentSetLayout = setKontakLayout;
    layoutVariants = siteData.layouts.kontak.variants;
    pageLabel = "Kontak";
  } else if (currentPage === "/tentang") {
    currentLayoutId = tentangLayout;
    currentSetLayout = setTentangLayout;
    layoutVariants = siteData.layouts.tentang.variants;
    pageLabel = "Tentang";
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    applyTheme(activeTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
  }, [activeTheme]);

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
  };

  return (
    <div className="fixed left-5 bottom-5 z-50">
      {/* Toggle Button - Bulatan Kecil */}
      <button
        type="button"
        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white bg-[color:var(--accent)] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Buka tema & layout"
        title="Tema & Layout"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </button>

      {/* Panel - Muncul saat di-klik */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-72 p-5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg animate-slideup">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">Tema & Layout</h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-lg w-6 h-6 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
            >
              ✕
            </button>
          </div>

          {/* Layout Section */}
          <div className="mb-4">
            <label className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2 block">
              Layout ({pageLabel})
            </label>
            <select
              value={currentLayoutId}
              onChange={(e) => currentSetLayout(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-500/30 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%236b7280' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                paddingRight: "2.5rem",
              }}
            >
              {layoutVariants.map((layout: { id: string; label: string; [key: string]: unknown }) => (
                <option key={layout.id} value={layout.id}>
                  {layout.label}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Section */}
          <div>
            <label className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2 block">
              Theme
            </label>
            <select
              value={activeTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-500/30 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%236b7280' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                paddingRight: "2.5rem",
              }}
            >
              {themes.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
