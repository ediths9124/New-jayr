"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artist, site } from "@/data/site";

export default function Artist() {
  return (
    <section id="artist" className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 px-4 py-28 md:grid-cols-2 md:items-center md:gap-20 md:px-8">
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="relative aspect-[4/5] w-full overflow-hidden border border-white/15"
      >
        <Image src={artist.image} alt={site.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover grayscale contrast-110" />
      </motion.div>
      <div>
        <p className="label">{artist.label}</p>
        <h2 className="display mt-5 text-[clamp(2.4rem,9vw,4.5rem)] leading-tight">{artist.heading}</h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--muted)]">
          {artist.text.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
