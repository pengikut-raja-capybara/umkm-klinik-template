import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile
  const location = useLocation();

  // Helper untuk cek menu aktif
  const isActive = (path: string) => {
    return location.pathname === path ? "text-pink-600 font-bold" : "text-gray-500 hover:text-pink-600";
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-gray-700">
          Klinik <span className="text-pink-600">Bidanku</span>
        </Link>

        {/* --- MENU DESKTOP (Hidden di HP) --- */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          <Link to="/" className={isActive("/")}>
            Beranda
          </Link>
          <Link to="/tentang" className={isActive("/tentang")}>
            Tentang
          </Link>
          <Link to="/jadwal" className={isActive("/jadwal")}>
            Jadwal
          </Link>
          <Link to="/edukasi" className={isActive("/edukasi")}>
            Edukasi
          </Link>
          <Link to="/kontak" className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition shadow-md hover:shadow-lg">
            Kontak
          </Link>
        </div>

        {/* --- TOMBOL HAMBURGER (Hidden di Desktop) --- */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-pink-600 focus:outline-none">
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-4 px-4 py-6 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className={isActive("/")}>
              Beranda
            </Link>
            <Link to="/tentang" onClick={() => setIsOpen(false)} className={isActive("/tentang")}>
              Tentang
            </Link>
            <Link to="/jadwal" onClick={() => setIsOpen(false)} className={isActive("/jadwal")}>
              Jadwal
            </Link>
            <Link to="/edukasi" onClick={() => setIsOpen(false)} className={isActive("/edukasi")}>
              Edukasi
            </Link>
            <Link to="/kontak" onClick={() => setIsOpen(false)} className="bg-pink-600 text-white px-5 py-2 rounded-full text-center hover:bg-pink-700">
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
