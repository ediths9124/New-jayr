// Everything you'll want to change is in this file.

export const site = {
  name: "JarR",
  heroLabel: "NEW ALBUM — MIDNIGHT CATHEDRAL",
  tagline: "Nocturnal soul from the edge of the city.",
};

export type Track = {
  id: string;
  title: string;
  album: string;
  kind: string; // e.g. "Single — March 2026"
  blurb: string;
  cover: string;
  preview?: string; // optional 5-second preview, e.g. "/audio/gold-hour.mp3" (put the mp3 in /public/audio)
  spotify: string;
  apple: string;
  youtube: string;
};

export const tracks: Track[] = [
  {
    id: "gold-hour", title: "Gold Hour", album: "Midnight Cathedral", kind: "Single — March 2026",
    blurb: "Recorded at 4am in an empty chapel. Brass, tape hiss and a voice that refuses to leave the room.",
    cover: "/images/ryder.jpg", spotify: "#", apple: "#", youtube: "#",
  },
  {
    id: "smoke-signals", title: "Smoke Signals", album: "Midnight Cathedral", kind: "Album track — March 2026",
    blurb: "A slow-burning confession wrapped in analog haze — the record's darkest, most intimate corner.",
    cover: "/images/cover-smoke.jpg", spotify: "#", apple: "#", youtube: "#",
  },
  {
    id: "cold-marble", title: "Cold Marble", album: "Fractures", kind: "Single — November 2025",
    blurb: "Sharp edges, pale light, and a pulse that cracks wide open.",
    cover: "/images/cover-cold-marble.jpg", spotify: "#", apple: "#", youtube: "#",
  },
];

export const hero = { image: "/images/ryder.jpg" };

export const artist = {
  label: "03 — THE ARTIST",
  heading: "A voice built for the dark",
  image: "/images/artist.jpg",
  text: [
    "Raised between a church choir loft and a basement studio, JARR spent a decade writing for other people before stepping to the front of the record. The result is a body of work that treats silence as an instrument.",
    "Across two albums and a run of singles, the sound has moved from stripped acoustic confessionals to widescreen, cinematic production.",
  ],
};

export const videos = [
  { title: "Gold Hour", label: "Official video", duration: "3:48", poster: "/images/video-concert.jpg", href: "#" },
  { title: "Smoke Signals", label: "Live at Union Chapel", duration: "5:12", poster: "/images/video-alley.jpg", href: "#" },
];

// Add socials: { label: "Instagram", href: "https://instagram.com/yourhandle" }
export const socials: { label: string; href: string }[] = [];
