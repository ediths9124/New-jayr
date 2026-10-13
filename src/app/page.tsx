import { PlayerProvider, MiniPlayer } from "@/components/Player";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Releases from "@/components/Releases";
import Scenes from "@/components/Scenes";
import Artist from "@/components/Artist";
import Videos from "@/components/Videos";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <PlayerProvider>
      <Header />
      <main>
        <Hero />
        <Releases />
        <Scenes />
        <Artist />
        <Videos />
        <Connect />
      </main>
      <MiniPlayer />
    </PlayerProvider>
  );
}
