"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/music-credits", label: "Music credits" },
  { href: "/takedown", label: "Takedown" },
];

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        />
        lofirain
      </Link>

      <div className="hidden items-center gap-6 text-sm font-semibold text-cream/60 sm:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch={false}
            className="transition-colors hover:text-cream"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="mobile-menu-button sm:hidden"
        aria-expanded={isOpen}
        aria-controls="home-mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div id="home-mobile-menu" className="mobile-menu sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              onClick={() => setIsOpen(false)}
              className="mobile-menu-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
