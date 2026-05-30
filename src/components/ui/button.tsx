import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taiyo-900 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-paper-900 text-paper-50 hover:bg-taiyo-900 active:scale-[0.98]",
        secondary:
          "border border-paper-300 bg-transparent text-paper-900 hover:border-paper-900 hover:bg-paper-100",
        ghost:
          "bg-transparent text-paper-900 hover:bg-paper-100",
        invert:
          "bg-paper-50 text-paper-900 hover:bg-taiyo-50 active:scale-[0.98]",
        link:
          "h-auto p-0 text-paper-900 underline-offset-4 hover:text-taiyo-900 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-[15px] rounded-full",
        sm: "h-9 px-4 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
