import React from "react";
import { IconProps } from "./types/icon-props";

export const CheckIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  label,
  onClick,
  stroke = "currentColor",
  otherProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    className={className}
    onClick={onClick}
    aria-label={label}
    role={label ? "img" : "presentation"}
    {...otherProps}
  >
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke={stroke}
      strokeWidth="1.6666"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
