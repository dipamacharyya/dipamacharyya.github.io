"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* Soft gradient atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-taiyo-100/70 via-taiyo-50/40 to-transparent blur-3xl" />
        <div className="absolute right-[10%] top-[40%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-accent-100/60 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.22em] text-paper-500"
        >
          TaiyoML — Cross-border go-to-market
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="mt-8 max-w-[22ch] font-display text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.015em] text-paper-900 text-balance"
        >
          Cross-border go-to-market{" "}
          <em className="text-taiyo-900">
            for technology that crosses oceans.
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-600 md:text-xl"
        >
          We source partners and capital, structure joint ventures where the
          deal calls for one, build distribution and channel where it
          doesn&apos;t, and stand up the leadership that runs whatever we set
          up. Multiple motions can run in parallel — a JV standing up in
          Southeast Asia while expansion drives across the Americas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/practice"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-paper-900 px-6 text-[15px] font-medium text-paper-50 transition-all hover:bg-taiyo-900 active:scale-[0.98]"
          >
            How we work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-paper-300 bg-transparent px-6 text-[15px] font-medium text-paper-900 transition-all hover:border-paper-900 hover:bg-paper-100"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
