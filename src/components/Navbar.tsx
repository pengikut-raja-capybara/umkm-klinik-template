import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../content/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile
  const location = useLocation();
  const { brand, nav } = siteData;

  // Helper untuk cek menu aktif
  const isActive = (path: string) => {
    return location.pathname === path ? "theme-accent-text font-bold" : "theme-muted hover-theme-accent-text";
  };

  return (
    <nav className="theme-surface shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold theme-text">
          Klinik <span className="theme-accent-text">{brand.highlight}</span>
        </Link>

        {/* --- MENU DESKTOP (Hidden di HP) --- */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          {nav.map((item) =>
            item.isCta ? (
              <Link
                key={item.path}
                to={item.path}
                className="theme-accent-bg hover-theme-accent-strong-bg text-white px-5 py-2 rounded-full transition shadow-md hover:shadow-lg"
              >
                {item.label}
              </Link>
            ) : (
              <Link key={item.path} to={item.path} className={isActive(item.path)}>
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* --- TOMBOL HAMBURGER (Hidden di Desktop) --- */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="theme-muted hover-theme-accent-text focus:outline-none">
            {/* Ikon Hamburger / X (Ganti icon sesuai state isOpen) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE DROPDOWN --- */}
      {/* Tampilkan hanya jika isOpen = true */}
      {isOpen && (
        <div className="md:hidden theme-surface border-t theme-border shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-4 px-4 py-6 font-medium">
            {nav.map((item) =>
              item.isCta ? (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="theme-accent-bg hover-theme-accent-strong-bg text-white px-5 py-2 rounded-full text-center"
                >
                  {item.label}
                </Link>
              ) : (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={isActive(item.path)}>
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
