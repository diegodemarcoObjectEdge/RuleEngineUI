import {
  ImageValidationResult,
  formatDimensions,
} from "../../utils/image-validation";
import { Loader2Icon, CheckCircleIcon, XCircleIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import Image from "next/image";

interface ImageUploadPreviewProps {
  previewUrl: string | null;
  validationResult: ImageValidationResult | null;
  loading: boolean;
  error: string | null;
  requireSquare?: boolean;
  className?: string;
}

export function ImageUploadPreview({
  previewUrl,
  validationResult,
  loading,
  error,
  requireSquare = false,
  className,
}: ImageUploadPreviewProps) {
  if (loading) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 text-sm text-gray-600",
          className,
        )}
      >
        <Loader2Icon className="h-4 w-4 animate-spin" />
        Validating image...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 text-sm text-red-600",
          className,
        )}
      >
        <XCircleIcon className="h-4 w-4" />
        {error}
      </div>
    );
  }

  if (!validationResult || !previewUrl) {
    return null;
  }

  const dimensions = formatDimensions(
    validationResult.width,
    validationResult.height,
  );
  const isValid = requireSquare ? validationResult.isSquare : true;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2">
        <div className="relative h-16 w-16 overflow-hidden rounded-md border border-gray-200">
          <Image
            src={previewUrl}
            alt="Preview"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm">
            {isValid ? (
              <CheckCircleIcon className="h-4 w-4 text-green-600" />
            ) : (
              <XCircleIcon className="h-4 w-4 text-red-600" />
            )}
            <span className={isValid ? "text-green-600" : "text-red-600"}>
              {dimensions}
              {requireSquare && (
                <span>
                  {validationResult.isSquare
                    ? " ✓ Aspect ratio 1:1"
                    : " ✗ Must be square (1:1)"}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
