"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  artistName: string;
  trackTitle: string;
  sourceUrl: string;
  relationship: string;
  details: string;
  confirm: boolean;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  artistName: "",
  trackTitle: "",
  sourceUrl: "",
  relationship: "",
  details: "",
  confirm: false,
};

export function TakedownForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/takedown", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(result?.error || "Unable to send request.");
      }

      setValues(initialValues);
      setStatus("sent");
      setStatusMessage("Request sent. We will review the details you provided.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send request. Please try again.",
      );
    }
  }

  return (
    <form className="takedown-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Your legal name
          <input
            required
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            autoComplete="name"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            autoComplete="email"
          />
        </label>
      </div>

      <div className="field-grid">
        <label>
          Artist name
          <input
            required
            value={values.artistName}
            onChange={(event) => updateValue("artistName", event.target.value)}
          />
        </label>
        <label>
          Song title
          <input
            required
            value={values.trackTitle}
            onChange={(event) => updateValue("trackTitle", event.target.value)}
          />
        </label>
      </div>

      <label>
        Source page or track link, if known
        <input
          value={values.sourceUrl}
          onChange={(event) => updateValue("sourceUrl", event.target.value)}
          inputMode="url"
        />
      </label>

      <label>
        Your relationship to the work
        <select
          required
          value={values.relationship}
          onChange={(event) => updateValue("relationship", event.target.value)}
        >
          <option value="">Select one</option>
          <option value="Artist">Artist</option>
          <option value="Rights holder">Rights holder</option>
          <option value="Authorized representative">Authorized representative</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Request details
        <textarea
          required
          rows={7}
          value={values.details}
          onChange={(event) => updateValue("details", event.target.value)}
          placeholder="Tell us which track should be reviewed or removed and why."
        />
      </label>

      <label className="checkbox-row">
        <input
          required
          type="checkbox"
          checked={values.confirm}
          onChange={(event) => updateValue("confirm", event.target.checked)}
        />
        <span>
          I confirm that the information in this request is accurate to the best
          of my knowledge.
        </span>
      </label>

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending request..." : "Send request"}
      </button>
      <p
        className={`form-note form-status ${status === "error" ? "error" : ""} ${
          status === "sent" ? "success" : ""
        }`}
        aria-live="polite"
      >
        {statusMessage || "Your request will be sent privately for review."}
      </p>
    </form>
  );
}
