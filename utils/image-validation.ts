export interface ImageValidationResult {
  isValid: boolean;
  width: number;
  height: number;
  aspectRatio: number;
  isSquare: boolean;
}

/**
 * Validates if an image has a 1:1 aspect ratio (square)
 * @param file - The image file to validate
 * @returns Promise with validation result including dimensions and aspect ratio
 */
export async function validateImageAspectRatio(
  file: File,
): Promise<ImageValidationResult> {
  return new Promise((resolve, reject) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      reject(new Error("File is not an image"));
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const aspectRatio = width / height;
        const isSquare = width === height;

        resolve({
          isValid: isSquare,
          width,
          height,
          aspectRatio,
          isSquare,
        });
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
      };

      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Formats dimensions for display
 * @param width - Image width
 * @param height - Image height
 * @returns Formatted string like "400x400"
 */
export function formatDimensions(width: number, height: number): string {
  return `${width}x${height}`;
}
