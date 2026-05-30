import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { VIGNETTES } from "@/content/vignettes";

export function VignettesPreview() {
  const preview = VIGNETTES.slice(0, 3);

  return (
    <section className="border-t border-paper-200 py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Recent work</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-paper-900 text-balance md:text-5xl">
              The shape
              <br />
              <em className="text-taiyo-900">of the work.</em>
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-paper-900 transition-colors hover:text-taiyo-900"
          >
            All engagements
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 md:mt-20 md:grid-cols-3">
          {preview.map((v) => (
            <Link
              key={v.slug}
              href="/work"
              className="group flex flex-col bg-paper-50 p-8 transition-colors hover:bg-paper-100/70 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                  {v.status === "active" ? "Active" : "Completed"}
                </span>
                <ArrowUpRight className="h-5 w-5 text-paper-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-taiyo-900" />
              </div>
              <h3 className="mt-12 font-display text-[1.65rem] leading-tight text-paper-900 md:text-[1.85rem]">
                {v.shortTitle}
              </h3>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-taiyo-900">
                {v.regions.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
