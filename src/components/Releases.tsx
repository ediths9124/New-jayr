"use client";

import Image from "next/image";
import { tracks, site } from "@/data/site";
import { Eq, PlayIcon, usePlayer } from "./Player";

export function Links({ t }: { t: (typeof tracks)[number] }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a className="pill" href={t.spotify}>Spotify</a>
      <a className="pill" href={t.apple}>Apple Music</a>
      <a className="pill" href={t.youtube}>YouTube</a>
    </div>
  );
}

export default function Releases() {
  const { current, playing, toggle } = usePlayer();
  return (
    <section id="music" className="mx-auto max-w-7xl px-4 py-28 md:px-8">
      <p className="label">01 — Featured</p>
      <h2 className="display mt-5 text-[clamp(2.4rem,9vw,4.5rem)] leading-tight">Latest Releases</h2>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)]">Tap any cover for a five-second preview. One track plays at a time.</p>
      <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
        {tracks.map((t) => {
          const on = current?.id === t.id && playing;
          return (
            <article key={t.id}>
              <button onClick={() => toggle(t.id)} aria-label={`${on ? "Pause" : "Play"} ${t.title}`} className="group relative block aspect-square w-full overflow-hidden bg-black text-left">
                <Image src={t.cover} alt={`${t.title} cover`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute -bottom-8 -left-8 h-[124px] w-[124px] rounded-full bg-black/55" />
                <span className="absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-black"><PlayIcon playing={on} /></span>
                {on && <span className="absolute bottom-5 right-5"><Eq on /></span>}
              </button>
              <h3 className="display mt-6 text-3xl">{t.title}</h3>
              <p className="label-muted mt-2 !tracking-[0.35em]">{site.name}</p>
              <p className="mt-3 text-[var(--muted)]">{t.kind}</p>
              <div className="mt-6"><Links t={t} /></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
