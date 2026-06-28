import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "./tracks";

export const metadata: Metadata = {
  title: "Music credits",
  description:
    "Artist attribution, Creative Commons licenses, and original source pages for music available in lofirain.",
  alternates: { canonical: "https://lofirain.io/music-credits" },
};

export default function MusicCredits() {
  return (
    <main className="legal-shell min-h-screen text-cream">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-8 sm:py-10">
        <Link
          href="/"
          className="text-sm font-bold text-cream/60 transition hover:text-cream"
        >
          lofirain
        </Link>

        <header className="mt-16 border-b border-cream/12 pb-8">
          <p className="section-kicker">Attribution and licensing</p>
          <h1 className="mt-4 font-rounded text-4xl font-black text-cream sm:text-5xl">
            Music credits
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/70">
            lofirain uses sourced Creative Commons music and does not use
            AI-generated music. Each track below includes its credited artist,
            applicable license, and original source page.
          </p>
          <p className="mt-4 text-sm font-semibold text-cream/50">
            {tracks.length} tracks
          </p>
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {tracks.map(([title, artist, license, source]) => (
            <article
              key={source}
              className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-5"
            >
              <h2 className="font-rounded text-lg font-extrabold text-cream">
                {title}
              </h2>
              <p className="mt-1 font-semibold text-cream/65">{artist}</p>
              <p className="mt-3 text-sm leading-6 text-cream/50">{license}</p>
              <a
                href={source}
                rel="noreferrer"
                target="_blank"
                className="mt-4 inline-block text-sm font-bold text-cream underline decoration-cream/30 transition hover:decoration-cream"
              >
                Original source
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-sm leading-6 text-cream/56">
          <p>
            If you are an artist or rights holder and want a track reviewed or
            removed, submit an {" "}
            <Link
              href="/takedown"
              className="font-bold text-cream underline decoration-cream/30"
            >
              artist takedown request
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
