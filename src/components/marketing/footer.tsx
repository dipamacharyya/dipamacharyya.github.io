import Link from "next/link";
import { Linkedin } from "lucide-react";

import { LINKEDIN_URL } from "@/lib/links";

const FOOTER_NAV = [
  {
    heading: "Firm",
    links: [
      { href: "/practice", label: "Practice" },
      { href: "/sectors", label: "Sectors" },
      { href: "/work", label: "Work" },
    ],
  },
  {
    heading: "More",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/notes", label: "Notes" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-paper-200 bg-paper-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-3xl leading-none tracking-tight text-paper-900"
            >
              Taiyo<span className="text-taiyo-900">ML</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-paper-600">
              Cross-border go-to-market. We source partners and capital,
              structure the joint venture where the deal calls for one, build
              distribution where it doesn&apos;t, and stand up the team that
              runs whatever we set up.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm text-paper-700 underline-offset-4 transition-colors hover:text-taiyo-900 hover:underline"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              Connect on LinkedIn
            </a>
          </div>

          {FOOTER_NAV.map((section) => (
            <div key={section.heading}>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-500">
                {section.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper-700 transition-colors hover:text-taiyo-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper-200 pt-8 text-xs text-paper-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} TaiyoML. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Americas · India · Southeast Asia · MEA
          </p>
        </div>
      </div>
    </footer>
  );
}
