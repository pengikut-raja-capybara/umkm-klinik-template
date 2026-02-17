import { useEffect, useRef, useState } from "react";
import { siteData } from "../content/data";

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
  const { audio } = siteData;

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

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed left-4 right-4 z-40 transition-all duration-300 ease-out" style={{ bottom: `${bottomOffset}px` }}>
      <div className="max-w-4xl mx-auto theme-card backdrop-blur shadow-xl border rounded-2xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <button
          onClick={handleTogglePlay}
          className="w-11 h-11 rounded-full theme-accent-gradient text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition transform flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg aria-hidden className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5h3v14H8zm5 0h3v14h-3z" />
            </svg>
          ) : (
            <svg aria-hidden className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 5v14l12-7z" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm theme-text font-semibold truncate">{audio.title}</h3>
            <p className="text-xs theme-muted truncate">{audio.subtitle}</p>
            <p className="text-xs theme-muted leading-tight">
              Music by{" "}
              <a href={audio.artistUrl} target="_blank" rel="noopener noreferrer" className="theme-accent-text hover:underline font-medium">
                {audio.artistName}
              </a>{" "}
              on{" "}
              <a href={audio.sourceUrl} target="_blank" rel="noopener noreferrer" className="theme-accent-text hover:underline font-medium">
                {audio.sourceName}
              </a>
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs theme-muted w-10 text-right flex-shrink-0">{formatTime(progress)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={progress}
              step={1}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="w-full theme-range"
              aria-label="Seek audio"
            />
            <span className="text-xs theme-muted w-10 flex-shrink-0">{formatTime(duration)}</span>
          </div>
        </div>

        <audio ref={audioRef} autoPlay loop src={audio.trackSrc} preload="metadata" />
      </div>
    </div>
  );
}
