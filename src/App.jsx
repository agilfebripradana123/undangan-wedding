import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useGuestName } from './hooks/useguestName'
import { weddingDate } from './data/giftData'

import { OpeningPage } from './components/OpeningPage'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Parents } from './components/Parents'
import { WeddingDetails } from './components/WeddingDetails'
import { CountDown } from './components/CountDown'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Rsvp } from './components/Rsvp'
import { BottomNav } from './components/BottomNav'
import { Footer } from './components/Footer'
import { SectionDivider } from './components/SectionDivider'
import { MusicPlayer } from './components/MusicPlayer'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const guestName = useGuestName()

  useEffect(() => {
    if (!opened) return

    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 90,
      mirror: false,
    })

    const raf = requestAnimationFrame(() => {
      AOS.refreshHard()
    })

    return () => cancelAnimationFrame(raf)
  }, [opened])

  if (!opened) {
    return (
      <OpeningPage
        onOpen={() => {
          setOpened(true)
          setIsPlaying(true)
        }}
        guestName={guestName}
      />
    )
  }

  return (
    <div className="min-h-screen bg-surface paper-texture overflow-x-hidden">
      <Header guestName={guestName} />

      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      <main className="relative flex-1 w-full max-w-container-max mx-auto">
        <Hero wedding={weddingDate} />
        <SectionDivider />

        <Parents />
        <SectionDivider />

        <CountDown targetDate={weddingDate.raw} />
        <SectionDivider />

        <WeddingDetails />
        <SectionDivider />

        <Gallery />
        <SectionDivider />

        <Location />
        <SectionDivider />

        <Rsvp />
      </main>

      <Footer />
      <BottomNav />
    </div>
  )
}
