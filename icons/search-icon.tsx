import React from "react";
import { IconProps } from "./types/icon-props";

export const SearchIcon: React.FC<IconProps> = ({
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
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    onClick={onClick}
    aria-label={label}
    role={label ? "img" : "presentation"}
    {...otherProps}
  >
    <path
      d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
      stroke={stroke}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
