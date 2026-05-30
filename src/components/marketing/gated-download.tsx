"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, FileText, Loader2, Lock } from "lucide-react";

import type { DownloadableAsset } from "@/content/downloadable-assets";
import { cn } from "@/lib/utils";

const requestSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(1, "Please share your company."),
});

type RequestValues = z.infer<typeof requestSchema>;

export function GatedDownload({ asset }: { asset: DownloadableAsset }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestValues>({
    resolver: zodResolver(requestSchema),
  });

  async function onSubmit(values: RequestValues) {
    setState("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/download-request", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, assetId: asset.id }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Request failed.");
      }
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <aside className="overflow-hidden rounded-2xl border border-paper-200 bg-paper-900 text-paper-50">
      <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12 md:p-10">
        <div className="flex gap-6">
          <div className="hidden h-16 w-12 flex-shrink-0 items-center justify-center rounded-md border border-paper-700 bg-paper-800 md:flex">
            <FileText className="h-6 w-6 text-paper-400" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-400">
              <Lock
                className="mr-1.5 inline-block h-3 w-3 -translate-y-px"
                strokeWidth={2}
              />
              Gated
            </p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-paper-50 md:text-[1.75rem]">
              {asset.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-paper-300">
              {asset.blurb}
            </p>
            {asset.pages && (
              <p className="mt-3 font-mono text-xs text-paper-500">
                PDF · {asset.pages} pages
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-paper-800 bg-paper-950/40 p-8 md:p-10">
        {!asset.ready ? (
          <div className="flex items-start gap-4">
            <Lock
              className="mt-1 h-5 w-5 flex-shrink-0 text-paper-500"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium text-paper-100">Coming soon.</p>
              <p className="mt-2 text-sm leading-relaxed text-paper-400">
                Not yet released. To request advance access, reach us through
                the{" "}
                <Link
                  href="/contact"
                  className="text-paper-100 underline-offset-4 hover:underline"
                >
                  contact form
                </Link>
                .
              </p>
            </div>
          </div>
        ) : state === "success" ? (
          <div className="flex items-start gap-4">
            <CheckCircle2
              className="mt-1 h-5 w-5 flex-shrink-0 text-accent-400"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-medium text-paper-100">
                Request received — check your inbox.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper-400">
                We sent a download link to your email. The link expires in
                seven days.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <p className="text-sm text-paper-300">
              Tell us who you are and we&apos;ll email you the link.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <DarkInput
                placeholder="Name"
                autoComplete="name"
                {...register("name")}
                error={!!errors.name}
              />
              <DarkInput
                placeholder="Email"
                autoComplete="email"
                type="email"
                {...register("email")}
                error={!!errors.email}
              />
              <DarkInput
                placeholder="Company"
                autoComplete="organization"
                {...register("company")}
                error={!!errors.company}
              />
            </div>
            {(errors.name || errors.email || errors.company) && (
              <p className="text-xs text-red-300">
                {errors.name?.message ??
                  errors.email?.message ??
                  errors.company?.message}
              </p>
            )}
            {state === "error" && (
              <p className="text-xs text-red-300">
                {errorMessage ??
                  "Something went wrong. Please try again or reach us through the contact form."}
              </p>
            )}
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-paper-50 px-6 text-sm font-medium text-paper-900 transition-all hover:bg-taiyo-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending link…
                </>
              ) : (
                "Email me the link"
              )}
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}

import { forwardRef, type InputHTMLAttributes } from "react";

const DarkInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full rounded-lg border bg-paper-900 px-4 text-sm text-paper-50 placeholder:text-paper-500 transition-colors focus:outline-none focus:ring-2 focus:ring-paper-50/30",
      error ? "border-red-400" : "border-paper-700 focus:border-paper-400",
      className
    )}
    {...props}
  />
));
DarkInput.displayName = "DarkInput";
