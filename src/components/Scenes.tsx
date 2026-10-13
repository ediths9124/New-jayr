"use client";

import Image from "next/image";
import { tracks } from "@/data/site";
import { Eq, usePlayer } from "./Player";
import { Links } from "./Releases";

export default function Scenes() {
  const { current, playing, toggle } = usePlayer();
  return (
    <div>
      {tracks.map((t, i) => {
        const on = current?.id === t.id && playing;
        return (
          <section key={t.id} className="relative min-h-[100svh] overflow-hidden border-t border-white/10">
            <Image src={t.cover} alt="" fill sizes="100vw" className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)] via-transparent to-[var(--ink)]" />
            <div className="relative mx-auto max-w-7xl px-4 pt-32 md:px-8">
              <div className="flex items-center gap-4">
                <span className="display text-xl text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-16 bg-[var(--gold)]/60" />
                <span className="label-muted">{t.album}</span>
                <Eq on={on} />
              </div>
              <h3 className="display mt-6 text-[clamp(3rem,13vw,8rem)] leading-none">{t.title}</h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{t.blurb}</p>
              <div className="mt-8"><Links t={t} /></div>
              <button onClick={() => toggle(t.id)} className="label-muted mt-8 hover:text-[var(--gold)]">
                {on ? "Pause preview" : "5-second preview"}
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
