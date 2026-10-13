"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, site, tracks } from "@/data/site";
import { usePlayer } from "./Player";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const { toggle } = usePlayer();

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden border-b border-white/10 px-4 pb-14 pt-32 md:px-8">
      <motion.div style={{ y }} className="absolute inset-0 -z-0">
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-black/55 to-black/70" />
      </motion.div>
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="label">{site.heroLabel}</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}
          className="display mt-6 text-[clamp(4.2rem,20vw,13rem)] uppercase leading-[0.86]"
        >
          {site.name}
        </motion.h1>
        <p className="mt-6 text-lg text-[var(--muted)]">{site.tagline}</p>
        <div className="mt-10 flex max-w-xl flex-col gap-4 md:flex-row">
          <button onClick={() => toggle(tracks[0].id)} className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[var(--gold)] py-5 text-xs uppercase tracking-[0.3em] text-black">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor" aria-hidden><path d="M4 2l12 7-12 7z" /></svg>Listen now
          </button>
          <a href="#music" className="flex flex-1 items-center justify-center rounded-full border border-white/20 py-5 text-xs uppercase tracking-[0.3em]">Explore music</a>
        </div>
        <a href="#music" aria-label="Scroll" className="mx-auto mt-10 block w-fit text-[var(--muted)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
        </a>
      </div>
    </section>
  );
}
