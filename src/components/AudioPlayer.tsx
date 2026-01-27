import { useEffect, useRef, useState } from "react";

function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [bottomOffset, setBottomOffset] = useState(16); // default 4 (16px)
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Adjust bottom offset when user reaches page bottom
  useEffect(() => {
    const onScroll = () => {
      const { scrollY, innerHeight } = window;
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = scrollY + innerHeight >= docHeight - 4; // near bottom
      setBottomOffset(atBottom ? 80 : 16); // 80px ≈ tailwind bottom-20
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Wiring audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setProgress(audio.currentTime || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Try auto-start on first user gesture so playback persists across routes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryStart = () => {
      audio.muted = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    const events: Array<keyof DocumentEventMap> = ["click", "touchstart", "keydown", "mousemove", "scroll", "focus"];
    events.forEach((evt) => {
      if (evt === "scroll") {
        document.addEventListener(evt, tryStart, { once: true, passive: true });
      } else {
        document.addEventListener(evt, tryStart, { once: true });
      }
    });

    return () => {
      events.forEach((evt) => document.removeEventListener(evt, tryStart));
    };
  }, []);

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setProgress(value);
  };

  return (
    <div
      className="fixed left-4 right-4 z-40 transition-all duration-300 ease-out"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur shadow-xl shadow-pink-200/60 border border-pink-100 rounded-2xl px-4 py-3 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center shadow-md">
          {isPlaying ? (
            <svg aria-hidden className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5h3v14H8zm5 0h3v14h-3z" />
            </svg>
          ) : (
            <svg aria-hidden className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 5v14l12-7z" />
            </svg>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-sm text-gray-700 font-semibold">
            <span>Musik Relaksasi & Meditasi</span>
          </div>
          <p className="text-xs text-gray-500">Dengarkan musik menenangkan untuk kesejahteraan Anda</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xs text-gray-500 w-10 text-right">{formatTime(progress)}</span>
            <input type="range" min={0} max={duration || 0} value={progress} step={1} onChange={(e) => handleSeek(Number(e.target.value))} className="w-full accent-pink-600" aria-label="Seek audio" />
            <span className="text-xs text-gray-500 w-10">{formatTime(duration)}</span>
          </div>
        </div>

        <audio ref={audioRef} autoPlay loop src="/audio/relax-song.mp3" preload="metadata" />
      </div>
    </div>
  );
}
