import React from "react";
import { IconProps } from "./types/icon-props";

export const AwardIcon: React.FC<IconProps> = ({
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
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    onClick={onClick}
    aria-label={label}
    role={label ? "img" : "presentation"}
    {...otherProps}
  >
    <path
      d="M12 12.5C15.0376 12.5 17.5 10.0376 17.5 7C17.5 3.96243 15.0376 1.5 12 1.5C8.96243 1.5 6.5 3.96243 6.5 7C6.5 10.0376 8.96243 12.5 12 12.5Z"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11L7 22L12 19.5L17 22L15.5 11"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
