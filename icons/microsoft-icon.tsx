import { IconProps } from "./types/icon-props";

export const MicrosoftIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_548_163)">
        <rect x={13.5} y={13.9594} width={11} height={11} fill="#FEBA08" />
        <rect x={0.5} y={13.9594} width={11} height={11} fill="#05A6F0" />
        <rect x={13.5} y={0.959366} width={11} height={11} fill="#80BC06" />
        <rect x={0.5} y={0.959366} width={11} height={11} fill="#F25325" />
      </g>
      <defs>
        <clipPath id="clip0_548_163">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.5 0.959366)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
