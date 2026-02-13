"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { cn } from "../../lib/utils";
import React, { useState } from "react";
import { CheckIcon } from "../../icons";

type Option = {
  value: string;
  label: string;
};

interface MultiSelectProps {
  options: Option[];
  value?: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  onOpenChange?: (open: boolean) => void;
  destructive?: boolean;
  hintText?: string;
  className?: string;
}

export function MultiSelect({
  options,
  value = [],
  placeholder = "Select",
  destructive = false,
  hintText,
  className,
  onChange,
  onOpenChange,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  const toggleOption = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <div className={cn("w-full", className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger
          className={cn(
            "focus-visible:shadow-ring-brand flex w-full max-w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-xs transition-all outline-none",
            destructive
              ? "border-error-300 focus-visible:shadow-ring-error"
              : "border-gray-300",
          )}
        >
          <span className="block w-0 min-w-0 flex-1 truncate">
            {value.length
              ? options
                  .filter((opt) => value.includes(opt.value))
                  .map((opt) => opt.label)
                  .join(", ")
              : placeholder}
          </span>
          <ChevronDownIcon
            className={cn("size-4 transition-transform duration-200", {
              "rotate-180": open,
            })}
          />
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 z-50 mt-2 max-h-72 min-w-[var(--radix-popover-trigger-width)] overflow-auto rounded-md border bg-white p-2 shadow-lg"
        >
          {options.map((option) => {
            const isChecked = value.includes(option.value);
            return (
              <label
                key={option.value}
                className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm font-medium text-gray-700 select-none"
              >
                <div className="relative h-4 w-4 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleOption(option.value)}
                    className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
                  />
                  <div className="peer-checked:border-brand-600 peer-checked:bg-brand-600 peer-focus-visible:shadow-ring-brand flex h-full w-full items-center justify-center rounded border border-gray-300 transition-shadow">
                    <CheckIcon
                      className={cn(
                        "size-3 text-white",
                        isChecked ? "block" : "hidden",
                      )}
                    />
                  </div>
                </div>

                <span className="truncate">{option.label}</span>
              </label>
            );
          })}
        </PopoverContent>
      </Popover>
      {hintText && (
        <p
          className={cn(
            "mt-1 text-xs",
            destructive ? "text-error-600" : "text-gray-500",
          )}
        >
          {hintText}
        </p>
      )}
    </div>
  );
}

MultiSelect.displayName = "MultiSelect";
