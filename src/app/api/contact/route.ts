import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactSubmission } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  intent: z.enum([
    "us-tech-asia-entry",
    "asia-operator-sourcing",
    "adjacent-or-other",
  ]),
  message: z.string().min(20).max(4000),
});

const INTENT_LABELS: Record<z.infer<typeof schema>["intent"], string> = {
  "us-tech-asia-entry": "US tech · India / SEA entry",
  "asia-operator-sourcing": "Asian operator · sourcing US tech",
  "adjacent-or-other": "Adjacent sector or other",
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues.map((i) => i.message).join(" · ") },
      { status: 400 }
    );
  }

  try {
    await sendContactSubmission({
      ...parsed.data,
      intent: INTENT_LABELS[parsed.data.intent],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact-submission failed:", err);
    return NextResponse.json(
      { error: "Submission failed. Please try again in a moment." },
      { status: 500 }
    );
  }
}
