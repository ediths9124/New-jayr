"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { label: "Music", href: "#music" },
  { label: "The Artist", href: "#artist" },
  { label: "Videos", href: "#videos" },
  { label: "Connect", href: "#connect" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="#top" className="display text-[1.05rem] uppercase tracking-[0.34em]">{site.name}</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20">
            {open ? <span className="text-xl leading-none">×</span> : <><i className="block h-px w-5 bg-white" /><i className="block h-px w-5 bg-white" /><i className="block h-px w-5 bg-white" /></>}
          </button>
        </div>
      </header>
      {open && (
        <nav className="fixed inset-0 z-40 flex flex-col justify-center gap-7 bg-black/95 px-8 pt-20">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="display text-5xl hover:text-[var(--gold)]">{l.label}</a>
          ))}
        </nav>
      )}
    </>
  );
}
