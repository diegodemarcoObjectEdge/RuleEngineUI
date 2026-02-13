import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../lib/utils";
import { AlertCircle } from "lucide-react";

const inputVariants = tv({
  base: "flex items-center rounded-md border shadow-xs disabled:cursor-not-allowed",
  variants: {
    variant: {
      default:
        "focus-within:shadow-ring-brand border-gray-300 bg-white text-gray-900",
      dark: "focus-within:shadow-ring-brand border-gray-700 bg-gray-950 text-gray-100",
    },
    destructive: {
      true: "border-error-300 focus-within:shadow-ring-error",
    },
    inputSize: {
      sm: "gap-2 px-3 py-2 text-sm",
      md: "gap-2 px-3.5 py-2.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "md",
    destructive: false,
  },
});

const labelVariants = tv({
  base: "mb-1 inline-block text-sm font-medium text-gray-700",
  variants: {
    variant: {
      default: "text-gray-700",
      dark: "text-zinc-300",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  iconLeft?: React.ReactNode;
  label?: string | false;
  hintText?: string;
  destructive?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      destructive,
      inputSize,
      iconLeft,
      label,
      hintText,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("space-y-1", className)}>
        {label && (
          <label htmlFor={props.id} className={cn(labelVariants({ variant }))}>
            {label}
          </label>
        )}
        <div
          className={cn(
            inputVariants({
              variant,
              destructive,
              inputSize,
            }),
          )}
        >
          {iconLeft && <span className="text-gray-500">{iconLeft}</span>}
          <input
            ref={ref}
            className={cn(
              "w-full border-none bg-transparent placeholder:text-gray-500 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500",
              inputSize === "sm" ? "text-base" : "text-base",
            )}
            {...props}
          />
          {destructive && (
            <span className="text-error-500">
              <AlertCircle size={16} />
            </span>
          )}
        </div>
        {hintText && (
          <p
            className={cn(
              "text-xs",
              destructive ? "text-error-600" : "text-gray-500",
            )}
          >
            {hintText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
