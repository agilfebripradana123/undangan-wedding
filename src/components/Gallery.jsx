import { BotanicalFrame } from "./BotanicalFrame";
import { gallery } from "../data/gallery";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="section-container relative overflow-hidden py-stack-lg fade-in-up"
    >
      <BotanicalFrame />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Title */}
        <div className="text-center mb-stack-lg">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic">
            Galeri
          </h2>

          <div className="mx-auto w-24 h-px bg-primary/30" />
        </div>

        {/* Gallery */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((img) => (
              <div
                key={img.id}
                className="group relative overflow-hidden rounded-xl shadow-md fade-up"
                style={{
                  animationDelay: `${img.id * 100}ms`,
                }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
