"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/practice", label: "Practice" },
  { href: "/sectors", label: "Sectors" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-paper-200/70 bg-paper-50/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-2xl leading-none tracking-tight text-paper-900 transition-colors hover:text-taiyo-900"
          aria-label="TaiyoML — home"
        >
          Taiyo<span className="text-taiyo-900">ML</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-paper-700 transition-colors hover:bg-paper-100 hover:text-paper-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden h-9 items-center rounded-full bg-paper-900 px-4 text-sm font-medium text-paper-50 transition-all hover:bg-taiyo-900 md:inline-flex"
        >
          Start a conversation
        </Link>
      </div>
    </header>
  );
}
