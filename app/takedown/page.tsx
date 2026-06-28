import type { Metadata } from "next";
import { LegalPage } from "../legal";
import { TakedownForm } from "./TakedownForm";

export const metadata: Metadata = {
  title: "Artist Takedown Request",
  description: "Request review or removal of a song from lofirain.",
};

export default function TakedownPage() {
  return (
    <LegalPage
      title="Artist takedown request"
      updated="June 17, 2026"
      intro="Artists, rights holders, and authorized representatives can request review or removal of a song from lofirain."
    >
      <p>
        Use this form to send a request. Include enough detail for the track to
        be identified, including artist name, song title, and source page if you
        know it.
      </p>
      <TakedownForm />
      <p>
        Requests are delivered privately and reviewed from the information you
        provide here.
      </p>
    </LegalPage>
  );
}
