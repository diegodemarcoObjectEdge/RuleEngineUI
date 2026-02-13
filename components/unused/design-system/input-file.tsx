"use client";

import { cn } from "../../lib/utils";
import { DownloadCloudIcon } from "lucide-react";
import React, { useCallback, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputFileVariants = tv({
  base: "hover:border-brand-700 relative rounded-md border-2 border-gray-200 transition-colors",
  variants: {
    variant: {
      default: "",
      "text-only": "",
    },
    disabled: {
      true: "cursor-not-allowed hover:border-gray-200",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    disabled: false,
  },
});

export interface InputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputFileVariants> {
  icon?: React.ReactNode;
  label?: string | false;
  className?: string;
  description?: string;
}

export const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      icon,
      className,
      label,
      description,
      variant,
      disabled,
      onChange,
      id,
      ...props
    },
    ref,
  ) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (disabled) return;

        setIsDragging(false);

        const files = event.dataTransfer.files;
        if (files?.length && onChange) {
          const syntheticEvent = {
            ...event,
            target: { files },
          } as unknown as React.ChangeEvent<HTMLInputElement>;

          onChange(syntheticEvent);
        }
      },
      [onChange, disabled],
    );

    return (
      <div
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => {
          if (!disabled) setIsDragging(false);
        }}
        onDrop={handleDrop}
        className={cn(
          inputFileVariants({ variant, disabled: !!disabled }),
          isDragging && !disabled && "border-brand-700 bg-brand-50",
          className,
        )}
      >
        <label
          htmlFor={id || "fileInput"}
          className={cn(
            "flex h-full w-full flex-col items-center gap-3 px-6 py-4 text-sm font-medium text-gray-700",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
          )}
        >
          {variant !== "text-only" && (
            <span className="rounded-md border border-gray-200 p-2">
              {icon ?? <DownloadCloudIcon size={20} />}
            </span>
          )}
          <div>
            {label ?? (
              <h1 className="font-normal">
                <span
                  className={cn(
                    "font-semibold",
                    disabled ? "text-gray-400" : "text-brand-700",
                  )}
                >
                  Click to upload
                </span>{" "}
                or drag and drop
              </h1>
            )}
            <span className="text-tertiary text-xs font-normal">
              {description ?? "Supports: CSV"}
            </span>
          </div>
        </label>
        <input
          id={id || "fileInput"}
          ref={ref}
          type="file"
          disabled={disabled}
          className="hidden"
          onChange={onChange}
          {...props}
        />
      </div>
    );
  },
);

InputFile.displayName = "InputFile";
