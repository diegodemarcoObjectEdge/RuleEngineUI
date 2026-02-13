import { ArrowDownIcon } from "lucide-react";
import { useState } from "react";

interface SortButtonProps {
  label: string;
  onSortChange?: (desc: boolean) => void;
}

export function SortButton({ label, onSortChange }: SortButtonProps) {
  const [desc, setDesc] = useState(true);

  return (
    <button
      className="flex w-fit cursor-pointer items-center gap-1 text-xs font-normal text-gray-600 hover:text-gray-500"
      onClick={() => {
        const nextDesc = !desc;
        setDesc(nextDesc);
        onSortChange?.(nextDesc);
      }}
    >
      {label}
      {desc ? (
        <ArrowDownIcon size={15} />
      ) : (
        <ArrowDownIcon size={15} className="rotate-180" />
      )}
    </button>
  );
}

