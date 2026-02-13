import { cn } from "../../lib/utils";

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={cn("h-px w-full bg-gray-200", className)} />;
};

