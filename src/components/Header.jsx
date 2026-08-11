import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function Header({ guestName }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        flex items-center justify-between
        px-5 py-4
        bg-[#F8F5ED]/90
        backdrop-blur-md
        border-b border-[#183B63]/10
        transition-all duration-500
        ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
      `}
    >
      {/* Wedding Name */}
      <div>
        <h1
          className="
            font-display
            text-lg
            md:text-2xl
            text-[#183B63]
            italic
          "
        >
          Bambang &amp; Angel
        </h1>

        {guestName && (
          <p className="mt-0.5 text-[10px] md:text-xs text-[#183B63]/60">
            Untuk {guestName}
          </p>
        )}
      </div>

      {/* Favorite */}
      <button
        type="button"
        aria-label="Favorite"
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-full
          text-[#183B63]
          transition-all duration-300
          hover:bg-[#183B63]/5
          hover:text-[#B79A63]
        "
      >
        <Heart size={20} />
      </button>
    </header>
  );
}
