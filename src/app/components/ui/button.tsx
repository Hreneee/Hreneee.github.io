import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  [
    "group inline-flex items-center justify-center whitespace-nowrap",
    "font-['Inter'] font-medium tracking-[-0.01em]",
    "transition-all duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "outline-none focus-visible:ring-2 focus-visible:ring-[#6B5CFF]/20",
    "select-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-[#6B5CFF] text-white shadow-[0_10px_26px_rgba(107,92,255,0.22)] hover:bg-[#5c4df4] hover:shadow-[0_14px_32px_rgba(107,92,255,0.26)]",
        secondary:
          "rounded-full border border-slate-200 bg-white/92 text-slate-700 shadow-[0_8px_22px_rgba(15,23,42,0.06)] hover:border-slate-300 hover:bg-white hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]",
        ghost:
          "rounded-full bg-transparent text-slate-700 hover:bg-slate-100/80",
        link: "rounded-none bg-transparent p-0 text-[#6B5CFF] hover:text-[#5848f5]",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        default: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-[1.05rem]",
        icon: "size-12 rounded-full",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      iconPosition: "right",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  iconPosition,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, iconPosition }), "gap-3", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };