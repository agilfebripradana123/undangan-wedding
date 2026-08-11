import { useGuestName } from "../hooks/useguestName";
import { BotanicalFrame } from "./BotanicalFrame";

// Hero banner with personalized guest name
export function Hero({ wedding }) {
  const guestName = useGuestName();

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 pb-24 pt-32 text-center md:pt-28"
    >
      <BotanicalFrame />

      <div className="relative z-10 mx-auto w-full max-w-2xl space-y-2">
        {/* Label */}
        <p
          className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="0"
        >
          Pernikahan
        </p>

        {/* Couple Name */}
        <h1
          className="font-display text-display-lg-mobile italic leading-tight text-primary md:text-display-lg"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          Bambang &amp; Imroatus
        </h1>

        {/* Wedding Date */}
        <p
          className="mx-auto mt-4 max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {wedding?.display}
        </p>

        {/* Guest Name */}
        {guestName !== "Tamu Undangan" && (
          <div
            className="mx-auto mt-8 w-full max-w-md"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="450"
          >
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kepada Yth.
            </p>

            <p className="mt-1 break-words px-4 font-body text-base font-semibold leading-relaxed text-primary md:text-lg">
              {guestName}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
