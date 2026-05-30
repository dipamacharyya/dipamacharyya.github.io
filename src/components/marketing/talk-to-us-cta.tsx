import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { LINKEDIN_URL } from "@/lib/links";

export function TalkToUsCTA() {
  return (
    <section className="py-24 md:py-32">
      <Container size="narrow">
        <div className="text-center">
          <SectionEyebrow>Start a conversation</SectionEyebrow>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-paper-900 text-balance md:text-7xl">
            Bring us the deal.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-paper-600 text-pretty">
            Technology looking for a market and a partner network. Capital
            looking for technology to back and a route to scale. Operators
            looking for both. We&apos;d like to hear from you.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
  );
}
