import Image from "next/image";
import { videos } from "@/data/site";

export default function Videos() {
  return (
    <section id="videos" className="mx-auto max-w-7xl border-t border-white/10 px-4 py-28 md:px-8">
      <p className="label">04 — Visuals</p>
      <h2 className="display mt-5 text-[clamp(2.4rem,9vw,4.5rem)] leading-tight">Music Videos</h2>
      <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-8">
        {videos.map((v) => (
          <a key={v.title} href={v.href} className="group block">
            <div className="relative aspect-video overflow-hidden bg-black">
              <Image src={v.poster} alt={`${v.title} video`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/55 backdrop-blur-sm md:h-[84px] md:w-[84px]">
                <svg width="22" height="22" viewBox="0 0 18 18" fill="#fff" aria-hidden><path d="M4 2l12 7-12 7z" /></svg>
              </span>
              <span className="absolute bottom-3 right-4 text-sm text-white/80">{v.duration}</span>
            </div>
            <h3 className="display mt-6 text-3xl">{v.title}</h3>
            <p className="label-muted mt-2">{v.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
