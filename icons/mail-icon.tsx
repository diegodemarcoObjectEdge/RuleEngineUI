import { IconProps } from "./types/icon-props";

export const MailIcon: React.FC<IconProps> = ({
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
        stroke="#CECFD2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m2.333 8.167 9.526 6.668c.771.54 1.157.81 1.577.914.37.093.758.093 1.128 0 .42-.104.806-.374 1.577-.914l9.526-6.668M7.933 23.333h12.134c1.96 0 2.94 0 3.689-.381a3.5 3.5 0 0 0 1.53-1.53c.38-.748.38-1.728.38-3.689v-7.466c0-1.96 0-2.94-.38-3.69a3.5 3.5 0 0 0-1.53-1.529c-.749-.381-1.73-.381-3.69-.381H7.934c-1.96 0-2.94 0-3.689.381a3.5 3.5 0 0 0-1.53 1.53c-.38.748-.38 1.729-.38 3.689v7.466c0 1.96 0 2.94.38 3.69a3.5 3.5 0 0 0 1.53 1.529c.75.381 1.73.381 3.69.381"
      ></path>
    </svg>
  );
};
