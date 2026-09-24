import Image from "next/image";
import Link from "next/link";

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalHomeLink() {
  return (
    <Link href="/" className="wordmark">
      <Image src="/brand/lofi-rain-icon.png" alt="" width={30} height={30} />
      Lofi Rain
    </Link>
  );
}

export function LegalPage({ title, updated, intro, children }: LegalPageProps) {
  return (
    <main className="legal-shell">
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-8 sm:py-8">
        <LegalHomeLink />
        <header className="mt-14 border-b border-ink/15 pb-8">
          <h1 className="section-title">{title}</h1>
          <p className="legal-meta mt-4">Updated {updated}</p>
          <p className="lede mt-5">{intro}</p>
        </header>
        <article className="legal-content">{children}</article>
      </div>
    </main>
  );
}
