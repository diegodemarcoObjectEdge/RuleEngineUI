import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonGroupOption<T extends string = string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface ButtonGroupProps<T extends string = string> {
  value: T;
  onValueChange: (v: T) => void;
  options: ButtonGroupOption<T>[];
  className?: string;
  size?: "sm" | "md";
  ariaLabel?: string;
}

export function ButtonGroup<T extends string = string>({
  value,
  onValueChange,
  options,
  className,
  size = "md",
  ariaLabel,
}: ButtonGroupProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "flex items-stretch rounded-md border border-gray-300 bg-white shadow-xs", // container
        className,
      )}
    >
      {options.map((o, idx) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            role="tab"
            type="button"
            aria-selected={selected}
            disabled={o.disabled}
            onClick={() => !o.disabled && onValueChange(o.value)}
            className={cn(
              "focus-visible:shadow-ring-brand relative inline-flex items-center font-medium transition-colors outline-none select-none disabled:cursor-not-allowed",
              size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-sm",
              idx > 0 && "border-l border-gray-300",
              selected
                ? "bg-gray-50 text-gray-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-700",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

ButtonGroup.displayName = "ButtonGroup";
