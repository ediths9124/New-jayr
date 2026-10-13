import { site, socials } from "@/data/site";

export default function Connect() {
  return (
    <>
      <section id="connect" className="mx-auto max-w-7xl border-t border-white/10 px-4 py-28 pb-40 md:px-8">
        <p className="label">05 — Connect</p>
        <h2 className="display mt-5 text-[clamp(2.4rem,9vw,4.5rem)] leading-tight">Follow {site.name}</h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {socials.length === 0 && <p className="text-[var(--muted)]">Social links coming soon.</p>}
          {socials.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="pill">{s.label}</a>)}
        </div>
      </section>
      <footer className="border-t border-white/10 px-4 py-10 pb-28 text-center md:px-8">
        <p className="label-muted">© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </>
  );
}
