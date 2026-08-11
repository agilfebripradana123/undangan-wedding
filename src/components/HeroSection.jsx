import { CornerOrnament } from './FloralOrnament'

// Hero banner for interior pages (Our Story, etc.)
export function HeroSection({ title, subtitle, className = '' }) {
  return (
    <section className={`text-center w-full max-w-2xl mx-auto mb-stack-lg relative z-10 pt-10 ${className}`}>
      <CornerOrnament position="top-left" />
      <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary mb-4 italic fade-up">
        {title}
      </h1>
      {subtitle && (
        <p className="font-body-lg text-body-lg text-secondary italic mb-8 max-w-xl mx-auto fade-up delay-100">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-8 fade-up delay-200"></div>
    </section>
  )
}
