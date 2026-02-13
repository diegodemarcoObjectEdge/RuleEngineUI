import { IconProps } from "./types/icon-props";

export const ArrowLeftIcon: React.FC<IconProps> = ({
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
        d="M15.8333 10H4.16666M4.16666 10L9.99999 15.8334M4.16666 10L9.99999 4.16669"
        stroke="#475467"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
