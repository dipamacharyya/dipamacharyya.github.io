import { NextResponse } from "next/server";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

import { getAllowedFilenames } from "@/content/downloadable-assets";
import { verifyDownloadToken } from "@/lib/download-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { token: string };

export async function GET(
  _request: Request,
  context: { params: Promise<Params> }
) {
  const { token } = await context.params;

  const verified = verifyDownloadToken(token);
  if (!verified.ok) {
    const reason =
      verified.reason === "expired"
        ? "This download link has expired. Request a fresh one."
        : "Invalid download link.";
    return new NextResponse(reason, { status: 401 });
  }

  // Defense in depth: even with a valid signature, only serve filenames in the
  // current asset registry.
  const allowed = getAllowedFilenames();
  if (!allowed.has(verified.payload.asset)) {
    return new NextResponse("Unknown asset.", { status: 404 });
  }

  // Strip any path traversal — only the basename is allowed.
  const safeName = path.basename(verified.payload.asset);
  const filePath = path.join(process.cwd(), "public", "downloads", safeName);

  try {
    await stat(filePath);
  } catch {
    return new NextResponse(
      "Asset is not yet published. Reach us through the contact form for advance access.",
      { status: 404 }
    );
  }

  const file = await readFile(filePath);

  return new NextResponse(file as BodyInit, {
    status: 200,
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="${safeName}"`,
      "cache-control": "private, no-store",
    },
  });
}
