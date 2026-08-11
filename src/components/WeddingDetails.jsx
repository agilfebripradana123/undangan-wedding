import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { BotanicalFrame } from "./BotanicalFrame";
import { weddingDate } from "../data/giftData";

export function WeddingDetails() {
  const { display, day, akad, resepsi, locationName, address, mapsUrl } =
    weddingDate;

  return (
    <section
      id="wedding"
      className="section-container relative overflow-hidden py-stack-lg"
    >
      <BotanicalFrame />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-stack-lg">
          <h2
            className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            Akad &amp; Resepsi
          </h2>

          <div className="mx-auto mb-8 w-24 h-px bg-primary/30" />
        </div>

        {/* Date Overview */}
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-outline-variant/30 text-center mb-8">
          <p
            className="font-headline-sm text-headline-sm text-tertiary uppercase tracking-widest mb-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {day}, {display}
          </p>

          <h3
            className="font-display text-headline-md text-primary italic mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            Bambang &amp; Imroatus
          </h3>

          <p
            className="font-body-md text-body-md text-on-surface-variant"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="350"
          >
            Seramkan kehadiran Bapak/Ibu yang terhormat
          </p>
        </div>

        {/* Akad & Resepsi */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Akad Nikah */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="p-2 bg-primary/10 rounded-full"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="450"
              >
                <Calendar size={24} className="text-primary" />
              </div>

              <h3
                className="font-display text-headline-sm text-primary italic"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Akad Nikah
              </h3>
            </div>

            <div className="space-y-3 text-center">
              <p
                className="font-body-md text-body-md text-on-surface-variant"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="600"
              >
                <span className="font-semibold text-primary">
                  {day}, {display}
                </span>
              </p>

              <p
                className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="700"
              >
                <Clock size={18} className="text-primary" />
                {akad}
              </p>

              <p
                className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="800"
              >
                <MapPin size={18} className="text-primary" />
                {locationName}
              </p>

              <p
                className="text-sm text-on-surface-variant/70"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="850"
              >
                {address}
              </p>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="p-2 bg-primary/10 rounded-full"
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="900"
              >
                <Clock size={24} className="text-primary" />
              </div>

              <h3
                className="font-display text-headline-sm text-primary italic"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="950"
              >
                Resepsi
              </h3>
            </div>

            <div className="space-y-3 text-center">
              <p
                className="font-body-md text-body-md text-on-surface-variant"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1050"
              >
                <span className="font-semibold text-primary">
                  {day}, {display}
                </span>
              </p>

              <p
                className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1150"
              >
                <Clock size={18} className="text-primary" />
                {resepsi}
              </p>

              <p
                className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1250"
              >
                <MapPin size={18} className="text-primary" />
                {locationName}
              </p>

              <p
                className="text-sm text-on-surface-variant/70"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1300"
              >
                {address}
              </p>
            </div>
          </div>
        </div>

        {/* Map Button */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1400"
        >
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-8
              py-3
              border-[1.5px]
              border-primary
              text-primary
              font-label-caps
              text-label-caps
              uppercase
              tracking-wider
              rounded-DEFAULT
              transition-all
              duration-300
              hover:bg-primary
              hover:text-white
            "
          >
            <ExternalLink size={16} />
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}

export default WeddingDetails;
