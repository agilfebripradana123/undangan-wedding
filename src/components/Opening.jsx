
import { Mail } from "lucide-react";
import { BotanicalFrame } from "./BotanicalFrame";

// Opening / Cover page (PRD Section 6 & 7)
export function Opening({ onEnter, guestName = "Tamu Undangan" }) {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center p-margin-mobile md:p-stack-lg paper-texture overflow-hidden">
      {/* Background ornaments */}
      <BotanicalFrame />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center space-y-stack-md bg-white/40 backdrop-blur-md p-stack-md rounded-xl shadow-lg border border-outline-variant/30 fade-up">
      

        {/* Header */}
        <div className="space-y-4 fade-up delay-200">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
            The Wedding Of
          </p>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary italic">
            Bambang Ceper <br />
            <span className="text-tertiary text-2xl mx-2">&amp;</span> <br />
            Imroatus Angel
          </h1>
          <p className="font-body-lg text-body-lg text-primary mt-4">
            1 September 2026
          </p>
        </div>

        {/* Guest Section (PRD Section 7) */}
        <div className="space-y-2 border-t border-b border-outline-variant/30 py-4 w-full fade-up delay-300">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Kepada Yth.
          </p>
          <p
            className="font-headline-sm text-headline-sm text-on-surface font-semibold"
            id="guestName"
          >
            {guestName}
          </p>
        </div>

        {/* Action button */}
        <div className="fade-up delay-400 pt-4">
          <button
            type="button"
            className="btn-primary"
            onClick={onEnter}
            aria-label="Buka Undangan"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail size={16} strokeWidth={2} />
              Buka Undangan
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Opening;
