"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface DropdownMenuItem {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

interface DropdownMenuProps {
  title: React.ReactNode;
  items: DropdownMenuItem[];
  className?: string;
}

export const DropdownMenu = ({
  title,
  items,
  className,
}: DropdownMenuProps) => {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        className="outline-none"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {title}
      </button>

      {open ? (
        <div className="bg-popover text-popover-foreground absolute right-0 z-50 mt-1 min-w-[8rem] rounded-md border p-1 shadow-md">
          {items.map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              type="button"
              disabled={item.disabled}
              onClick={(event) => {
                event.stopPropagation();
                setOpen(false);
                item.onClick();
              }}
              className={cn(
                "relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none select-none hover:bg-gray-100",
                "disabled:pointer-events-none disabled:opacity-50",
                item.variant === "destructive" && "text-destructive",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

