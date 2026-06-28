import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const features = [
  {
    title: "Mood-first listening",
    body: "Choose Relax, Deep Work, or Study and let lofirain keep the session simple.",
  },
  {
    title: "Ambient layers",
    body: "Blend lofi with rain, fire, or birds when the room needs a little weather.",
  },
  {
    title: "Gentle sessions",
    body: "Optional 15, 30, and 60 minute timers keep the app out of the way.",
  },
];

export default function Home() {
  return (
    <main className="site-shell overflow-hidden text-cream">
      <RainField />
      <nav className="site-nav relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-rounded text-lg font-extrabold"
        >
          <Image
            src="/brand/lofirain-logo.png"
            alt=""
            width={34}
            height={34}
            className="rounded-xl"
            priority
          />
          lofirain
        </Link>
        <div className="flex items-center gap-6 text-sm font-semibold text-cream/60">
          <Link href="/privacy" className="transition-colors hover:text-cream">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-cream">
            Terms
          </Link>
          <Link
            href="/music-credits"
            className="transition-colors hover:text-cream"
          >
            Music credits
          </Link>
          <Link href="/takedown" className="transition-colors hover:text-cream">
            Takedown
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100svh-84px)] w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-4 sm:px-8 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="max-w-2xl">
          <h1 className="font-rounded text-6xl font-black leading-[0.92] text-cream sm:text-8xl">
            lofirain
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-cream/70 sm:text-xl">
            A quiet lofi player built around mood, ambient rain, and a little
            cloud companion that stays with you while you work, study, or wind
            down.
          </p>
          <div className="hero-actions mt-9">
            <a
              href="#"
              className="app-store-button"
              aria-label="Open App Store link"
            >
              <svg
                className="app-store-logo"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M16.37 1.01c.08 1.03-.3 2.05-1.03 2.88-.78.9-2.05 1.58-3.16 1.49-.1-.99.32-2.04 1.02-2.8.79-.87 2.15-1.55 3.17-1.57ZM20.58 17.67c-.48 1.09-.71 1.58-1.33 2.54-.86 1.31-2.07 2.95-3.56 2.97-1.33.01-1.67-.86-3.48-.85-1.8.01-2.18.87-3.51.86-1.49-.02-2.63-1.49-3.49-2.8-2.4-3.67-2.65-7.98-1.17-10.27 1.05-1.62 2.7-2.57 4.25-2.57 1.58 0 2.57.87 3.88.87 1.27 0 2.05-.87 3.88-.87 1.39 0 2.86.76 3.91 2.06-3.44 1.89-2.88 6.8.62 8.06Z"
                />
              </svg>
              <span className="app-store-copy">
                <span className="app-store-eyebrow">Download on the</span>
                <span className="app-store-title">App Store</span>
              </span>
            </a>
            <Link href="/takedown" className="secondary-button">
              Artist takedown request
            </Link>
          </div>
          <p className="source-note">
            The catalog uses sourced Creative Commons tracks. lofirain never
            uses AI-generated music.
          </p>
        </div>

        <div className="relative min-h-[620px]">
          <div className="absolute left-1/2 top-4 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-storm/25 blur-3xl" />
          <div className="absolute right-4 top-20 h-72 w-72 rounded-full bg-amber/15 blur-3xl" />
          <div className="phone phone-back">
            <Image
              src="/app-screens/playback.png"
              alt="lofirain playback screen with a cloud companion and session controls"
              width={430}
              height={932}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="phone phone-front">
            <Image
              src="/app-screens/setup.png"
              alt="lofirain mood setup screen with ambient and timer controls"
              width={430}
              height={932}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8">
        <p className="section-kicker">Why lofirain</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="feature-panel">
              <h2 className="font-rounded text-xl font-extrabold text-cream">
                {feature.title}
              </h2>
              <p className="mt-3 leading-7 text-cream/64">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="section-kicker">Track sources</p>
          <h2 className="mt-4 font-rounded text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
            Lofi with source and license details.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-cream/68">
          <p>
            The app catalog uses Creative Commons music from Free Stock Music
            and Purrple Cat track listings, with source pages and license names
            stored in the app metadata. lofirain never uses AI-generated music.
          </p>
          <p>
            <Link
              href="/music-credits"
              className="font-bold text-cream underline decoration-cream/30 transition hover:decoration-cream"
            >
              View music credits and original sources
            </Link>
          </p>
          <p>
            If you are an artist or rights holder and want a track reviewed or
            removed, use the takedown request page and the request will be sent
            privately.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function RainField() {
  return (
    <div aria-hidden="true" className="rain-field">
      {Array.from({ length: 56 }, (_, index) => (
        <span key={index} style={{ "--i": index } as CSSProperties} />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-cream/10 px-6 py-8 text-sm text-cream/56 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 LofiRain LLC. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-cream">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-cream">
            Terms
          </Link>
          <Link href="/music-credits" className="hover:text-cream">
            Music credits
          </Link>
          <Link href="/takedown" className="hover:text-cream">
            Takedown
          </Link>
        </div>
      </div>
    </footer>
  );
}
