import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { LINKEDIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About",
  description:
    "TaiyoML originates and structures cross-border go-to-market across India, Southeast Asia, and the Americas — sourcing partners and capital, structuring joint ventures and distribution, and recruiting the leadership team that runs whatever we set up.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "We source both sides.",
    body: "Most cross-border deal-makers source either technology or capital — and rely on the other side showing up. We source both. The technology and the investor or operating partner are matched against each other before either sees a memo.",
  },
  {
    number: "02",
    title: "We do more than introduce.",
    body: "The default in cross-border deal-making is to introduce, hand off a memo, and exit. We stay with the engagement through structuring and team-build — recruiting the leadership that will run the joint venture or distribution entity, and staying involved at the board and partner-relationship level after close.",
  },
  {
    number: "03",
    title: "We are sector-disciplined.",
    body: "We focus on technology with real industrial-trajectory fit: clean energy, materials, manufacturing IP, defense-adjacent hardware, industrial automation. The pattern matters more than the deal — we look for sectoral plays that compound across multiple corridor pairings.",
  },
  {
    number: "04",
    title: "We work in parallel motions.",
    body: "A JV standing up in Southeast Asia while channel build runs in the Americas. A US-licensed line ramping in India while distribution stands up across ASEAN. Cross-border GTM is rarely one motion in one direction — we run several at once, in the geographies and structures the deal calls for.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <Container>
          <SectionEyebrow>About TaiyoML</SectionEyebrow>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            We source the deal. We structure the partnership. We stand up the team.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            TaiyoML does cross-border go-to-market. We source partners and
            capital across the corridor, structure joint ventures or
            distribution where the deal calls for it, and recruit the
            leadership team that runs whatever we set up.
          </p>
        </Container>
      </section>

      {/* How we work */}
      <section className="border-y border-paper-200 bg-paper-100/50 py-24 md:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <SectionEyebrow>How we work</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
                Four operating
                <br />
                <em className="text-taiyo-900">principles.</em>
              </h2>
            </div>
            <dl className="space-y-12">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.number}
                  className="grid gap-3 border-t border-paper-200 pt-8 md:grid-cols-[auto_1fr] md:gap-8"
                >
                  <dt className="font-mono text-sm text-paper-500 md:pt-1">
                    {p.number}
                  </dt>
                  <div>
                    <p className="font-display text-2xl leading-tight text-paper-900 md:text-3xl">
                      {p.title}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-paper-600 md:text-base">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Founder — name + title + LinkedIn + headshot, no biography */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <SectionEyebrow>Founder</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
                Dipam
                <br />
                <em className="text-taiyo-900">Acharyya.</em>
              </h2>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
              {/* Headshot placeholder — swap in real photo at /public/images/dipam.jpg and replace this block with an <Image> */}
              <div
                aria-hidden
                className="flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full border border-paper-200 bg-gradient-to-br from-taiyo-50 via-paper-100 to-accent-100/40 font-display text-5xl leading-none text-taiyo-900 md:h-48 md:w-48 md:text-6xl"
              >
                DA
              </div>
              <div className="space-y-4">
                <p className="font-display text-2xl leading-tight text-paper-900 md:text-3xl">
                  Founder &amp; Principal
                </p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-[15px] font-medium text-paper-900 underline-offset-4 transition-colors hover:text-taiyo-900 hover:underline"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Geography */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <SectionEyebrow>Where we operate</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
                One corridor.
                <br />
                <em className="text-taiyo-900">Many directions.</em>
              </h2>
            </div>
            <div className="space-y-6 text-[17px] leading-relaxed text-paper-700">
              <p>
                We source technology across US coastal innovation hubs, the
                Midwest manufacturing belt, university tech-transfer offices,
                and sector trade shows. We carry channel directly in the
                Americas — US, Mexico, and the rest of the hemisphere.
              </p>
              <p>
                India is our primary Asian partner network, with active
                relationships in Kolkata, Mumbai, and Chennai. Southeast Asia
                routes through Vietnam, Thailand, Indonesia, and Singapore
                depending on sector fit. For MEA and SEA market motion, we
                run through investor and partner channels with the corridor
                already open.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-paper-200 py-24 md:py-32">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-paper-900 text-balance md:text-6xl">
              Bring us the technology.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper-600">
              If you have technology looking for a partner network — or
              operating capability looking for technology to bring in —
              we&apos;d like to hear from you.
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
