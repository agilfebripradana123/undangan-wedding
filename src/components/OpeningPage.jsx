import { useState } from "react";
import { Mail } from "lucide-react";
import { BotanicalFrame } from "./BotanicalFrame";

export function OpeningPage({ onOpen, guestName = "Tamu Undangan" }) {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-surface paper-texture">
      <BotanicalFrame />

      {/* Content Card */}
      <div className="card-wrapper fade-up">
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
        <div className="fade-up delay-500 pt-4">
          <button
            type="button"
            className="btn-primary"
            onClick={onOpen}
            aria-label="Buka Undangan"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail size={16} strokeWidth={2} />
              Buka Undangan
            </span>
          </button>
        </div>

        {/* Bottom Ornament */}
        <div className="w-16 h-16 opacity-80 rotate-180" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 6 C36 9, 40 17, 38 26 C36 35, 24 38, 16 32"
              stroke="#183B63"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
              fill="none"
            />
            <circle cx="28" cy="16" r="2" fill="#183B63" opacity="0.4" />
          </svg>
        </div>
      </div>
    </main>
  );
}
