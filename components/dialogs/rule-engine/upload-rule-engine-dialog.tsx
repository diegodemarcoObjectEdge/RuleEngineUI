"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../design-system/dialog";
import { Button } from "../../design-system/button";
import { Select } from "../../design-system/select";
import { InputFile } from "../../design-system/input-file";
import { CsvFileCard } from "../../ui/csv-file-card";

export type RuleEngineType = "membership" | "lounge-entry";

export interface Option {
  value: string;
  label: string;
}

interface UploadRuleEngineDialogProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  companyOptions: Option[];
  onUpload?: (args: {
    companyId: string;
    ruleType: RuleEngineType;
    file: File;
  }) => Promise<void> | void;
  accept?: string;
}

export const UploadRuleEngineDialog: React.FC<UploadRuleEngineDialogProps> = ({
  isOpen,
  setOpen,
  companyOptions,
  onUpload,
  accept = ".json",
}) => {
  const [companyId, setCompanyId] = useState("");
  const [ruleType, setRuleType] = useState<RuleEngineType | "">("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setCompanyId("");
      setRuleType("");
      setFile(null);
    }
  }, [isOpen]);

  const ruleTypeOptions: Option[] = useMemo(
    () => [
      { value: "membership", label: "membership" },
      { value: "lounge-entry", label: "lounge-entry" },
    ],
    [],
  );

  const canUpload = companyId && ruleType;

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selected = event.target.files?.[0] ?? null;
    setFile(selected);

    if (selected && canUpload) {
      await onUpload?.({
        companyId,
        ruleType: ruleType as RuleEngineType,
        file: selected,
      });
      setOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="w-[480px]">
        <DialogHeader>
          <DialogTitle>Upload Rule Engine List</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          You can upload the .JSON file containing the master data for all the
          rule engines you wish to add.
        </DialogDescription>

        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Select
            placeholderLabel="Select a Company"
            options={companyOptions}
            value={companyId}
            onItemChange={setCompanyId}
          />
          <Select
            placeholderLabel="Select the Rule Type"
            options={ruleTypeOptions}
            value={ruleType}
            onItemChange={(v) => setRuleType(v as RuleEngineType)}
          />
        </div>

        <InputFile
          className="mt-3"
          accept={accept}
          onChange={handleFileChange}
          disabled={!canUpload}
          description={
            canUpload
              ? "Supports: JSON"
              : "Select a company and rule type to enable"
          }
        />
        {file && (
          <CsvFileCard name={file.name} size={file.size} progress={100} />
        )}

        <DialogFooter className="w-full">
          <Button
            onClick={() => setOpen(false)}
            type="button"
            variant="secondary-gray"
            className="mt-4 w-full cursor-pointer"
            data-slot="dialog-close"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
