import { BotanicalFrame } from "./BotanicalFrame";
import { parents } from "../data/giftData";

export function Parents() {
  return (
    <section className="section-container relative overflow-hidden py-stack-lg">
      <BotanicalFrame />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-stack-lg text-center">
          <h2
            className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            Orang Tua
          </h2>

          <div className="mx-auto w-24 h-px bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Groom's Parents */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-outline-variant/30 text-center">
            <h3
              className="font-display text-headline-sm text-primary mb-4 italic"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              {parents.groom.title}
            </h3>

            <p
              className="font-body-md text-body-md text-on-surface-variant mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="250"
            >
              {parents.groom.subtitle}
            </p>

            <div className="space-y-2">
              <p
                className="font-body-lg text-body-lg text-primary font-semibold"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="350"
              >
                {parents.groom.father}
              </p>

              <p
                className="font-body-lg text-body-lg text-primary font-semibold"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="450"
              >
                {parents.groom.mother}
              </p>
            </div>
          </div>

          {/* Bride's Parents */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-outline-variant/30 text-center">
            <h3
              className="font-display text-headline-sm text-primary mb-4 italic"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="550"
            >
              {parents.bride.title}
            </h3>

            <p
              className="font-body-md text-body-md text-on-surface-variant mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="650"
            >
              {parents.bride.subtitle}
            </p>

            <div className="space-y-2">
              <p
                className="font-body-lg text-body-lg text-primary font-semibold"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="750"
              >
                {parents.bride.father}
              </p>

              <p
                className="font-body-lg text-body-lg text-primary font-semibold"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="850"
              >
                {parents.bride.mother}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parents;
