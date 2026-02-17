import { useEffect, useState, type ReactElement } from "react";
import { siteData } from "../content/data";
import { useEdukasiLayout } from "../hooks/useLayout";

const iconMap: Record<string, ReactElement> = {
  heart: (
    <svg className="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  smile: (
    <svg className="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
};

const toneStyles: Record<string, { gradient: string; dot: string }> = {
  accent: { gradient: "theme-accent-gradient", dot: "theme-accent-dot" },
  secondary: { gradient: "theme-secondary-gradient", dot: "theme-secondary-dot" },
  success: { gradient: "theme-secondary-gradient", dot: "theme-secondary-dot" },
};

export default function Edukasi() {
  const { education } = siteData;
  const { edukasiLayout } = useEdukasiLayout();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % education.carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + education.carouselItems.length) % education.carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % education.carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [education.carouselItems.length]);

  const activeSlide = education.carouselItems[currentIndex];
  const activeTone = toneStyles[activeSlide.tone] || toneStyles.accent;

  // Header styling based on layout
  const isFullWidth = edukasiLayout === "carousel-full";
  const headerClass = isFullWidth ? "text-center" : "text-left";

  // Carousel component
  const carousel = (
    <div className="relative theme-card rounded-3xl shadow-xl border theme-border overflow-hidden mb-10 transition duration-300">
      <div className={`${edukasiLayout === "carousel-stacked" ? "block" : "md:flex"} min-h-[300px]`}>
        <div className={`${edukasiLayout === "carousel-stacked" ? "w-full" : "md:w-1/3"} ${activeTone.gradient} p-8 flex flex-col items-center justify-center text-white relative transition-colors duration-500`}>
          <div className="absolute inset-x-0 flex justify-between px-4 md:hidden z-10">
            <button onClick={prevSlide} className="p-2 bg-white/20 rounded-full hover:bg-white/40">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="p-2 bg-white/20 rounded-full hover:bg-white/40">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="text-center animate-fade-in-up">
            <div className="mx-auto justify-items-center mb-4">{iconMap[activeSlide.icon]}</div>
            <h3 className="text-xl mx-auto font-bold opacity-90">Topik Minggu Ini</h3>
          </div>
        </div>

        <div className={`${edukasiLayout === "carousel-stacked" ? "w-full" : "md:w-2/3"} p-8 md:p-10 flex flex-col justify-center relative`}>
          <div className="hidden md:flex absolute top-6 right-6 gap-2">
            <button onClick={prevSlide} className="p-2 rounded-full border theme-border hover-theme-accent-text transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border theme-border hover-theme-accent-text transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <span className="theme-card border theme-border text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide theme-muted">
                {activeSlide.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold theme-text mb-4">{activeSlide.title}</h2>
            <p className="theme-muted leading-relaxed text-lg mb-6">{activeSlide.desc}</p>

            <div className="flex gap-2">
              {education.carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? `w-8 ${activeTone.dot}` : "w-2 theme-dot"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Checklists component
  const checklists = (
    <div className={`grid ${edukasiLayout === "carousel-stacked" ? "md:grid-cols-2" : "grid-cols-1"} gap-8`}>
      <div className="theme-card p-8 rounded-3xl shadow-lg border-t-4 border-[color:var(--accent)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 theme-accent-soft-bg rounded-full blur-2xl opacity-50" />

        <h3 className="text-2xl font-bold theme-text mb-6 flex items-center gap-3">
          <span className="theme-accent-soft-bg theme-accent-text p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </span>
          Syarat Dokumen
        </h3>

        <ol className="space-y-1">
          {education.documents.map((item, index) => (
            <li key={item} className="flex items-start theme-surface p-2 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center theme-accent-bg text-white font-bold rounded-full text-sm mr-4">
                {index + 1}
              </span>
              <span className="theme-text font-medium pt-1">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="theme-card p-8 rounded-3xl shadow-lg border-t-4 border-[color:var(--secondary)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 theme-secondary-soft-bg rounded-full blur-2xl opacity-50" />

        <h3 className="text-2xl font-bold theme-text mb-6 flex items-center gap-3">
          <span className="theme-secondary-soft-bg theme-secondary-text p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </span>
          Perlengkapan Persalinan
        </h3>

        <ul className="space-y-4">
          {education.supplies.map((item) => (
            <li key={item} className="flex items-start">
              <span className="flex-shrink-0 theme-secondary-text mr-3 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="theme-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen theme-page px-4 py-12 font-sans">
      <div className={edukasiLayout === "carousel-full" ? "max-w-7xl mx-auto" : "max-w-5xl mx-auto"}>
        <div className={`${headerClass} mb-12`}>
          <h1 className="text-4xl font-extrabold theme-text tracking-tight">
            {education.title.split(" ")[0]} <span className="theme-accent-text">{education.title.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="theme-muted mt-3 text-lg">{education.subtitle}</p>
        </div>

        {edukasiLayout === "carousel-split" && (
          <>
            {carousel}
            {checklists}
          </>
        )}

        {edukasiLayout === "carousel-full" && (
          <>
            {carousel}
            {checklists}
          </>
        )}

        {edukasiLayout === "carousel-stacked" && (
          <div className="space-y-8">
            {carousel}
            {checklists}
          </div>
        )}
      </div>
    </main>
  );
}
