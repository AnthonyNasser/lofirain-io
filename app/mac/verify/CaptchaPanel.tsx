"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Provider = "turnstile" | "hcaptcha";
type CaptchaAPI = {
  render: (container: HTMLElement, options: {
    sitekey: string;
    callback: (token: string) => void;
    "error-callback": () => void;
    "expired-callback": () => void;
    theme: "light";
  }) => string | number;
};
type CaptchaWindow = Window & {
  turnstile?: CaptchaAPI;
  hcaptcha?: CaptchaAPI;
  webkit?: { messageHandlers?: { lofirainCaptcha?: { postMessage: (message: Record<string, string>) => void } } };
};

function notifyApp(message: Record<string, string>) {
  (window as CaptchaWindow).webkit?.messageHandlers?.lofirainCaptcha?.postMessage(message);
}

export default function CaptchaPanel({ provider, siteKey }: { provider: Provider | null; siteKey: string }) {
  const container = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const configured = Boolean(provider && siteKey);
  const [message, setMessage] = useState(configured ? "Complete the check below." : "Sign-in verification is temporarily unavailable. Please try again later.");

  useEffect(() => {
    if (!configured) notifyApp({ error: "unavailable" });
  }, [configured]);

  function fail() {
    setMessage("Couldn't finish verification. Please try again.");
    notifyApp({ error: "verification_failed" });
  }

  function renderWidget() {
    if (!provider || !siteKey || !container.current || rendered.current) return;
    const api = (window as CaptchaWindow)[provider];
    if (!api) { fail(); return; }
    rendered.current = true;
    api.render(container.current, {
      sitekey: siteKey,
      theme: "light",
      callback: (token) => {
        setMessage("Verified. You can return to LofiRain.");
        notifyApp({ token });
      },
      "error-callback": fail,
      "expired-callback": () => {
        setMessage("Verification expired. Please complete the check again.");
        notifyApp({ error: "expired" });
      },
    });
  }

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-white p-4 text-center text-ink">
      {configured && (
        <Script
          src={provider === "turnstile"
            ? "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            : "https://js.hcaptcha.com/1/api.js?render=explicit"}
          strategy="afterInteractive"
          onReady={renderWidget}
          onError={fail}
        />
      )}
      <div ref={container} />
      <p role="status" className="max-w-xs text-sm text-ink/70">{message}</p>
    </main>
  );
}
