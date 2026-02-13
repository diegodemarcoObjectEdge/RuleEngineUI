export interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  label?: string;
  onClick?: () => void;
  stroke?: string;
  otherProps?: React.SVGAttributes<SVGSVGElement>;
}
