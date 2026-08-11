import { useState } from "react";
import { useGuestName } from "./hooks/useguestName";
import { weddingDate } from "./data/giftData";

import { OpeningPage } from "./components/OpeningPage";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Parents } from "./components/Parents";
import { WeddingDetails } from "./components/WeddingDetails";
import { CountDown } from "./components/CountDown";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Rsvp } from "./components/Rsvp";
import { BottomNav } from "./components/BottomNav";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";
import { MusicPlayer } from "./components/MusicPlayer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const guestName = useGuestName();

  // Opening page
  if (!opened) {
    return (
      <OpeningPage
        onOpen={() => {
          setOpened(true);
          setIsPlaying(true);
        }}
        guestName={guestName}
      />
    );
  }

  return (
    <div className="min-h-screen bg-surface paper-texture overflow-x-hidden">
      <Header guestName={guestName} />

      {/* Music Player */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      <main className="flex-1 w-full max-w-container-max mx-auto relative">
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
  );
}
