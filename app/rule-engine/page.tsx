"use client";

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Input } from "../../components/design-system/input";
import { Button } from "../../components/design-system/button";
import { DataTable } from "../../components/design-system/data-table";
import { Paginate } from "../../components/design-system/paginate";
import { BooleanLabel } from "../../components/ui/boolean-label";
import { SearchIcon } from "../../icons";
import {
  UploadRuleEngineDialog,
  type RuleEngineType,
} from "../../components/dialogs/rule-engine/upload-rule-engine-dialog";
import {
  ImportedRuleEngineDialog,
  type RuleImportResult,
} from "../../components/dialogs/rule-engine/imported-rule-engine-dialog";
import { toast } from "../../components/design-system/toast";
import {
  useGetCompanyListQuery,
  useGetRuleEngineModelsQuery,
  useGetRuleEngineModelsLazyQuery,
  useCreateRuleEngineMutation,
  useCreateRuleEngineModelMutation,
  RuleEngineSortField,
  SortDirection,
  useGetRuleEngineModelLazyQuery,
} from "../../graphql";

interface RuleEngineRow {
  id: string;
  name: string;
  company: string;
  companyId: string;
  ruleType: string;
  uploadDate: string;
  active: boolean;
  modelId?: string;
}

const formatUploadDate = (iso: string) =>
  new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const downloadJsonFile = (filename: string, data: unknown) => {
  try {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (e) {
    console.error("Download JSON error", e);
    toast.error("Could not download JSON. Please try again.");
  }
};

const PAGE_SIZE = 10;

const RuleEnginePage: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [importedDialogOpen, setImportedDialogOpen] = useState(false);
  const [importedRuleData] = useState<RuleImportResult | undefined>(undefined);
  const [sortField, setSortField] = useState<RuleEngineSortField>(
    RuleEngineSortField.CreatedAt,
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.Desc,
  );

  useEffect(() => {
    setPageIndex(0);
  }, [searchValue]);

  useEffect(() => {
    setPageIndex(0);
  }, [sortField, sortDirection]);

  const toggleSort = useCallback((field: RuleEngineSortField) => {
    setSortField((prevField) => {
      if (prevField !== field) {
        setSortDirection(SortDirection.Asc);
        return field;
      }
      setSortDirection((prevDir) =>
        prevDir === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc,
      );
      return field;
    });
  }, []);

  const { data: companiesData } = useGetCompanyListQuery({
    variables: { filter: {} },
  });
  const companyOptions = useMemo(
    () =>
      (companiesData?.companies?.results ?? []).map((c) => ({
        value: c.id,
        label: c.name,
      })),
    [companiesData],
  );
  const companyNameById = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of companiesData?.companies?.results ?? []) {
      map.set(c.id, c.name);
    }
    return map;
  }, [companiesData]);

  const { data, loading, error, refetch } = useGetRuleEngineModelsQuery({
    variables: {
      filter: searchValue ? { search: searchValue } : undefined,
      pagination: { offset: pageIndex * PAGE_SIZE, limit: PAGE_SIZE },
      sort: {
        field: sortField,
        direction: sortDirection,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const [fetchEngines] = useGetRuleEngineModelsLazyQuery();
  const [createRuleEngine, { error: createRuleEngineError }] =
    useCreateRuleEngineMutation();
  const [createRuleEngineModel] = useCreateRuleEngineModelMutation();

  const [getModel] = useGetRuleEngineModelLazyQuery();
  const downloadModel = useCallback(
    async (companyId: string, modelId: string, filename: string) => {
      try {
        const { data } = await getModel({
          variables: { companyId, id: modelId },
        });
        const json = data?.ruleEngineModel?.model;
        if (!json) throw new Error("No model data");
        downloadJsonFile(filename, json);
      } catch (e) {
        console.error("Download model error", e);
        toast.error("Could not download model JSON. Please try again.");
      }
    },
    [getModel],
  );

  const columns: ColumnDef<RuleEngineRow>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => (
          <button
            type="button"
            className="inline-flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              toggleSort(RuleEngineSortField.Name);
            }}
            title="Sort by Name"
          >
            Name
            {sortField === RuleEngineSortField.Name && (
              <span>{sortDirection === SortDirection.Asc ? "↑" : "↓"}</span>
            )}
          </button>
        ),
        enableSorting: false,
        enableColumnFilter: true,
        cell: ({ row }) => {
          const modelId = row.original.modelId;
          const disabled = !modelId;
          const suffix = modelId
            ? `${row.original.name.replace(/\s+/g, "-")}-model`
            : `${row.original.name.replace(/\s+/g, "-")}`;
          const filename = `${suffix}.json`;
          const companyId = row.original.companyId;
          return (
            <button
              type="button"
              disabled={disabled}
              onClick={() =>
                modelId && downloadModel(companyId, modelId, filename)
              }
              className={`text-blue-600 hover:underline disabled:cursor-not-allowed disabled:opacity-50`}
              title={disabled ? "No model to download" : "Download model JSON"}
            >
              {row.original.name}
            </button>
          );
        },
      },
      {
        accessorKey: "company",
        header: "Company",
        enableSorting: false,
        enableColumnFilter: true,
      },
      {
        accessorKey: "ruleType",
        header: () => (
          <button
            type="button"
            className="inline-flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              toggleSort(RuleEngineSortField.Type);
            }}
            title="Sort by Type"
          >
            Rule Type
            {sortField === RuleEngineSortField.Type && (
              <span>{sortDirection === SortDirection.Asc ? "↑" : "↓"}</span>
            )}
          </button>
        ),
        enableSorting: false,
        enableColumnFilter: true,
      },
      {
        accessorKey: "uploadDate",
        header: () => (
          <button
            type="button"
            className="inline-flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              toggleSort(RuleEngineSortField.CreatedAt);
            }}
            title="Sort by Upload Date"
          >
            Upload Date
            {sortField === RuleEngineSortField.CreatedAt && (
              <span>{sortDirection === SortDirection.Asc ? "↑" : "↓"}</span>
            )}
          </button>
        ),
        enableSorting: false,
        cell: ({ row }) => (
          <span>{formatUploadDate(row.original.uploadDate)}</span>
        ),
      },
      {
        accessorKey: "active",
        header: "Active/Inactive",
        enableSorting: false,
        enableColumnFilter: false,
        cell: ({ row }) => (
          <BooleanLabel
            value={row.original.active}
            trueLabel="Active"
            falseLabel="Inactive"
          />
        ),
      },
    ],
    [downloadModel, toggleSort, sortField, sortDirection],
  );

  const rows: RuleEngineRow[] = useMemo(() => {
    const results = data?.ruleEngineModels?.results ?? [];
    return results.map((m): RuleEngineRow => {
      const re = m.ruleEngine;
      return {
        id: `${re.id}-${m.id}`,
        name: re.name,
        company: companyNameById.get(re.company.id) ?? re.company.id,
        companyId: re.company.id,
        ruleType: re.type,
        uploadDate: (m.createdAt as string) ?? new Date(0).toISOString(),
        active: Boolean(m.isActive),
        modelId: (m.id as string) ?? undefined,
      };
    });
  }, [data, companyNameById]);

  const totalCount = data?.ruleEngineModels?.totalCount ?? 0;

  const handleUpload = async ({
    companyId,
    ruleType,
    file,
  }: {
    companyId: string;
    ruleType: RuleEngineType;
    file: File;
  }) => {
    try {
      const text = await file.text();
      let json: unknown;
      try {
        json = JSON.parse(text);
      } catch {
        toast.error("Invalid JSON file. Please verify structure.");
        return;
      }

      const { data: existing } = await fetchEngines({
        variables: {
          companyId,
          filter: { type: ruleType },
          pagination: { offset: 0, limit: 1 },
          sort: {
            field: RuleEngineSortField.CreatedAt,
            direction: SortDirection.Desc,
          },
        },
        fetchPolicy: "network-only",
      });
      let engineId = existing?.ruleEngineModels?.results?.[0]?.ruleEngine?.id;

      if (!engineId) {
        const name =
          ruleType === "membership" ? "Membership Rules" : "Lounge Entry Rules";
        const created = await createRuleEngine({
          variables: { companyId, payload: { name, type: ruleType } },
        });

        const createdEngine = created.data?.createRuleEngine;
        if (!createdEngine) {
          const message =
            (created as { errors?: Array<{ message?: string }> }).errors?.[0]
              ?.message ||
            createRuleEngineError?.message ||
            "Failed to create Rule Engine. Please try again.";
          toast.error(message);
          return;
        }

        engineId = createdEngine.id;
      }

      if (!engineId) {
        toast.error("Could not resolve Rule Engine ID.");
        return;
      }

      await createRuleEngineModel({
        variables: {
          companyId,
          payload: {
            ruleEngine: { id: engineId },
            model: json as Record<string, unknown>,
          },
        },
      });

      await refetch();

      toast.success(
        "File uploaded. You have updated the rule engine list successfully.",
      );
    } catch (err) {
      console.error("Upload rule engine error", err);
      toast.error("Unexpected error. Please try again.");
    }
  };

  return (
    <section className="container flex min-h-dvh min-w-2xl flex-col px-8 pt-12 align-middle">
      <div className="inline-flex h-full w-full flex-col items-center justify-start gap-5 px-8">
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="text-lg font-semibold">Rule Engine</h1>
          <div className="flex flex-1/2 flex-row items-center justify-end gap-3">
            <Input
              placeholder="Search Rule Engine"
              iconLeft={<SearchIcon width={20} height={20} />}
              inputSize="sm"
              name="search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button onClick={() => setUploadDialogOpen(true)}>
              Upload JSON
            </Button>
          </div>
        </div>

        <DataTable
          isLoading={loading}
          error={Boolean(error)}
          data={rows}
          columns={columns}
          pageIndex={0}
          pageSize={PAGE_SIZE}
          globalFilterQuery={""}
        />

        <div className="w-full pt-5">
          <Paginate
            onPageChange={setPageIndex}
            defaultPageSize={PAGE_SIZE}
            totalRecords={totalCount}
            activePage={pageIndex}
          />
        </div>
      </div>

      <UploadRuleEngineDialog
        isOpen={uploadDialogOpen}
        setOpen={setUploadDialogOpen}
        companyOptions={companyOptions}
        onUpload={handleUpload}
        accept=".json"
      />

      <ImportedRuleEngineDialog
        isOpen={importedDialogOpen}
        setOpen={setImportedDialogOpen}
        importedRuleData={importedRuleData}
      />
    </section>
  );
};

export default RuleEnginePage;
