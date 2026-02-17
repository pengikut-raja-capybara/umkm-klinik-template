import { createContext, useContext, useEffect, useState } from "react";
import { siteData } from "../content/data";

interface LayoutContextType {
  homeLayout: string;
  setHomeLayout: (layoutId: string) => void;
  edukasiLayout: string;
  setEdukasiLayout: (layoutId: string) => void;
  jadwalLayout: string;
  setJadwalLayout: (layoutId: string) => void;
  kontakLayout: string;
  setKontakLayout: (layoutId: string) => void;
  tentangLayout: string;
  setTentangLayout: (layoutId: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [homeLayout, setHomeLayout] = useState(() => {
    if (typeof window === "undefined") return siteData.layouts.home.active;
    return localStorage.getItem("home-layout") || siteData.layouts.home.active;
  });

  const [edukasiLayout, setEdukasiLayout] = useState(() => {
    if (typeof window === "undefined") return siteData.layouts.edukasi.active;
    return localStorage.getItem("edukasi-layout") || siteData.layouts.edukasi.active;
  });

  const [jadwalLayout, setJadwalLayout] = useState(() => {
    if (typeof window === "undefined") return siteData.layouts.jadwal.active;
    return localStorage.getItem("jadwal-layout") || siteData.layouts.jadwal.active;
  });

  const [kontakLayout, setKontakLayout] = useState(() => {
    if (typeof window === "undefined") return siteData.layouts.kontak.active;
    return localStorage.getItem("kontak-layout") || siteData.layouts.kontak.active;
  });

  const [tentangLayout, setTentangLayout] = useState(() => {
    if (typeof window === "undefined") return siteData.layouts.tentang.active;
    return localStorage.getItem("tentang-layout") || siteData.layouts.tentang.active;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("home-layout", homeLayout);
  }, [homeLayout]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("edukasi-layout", edukasiLayout);
  }, [edukasiLayout]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("jadwal-layout", jadwalLayout);
  }, [jadwalLayout]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("kontak-layout", kontakLayout);
  }, [kontakLayout]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("tentang-layout", tentangLayout);
  }, [tentangLayout]);

  return (
    <LayoutContext.Provider
      value={{
        homeLayout,
        setHomeLayout,
        edukasiLayout,
        setEdukasiLayout,
        jadwalLayout,
        setJadwalLayout,
        kontakLayout,
        setKontakLayout,
        tentangLayout,
        setTentangLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
}

export function useHomeLayout() {
  const { homeLayout, setHomeLayout } = useLayout();
  return { homeLayout, setHomeLayout };
}

export function useEdukasiLayout() {
  const { edukasiLayout, setEdukasiLayout } = useLayout();
  return { edukasiLayout, setEdukasiLayout };
}

export function useJadwalLayout() {
  const { jadwalLayout, setJadwalLayout } = useLayout();
  return { jadwalLayout, setJadwalLayout };
}

export function useKontakLayout() {
  const { kontakLayout, setKontakLayout } = useLayout();
  return { kontakLayout, setKontakLayout };
}

export function useTentangLayout() {
  const { tentangLayout, setTentangLayout } = useLayout();
  return { tentangLayout, setTentangLayout };
}
