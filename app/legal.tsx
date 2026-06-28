import Link from "next/link";

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPage({ title, updated, intro, children }: LegalPageProps) {
  return (
    <main className="legal-shell min-h-screen text-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-8 sm:px-8 sm:py-10">
        <Link href="/" className="text-sm font-bold text-cream/60 transition hover:text-cream">
          lofirain
        </Link>
        <header className="mt-16 border-b border-cream/12 pb-8">
          <p className="section-kicker">Updated {updated}</p>
          <h1 className="mt-4 font-rounded text-4xl font-black text-cream sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-cream/70">{intro}</p>
        </header>
        <article className="legal-content">{children}</article>
      </div>
    </main>
  );
}
