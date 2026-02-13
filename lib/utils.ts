import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PAGE_SIZES = [10, 20, 30, 40, 50];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });

// Helper to convert "hh:mm" to ISO 8601 with today's date
export const toIsoTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const now = new Date();
  now.setHours(hours, minutes, 0, 0);
  return now.toISOString();
};

/**
 * Extracts "hh:mm" from an ISO 8601 datetime string.
 * @param isoString ISO 8601 datetime string (e.g., "2025-06-05T20:32:15.711Z")
 * @returns Time in "hh:mm" format
 */
export const fromIsoTime = (isoString: string): string => {
  const date = new Date(isoString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const formatTwoDigitsTimeString = (time: string) => {
  return (
    new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }) || "--:--"
  );
};

export const formatReentryWindowType = (
  value: string | null | undefined,
): string => {
  if (!value) return "—";
  switch (value) {
    case "SAME_DAY":
      return "Same Day";
    case "TIME_WINDOW":
      return "Time Window";
    default:
      return value;
  }
};

export const sanitizeName = (name: string) => {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export const generateFileName = (
  folder: string | null | undefined,
  name: string,
  originalFileName: string,
) => {
  const timestamp = Date.now();
  const sanitizedName = sanitizeName(name);

  const lastDotIndex = originalFileName.lastIndexOf(".");
  const extension =
    lastDotIndex !== -1 ? originalFileName.substring(lastDotIndex) : "";

  return `${folder ? folder + "/" : ""}${sanitizedName}-${timestamp}${extension}`;
};
