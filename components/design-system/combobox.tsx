"use client";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { cn } from "../../lib/utils";
import { useState } from "react";

type Option = {
  id: string;
  value: string;
  label: string;
};

interface ComboboxProps {
  placeholderLabel?: string;
  options: Option[];
  selectedValue: string;
  onItemChange?: (value: string) => void;
  onSearch?: (search: string) => void;
  isLoading?: boolean;
  labelWidthLimit?: number;
}

export function Combobox({
  options,
  onItemChange,
  onSearch,
  isLoading = false,
  selectedValue,
  placeholderLabel = "Select...",
  labelWidthLimit = 50,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  // Find the selected option by value
  const selectedOption = options.find((opt) => opt.id === selectedValue);

  const truncateLabel = (label: string) => {
    if (label.length > labelWidthLimit) {
      return label.slice(0, 50) + "...";
    }
    return label;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-h-10 w-full justify-between border-gray-300 text-gray-700"
        >
          <span className="min-w-0 flex-1 truncate text-left">
            {selectedOption ? selectedOption.label : placeholderLabel}
          </span>
          <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command
          filter={() => 1} // Disable frontend filter
        >
          <CommandInput
            placeholder="Search..."
            className="text-gray-700"
            onValueChange={onSearch}
          />
          <CommandList>
            <CommandEmpty>
              {isLoading ? "Loading..." : "No option found."}
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="text-gray-700"
                  key={option.id}
                  value={option.value}
                  onSelect={() => {
                    if (onItemChange) {
                      onItemChange(option.id);
                    }
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValue === option.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {truncateLabel(option.label)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
