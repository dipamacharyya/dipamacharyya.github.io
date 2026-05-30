import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { VIGNETTES } from "@/content/vignettes";
import { LINKEDIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Anonymized engagement vignettes — the shape of TaiyoML's cross-border GTM work across sectors and geographies.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <Container>
          <SectionEyebrow>Work</SectionEyebrow>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            The shape of
            <br />
            <em className="text-taiyo-900">the work.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            Active and recent engagements, described without naming the
            counterparties. The point is the shape — the geographies, the
            motions, the way the deal actually came together.
          </p>
        </Container>
      </section>

      {/* Vignettes */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="space-y-8 md:space-y-12">
            {VIGNETTES.map((v) => (
              <article
                key={v.slug}
                className="rounded-2xl border border-paper-200 bg-paper-50 p-8 md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                        {v.status === "active" ? "Active engagement" : "Completed"}
                      </p>
                      <h2 className="font-display text-3xl leading-[1.05] tracking-tight text-paper-900 md:text-[2.25rem]">
                        {v.shortTitle}
                      </h2>
                    </div>
                    <dl className="space-y-3 text-[13px]">
                      <div>
                        <dt className="font-mono uppercase tracking-[0.18em] text-paper-500">
                          Sectors
                        </dt>
                        <dd className="mt-1 text-paper-700">
                          {v.sectors.join(" · ")}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono uppercase tracking-[0.18em] text-paper-500">
                          Regions
                        </dt>
                        <dd className="mt-1 text-paper-700">
                          {v.regions.join(" · ")}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="space-y-6">
                    <p className="text-[17px] leading-relaxed text-paper-700">
                      {v.blurb}
                    </p>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                        Motions
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {v.motions.map((m) => (
                          <li
                            key={m}
                            className="flex items-start gap-3 text-[15px] leading-relaxed text-paper-700"
                          >
                            <ArrowRight
                              className="mt-1 h-4 w-4 flex-shrink-0 text-taiyo-900"
                              strokeWidth={1.75}
                            />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-paper-200 pt-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                        State
                      </p>
                      <p className="mt-2 text-[15px] text-paper-900">
                        {v.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-paper-200 py-24 md:py-32">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-paper-900 text-balance md:text-6xl">
              Bring us a situation.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper-600">
              If something in here resembles where you are — or where you want
              to be — bring it to us.
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
