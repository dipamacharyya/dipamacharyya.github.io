import { NextResponse } from "next/server";
import { z } from "zod";

import { getAsset } from "@/content/downloadable-assets";
import { signDownloadToken } from "@/lib/download-token";
import { sendDownloadLink } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().min(1).max(200),
  assetId: z.string().min(1).max(80),
});

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

  const asset = getAsset(parsed.data.assetId);
  if (!asset) {
    return NextResponse.json({ error: "Unknown asset." }, { status: 404 });
  }
  if (!asset.ready) {
    return NextResponse.json(
      {
        error:
          "This asset is not yet released. Reach us through the contact form for advance access.",
      },
      { status: 403 }
    );
  }

  try {
    const token = signDownloadToken({
      asset: asset.filename,
      slug: asset.id,
      email: parsed.data.email,
    });

    await sendDownloadLink({
      toEmail: parsed.data.email,
      toName: parsed.data.name,
      toCompany: parsed.data.company,
      assetTitle: asset.title,
      caseStudySlug: asset.id,
      downloadToken: token,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("download-request failed:", err);
    return NextResponse.json(
      {
        error:
          "Could not send the download link. Please try again or use the contact form.",
      },
      { status: 500 }
    );
  }
}
