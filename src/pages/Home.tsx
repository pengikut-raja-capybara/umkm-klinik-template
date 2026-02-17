import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../content/data";
import { useHomeLayout } from "../hooks/useLayout";

const heroLayouts = {
  left: "flex flex-col md:flex-row items-center gap-10",
  center: "flex flex-col items-center text-center gap-8",
  split: "grid md:grid-cols-2 gap-10 items-center",
  minimal: "flex flex-col gap-6",
  stack: "relative overflow-hidden",
} as const;

export default function Home() {
  const { hero, services, features, stats, testimonials, layouts } = siteData;
  const { homeLayout } = useHomeLayout();
  const activeLayout =
    layouts.home.variants.find((variant) => variant.id === homeLayout) || layouts.home.variants[0];

  const heroMedia = (
    <div className="relative">
      <div className="absolute inset-0 theme-accent-soft-bg rounded-full blur-3xl opacity-40" />
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        className="relative rounded-2xl shadow-xl max-h-80 w-auto object-cover border-4 border-white rotate-2 hover:rotate-0 transition duration-500"
      />
    </div>
  );

  const heroContent = (
    <div className="space-y-5">
      <h1 className="text-4xl md:text-5xl font-extrabold theme-text leading-tight">
        {hero.title} <span className="theme-accent-text">{hero.highlight}</span>
      </h1>
      <p className="text-lg theme-muted leading-relaxed">{hero.description}</p>
      <Link
        to={hero.ctaLink}
        className="inline-flex items-center justify-center theme-accent-bg hover-theme-accent-strong-bg text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
      >
        {hero.ctaLabel.toUpperCase()}
      </Link>
    </div>
  );

  const renderHero = () => {
    if (activeLayout.heroStyle === "center") {
      return (
        <section className="theme-hero p-8 md:p-12 rounded-3xl shadow-lg mb-16 border theme-border">
          <div className={heroLayouts.center}>
            {heroContent}
            <div className="flex justify-center">{heroMedia}</div>
          </div>
        </section>
      );
    }

    if (activeLayout.heroStyle === "split") {
      return (
        <section className="theme-hero p-8 md:p-12 rounded-3xl shadow-lg mb-16 border theme-border">
          <div className={heroLayouts.split}>
            <div className="order-2 md:order-1">{heroMedia}</div>
            <div className="order-1 md:order-2">{heroContent}</div>
          </div>
        </section>
      );
    }

    if (activeLayout.heroStyle === "minimal") {
      return (
        <section className="theme-hero p-8 md:p-12 rounded-3xl shadow-lg mb-16 border theme-border">
          <div className={heroLayouts.minimal}>
            {heroContent}
            <div className="flex flex-wrap gap-4">
              {stats.map((item) => (
                <div key={item.label} className="theme-card border theme-border px-5 py-4 rounded-2xl shadow-sm">
                  <p className="text-xl font-bold theme-text">{item.value}</p>
                  <p className="text-sm theme-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    if (activeLayout.heroStyle === "stack") {
      return (
        <section className="theme-hero p-8 md:p-12 rounded-3xl shadow-lg mb-16 border theme-border">
          <div className={heroLayouts.stack}>
            <div className="relative z-10 max-w-3xl">{heroContent}</div>
            <div className="mt-8 flex justify-center">{heroMedia}</div>
          </div>
        </section>
      );
    }

    return (
      <section className="theme-hero p-8 md:p-12 rounded-3xl shadow-lg mb-16 border theme-border">
        <div className={heroLayouts.left}>
          <div className="md:w-1/2">{heroContent}</div>
          <div className="md:w-1/2 flex justify-center">{heroMedia}</div>
        </div>
      </section>
    );
  };

  const renderServices = () => (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold theme-text">Layanan Utama Kami</h2>
        <p className="theme-muted">Kami fokus pada layanan yang paling Anda butuhkan.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item) => (
          <div
            key={item.title}
            className="text-center p-6 theme-card rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border theme-border group"
          >
            <div className="logo-emoticon text-5xl mb-4 transform group-hover:scale-110 transition duration-300">{item.icon}</div>
            <h3 className="text-xl font-semibold theme-text mb-2 group-hover:text-[color:var(--accent)] transition">{item.title}</h3>
            <p className="theme-muted text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderFeatures = () => (
    <section className="theme-surface p-10 rounded-3xl shadow-inner border theme-border mb-16">
      <h2 className="text-2xl font-bold theme-accent-text mb-8 text-center tracking-wide uppercase">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {features.map((item) => (
          <div key={item.title} className="p-4">
            <div className="logo-emoticon text-4xl mb-4 theme-card w-16 h-16 mx-auto flex items-center justify-center rounded-full shadow-sm border theme-border">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg theme-text mb-2">{item.title}</h4>
            <p className="text-sm theme-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderStats = () => (
    <section className="mb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.label} className="theme-card border theme-border rounded-2xl px-6 py-5 shadow-md">
            <p className="text-2xl font-bold theme-accent-text">{item.value}</p>
            <p className="theme-muted text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const renderTestimonials = () => (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold theme-text">Cerita Pasien</h2>
        <span className="text-sm theme-muted">Testimoni keluarga yang terbantu</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.name} className="theme-card border theme-border rounded-2xl p-6 shadow-md">
            <p className="theme-muted text-sm leading-relaxed">"{item.quote}"</p>
            <div className="mt-4">
              <p className="font-semibold theme-text">{item.name}</p>
              <p className="text-xs theme-muted">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const sections: Record<string, React.ReactNode> = {
    hero: renderHero(),
    services: renderServices(),
    features: renderFeatures(),
    stats: renderStats(),
    testimonials: renderTestimonials(),
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-screen font-sans">
      {activeLayout.order.map((sectionKey) => (
        <div key={sectionKey}>{sections[sectionKey]}</div>
      ))}
    </main>
  );
}
