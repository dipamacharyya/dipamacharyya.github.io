import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { SECTORS } from "@/content/sectors";
import { LINKEDIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "The sectors where technology meets cross-border demand — clean energy, materials and manufacturing IP, defense-adjacent hardware, industrial automation across India, Southeast Asia, and the Americas.",
};

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <Container>
          <SectionEyebrow>Sectors</SectionEyebrow>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            Where technology
            <br />
            <em className="text-taiyo-900">meets cross-border demand.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            We focus on sectors where the buildout is real and
            government-backed — Indian and Southeast Asian industrial programs
            anchoring large-scale capacity, with technology that fits the
            manufacturing, distribution, and regulatory envelope.
          </p>
        </Container>
      </section>

      {/* Sector index — 2x2 grid of summary cards */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 md:grid-cols-2">
            {SECTORS.map((s) => (
              <Link
                key={s.slug}
                href={`/sectors/${s.slug}`}
                className="group flex flex-col bg-paper-50 p-8 transition-colors hover:bg-paper-100/70 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                    Sector {s.number}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-paper-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-taiyo-900" />
                </div>
                <h2 className="mt-12 font-display text-3xl leading-tight text-paper-900 md:text-4xl">
                  {s.name}<em className="text-taiyo-900">.</em>
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-paper-600">
                  {s.summary}
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-taiyo-900">
                  {s.regions}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-paper-200 py-24 md:py-32">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-paper-900 text-balance md:text-6xl">
              Adjacent sector? Talk to us.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper-600">
              These four are where we have active pattern-recognition and
              partner network. We&apos;ll consider adjacent sectors case by
              case if the cross-border thesis is strong.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-paper-900 px-6 text-[15px] font-medium text-paper-50 transition-all hover:bg-taiyo-900 active:scale-[0.98]"
              >
                Contact form
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-paper-300 bg-transparent px-6 text-[15px] font-medium text-paper-900 transition-all hover:border-paper-900 hover:bg-paper-100"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
