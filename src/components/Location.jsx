import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { BotanicalFrame } from "./BotanicalFrame";
import { weddingDate } from "../data/giftData";

// Location section with static map preview and directions link
export function Location() {
  const { locationName, address, mapsUrl } = weddingDate;

  return (
    <section
      id="location"
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
            Lokasi
          </h2>

          <div className="mx-auto w-24 h-px bg-primary/30" />
        </div>

        {/* Map Preview */}
        <div
          className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden border border-outline-variant/30 mb-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <div className="aspect-[16/9] bg-surface-container flex items-center justify-center">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="300"
            >
              <MapPin size={48} className="text-primary mx-auto mb-2" />

              <p className="font-body-md text-body-md text-on-surface-variant">
                Peta Lokasi
              </p>
            </div>
          </div>
        </div>

        {/* Venue Details */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30 text-center">
          {/* Venue Name */}
          <h3
            className="font-display text-headline-sm text-primary mb-2 italic"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {locationName}
          </h3>

          {/* Address */}
          <p
            className="font-body-md text-body-md text-on-surface-variant mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {address}
          </p>

          {/* Google Maps Button */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-2.5
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
              <Navigation size={16} />
              Buka di Google Maps
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
