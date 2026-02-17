import { siteData } from "../content/data";
import { useTentangLayout } from "../hooks/useLayout";

export default function Tentang() {
  const { about } = siteData;
  const { tentangLayout } = useTentangLayout();

  // Determine layout styling
  let profileFlexClass = "md:flex-row";
  const profileGridLayout = "md:grid-cols-2 gap-8";
  let facilitiesGridCols = "sm:grid-cols-2 md:grid-cols-3";
  const showProfile = true;
  const showFacilities = true;
  const showVideo = true;
  let showVisionMission = true;

  if (tentangLayout === "profile-left") {
    profileFlexClass = "md:flex-row";
  } else if (tentangLayout === "profile-right") {
    profileFlexClass = "md:flex-row-reverse";
  } else if (tentangLayout === "profile-top") {
    profileFlexClass = "flex-col";
  } else if (tentangLayout === "facilities-focus") {
    showVisionMission = false;
    facilitiesGridCols = "sm:grid-cols-2 md:grid-cols-4";
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 min-h-screen font-sans">
      <div className="theme-card p-8 md:p-12 rounded-3xl shadow-lg border theme-border">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold theme-text mb-4">
            Tentang <span className="theme-accent-text">Kami</span>
          </h1>
          <p className="theme-muted text-lg leading-relaxed">{about.intro}</p>
        </div>

        {showProfile && (
          <div className="mb-12 theme-hero p-6 rounded-2xl border theme-border">
            <h2 className="text-2xl font-bold theme-accent-text mb-6 flex items-center gap-2">👩‍⚕️ {about.profile.title}</h2>

            <div className={`flex flex-col ${profileFlexClass} items-center md:items-start gap-8`}>
              <div className="relative group">
                <div className="absolute inset-0 theme-accent-soft-bg rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition" />
                <img
                  src={about.profile.image.src}
                  alt={about.profile.image.alt}
                  className="relative rounded-xl shadow-md w-[200px] h-[240px] object-cover border-4 border-white transform group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold theme-text">{about.profile.name}</h3>
                <span className="inline-block theme-card text-[color:var(--accent)] text-xs font-bold px-3 py-1 rounded-full mt-2 mb-4 shadow-sm">
                  {about.profile.role}
                </span>
                <p className="theme-muted leading-relaxed text-lg text-justify">{about.profile.desc}</p>
              </div>
            </div>
          </div>
        )}

        {showVisionMission && (
          <div className={`mb-12 grid ${profileGridLayout}`}>
            <div>
              <h2 className="text-2xl font-bold theme-accent-text mb-4">🚀 Visi</h2>
              <div className="theme-surface p-6 rounded-xl border theme-border h-full">
                <p className="theme-text italic font-medium leading-relaxed">"{about.vision}"</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold theme-accent-text mb-4">🎯 Misi</h2>
              <ul className="space-y-3">
                {about.missions.map((item) => (
                  <li key={item} className="flex items-start gap-3 theme-muted">
                    <span className="theme-accent-text mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {showFacilities && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold theme-text mb-6 text-center">Fasilitas Klinik</h2>
            <div className={`grid ${facilitiesGridCols} gap-6`}>
              {about.facilities.map((item) => (
                <div key={item.alt} className="rounded-xl overflow-hidden shadow-md group border theme-border">
                  <div className="overflow-hidden">
                    <img src={item.src} alt={item.alt} className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-3 theme-surface text-center text-sm font-semibold theme-muted">{item.alt}</div>
                </div>
              ))}
            </div>
            {showVideo && (
              <video autoPlay loop muted controls playsInline preload="metadata" className="w-full my-2 rounded-xl overflow-hidden shadow-md">
                <source src={about.video.src} type="video/mp4" />
                Browser Anda tidak mendukung video.
              </video>
            )}
          </div>
        )}

        <div className="theme-accent-gradient p-8 rounded-2xl text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Mengapa Memilih Klinik Bidanku?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {about.reasons.map((item, index) => (
              <div key={item} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <span className="theme-card text-[color:var(--accent)] rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {index + 1}
                </span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
