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
          bottom-24

          md:right-7
          md:bottom-24

          lg:right-8
          lg:bottom-24

          z-[100]

          w-12
          h-12

          md:w-14
          md:h-14

          rounded-full

          flex
          items-center
          justify-center

          bg-white/95
          backdrop-blur-md

          border
          border-primary/20

          shadow-[0_8px_30px_rgba(24,59,99,0.20)]

          text-primary

          transition-all
          duration-300

          hover:scale-110
          hover:bg-white
          hover:shadow-[0_12px_35px_rgba(24,59,99,0.28)]

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
