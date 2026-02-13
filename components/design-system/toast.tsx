import { toast as sonner } from "sonner";
import { AlertCircle, XCircle, Check, X } from "lucide-react";
import { tv } from "tailwind-variants";
import { cn } from "../../lib/utils";
import { Button } from "./button";

type ToastType = "success" | "warning" | "error" | "gray" | "green" | "brand";

type CustomToastProps = {
  description?: string;
  icon?: React.ReactNode;
  theme?: "default" | "brand";
  size?: "full-width" | "minus-sidebar";
  action?: {
    label: string;
    onClick: () => void;
  };
};

const iconMap = {
  success: Check,
  warning: AlertCircle,
  error: XCircle,
  gray: Check,
  green: Check,
  brand: Check,
};

const iconBox = tv({
  base: "relative flex h-12 w-12 items-center justify-center rounded-lg text-white",
  variants: {
    type: {
      success: "bg-brand-600",
      error: "bg-error-600",
      warning: "bg-warning-600",
      gray: "bg-gray-600",
      green: "bg-success-600",
      brand: "bg-brand-600",
    },
  },
  defaultVariants: {
    type: "success",
  },
});

const toastVariants = tv({
  base: "flex w-full items-start gap-4 rounded-xl border p-3 shadow-lg",
  variants: {
    theme: {
      default: "bg-gray-25 border-gray-300 text-gray-700",
      brand: "bg-brand-700 border-brand-600 text-white",
    },
    size: {
      "full-width": "w-toaster-full-width",
      "minus-sidebar": "w-toaster-minus-sidebar",
    },
  },
  defaultVariants: {
    theme: "default",
    size: "minus-sidebar",
  },
});

const descriptionVariants = tv({
  base: "text-base font-normal",
  variants: {
    theme: {
      default: "text-gray-600",
      brand: "text-brand-200",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

const closeButtonVariants = tv({
  base: "flex h-10 w-10 cursor-pointer items-center justify-center rounded-md p-2 text-gray-400",
  variants: {
    theme: {
      default: "hover:text-gray-800",
      brand: "hover:text-white",
    },
  },
  defaultVariants: {
    theme: "default",
  },
});

function renderToastContent(
  id: number | string,
  title: string,
  {
    type = "gray",
    theme = "default",
    size = "minus-sidebar",
    description,
    icon,
    action,
  }: CustomToastProps & { type: ToastType },
) {
  const FallbackIcon = iconMap[type];

  return (
    <div className={cn(toastVariants({ theme, size }))}>
      <div className="flex flex-1 items-center justify-start gap-4">
        <div className={iconBox({ type })}>
          <div className="flex h-6 w-6 items-center justify-center overflow-hidden">
            {icon ?? <FallbackIcon className="h-5 w-5" />}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start gap-0.5">
          <div className="text-base leading-normal font-semibold">{title}</div>
          {description && (
            <div className={descriptionVariants({ theme })}>{description}</div>
          )}
        </div>
      </div>
      <div className="flex items-start gap-2 self-center">
        {action?.label && (
          <Button
            variant={theme === "default" ? "secondary-gray" : "secondary-color"}
            onClick={() => {
              sonner.dismiss(id);
              action.onClick?.();
            }}
          >
            {action.label}
          </Button>
        )}
        <button
          onClick={() => sonner.dismiss(id)}
          className={closeButtonVariants({ theme })}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function showCustomToast(
  type: ToastType,
  title: string,
  options?: CustomToastProps,
) {
  return sonner.custom((id) =>
    renderToastContent(id, title, { ...options, type }),
  );
}

export const toast = {
  success: (title: string, options?: CustomToastProps) =>
    showCustomToast("success", title, options),
  error: (title: string, options?: CustomToastProps) =>
    showCustomToast("error", title, options),
  warning: (title: string, options?: CustomToastProps) =>
    showCustomToast("warning", title, options),
  gray: (title: string, options?: CustomToastProps) =>
    showCustomToast("gray", title, options),
  green: (title: string, options?: CustomToastProps) =>
    showCustomToast("green", title, options),
  custom: (title: string, options?: CustomToastProps) =>
    showCustomToast("brand", title, options),
  dismiss: sonner.dismiss,
  promise: sonner.promise,
};
