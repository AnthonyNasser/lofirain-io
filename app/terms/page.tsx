import type { Metadata } from "next";
import { LegalPage } from "../legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for lofirain.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 17, 2026"
      intro="These Terms govern your use of lofirain and the lofirain.io website."
    >
      <h2>Use of lofirain</h2>
      <p>
        You may use lofirain for personal listening and productivity. You agree
        not to misuse the app, interfere with its operation, or use it in a way
        that violates applicable law.
      </p>

      <h2>Music and licenses</h2>
      <p>
        The lofirain catalog includes lofi tracks sourced from Free Stock Music
        and Purrple Cat track listings. Songs may be made available under
        Creative Commons licenses, including CC BY 3.0 and CC BY-SA 3.0 where
        applicable. Track source pages and license names are stored in the app
        metadata. lofirain does not use AI-generated music.
      </p>
      <p>
        Music remains owned by its respective artists and rights holders. You
        may not extract, redistribute, resell, or separately exploit audio from
        the app except as permitted by the applicable license and law.
      </p>

      <h2>Artist requests</h2>
      <p>
        If you are an artist or rights holder and want a track reviewed or
        removed, submit an artist takedown request at{" "}
        <a href="/takedown">lofirain.io/takedown</a>.
      </p>

      <h2>No warranty</h2>
      <p>
        lofirain is provided as is and as available. We do not guarantee that
        the app will be uninterrupted, error-free, or available on every device
        or platform.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, lofirain and its creator will
        not be liable for indirect, incidental, consequential, special, or
        punitive damages arising from your use of the app or website.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of lofirain
        after changes become effective means you accept the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent through the takedown request
        page with a note that your message is about the Terms.
      </p>
    </LegalPage>
  );
}
