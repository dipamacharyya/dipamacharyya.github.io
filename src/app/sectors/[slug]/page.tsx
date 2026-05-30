import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { SECTORS, getSector } from "@/content/sectors";
import { LINKEDIN_URL } from "@/lib/links";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return { title: "Sector not found" };
  return {
    title: sector.name,
    description: sector.summary,
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <Container>
          <Link
            href="/sectors"
            className="group inline-flex items-center gap-2 text-sm text-paper-500 transition-colors hover:text-paper-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All sectors
          </Link>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
            Sector {sector.number}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            {sector.name}<em className="text-taiyo-900">.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            {sector.summary}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-taiyo-900">
            {sector.regions}
          </p>
        </Container>
      </section>

      {/* Why this sector */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <SectionEyebrow>Why this sector</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 md:text-5xl">
                The buildout
                <br />
                <em className="text-taiyo-900">is real.</em>
              </h2>
            </div>
            <p className="text-[17px] leading-relaxed text-paper-700">
              {sector.why}
            </p>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="border-t border-paper-200 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <SectionEyebrow>Programs anchoring demand</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 md:text-5xl">
                Where sovereign
                <br />
                <em className="text-taiyo-900">capacity is forming.</em>
              </h2>
            </div>
            <dl className="space-y-10">
              {sector.programs.map((p) => (
                <div
                  key={p.name}
                  className="grid gap-3 border-t border-paper-200 pt-6 md:grid-cols-[auto_1fr] md:gap-8 md:pt-8"
                >
                  <dt className="font-display text-2xl leading-tight text-paper-900 md:max-w-[14ch] md:text-[1.65rem]">
                    {p.name}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-paper-700 md:text-base">
                    {p.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Technology archetypes */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <SectionEyebrow>Technology archetypes</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 md:text-5xl">
                What
                <br />
                <em className="text-taiyo-900">fits.</em>
              </h2>
            </div>
            <ul className="space-y-4">
              {sector.archetypes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-paper-700 md:text-[17px]"
                >
                  <ArrowRight
                    className="mt-1.5 h-4 w-4 flex-shrink-0 text-taiyo-900"
                    strokeWidth={1.75}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Partner-network shape */}
      <section className="border-t border-paper-200 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <SectionEyebrow>Partner-network shape</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 md:text-5xl">
                Who we
                <br />
                <em className="text-taiyo-900">work with.</em>
              </h2>
            </div>
            <p className="text-[17px] leading-relaxed text-paper-700">
              {sector.partnerShape}
            </p>
          </div>
        </Container>
      </section>

      {/* Representative engagement shapes */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <SectionEyebrow>Engagement shapes</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 md:text-5xl">
                How the work
                <br />
                <em className="text-taiyo-900">tends to land.</em>
              </h2>
            </div>
            <ul className="space-y-4">
              {sector.engagementShapes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-paper-700 md:text-[17px]"
                >
                  <ArrowRight
                    className="mt-1.5 h-4 w-4 flex-shrink-0 text-taiyo-900"
                    strokeWidth={1.75}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Strong fit (kept from original) */}
      <section className="border-t border-paper-200 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <SectionEyebrow>Strong fit</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 md:text-5xl">
                Bring us
                <br />
                <em className="text-taiyo-900">these.</em>
              </h2>
            </div>
            <ul className="space-y-4">
              {sector.fit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-paper-700 md:text-[17px]"
                >
                  <ArrowRight
                    className="mt-1.5 h-4 w-4 flex-shrink-0 text-taiyo-900"
                    strokeWidth={1.75}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-paper-200 py-24 md:py-32">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-paper-900 text-balance md:text-6xl">
              Working on something in {sector.name.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper-600">
              Bring us the technology, the mandate, or the partnership decision.
              We&apos;ll tell you what we&apos;re seeing on the other side of
              the corridor.
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
