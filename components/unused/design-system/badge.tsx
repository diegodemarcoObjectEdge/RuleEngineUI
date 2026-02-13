import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../../lib/utils";

const badgeVariants = tv({
  base: "min-w-8 rounded border-1 p-1 text-center text-sm font-bold",
  variants: {
    variant: {
      orange: "border-orange-500 bg-orange-200",
      blue: "border-blue-500 bg-blue-200",
      red: "border-red-500 bg-red-200",
    },
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
};

Badge.displayName = "Badge";

