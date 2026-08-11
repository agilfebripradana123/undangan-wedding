import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/undangan-wedding/assets/music.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
        className="
          fixed
          right-4
          bottom-20
          md:right-6
          md:bottom-6
          z-50

          w-12
          h-12
          md:w-14
          md:h-14

          rounded-full
          flex
          items-center
          justify-center

          bg-white/80
          backdrop-blur-md
          border
          border-primary/15

          shadow-[0_8px_25px_rgba(24,59,99,0.15)]

          text-primary

          transition-all
          duration-300

          hover:scale-110
          active:scale-95
        "
      >
        {isPlaying ? (
          <Volume2 size={22} strokeWidth={1.8} className="md:w-6 md:h-6" />
        ) : (
          <VolumeX size={22} strokeWidth={1.8} className="md:w-6 md:h-6" />
        )}
      </button>
    </>
  );
}

export default MusicPlayer;
