"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  intent: z.enum(
    [
      "us-tech-asia-entry",
      "asia-operator-sourcing",
      "adjacent-or-other",
    ],
    { message: "Please select what brings you here." }
  ),
  message: z
    .string()
    .min(20, "A few more words help us route this properly (20+ characters).")
    .max(2000, "Please keep it under 2000 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const INTENT_OPTIONS = [
  {
    value: "us-tech-asia-entry",
    label: "I'm a technology company exploring new markets",
  },
  {
    value: "asia-operator-sourcing",
    label: "I'm an investor or operator sourcing technology",
  },
  {
    value: "adjacent-or-other",
    label: "Adjacent sector or something else",
  },
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { intent: undefined },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Submission failed.");
      }
      setSubmitState("success");
      reset();
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <CheckCircle2 className="h-10 w-10 text-accent-800" strokeWidth={1.5} />
        <h3 className="font-display text-3xl text-paper-900">
          Thanks — we got it.
        </h3>
        <p className="max-w-md text-paper-600">
          We&apos;ll reply directly within two business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-4 text-sm text-paper-500 underline-offset-4 hover:text-paper-900 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputClasses(!!errors.name)}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClasses(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Company" error={errors.company?.message}>
        <input
          type="text"
          autoComplete="organization"
          {...register("company")}
          className={inputClasses(!!errors.company)}
        />
      </Field>

      <Field label="What brings you here" error={errors.intent?.message} required>
        <select
          {...register("intent")}
          defaultValue=""
          className={cn(
            inputClasses(!!errors.intent),
            "appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10"
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M3 5.5L7 9.5L11 5.5' stroke='%237a7363' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Select one
          </option>
          {INTENT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message} required>
        <textarea
          rows={6}
          {...register("message")}
          className={cn(
            inputClasses(!!errors.message),
            "min-h-[150px] resize-y py-3"
          )}
          placeholder="Tell us about the technology, the market, the partnership, or the question you want to bring to us."
        />
      </Field>

      {submitState === "error" && (
        <p className="text-sm text-red-700">
          {errorMessage ?? "Something went wrong. Please try again."}
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-paper-900 px-8 text-[15px] font-medium text-paper-50 transition-all hover:bg-taiyo-900 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-paper-900">
        {label}
        {required && <span className="ml-1 text-paper-400">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </label>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "block w-full rounded-lg border bg-white px-4 text-[15px] text-paper-900 placeholder:text-paper-400 transition-colors h-11 focus:outline-none focus:ring-2 focus:ring-taiyo-900/20",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-paper-200 focus:border-taiyo-900"
  );
}
