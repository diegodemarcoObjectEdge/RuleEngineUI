import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../lib/utils";

const buttonVariants = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-md border text-sm font-semibold focus-visible:outline-0 disabled:pointer-events-none",
  variants: {
    variant: {
      primary:
        "bg-brand-600 border-brand-600 hover:bg-brand-700 hover:border-brand-700 focus-visible:shadow-ring-brand text-white shadow-xs disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400",
      "primary-destructive":
        "bg-error-600 border-error-600 hover:bg-error-700 hover:border-error-700 focus-visible:shadow-ring-error text-white shadow-xs disabled:border-gray-100 disabled:bg-gray-100 disabled:text-gray-400",
      "secondary-gray":
        "focus-visible:shadow-ring-gray border-gray-300 bg-white text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 disabled:border-gray-200 disabled:bg-white disabled:text-gray-400",
      "secondary-color":
        "border-brand-300 text-brand-700 hover:bg-brand-50 hover:border-brand-300 hover:text-brand-700 focus-visible:shadow-ring-brand bg-white shadow-xs focus-visible:border-gray-200 disabled:border-gray-200 disabled:bg-white disabled:text-gray-400",
      "secondary-destructive":
        "border-error-300 hover:bg-error-50 hover:border-error-300 hover:text-error-800 focus-visible:shadow-ring-error text-error-700 bg-white shadow-xs disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400",
      "tertiary-gray":
        "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-700 disabled:border-gray-200 disabled:text-gray-400",
      "tertiary-color":
        "text-brand-700 hover:bg-brand-50 hover:text-brand-800 border-transparent disabled:border-gray-200 disabled:text-gray-400",
      "tertiary-destructive":
        "hover:bg-error-50 hover:text-error-800 text-error-700 border-transparent disabled:text-gray-400",
      dark: "focus-visible:shadow-ring-brand border-gray-700 bg-gray-950 text-gray-100 shadow-xs hover:border-gray-700 hover:bg-gray-700 disabled:border-gray-600 disabled:bg-gray-700 disabled:text-gray-500",
    },
    size: {
      sm: "gap-1 px-3 py-2 text-sm",
      md: "gap-1 px-3.5 py-2.5 text-sm",
      lg: "gap-1.5 px-4 py-2.5 text-base",
      xl: "gap-1.5 px-[1.125rem] py-3 text-base",
      "2xl": "gap-2.5 px-[1.375rem] py-4 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, iconLeft, iconRight, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {iconLeft && <span className="flex items-center">{iconLeft}</span>}
        {children}
        {iconRight && <span className="flex items-center">{iconRight}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";
