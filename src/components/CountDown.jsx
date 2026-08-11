import { useEffect, useState } from 'react'

// Countdown to wedding date
export function CountDown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!timeLeft) {
    return (
      <div className="text-center mb-8 fade-up delay-200">
        <p className="font-display text-xl text-primary">
          Pernikahan telah berlangsung ❤️
        </p>
      </div>
    )
  }

  const { days, hours, minutes, seconds } = timeLeft

  const countdownItems = [
    { value: days, label: 'Hari' },
    { value: hours, label: 'Jam' },
    { value: minutes, label: 'Menit' },
    { value: seconds, label: 'Detik' },
  ]

  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 my-20 fade-up delay-200">
      {countdownItems.map((item, index) => (
        <div
          key={item.label}
          className="relative flex flex-col items-center justify-center
                     w-[68px] h-[72px]
                     sm:w-[78px] sm:h-[82px]
                     md:w-[88px] md:h-[92px]
                     rounded-2xl
                     bg-white/60 backdrop-blur-md
                     border border-primary/10
                     shadow-[0_8px_25px_rgba(24,59,99,0.08)]
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(24,59,99,0.14)]"
        >
          {/* Number */}
          <span
            className="font-display text-xl sm:text-2xl md:text-3xl
                       text-primary leading-none tabular-nums"
          >
            {String(item.value).padStart(2, '0')}
          </span>

          {/* Label */}
          <span
            className="mt-2 font-label-caps text-[9px] sm:text-[10px]
                       text-on-surface-variant uppercase tracking-[0.15em]"
          >
            {item.label}
          </span>

          {/* Small decorative dot */}
          {index < countdownItems.length - 1 && (
            <span className="hidden md:block absolute -right-3 top-1/2
                             -translate-y-1/2 text-primary/30 text-lg">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function calculateTimeLeft(target) {
  const targetTime = new Date(target)
  const now = new Date()
  const diff = targetTime - now

  if (diff <= 0) return null

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

export default CountDown

