import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for lofirain.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 17, 2026"
      intro="This Privacy Policy explains how lofirain handles information when you use the app or this website."
    >
      <h2>Overview</h2>
      <p>
        lofirain is designed as a simple listening app. The app does not require
        an account, and we do not use the app to sell personal information.
      </p>

      <h2>Information you provide</h2>
      <p>
        If you contact us by email or submit an artist takedown request, we
        receive the information you choose to provide, such as your name, email
        address, track details, and the contents of your message.
      </p>

      <h2>App data</h2>
      <p>
        lofirain may store preferences on your device, including selected mood,
        timer, ambient sound, and playback settings. These preferences are used
        to run the app experience and are not an account profile.
      </p>

      <h2>Downloads and audio</h2>
      <p>
        Some tracks may be downloaded or cached by the app so they can be played
        locally. Track metadata may include title, artist, source page, and
        license information.
      </p>

      <h2>Website</h2>
      <p>
        This website provides information about lofirain and legal/contact
        pages. Hosting providers may process standard technical information such
        as IP address, browser type, requested page, and timestamp to deliver and
        secure the site.
      </p>

      <h2>Sharing</h2>
      <p>
        We may share information when needed to operate the app or website,
        respond to requests, comply with law, protect rights and safety, or work
        with service providers acting on our behalf.
      </p>

      <h2>Children</h2>
      <p>
        lofirain is not directed to children under 13. If you believe a child
        provided personal information, contact us so we can review and delete it
        where appropriate.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, use the contact form on the takedown request
        page and note that your message is about privacy.
      </p>
    </LegalPage>
  );
}
