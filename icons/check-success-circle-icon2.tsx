import { IconProps } from "./types/icon-props";

export const CheckSuccessCircleIcon2: React.FC<IconProps> = ({
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
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10.9187C0 5.39585 4.47715 0.918701 10 0.918701C15.5228 0.918701 20 5.39585 20 10.9187C20 16.4415 15.5228 20.9187 10 20.9187C4.47715 20.9187 0 16.4415 0 10.9187Z"
        fill="#17B26A"
      />
      <path
        d="M6.25 10.9187L8.75 13.4187L13.75 8.4187"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
