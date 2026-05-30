import { Container, SectionEyebrow } from "@/components/marketing/container";
import { Search, Handshake, Users } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PHASES = [
  {
    eyebrow: "Phase 01",
    title: "Source",
    description:
      "We identify both sides — technology with industrial-trajectory fit, and the investors, operating partners, distributors, or channel anchors actively looking for it. Pattern-matching across the corridor is our core skill.",
    icon: Search,
  },
  {
    eyebrow: "Phase 02",
    title: "Structure",
    description:
      "We bring the parties to the same table. Joint venture when the deal calls for it — equity, IP, manufacturing terms, governance. Distribution or channel build where a JV isn't the right shape. Often both, in parallel, across geographies.",
    icon: Handshake,
  },
  {
    eyebrow: "Phase 03",
    title: "Team",
    description:
      "The JV is the operator. We recruit its leadership — managing director, technical, regulatory, commercial — and stay involved at the board and partner-relationship level as the venture matures and additional roles come online.",
    icon: Users,
  },
];

export function PracticeGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>How we work</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
              Three phases.
              <br />
              <em className="text-taiyo-900">Many motions in parallel.</em>
            </h2>
          </div>
          <Link
            href="/practice"
            className="group inline-flex items-center gap-2 text-sm font-medium text-paper-900 transition-colors hover:text-taiyo-900"
          >
            Engagement detail
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 md:mt-20 md:grid-cols-3">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.title}
                className="group flex flex-col bg-paper-50 p-8 transition-colors hover:bg-paper-100/70 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                    {phase.eyebrow}
                  </span>
                  <Icon className="h-5 w-5 text-taiyo-900" strokeWidth={1.5} />
                </div>
                <h3 className="mt-12 font-display text-3xl leading-tight text-paper-900 md:text-4xl">
                  {phase.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-paper-600">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
