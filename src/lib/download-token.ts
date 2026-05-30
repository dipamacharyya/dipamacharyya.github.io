import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Stateless signed download tokens.
 *
 * A token is `<payloadB64Url>.<signatureB64Url>` where payload is a
 * JSON object signed with HMAC-SHA256 using DOWNLOAD_SECRET. Anyone with
 * a valid token can fetch the asset until expiry; revocation requires
 * rotating the secret. Acceptable for honor-system lead-gen gating.
 */

const DEFAULT_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

export type TokenPayload = {
  /** Allowed asset filename, e.g. "bert-india-playbook.pdf" */
  asset: string;
  /** Case study slug the request came from (audit context only) */
  slug: string;
  /** Requester email (audit context only) */
  email: string;
  /** Issued-at, seconds since epoch */
  iat: number;
  /** Expires-at, seconds since epoch */
  exp: number;
};

function getSecret(): string {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "DOWNLOAD_SECRET env var is missing or too short (need 32+ chars)."
    );
  }
  return secret;
}

function base64UrlEncode(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(input: string): Buffer {
  const pad = input.length % 4 === 0 ? "" : "=".repeat(4 - (input.length % 4));
  const std = input.replace(/-/g, "+").replace(/_/g, "/") + pad;
  return Buffer.from(std, "base64");
}

export function signDownloadToken(
  data: { asset: string; slug: string; email: string },
  ttlSeconds: number = DEFAULT_TTL_SECONDS
): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: TokenPayload = {
    ...data,
    iat: now,
    exp: now + ttlSeconds,
  };
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const sig = createHmac("sha256", getSecret()).update(payloadB64).digest();
  return `${payloadB64}.${base64UrlEncode(sig)}`;
}

export type TokenVerifyResult =
  | { ok: true; payload: TokenPayload }
  | { ok: false; reason: "malformed" | "bad_signature" | "expired" };

export function verifyDownloadToken(token: string): TokenVerifyResult {
  const parts = token.split(".");
  if (parts.length !== 2) return { ok: false, reason: "malformed" };
  const [payloadB64, sigB64] = parts;

  const expected = createHmac("sha256", getSecret())
    .update(payloadB64)
    .digest();
  let actual: Buffer;
  try {
    actual = base64UrlDecode(sigB64);
  } catch {
    return { ok: false, reason: "malformed" };
  }
  if (
    expected.length !== actual.length ||
    !timingSafeEqual(expected, actual)
  ) {
    return { ok: false, reason: "bad_signature" };
  }

  let payload: TokenPayload;
  try {
    payload = JSON.parse(base64UrlDecode(payloadB64).toString("utf8"));
  } catch {
    return { ok: false, reason: "malformed" };
  }
  if (typeof payload.exp !== "number") return { ok: false, reason: "malformed" };
  if (payload.exp < Math.floor(Date.now() / 1000)) {
    return { ok: false, reason: "expired" };
  }
  return { ok: true, payload };
}
