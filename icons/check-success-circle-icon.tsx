import { IconProps } from "./types/icon-props";

export const CheckSuccessCircleIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  label,
  otherProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={`fill-current ${className}`}
      aria-label={label}
      {...otherProps}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#D1FFD9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8047 7.52876C18.0651 7.78911 18.0651 8.21122 17.8047 8.47157L10.4714 15.8049C10.2111 16.0653 9.78894 16.0653 9.5286 15.8049L6.19526 12.4716C5.93491 12.2112 5.93491 11.7891 6.19526 11.5288C6.45561 11.2684 6.87772 11.2684 7.13807 11.5288L10 14.3907L16.8619 7.52876C17.1223 7.26841 17.5444 7.26841 17.8047 7.52876Z"
        fill="#2EDB4B"
      />
    </svg>
  );
};
