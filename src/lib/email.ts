import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend(): Resend {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY env var is missing.");
  _resend = new Resend(key);
  return _resend;
}

function getFrom(): string {
  return process.env.RESEND_FROM ?? "TaiyoML <onboarding@resend.dev>";
}

function getContactTo(): string {
  const to = process.env.CONTACT_TO;
  if (!to) throw new Error("CONTACT_TO env var is missing.");
  return to;
}

function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "https://taiyoml.com"
  );
}

/**
 * Send a gated-download link to the requester, with a copy to the contact
 * inbox so Dipam sees the lead.
 */
export async function sendDownloadLink(args: {
  toEmail: string;
  toName: string;
  toCompany: string;
  assetTitle: string;
  caseStudySlug: string;
  downloadToken: string;
}): Promise<void> {
  const resend = getResend();
  const link = `${getSiteUrl()}/api/download/${args.downloadToken}`;

  const requesterText = [
    `Hi ${args.toName},`,
    "",
    `Thanks for requesting "${args.assetTitle}".`,
    "",
    `Download link (expires in 7 days):`,
    link,
    "",
    `If anything in there sparks a real conversation, reach us through the contact form at ${getSiteUrl()}/contact.`,
    "",
    `— TaiyoML`,
    getSiteUrl(),
  ].join("\n");

  const internalText = [
    `New gated-download request.`,
    ``,
    `Asset:    ${args.assetTitle}`,
    `Case:     /work/${args.caseStudySlug}`,
    `Name:     ${args.toName}`,
    `Email:    ${args.toEmail}`,
    `Company:  ${args.toCompany}`,
    ``,
    `Link sent (7-day expiry): ${link}`,
  ].join("\n");

  await Promise.all([
    resend.emails.send({
      from: getFrom(),
      to: args.toEmail,
      replyTo: getContactTo(),
      subject: `Your TaiyoML download — ${args.assetTitle}`,
      text: requesterText,
    }),
    resend.emails.send({
      from: getFrom(),
      to: getContactTo(),
      subject: `[TaiyoML] Download requested: ${args.assetTitle}`,
      text: internalText,
    }),
  ]);
}

/**
 * Send a contact-form submission to the contact inbox.
 */
export async function sendContactSubmission(args: {
  name: string;
  email: string;
  company?: string;
  intent: string;
  message: string;
}): Promise<void> {
  const resend = getResend();
  const text = [
    `New TaiyoML contact form submission.`,
    ``,
    `Name:     ${args.name}`,
    `Email:    ${args.email}`,
    `Company:  ${args.company ?? "—"}`,
    `Intent:   ${args.intent}`,
    ``,
    `Message:`,
    args.message,
  ].join("\n");

  await resend.emails.send({
    from: getFrom(),
    to: getContactTo(),
    replyTo: args.email,
    subject: `[TaiyoML] Contact: ${args.intent} · ${args.name}${
      args.company ? ` (${args.company})` : ""
    }`,
    text,
  });
}
