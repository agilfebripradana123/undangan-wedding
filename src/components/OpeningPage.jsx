import { Mail } from "lucide-react";
import { BotanicalFrame } from "./BotanicalFrame";

export function OpeningPage({ onOpen, guestName = "Tamu Undangan" }) {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-surface paper-texture">
      <BotanicalFrame />

      {/* Content Card */}
      <div className="card-wrapper">
        {/* Header */}
        <div className="space-y-4 fade-up delay-100">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
            Undangan Pernikahan
          </p>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary italic">
            Bambang Ceper <br />
            <span className="text-primary text-2xl mx-2">&amp;</span> <br />
            Imroatus Angel
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            1 September 2026
          </p>
        </div>

        {/* Guest Section */}
        <div className="space-y-2 border-t border-b border-outline-variant/30 py-4 w-full fade-up delay-300">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Kepada Yth.
          </p>
          <p
            className="font-headline-sm text-headline-sm text-on-surface"
            id="guestName"
          >
            {guestName}
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="btn-primary inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-white shadow-[0_16px_32px_rgba(24,59,99,0.18)] hover:-translate-y-0.5 hover:bg-primary-dark"
          onClick={onOpen}
          aria-label="Buka Undangan"
        >
          <Mail size={16} strokeWidth={2} />
          <span>Buka Undangan</span>
        </button>

      </div>
    </main>
  );
}
