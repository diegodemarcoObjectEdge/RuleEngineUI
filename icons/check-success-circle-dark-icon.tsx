import { IconProps } from "./types/icon-props";

export const CheckSuccessCircleDarkIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75016 13.9999L12.2502 17.4999L19.2502 10.4999M25.6668 13.9999C25.6668 20.4432 20.4435 25.6666 14.0002 25.6666C7.55684 25.6666 2.3335 20.4432 2.3335 13.9999C2.3335 7.5566 7.55684 2.33325 14.0002 2.33325C20.4435 2.33325 25.6668 7.5566 25.6668 13.9999Z"
        stroke="#CECFD2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
