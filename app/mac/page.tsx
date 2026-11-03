import type { Metadata } from "next";
import Image from "next/image";
import { LegalHomeLink } from "../legal";

export const metadata: Metadata = {
  title: "Mac Preview",
  description: "Download the Lofi Rain menu bar app for Mac.",
  robots: { index: false, follow: false, noarchive: true },
};

export default function MacDownloadPage() {
  return (
    <main className="legal-shell">
      <div className="mx-auto w-full max-w-3xl px-6 py-8 sm:px-8">
        <LegalHomeLink />
        <section className="mx-auto flex max-w-xl flex-col items-center py-12 text-center sm:py-16">
          <Image
            src="/companions/mallow.webp"
            alt="Mallow, your cloud companion"
            width={180}
            height={180}
            priority
          />
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-ink/60">
            Mac preview
          </p>
          <h1 className="section-title mt-4">A little focus, on your Mac.</h1>
          <p className="lede mt-6">
            Your cloud, lo-fi music, and simple focus sessions. Right in your menu
            bar, with a small window whenever you need it.
          </p>
          <a
            href="/downloads/mac/LofiRainMac.zip"
            download="LofiRainMac.zip"
            className="app-store-button mt-8 font-bold"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
            </svg>
            Download for Mac
          </a>
          <p className="mt-4 text-sm text-ink/65">
            Apple silicon · macOS 14 or later · Version 1.6
          </p>
          <div className="mt-10 w-full rounded-2xl border border-ink/10 bg-white/70 p-6 text-left sm:p-8">
            <h2 className="text-lg font-bold">Make yourself at home.</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-base text-ink/75">
              <li>Open the downloaded ZIP.</li>
              <li>Move LofiRainMac to your Applications folder, then open it.</li>
              <li>Click the cloud in your menu bar to start a session.</li>
            </ol>
            <p className="mt-6 border-t border-ink/10 pt-5 text-sm text-ink/65">
              This early preview is not notarized. If macOS blocks it, open System
              Settings → Privacy &amp; Security and choose Open Anyway.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
