import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className = "",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <button
        type="button"
        className="flex cursor-pointer items-center justify-between text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="text-xs font-normal text-gray-700">{title}</span>
        {isOpen ? (
          <ChevronDownIcon size={15} aria-hidden="true" />
        ) : (
          <ChevronRightIcon size={15} aria-hidden="true" />
        )}
      </button>

      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

