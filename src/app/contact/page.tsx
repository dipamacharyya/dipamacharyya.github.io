import type { Metadata } from "next";
import { Linkedin, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";

import { Container, SectionEyebrow } from "@/components/marketing/container";
import { ContactForm } from "@/components/marketing/contact-form";
import { LINKEDIN_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TaiyoML. We work with technology companies exploring new markets, and with investors and operators sourcing technology — across India, Southeast Asia, and the Americas.",
};

const FIT_PROFILES = [
  {
    title: "Technology companies exploring new markets",
    body: "Clean energy, materials, defense-adjacent hardware, manufacturing IP, industrial and automation. We source the right partner network — Asian investor or operating partner, Americas distribution, or both — and structure the relationship.",
  },
  {
    title: "Investors and operators sourcing technology",
    body: "Indian conglomerates, SEA industrial groups, family offices, MEA partners, or operating houses with mandate and capacity to back technology entering the region.",
  },
  {
    title: "Adjacent sectors or specific situations",
    body: "If your sector isn't a clean fit but the cross-border thesis is strong — manufacturing technology, dual-use hardware, deep-tech in adjacent verticals — bring it anyway.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <Container>
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight text-paper-900 text-balance md:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl">
            Tell us what you&apos;re working on. We read everything that comes
            through.
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-[3fr_2fr] md:gap-20">
            {/* Form */}
            <div className="rounded-2xl border border-paper-200 bg-white p-8 md:p-10">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <div>
                <SectionEyebrow>Direct</SectionEyebrow>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-4 inline-flex items-center gap-3 font-display text-2xl text-paper-900 transition-colors hover:text-taiyo-900 md:text-3xl"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                  LinkedIn
                  <ArrowUpRight className="h-5 w-5 text-paper-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-taiyo-900" />
                </a>
              </div>

              <div>
                <SectionEyebrow>Where we work</SectionEyebrow>
                <div className="mt-4 space-y-3 text-paper-700">
                  <p className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-paper-500" strokeWidth={1.5} />
                    Americas · India · Southeast Asia · MEA
                  </p>
                </div>
              </div>

              <div>
                <SectionEyebrow>What&apos;s a good fit</SectionEyebrow>
                <ul className="mt-6 space-y-6">
                  {FIT_PROFILES.map((p) => (
                    <li key={p.title}>
                      <p className="flex items-start gap-3 text-[15px] font-medium text-paper-900">
                        <ArrowRight
                          className="mt-1 h-4 w-4 flex-shrink-0 text-taiyo-900"
                          strokeWidth={2}
                        />
                        {p.title}
                      </p>
                      <p className="mt-2 pl-7 text-[14px] leading-relaxed text-paper-600">
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
