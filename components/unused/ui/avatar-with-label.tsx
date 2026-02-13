import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL || "";

interface AvatarWithLabelProps {
  name: string;
  fallback: string;
  imageUrl?: string;
}

export const AvatarWithLabel: React.FC<AvatarWithLabelProps> = ({
  name,
  fallback,
  imageUrl = "",
}) => {
  const url =
    imageUrl && imageUrl.trim() ? `${ASSETS_URL}${imageUrl}` : undefined;
  return (
    <div className="flex items-center gap-3 xl:min-w-52">
      <Avatar>
        {url && (
          <AvatarImage
            src={url}
            alt={name}
            loading="lazy"
            className="object-contain"
          />
        )}
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <span
        className="w-[20ch] truncate font-medium text-gray-900 transition-all duration-200 2xl:w-[40ch]"
        title={name?.length > 20 ? name : undefined}
      >
        {name}
      </span>
    </div>
  );
};

