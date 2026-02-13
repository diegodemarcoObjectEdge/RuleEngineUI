"use client";

import { Button } from "../../design-system/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../design-system/dialog";
import { ExclamationGrayedOutCircleIcon } from "../../../icons/exclamation-greyed-out-circle-icon";

export interface RuleImportResult {
  errorItems: number;
  newItems: number;
  changedItems: number;
  unchangedItems: number;
  reportUrl?: string;
}

interface ImportedRuleEngineDialogProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  importedRuleData: RuleImportResult | undefined;
}

export const ImportedRuleEngineDialog = ({
  isOpen,
  setOpen,
  importedRuleData,
}: ImportedRuleEngineDialogProps) => {
  const renderLine = (text: string, type: "OK" | "Warning") => {
    return type === "OK" ? (
      <span className="rounded-sm border border-solid border-[#F9FAFB] bg-[#F9FAFB] px-1.5 py-0.5 text-xs text-[#344054]">
        {text}
      </span>
    ) : (
      <span className="rounded-sm border border-solid border-[#FEDF89] bg-[#FFFAEB] px-1.5 py-0.5 text-xs text-[#B54708]">
        {text}
      </span>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="w-[420px]">
        <ExclamationGrayedOutCircleIcon />
        <DialogHeader>
          <DialogTitle>Validated for Import</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          We have finalized processing file. See more information on summary
          below.
        </DialogDescription>

        <p className="font-medium">Summary</p>

        <ul>
          <li className="my-3">
            {renderLine(
              `${importedRuleData?.errorItems ?? 0} Errors (will not be imported)`,
              "Warning",
            )}
          </li>
          <li className="my-3">
            {renderLine(`${importedRuleData?.newItems ?? 0} New items`, "OK")}
          </li>
          <li className="my-3">
            {renderLine(
              `${importedRuleData?.changedItems ?? 0} Modified items`,
              "OK",
            )}
          </li>
          <li className="my-3">
            {renderLine(
              `${importedRuleData?.unchangedItems ?? 0} Unchanged Items`,
              "OK",
            )}
          </li>
        </ul>

        <DialogFooter className="w-full">
          <Button
            onClick={() => setOpen(false)}
            type="button"
            variant="primary"
            className="mt-4 w-full cursor-pointer"
            data-slot="dialog-close"
          >
            Dismiss
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
