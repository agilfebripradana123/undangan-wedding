import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'
import { BotanicalFrame } from './BotanicalFrame'
import { weddingDate } from '../data/giftData'

export function WeddingDetails() {
  const { display, day, akad, resepsi, locationName, address, mapsUrl } = weddingDate

  return (
    <section id="wedding" className="section-container relative overflow-hidden py-stack-lg fade-in-up">
      <BotanicalFrame />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-stack-lg">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic">
            Akad &amp; Resepsi
          </h2>
          <div className="mx-auto mb-8 w-24 h-px bg-primary/30" />
        </div>

        {/* Date Overview */}
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-outline-variant/30 text-center mb-8 fade-up">
          <p className="font-headline-sm text-headline-sm text-tertiary uppercase tracking-widest mb-2">
            {day}, {display}
          </p>
          <h3 className="font-display text-headline-md text-primary italic mb-4">
            Bambang &amp; Imroatus
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Seramkan kehadiran Bapak/Ibu yang terhormat
          </p>
        </div>

        {/* Akad Nikah */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30 fade-up delay-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-headline-sm text-primary italic">Akad Nikah</h3>
            </div>
            <div className="space-y-3 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                <span className="font-semibold text-primary">{day}, {display}</span>
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2">
                <Clock size={18} className="text-primary" />
                {akad}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2">
                <MapPin size={18} className="text-primary" />
                {locationName}
                <br />
                <span className="text-sm text-on-surface-variant/70">{address}</span>
              </p>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-outline-variant/30 fade-up delay-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-headline-sm text-primary italic">Resepsi</h3>
            </div>
            <div className="space-y-3 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                <span className="font-semibold text-primary">{day}, {display}</span>
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2">
                <Clock size={18} className="text-primary" />
                {resepsi}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2">
                <MapPin size={18} className="text-primary" />
                {locationName}
                <br />
                <span className="text-sm text-on-surface-variant/70">{address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Map Button */}
        <div className="text-center fade-up delay-300">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-[1.5px] border-primary text-primary font-label-caps text-label-caps uppercase tracking-wider rounded-DEFAULT transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <ExternalLink size={16} />
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  )
}

export default WeddingDetails
