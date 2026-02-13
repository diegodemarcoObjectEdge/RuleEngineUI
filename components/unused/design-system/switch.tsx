"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { tv } from "tailwind-variants";
import { cn } from "../../../lib/utils";

const switchRootVariants = tv({
  base: "flex shrink-0 items-center justify-start overflow-hidden rounded-full p-0.5 disabled:bg-gray-100",
  variants: {
    size: {
      sm: "h-5 w-9",
      md: "h-6 w-11",
    },
  },
  defaultVariants: {
    size: "sm",
    checked: false,
  },
});

const thumbVariants = tv({
  base: "rounded-full bg-white shadow-sm transition-transform",
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const labelVariants = tv({
  base: "flex flex-col items-start justify-start",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "md";
  text?: string;
  description?: string;
};

function Switch({
  className,
  size = "sm",
  text,
  description,
  ...props
}: SwitchProps) {
  return (
    <label className="inline-flex items-start gap-2">
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          switchRootVariants({ size }),
          "data-[state=checked]:bg-brand-600 data-[state=checked]:hover:bg-brand-700 focus-visible:shadow-ring-gray-secondary data-[state=checked]:focus-visible:shadow-ring-brand focus-visible:outline-none disabled:cursor-not-allowed data-[state=unchecked]:bg-gray-200",
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            thumbVariants({ size }),
            "translate-x-0 transition-transform data-[state=checked]:translate-x-full",
          )}
        />
      </SwitchPrimitive.Root>

      {(text || description) && (
        <div className={labelVariants({ size })}>
          {text && <span className="font-medium text-gray-700">{text}</span>}
          {description && (
            <span className="font-normal text-gray-500">{description}</span>
          )}
        </div>
      )}
    </label>
  );
}

export { Switch };

