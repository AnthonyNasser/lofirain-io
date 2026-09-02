import { NextResponse } from "next/server";

type TakedownRequest = {
  inquiryType?: string;
  name?: string;
  email?: string;
  artistName?: string;
  trackTitle?: string;
  sourceUrl?: string;
  relationship?: string;
  details?: string;
  confirm?: boolean;
};

const inquiryTypes = new Set(["takedown", "privacy", "terms", "other"]);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: TakedownRequest;

  try {
    payload = (await request.json()) as TakedownRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const inquiryType = clean(payload.inquiryType) || "takedown";
  const commonFields: Array<keyof TakedownRequest> = ["name", "email", "details"];
  const takedownFields: Array<keyof TakedownRequest> = [
    "artistName",
    "trackTitle",
    "relationship",
  ];
  const requiredFields =
    inquiryType === "takedown"
      ? [...commonFields, ...takedownFields]
      : commonFields;
  const missingField = requiredFields.find((field) => !clean(payload[field]));

  if (!inquiryTypes.has(inquiryType) || missingField || !payload.confirm) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const senderEmail = clean(payload.email);
  if (!isValidEmail(senderEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const contactEmail = process.env.LOFIRAIN_CONTACT_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.LOFIRAIN_FROM_EMAIL || "lofirain <onboarding@resend.dev>";

  if (!contactEmail || !resendApiKey) {
    return NextResponse.json(
      { error: "Request delivery is not configured yet." },
      { status: 503 },
    );
  }

  const inquiryLabels: Record<string, string> = {
    takedown: "Rights-holder or takedown request",
    privacy: "Privacy request",
    terms: "Terms or legal inquiry",
    other: "General inquiry",
  };
  const subject =
    inquiryType === "takedown"
      ? `lofirain takedown request: ${clean(payload.trackTitle)}`
      : `lofirain ${inquiryLabels[inquiryType].toLowerCase()}`;
  const body = [
    `Inquiry type: ${inquiryLabels[inquiryType]}`,
    `Name: ${clean(payload.name)}`,
    `Email: ${senderEmail}`,
    ...(inquiryType === "takedown"
      ? [
          `Artist name: ${clean(payload.artistName)}`,
          `Track title: ${clean(payload.trackTitle)}`,
          `Source/link: ${clean(payload.sourceUrl) || "Not provided"}`,
          `Relationship to work: ${clean(payload.relationship)}`,
        ]
      : []),
    "",
    "Message:",
    clean(payload.details),
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: contactEmail,
      reply_to: senderEmail,
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to send request. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
