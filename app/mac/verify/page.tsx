import type { Metadata } from "next";
import CaptchaPanel from "./CaptchaPanel";

export const metadata: Metadata = {
  title: "Sign-in verification",
  robots: { index: false, follow: false, noarchive: true },
};

export default function MacVerificationPage() {
  const configuredProvider = process.env.LOFIRAIN_CAPTCHA_PROVIDER ?? "turnstile";
  const provider = configuredProvider === "turnstile" || configuredProvider === "hcaptcha"
    ? configuredProvider : null;
  // Both values are public widget configuration. Never put the provider secret
  // here: Supabase alone validates the resulting single-use challenge token.
  const siteKey = process.env.LOFIRAIN_CAPTCHA_SITE_KEY ?? "";
  return <CaptchaPanel provider={provider} siteKey={siteKey} />;
}
