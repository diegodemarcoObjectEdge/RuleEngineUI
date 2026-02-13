import { IconProps } from "./types/icon-props";

export const ArrowRightIcon: React.FC<IconProps> = ({
  className,
  width = 20,
  height = 20,
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334"
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
