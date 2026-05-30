import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  Search,
  Handshake,
  Users,
} from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { LINKEDIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "How a TaiyoML engagement unfolds — sourcing partners and capital, structuring joint ventures or distribution where the deal calls for it, and standing up the leadership team that runs whatever we set up. Across India, Southeast Asia, and the Americas.",
};

const PHASES = [
  {
    number: "Phase 01",
    title: "Source",
    icon: Search,
    body: "We identify both sides of the deal — technology with industrial-trajectory fit, and the investors, operating partners, distributors, or channel anchors actively looking for it. Pattern-matching across the corridor is our core skill.",
  },
  {
    number: "Phase 02",
    title: "Structure",
    icon: Handshake,
    body: "We bring the parties to the same table and facilitate whatever structure the deal calls for — joint venture (equity, IP, manufacturing terms, governance), licensing, distribution build, channel partnership. Often more than one shape, in parallel, across geographies.",
  },
  {
    number: "Phase 03",
    title: "Team",
    icon: Users,
    body: "The JV is the operator. We recruit its leadership — managing director, technical, regulatory, commercial — and stay involved at the board and partner-relationship level as the venture matures and additional roles come online.",
  },
];

const CAPABILITIES = [
  {
    title: "Partner sourcing — both sides",
    body: "Active corridor-spanning network across US tech transfer, Asian conglomerates, family offices, sector-specialized operating partners, and distribution houses. Both sides identified and pattern-matched before either sees a memo.",
  },
  {
    title: "JV structuring",
    body: "Equity split, IP rights, manufacturing and licensing terms, governance, board composition, dispute mechanics. Worked end-to-end with the parties and their counsel until the entity is real and operable.",
  },
  {
    title: "Distribution + channel build",
    body: "When a full JV isn't the right shape — or when it's the future-state but distribution comes first — we stand up the channel: country managers, master distributors, integration partners, sales-engineering coverage.",
  },
  {
    title: "Leadership recruit",
    body: "The JV is the operator. We recruit its leadership team — managing director, technical, regulatory, commercial — across India, Southeast Asia, and the Americas, depending on where the entity sits.",
  },
  {
    title: "Regulatory pathway",
    body: "PLI eligibility, defense indigenization pathways, sovereign-preference procurement registration, sector-specific licensing. We sequence the regulatory work so it lands when the entity is ready to move.",
  },
  {
    title: "Channel marketing — Americas direct, MEA / SEA via network",
    body: "We carry GTM in the US, Mexico, and across the Americas directly. In MEA and SEA, we run through our investor and partner network — country anchors, distribution houses, and operating partners who already have the corridor open.",
  },
  {
    title: "Board + partner-relationship continuity",
    body: "After close we stay involved at the board level, as a partner-relationship continuity layer between the founding parties as the venture matures and additional roles come online.",
  },
  {
    title: "Bespoke combinations",
    body: "Most engagements are some combination of the above. We don't productize into tiers — the right shape is set by the technology, the corridor, and what the parties actually need.",
  },
];

export default function PracticePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <Container>
          <SectionEyebrow>Practice</SectionEyebrow>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            Three phases.
            <br />
            <em className="text-taiyo-900">Many motions in parallel.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            We don&apos;t hand off after introductions. We source both sides,
            structure whatever shape the deal calls for, and stand up the team
            that runs it — often in more than one geography at once, and often
            with more than one motion running in parallel.
          </p>
        </Container>
      </section>

      {/* Phase cards — three across */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 md:grid-cols-3">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.title}
                  className="flex flex-col bg-paper-50 p-8 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                      {phase.number}
                    </span>
                    <Icon className="h-5 w-5 text-taiyo-900" strokeWidth={1.5} />
                  </div>
                  <h2 className="mt-12 font-display text-3xl leading-tight text-paper-900 md:text-4xl">
                    {phase.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-paper-600">
                    {phase.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-paper-200 bg-paper-100/50 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <SectionEyebrow>Capabilities</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
                What we
                <br />
                <em className="text-taiyo-900">actually do.</em>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-paper-600">
                Most engagements combine several of these. The right
                combination is set by the technology, the corridor, and what
                the parties actually need — not by a fixed package.
              </p>
            </div>
            <ul className="space-y-8">
              {CAPABILITIES.map((c) => (
                <li
                  key={c.title}
                  className="border-t border-paper-200 pt-6 md:pt-8"
                >
                  <p className="flex items-start gap-3 font-display text-2xl leading-tight text-paper-900 md:text-[1.65rem]">
                    <ArrowRight
                      className="mt-2 h-5 w-5 flex-shrink-0 text-taiyo-900"
                      strokeWidth={1.75}
                    />
                    {c.title}
                  </p>
                  <p className="mt-3 pl-8 text-[15px] leading-relaxed text-paper-700 md:text-base">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Parallel motions framing */}
      <section className="border-t border-paper-200 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <SectionEyebrow>Parallel motions</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
                More than one
                <br />
                <em className="text-taiyo-900">thing at once.</em>
              </h2>
            </div>
            <div className="space-y-6 text-[17px] leading-relaxed text-paper-700">
              <p>
                The realistic shape of cross-border GTM is rarely one motion
                in one direction. A US technology company already manufacturing
                in North America has near-market expansion to drive on the
                Americas side while a JV stands up in India or Southeast Asia.
                An Indian conglomerate adding a US-licensed line has channel
                build to run in parallel with the manufacturing ramp.
              </p>
              <p>
                We carry the Americas channel directly — US, Mexico, the rest
                of the hemisphere. For MEA and Southeast Asia, we run through
                our investor and partner network: country anchors, distribution
                houses, and operating partners who already have the corridor
                open.
              </p>
              <p>
                Engagements are bespoke. Most run more than one motion
                concurrently.
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
              Bring us the deal.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper-600">
              The best engagements start with a concrete situation — a piece
              of technology, an investor mandate, or a partnership decision
              you want a second pair of operating eyes on.
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
