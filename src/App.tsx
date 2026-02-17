import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import AudioPlayer from './components/AudioPlayer';
import ThemeSwitcher from './components/ThemeSwitcher';
import { LayoutProvider } from './hooks/useLayout';

// Import Halaman
import Edukasi from './pages/Edukasi';
import Kontak from './pages/Kontak';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Jadwal from './pages/Jadwal';


function AppContent() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* AUDIO PLAYER PERSISTEN */}
      <AudioPlayer />

      {/* THEME SWITCHER */}
      <ThemeSwitcher />

      {/* KONTEN UTAMA (flex-grow biar footer kedorong ke bawah kalau konten dikit) */}
      <div className="flex-grow pb-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutProvider>
        <div className="bg-gray-50 min-h-screen font-sans text-gray-800 flex flex-col">
          <AppContent />
        </div>
      </LayoutProvider>
    </Router>
  );
}

export default App;