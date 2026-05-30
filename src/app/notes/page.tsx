import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { NOTES } from "@/content/notes";
import { LINKEDIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Editorial notes from TaiyoML on cross-border GTM — sectoral observations, program mechanics, partnership structures.",
};

export default function NotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <Container>
          <SectionEyebrow>Notes</SectionEyebrow>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            Working
            <br />
            <em className="text-taiyo-900">notes.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            Editorial pieces on cross-border go-to-market — sectoral
            observations, program mechanics, partnership structures, the kind
            of pattern-recognition the work surfaces over time.
          </p>
        </Container>
      </section>

      {/* Notes list or empty state */}
      <section className="pb-24 md:pb-32">
        <Container>
          {NOTES.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-paper-300 bg-paper-50 px-8 py-16 text-center md:px-12 md:py-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                Coming soon
              </p>
              <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-paper-700">
                The first notes are in draft. Check back, or reach us in the
                meantime.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-paper-900 px-5 text-sm font-medium text-paper-50 transition-all hover:bg-taiyo-900 active:scale-[0.98]"
                >
                  Contact form
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex h-11 items-center gap-2 rounded-full border border-paper-300 bg-transparent px-5 text-sm font-medium text-paper-900 transition-all hover:border-paper-900 hover:bg-paper-100"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                  LinkedIn
                </a>
              </div>
            </div>
          ) : (
            <ul className="space-y-8">
              {NOTES.map((n) => (
                <li
                  key={n.slug}
                  className="border-b border-paper-200 pb-8 last:border-b-0"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                    {n.date}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-paper-900 md:text-4xl">
                    {n.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-paper-700">
                    {n.blurb}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
