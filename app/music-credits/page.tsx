import type { Metadata } from "next";
import Link from "next/link";
import { LegalHomeLink } from "../legal";
import { retiredTracks, tracks, type MusicCredit } from "./tracks";

export const metadata: Metadata = {
  title: "Music credits",
  description:
    "Artist attribution, Creative Commons licenses, and original source pages for the licensed music in Lofi Rain.",
  alternates: { canonical: "https://lofirain.io/music-credits" },
};

export default function MusicCredits() {
  return (
    <main className="legal-shell">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
        <LegalHomeLink />

        <header className="mt-14 border-b border-ink/15 pb-8">
          <h1 className="section-title">Music credits</h1>
          <p className="lede mt-5">
            Purrple Cat’s playlist in Lofi Rain is Creative Commons music. Each
            track below lists its credited artist, license, and original source
            page. The other clouds play original music made for Lofi Rain.
          </p>
          <p className="legal-meta mt-4">{tracks.length} tracks</p>
        </header>

        <CreditList credits={tracks} />

        <section className="mt-16" aria-labelledby="retired-title">
          <h2
            id="retired-title"
            className="text-2xl font-extrabold tracking-tight"
          >
            Previously in Lofi Rain
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            These tracks were in earlier versions of the app.
          </p>
          <CreditList credits={retiredTracks} />
        </section>

        <div className="mt-12 border-t border-ink/15 pt-8 pb-16 text-ink/70">
          <p>
            If you’re an artist or rights holder and want a track reviewed or
            removed,{" "}
            <Link href="/takedown" className="text-link">
              request a takedown
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

function CreditList({ credits }: { credits: readonly MusicCredit[] }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {credits.map(([title, artist, license, source]) => (
        <article key={source} className="credit-card">
          <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
          <p className="mt-1 font-semibold text-ink/75">{artist}</p>
          <p className="mt-3 text-sm leading-6 text-ink/60">{license}</p>
          <a
            href={source}
            rel="noreferrer"
            target="_blank"
            className="text-link mt-4 inline-block text-sm"
          >
            Original source
          </a>
        </article>
      ))}
    </div>
  );
}
