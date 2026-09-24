"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { APP_STORE_URL } from "../appStore";

const links = [
  { href: "/music-credits", label: "Music credits" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/takedown", label: "Contact" },
];

export default function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main">
      <Link href="/" className="wordmark">
        <Image src="/brand/lofi-rain-icon.png" alt="" width={34} height={34} />
        Lofi Rain
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.href} href={link.href} prefetch={false}>
            {link.label}
          </Link>
        ))}
        <a
          className="nav-get"
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Get the app
        </a>
      </div>

      <button
        type="button"
        className="mobile-menu-button md:hidden"
        aria-expanded={isOpen}
        aria-controls="home-mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div id="home-mobile-menu" className="mobile-menu md:hidden">
          <a
            className="mobile-menu-link"
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get the app
          </a>
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
