import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/marketing/container";
import { SECTORS } from "@/content/sectors";

export function SectorsPreview() {
  return (
    <section className="border-y border-paper-200 bg-paper-950 py-24 text-paper-50 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-400">
              Where we focus
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-50 text-balance md:text-5xl">
              Four sectors where technology
              <em className="text-taiyo-300"> meets cross-border demand.</em>
            </h2>
          </div>
          <Link
            href="/sectors"
            className="group inline-flex items-center gap-2 text-sm font-medium text-paper-100 transition-colors hover:text-taiyo-300"
          >
            All sectors
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper-800 bg-paper-800 md:mt-20 md:grid-cols-2">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              href={`/sectors/${s.slug}`}
              className="group flex flex-col gap-3 bg-paper-900 p-8 transition-colors hover:bg-paper-800/70 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight text-paper-50 md:text-3xl">
                  {s.name}
                </h3>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-paper-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-taiyo-300" />
              </div>
              <p className="text-[15px] leading-relaxed text-paper-300">
                {s.summary}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                {s.regions}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
