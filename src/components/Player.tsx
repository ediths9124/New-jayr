"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { tracks, type Track } from "@/data/site";

const PREVIEW_MS = 5000;

type Ctx = { current: Track | null; playing: boolean; muted: boolean; toggle: (id: string) => void; toggleMute: () => void };
const PlayerCtx = createContext<Ctx | null>(null);
export const usePlayer = () => {
  const c = useContext(PlayerCtx);
  if (!c) throw new Error("PlayerProvider missing");
  return c;
};

export function Eq({ on }: { on: boolean }) {
  return <span className={`eq ${on ? "on" : ""}`} aria-hidden><i /><i /><i /><i /></span>;
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [current, setCurrent] = useState<Track | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audio.current = new Audio();
    return () => { audio.current?.pause(); if (timer.current) clearTimeout(timer.current); };
  }, []);

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    audio.current?.pause();
    setPlaying(false);
  }, []);

  const start = useCallback((t: Track) => {
    stop();
    setCurrent(t);
    setPlaying(true);
    const a = audio.current;
    if (a && t.preview) {
      a.src = t.preview;
      a.currentTime = 0;
      a.muted = muted;
      a.play().catch(() => {});
    }
    timer.current = setTimeout(stop, PREVIEW_MS); // one track at a time, 5-second preview
  }, [stop, muted]);

  const toggle = useCallback((id: string) => {
    const t = tracks.find((x) => x.id === id);
    if (!t) return;
    if (current?.id === id && playing) stop();
    else start(t);
  }, [current, playing, start, stop]);

  const toggleMute = useCallback(() => {
    setMuted((m) => { if (audio.current) audio.current.muted = !m; return !m; });
  }, []);

  return <PlayerCtx.Provider value={{ current, playing, muted, toggle, toggleMute }}>{children}</PlayerCtx.Provider>;
}

export function PlayIcon({ playing, size = 18 }: { playing: boolean; size?: number }) {
  return playing ? (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden><rect x="3" y="2" width="4" height="14" rx="1" /><rect x="11" y="2" width="4" height="14" rx="1" /></svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden><path d="M4 2l12 7-12 7z" /></svg>
  );
}

export function MiniPlayer() {
  const { current, playing, muted, toggle, toggleMute } = usePlayer();
  if (!current) return null;
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-[660px] items-center gap-3 rounded-full border border-white/15 bg-black/70 py-2.5 pl-3 pr-3 backdrop-blur-xl">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
        <Image src={current.cover} alt="" fill sizes="44px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm">{current.title}</p>
        <p className="label-muted truncate !text-[.62rem]">{current.album}</p>
      </div>
      <Eq on={playing} />
      <button onClick={() => toggle(current.id)} aria-label={playing ? "Pause" : "Play"} className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)] text-black">
        <PlayIcon playing={playing} />
      </button>
      <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
          <path d="M4 9v6h4l5 4V5L8 9H4z" />{muted ? <path d="M17 9l5 6M22 9l-5 6" /> : <path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" />}
        </svg>
      </button>
    </div>
  );
}
