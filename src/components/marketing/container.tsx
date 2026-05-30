import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const sizes = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10", sizes[size], className)}>
      {children}
    </div>
  );
}

export function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.2em] text-paper-500",
        className
      )}
    >
      {children}
    </p>
  );
}
