import type { Metadata } from "next";
import { LegalPage } from "../legal";
import { TakedownForm } from "./TakedownForm";

export const metadata: Metadata = {
  title: "Contact and Artist Takedown Request",
  description: "Contact LofiRain LLC or request review or removal of a song.",
};

export default function TakedownPage() {
  return (
    <LegalPage
      title="Contact Lofi Rain"
      updated="June 27, 2026"
      intro="Send a privacy or legal inquiry, or request review or removal of a song from Lofi Rain."
    >
      <p>
        Select the type of inquiry below. For a rights-holder request, include
        enough detail to identify the track and explain your authority. For a
        privacy request, identify the right you want to exercise.
      </p>
      <TakedownForm />
      <p>
        Requests are delivered privately and reviewed from the information you
        provide here.
      </p>
    </LegalPage>
  );
}
