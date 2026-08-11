import { BotanicalFrame } from './BotanicalFrame'
import { parents } from '../data/giftData'

export function Parents() {
  return (
    <section className="section-container relative overflow-hidden py-stack-lg fade-in-up">
      <BotanicalFrame />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-stack-lg text-center">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic">
            Orang Tua
          </h2>
          <div className="mx-auto w-24 h-px bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Groom's Parents */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-outline-variant/30 text-center fade-up delay-100">
            <h3 className="font-display text-headline-sm text-primary mb-4 italic">
              {parents.groom.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              {parents.groom.subtitle}
            </p>
            <div className="space-y-2">
              <p className="font-body-lg text-body-lg text-primary font-semibold">
                {parents.groom.father}
              </p>
              <p className="font-body-lg text-body-lg text-primary font-semibold">
                {parents.groom.mother}
              </p>
            </div>
          </div>

          {/* Bride's Parents */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-outline-variant/30 text-center fade-up delay-200">
            <h3 className="font-display text-headline-sm text-primary mb-4 italic">
              {parents.bride.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              {parents.bride.subtitle}
            </p>
            <div className="space-y-2">
              <p className="font-body-lg text-body-lg text-primary font-semibold">
                {parents.bride.father}
              </p>
              <p className="font-body-lg text-body-lg text-primary font-semibold">
                {parents.bride.mother}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parents
