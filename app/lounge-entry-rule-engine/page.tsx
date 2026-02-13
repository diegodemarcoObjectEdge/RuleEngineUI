"use client";

import React, { useEffect, useMemo, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { DownloadIcon, EllipsisVerticalIcon } from "lucide-react";
import { Input } from "../../components/design-system/input";
import { Button } from "../../components/design-system/button";
import { Select } from "../../components/design-system/select";
import { Accordion } from "../../components/accordion";
import { SortButton } from "../../components/sort-button";
import { Divider } from "../../components/ui/divider";
import { DropdownMenu } from "../../components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/design-system/dialog";
import { toast } from "../../components/design-system/toast";
import { useGetCompanyListQuery } from "../../graphql";

type RuleOperand = {
  type: string;
  value: string;
};

type RuleValue = {
  id: string;
  fieldId: string;
  operator: string;
  leftOperand: RuleOperand;
  rightOperand?: RuleOperand | null;
};

type Rule = {
  id: string;
  description: string;
  status: "ACTIVE" | "INACTIVE";
  startDate: string;
  endDate?: string | null;
  order: number;
  values: RuleValue[];
};

type RuleEngineTag = {
  id: string;
  name: string;
  order: number;
  greetingMessage?: string | null;
  type: string;
  subType?: string | null;
  rules: Rule[];
};

type RuleEngineTagGroup = {
  id: string;
  name: string;
  order: number;
  tags: RuleEngineTag[];
};

type RuleField = {
  id: string;
  name: string;
  path: string;
  order: number;
  baseType: string;
  typeConfig: string;
  allowedOperators: string[];
  isArray: boolean;
};

type RuleFieldGroup = {
  id: string;
  name: string;
  order: number;
  type: string;
  fields: RuleField[];
};

type GetConsolidatedResult = {
  consolidatedTagRuleEngine: {
    fieldGroups: RuleFieldGroup[];
    tagGroups: RuleEngineTagGroup[];
  };
};

type UpdateConsolidatedResult = {
  updateConsolidatedTagRuleEngine: {
    tagGroups: RuleEngineTagGroup[];
  };
};

const GET_CONSOLIDATED_TAG_RULE_ENGINE = gql`
  query GetConsolidatedTagRuleEngine($companyId: ID!) {
    consolidatedTagRuleEngine(companyId: $companyId) {
      fieldGroups {
        id
        name
        order
        type
        fields {
          id
          name
          path
          order
          baseType
          typeConfig
          allowedOperators
          isArray
        }
      }
      tagGroups {
        id
        name
        order
        tags {
          id
          name
          order
          greetingMessage
          type
          subType
          rules {
            id
            description
            status
            startDate
            endDate
            order
            values {
              id
              fieldId
              operator
              leftOperand {
                type
                value
              }
              rightOperand {
                type
                value
              }
            }
          }
        }
      }
    }
  }
`;

const UPDATE_CONSOLIDATED_TAG_RULE_ENGINE = gql`
  mutation UpdateConsolidatedTagRuleEngine(
    $companyId: String!
    $payload: UpdateConsolidatedTagRuleEnginePayload!
  ) {
    updateConsolidatedTagRuleEngine(companyId: $companyId, payload: $payload) {
      tagGroups {
        id
        name
        order
        tags {
          id
          name
          order
          greetingMessage
          type
          subType
          rules {
            id
            description
            status
            startDate
            endDate
            order
            values {
              id
              fieldId
              operator
              leftOperand {
                type
                value
              }
              rightOperand {
                type
                value
              }
            }
          }
        }
      }
    }
  }
`;

const createId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const LoungeEntryRuleEnginePage: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [tagGroups, setTagGroups] = useState<RuleEngineTagGroup[]>([]);
  const [fieldGroups, setFieldGroups] = useState<RuleFieldGroup[]>([]);
  const [activeTagId, setActiveTagId] = useState<string | null>(null);
  const [tagGroupSortDesc, setTagGroupSortDesc] = useState(true);

  const [tagDialogOpen, setTagDialogOpen] = useState(false);
  const [ruleDialogOpen, setRuleDialogOpen] = useState(false);
  const [fieldDialogOpen, setFieldDialogOpen] = useState(false);
  const [editTagId, setEditTagId] = useState<string | null>(null);
  const [deactivateTagId, setDeactivateTagId] = useState<string | null>(null);

  const [tagForm, setTagForm] = useState({
    groupName: "",
    name: "",
    greetingMessage: "",
  });
  const [ruleForm, setRuleForm] = useState({
    description: "",
    status: "ACTIVE" as "ACTIVE" | "INACTIVE",
    startDate: "",
    endDate: "",
  });
  const [fieldForm, setFieldForm] = useState({
    ruleId: "",
  });
  const [fieldDraftValues, setFieldDraftValues] = useState<
    Record<string, string>
  >({});

  const { data: companiesData } = useGetCompanyListQuery({
    variables: { filter: {} },
  });

  const companyOptions = useMemo(
    () =>
      (companiesData?.companies?.results ?? []).map((company) => ({
        label: company.name,
        value: company.id,
      })),
    [companiesData],
  );

  useEffect(() => {
    if (!selectedCompanyId && companyOptions.length > 0) {
      setSelectedCompanyId(companyOptions[0].value);
    }
  }, [companyOptions, selectedCompanyId]);

  const { data, loading, refetch } = useQuery<GetConsolidatedResult>(
    GET_CONSOLIDATED_TAG_RULE_ENGINE,
    {
      variables: { companyId: selectedCompanyId },
      skip: !selectedCompanyId,
      fetchPolicy: "network-only",
    },
  );

  const [updateConsolidatedTagRuleEngine, { loading: saving }] =
    useMutation<UpdateConsolidatedResult>(UPDATE_CONSOLIDATED_TAG_RULE_ENGINE);

  useEffect(() => {
    if (!data?.consolidatedTagRuleEngine) return;
    setFieldGroups(data.consolidatedTagRuleEngine.fieldGroups ?? []);
    setTagGroups(data.consolidatedTagRuleEngine.tagGroups ?? []);
  }, [data]);

  const allFields = useMemo(
    () =>
      fieldGroups
        .flatMap((group) => group.fields)
        .sort((a, b) => a.order - b.order),
    [fieldGroups],
  );

  const activeTag = useMemo(
    () =>
      tagGroups
        .flatMap((group) => group.tags)
        .find((tag) => tag.id === activeTagId) ?? null,
    [tagGroups, activeTagId],
  );

  const openAddTag = () => {
    setEditTagId(null);
    setTagForm({ groupName: "", name: "", greetingMessage: "" });
    setTagDialogOpen(true);
  };

  const openEditTag = (tagId: string) => {
    const found = tagGroups
      .flatMap((group) => group.tags.map((tag) => ({ group, tag })))
      .find((entry) => entry.tag.id === tagId);
    if (!found) return;
    setEditTagId(tagId);
    setTagForm({
      groupName: found.group.name,
      name: found.tag.name,
      greetingMessage: found.tag.greetingMessage ?? "",
    });
    setTagDialogOpen(true);
  };

  const addOrUpdateTag = () => {
    if (!tagForm.groupName.trim() || !tagForm.name.trim()) {
      toast.error("Group name and tag name are required.");
      return;
    }

    setTagGroups((prev) => {
      if (editTagId) {
        return prev.map((group) => ({
          ...group,
          tags: group.tags.map((tag) =>
            tag.id === editTagId
              ? {
                  ...tag,
                  name: tagForm.name.trim(),
                  greetingMessage: tagForm.greetingMessage.trim(),
                }
              : tag,
          ),
        }));
      }

      const existingGroup = prev.find(
        (group) =>
          group.name.trim().toLowerCase() ===
          tagForm.groupName.trim().toLowerCase(),
      );

      const newTag: RuleEngineTag = {
        id: createId(),
        name: tagForm.name.trim(),
        greetingMessage: tagForm.greetingMessage.trim(),
        order: 1,
        type: "membership",
        subType: "",
        rules: [],
      };

      if (existingGroup) {
        return prev.map((group) =>
          group.id === existingGroup.id
            ? {
                ...group,
                tags: [
                  ...group.tags,
                  {
                    ...newTag,
                    order:
                      (group.tags.reduce(
                        (maxOrder, tag) => Math.max(maxOrder, tag.order),
                        0,
                      ) || 0) + 1,
                  },
                ],
              }
            : group,
        );
      }

      return [
        ...prev,
        {
          id: createId(),
          name: tagForm.groupName.trim(),
          order:
            (prev.reduce(
              (maxOrder, group) => Math.max(maxOrder, group.order),
              0,
            ) || 0) + 1,
          tags: [newTag],
        },
      ];
    });

    setTagDialogOpen(false);
  };

  const addRule = () => {
    if (!activeTagId) {
      toast.error("Select a tag first.");
      return;
    }
    if (!ruleForm.description.trim()) {
      toast.error("Rule description is required.");
      return;
    }

    const startDateIso = ruleForm.startDate
      ? new Date(ruleForm.startDate).toISOString()
      : new Date().toISOString();
    const endDateIso = ruleForm.endDate
      ? new Date(ruleForm.endDate).toISOString()
      : null;

    setTagGroups((prev) =>
      prev.map((group) => ({
        ...group,
        tags: group.tags.map((tag) =>
          tag.id === activeTagId
            ? {
                ...tag,
                rules: [
                  ...tag.rules,
                  {
                    id: createId(),
                    description: ruleForm.description.trim(),
                    status: ruleForm.status,
                    startDate: startDateIso,
                    endDate: endDateIso,
                    order:
                      (tag.rules.reduce(
                        (maxOrder, rule) => Math.max(maxOrder, rule.order),
                        0,
                      ) || 0) + 1,
                    values: [],
                  },
                ],
              }
            : tag,
        ),
      })),
    );

    setRuleForm({
      description: "",
      status: "ACTIVE",
      startDate: "",
      endDate: "",
    });
    setRuleDialogOpen(false);
  };

  const upsertFieldValue = (field: RuleField, value: string) => {
    if (!activeTagId) {
      return;
    }
    if (!fieldForm.ruleId) {
      return;
    }

    const baseType = field?.baseType ?? "STRING";

    setTagGroups((prev) =>
      prev.map((group) => ({
        ...group,
        tags: group.tags.map((tag) =>
          tag.id === activeTagId
            ? {
                ...tag,
                rules: tag.rules.map((rule) =>
                  rule.id === fieldForm.ruleId
                    ? {
                        ...rule,
                        values: (() => {
                          const existingIndex = rule.values.findIndex(
                            (item) => item.fieldId === field.id,
                          );
                          if (existingIndex >= 0) {
                            const updated = [...rule.values];
                            updated[existingIndex] = {
                              ...updated[existingIndex],
                              leftOperand: {
                                ...updated[existingIndex].leftOperand,
                                value,
                              },
                            };
                            return updated;
                          }
                          return [
                            ...rule.values,
                            {
                              id: createId(),
                              fieldId: field.id,
                              operator: field.allowedOperators?.[0] ?? "EQUALS",
                              leftOperand: {
                                type: baseType,
                                value,
                              },
                              rightOperand: null,
                            },
                          ];
                        })(),
                      }
                    : rule,
                ),
              }
            : tag,
        ),
      })),
    );
  };

  const duplicateTag = (tagId: string) => {
    setTagGroups((prev) =>
      prev.map((group) => {
        const sourceTag = group.tags.find((tag) => tag.id === tagId);
        if (!sourceTag) return group;

        const duplicate: RuleEngineTag = {
          ...sourceTag,
          id: createId(),
          name: `${sourceTag.name} (Copy)`,
          order:
            (group.tags.reduce(
              (maxOrder, tag) => Math.max(maxOrder, tag.order),
              0,
            ) || 0) + 1,
          rules: sourceTag.rules.map((rule) => ({
            ...rule,
            id: createId(),
            values: rule.values.map((value) => ({
              ...value,
              id: createId(),
            })),
          })),
        };

        return { ...group, tags: [...group.tags, duplicate] };
      }),
    );
  };

  const deactivateTag = () => {
    if (!deactivateTagId) return;
    setTagGroups((prev) =>
      prev.map((group) => ({
        ...group,
        tags: group.tags.map((tag) =>
          tag.id === deactivateTagId
            ? {
                ...tag,
                rules: tag.rules.map((rule) => ({
                  ...rule,
                  status: "INACTIVE",
                })),
              }
            : tag,
        ),
      })),
    );
    setDeactivateTagId(null);
  };

  const handleSortChange = (desc: boolean) => {
    setTagGroupSortDesc(desc);
    setTagGroups((prev) => {
      const sorted = [...prev].sort((a, b) => {
        return desc ? a.order - b.order : b.order - a.order;
      });
      return sorted;
    });
  };

  const handleDownloadJson = () => {
    if (!selectedCompanyId) {
      toast.error("Select a company first.");
      return;
    }

    const exportData = {
      companyId: selectedCompanyId,
      tagGroups,
      fieldGroups,
    };

    try {
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `lounge-entry-rule-engine-${selectedCompanyId}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      toast.error("Failed to export JSON.");
    }
  };

  const saveRuleEngine = async () => {
    if (!selectedCompanyId) {
      toast.error("Select a company first.");
      return;
    }

    try {
      const payload = {
        tagGroups: tagGroups.map((group) => ({
          name: group.name,
          order: group.order,
          tags: group.tags.map((tag) => ({
            name: tag.name,
            type: tag.type || "membership",
            subType: tag.subType || "",
            greetingMessage: tag.greetingMessage || "",
            order: tag.order,
            rules: tag.rules.map((rule) => ({
              description: rule.description,
              status: rule.status,
              startDate: rule.startDate,
              endDate: rule.endDate || null,
              order: rule.order,
              values: rule.values.map((value) => ({
                fieldId: value.fieldId,
                operator: value.operator,
                leftOperand: value.leftOperand,
                rightOperand: value.rightOperand,
              })),
            })),
          })),
        })),
      };

      const result = await updateConsolidatedTagRuleEngine({
        variables: {
          companyId: selectedCompanyId,
          payload,
        },
      });

      if (result.data?.updateConsolidatedTagRuleEngine?.tagGroups) {
        setTagGroups(result.data.updateConsolidatedTagRuleEngine.tagGroups);
      }
      await refetch();
      toast.success("Rule engine saved.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save rule engine.");
    }
  };

  const ruleOptions = (activeTag?.rules ?? []).map((rule) => ({
    label: `${rule.order}. ${rule.description}`,
    value: rule.id,
  }));

  const selectedRule = (activeTag?.rules ?? []).find(
    (rule) => rule.id === fieldForm.ruleId,
  );
  const selectedRuleValuesByFieldId = new Map(
    (selectedRule?.values ?? []).map((value) => [value.fieldId, value]),
  );
  const inputFieldGroups = fieldGroups
    .filter((group) => group.type === "INPUT")
    .sort((a, b) => a.order - b.order);
  const outputFieldGroups = fieldGroups
    .filter((group) => group.type === "OUTPUT")
    .sort((a, b) => a.order - b.order);

  return (
    <section className="container flex min-h-dvh min-w-2xl flex-col px-8 pt-12 align-middle">
      <div className="inline-flex h-full w-full flex-col items-center justify-start gap-5 px-8">
        <div className="flex w-full flex-row items-center justify-between gap-3">
          <h1 className="text-lg font-semibold">Rule Engine</h1>
          <div className="flex flex-row items-center justify-end gap-3 flex-wrap">
            <Select
              placeholderLabel="Select Company"
              options={companyOptions}
              value={selectedCompanyId}
              onItemChange={setSelectedCompanyId}
            />
            <Button
              variant="secondary-gray"
              iconLeft={<DownloadIcon size={15} />}
              onClick={handleDownloadJson}
            >
              Download .JSON
            </Button>
            <Button variant="secondary-gray" onClick={openAddTag}>
              Add Tag
            </Button>
            <Button
              variant="secondary-gray"
              onClick={() => setRuleDialogOpen(true)}
              disabled={!activeTag}
            >
              Add Rule(Test)
            </Button>
            <Button
              variant="secondary-gray"
              onClick={() => setFieldDialogOpen(true)}
              disabled={!activeTag || (activeTag.rules ?? []).length === 0}
            >
              Add Field
            </Button>
            <Button onClick={saveRuleEngine} disabled={saving}>
              {saving ? "Saving..." : "Save Rule Engine"}
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-row gap-3">
          <div className="w-[312px] min-w-[312px] rounded-md border p-4">
            {loading ? <p className="text-sm text-gray-500">Loading...</p> : null}
            {!loading && tagGroups.length === 0 ? (
              <div className="text-primary-900 flex flex-col gap-2 text-center text-sm font-semibold">
                No tags available. Please add a tag to start configuring your
                first rule.
                <button
                  onClick={openAddTag}
                  className="text-brand-600 cursor-pointer hover:underline"
                >
                  Add a New Tag
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center gap-2">
                  <Divider className="flex-1" />
                  <SortButton
                    label={`Priority (${tagGroupSortDesc ? "Highest to Lowest" : "Lowest to Highest"})`}
                    onSortChange={handleSortChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  {tagGroups.map((group) => (
                    <Accordion title={group.name} key={group.id} defaultOpen={true}>
                      <div className="flex flex-col gap-2">
                        {group.tags
                          .slice()
                          .sort((a, b) => a.order - b.order)
                          .map((tag) => (
                            <div
                              onClick={() => setActiveTagId(tag.id)}
                              key={tag.id}
                              className={`flex cursor-pointer justify-between gap-1 rounded-md border-2 px-3 py-2 text-sm font-medium text-gray-700 ${
                                activeTagId === tag.id
                                  ? "border-gray-100 bg-gray-200"
                                  : "border-white hover:bg-gray-200"
                              }`}
                            >
                              {tag.name}
                              <DropdownMenu
                                title={
                                  <button className="cursor-pointer" type="button">
                                    <EllipsisVerticalIcon size={20} />
                                  </button>
                                }
                                items={[
                                  {
                                    label: "Edit",
                                    onClick: () => openEditTag(tag.id),
                                  },
                                  {
                                    label: "Duplicate",
                                    onClick: () => duplicateTag(tag.id),
                                  },
                                  {
                                    label: "Deactivate",
                                    onClick: () => setDeactivateTagId(tag.id),
                                    variant: "destructive",
                                  },
                                ]}
                              />
                            </div>
                          ))}
                      </div>
                    </Accordion>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex-1 rounded-md border border-gray-200 p-4">
            {!activeTag ? (
              <p className="text-sm text-gray-500">
                Select a tag to see rules and fields.
              </p>
            ) : (
              <div className="space-y-4">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    {activeTag.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {activeTag.greetingMessage || "No greeting message"}
                  </p>
                </div>

                {(activeTag.rules ?? [])
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((rule) => (
                    <div key={rule.id} className="rounded-md border border-gray-200">
                      <div className="flex items-center justify-between border-b px-3 py-2">
                        <p className="text-sm font-medium text-gray-800">
                          {rule.order}. {rule.description}
                        </p>
                        <span
                          className={`text-xs font-semibold ${
                            rule.status === "ACTIVE"
                              ? "text-green-700"
                              : "text-gray-500"
                          }`}
                        >
                          {rule.status}
                        </span>
                      </div>
                      <div className="space-y-2 px-3 py-2">
                        {rule.values.length === 0 ? (
                          <p className="text-xs text-gray-500">No fields added.</p>
                        ) : (
                          rule.values.map((value) => {
                            const field = allFields.find(
                              (item) => item.id === value.fieldId,
                            );
                            return (
                              <div
                                key={value.id}
                                className="flex items-center justify-between rounded border border-gray-100 bg-gray-50 px-2 py-1 text-xs"
                              >
                                <span className="font-medium text-gray-700">
                                  {field?.name ?? `Field ${value.fieldId}`}
                                </span>
                                <span className="text-gray-600">
                                  {value.operator} {value.leftOperand.value}
                                </span>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={tagDialogOpen} onOpenChange={setTagDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editTagId ? "Edit Tag" : "Add Tag"}</DialogTitle>
            <DialogDescription>
              Provide group, name and greeting message.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              name="groupName"
              inputSize="sm"
              placeholder="Group name"
              value={tagForm.groupName}
              onChange={(e) =>
                setTagForm((prev) => ({ ...prev, groupName: e.target.value }))
              }
              disabled={Boolean(editTagId)}
            />
            <Input
              name="tagName"
              inputSize="sm"
              placeholder="Tag name"
              value={tagForm.name}
              onChange={(e) =>
                setTagForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <Input
              name="greetingMessage"
              inputSize="sm"
              placeholder="Greeting message"
              value={tagForm.greetingMessage}
              onChange={(e) =>
                setTagForm((prev) => ({
                  ...prev,
                  greetingMessage: e.target.value,
                }))
              }
            />
          </div>
          <DialogFooter>
            <Button variant="secondary-gray" onClick={() => setTagDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addOrUpdateTag}>{editTagId ? "Update" : "Add"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={ruleDialogOpen} onOpenChange={setRuleDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Rule</DialogTitle>
            <DialogDescription>Create a new rule for the selected tag.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              name="ruleDescription"
              inputSize="sm"
              placeholder="Rule description"
              value={ruleForm.description}
              onChange={(e) =>
                setRuleForm((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <Select
              placeholderLabel="Status"
              options={[
                { label: "ACTIVE", value: "ACTIVE" },
                { label: "INACTIVE", value: "INACTIVE" },
              ]}
              value={ruleForm.status}
              onItemChange={(value) =>
                setRuleForm((prev) => ({
                  ...prev,
                  status: value as "ACTIVE" | "INACTIVE",
                }))
              }
            />
            <Input
              name="startDate"
              inputSize="sm"
              type="datetime-local"
              value={ruleForm.startDate}
              onChange={(e) =>
                setRuleForm((prev) => ({ ...prev, startDate: e.target.value }))
              }
            />
            <Input
              name="endDate"
              inputSize="sm"
              type="datetime-local"
              value={ruleForm.endDate}
              onChange={(e) =>
                setRuleForm((prev) => ({ ...prev, endDate: e.target.value }))
              }
            />
          </div>
          <DialogFooter>
            <Button variant="secondary-gray" onClick={() => setRuleDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addRule}>Add Rule</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={fieldDialogOpen} onOpenChange={setFieldDialogOpen}>
        <DialogContent className="max-h-[85vh] max-w-5xl overflow-hidden">
          <DialogHeader>
            <DialogTitle>Add Field</DialogTitle>
            <DialogDescription>
              Select a rule, then add fields from INPUT and OUTPUT lists.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 overflow-y-auto pr-1">
            <Select
              placeholderLabel="Select Rule"
              options={ruleOptions}
              value={fieldForm.ruleId}
              onItemChange={(value) =>
                setFieldForm((prev) => ({ ...prev, ruleId: value }))
              }
            />
            {!fieldForm.ruleId ? (
              <p className="text-sm text-gray-500">
                Select a rule to view available fields.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-md border border-gray-200 p-3">
                  <h4 className="mb-3 text-sm font-semibold text-gray-800">
                    Input Fields
                  </h4>
                  <div className="space-y-3">
                    {inputFieldGroups.map((group) => (
                      <div key={group.id} className="space-y-2">
                        <p className="text-xs font-semibold text-gray-600">
                          {group.name}
                        </p>
                        {group.fields
                          .slice()
                          .sort((a, b) => a.order - b.order)
                          .map((field) => {
                            const currentValue =
                              fieldDraftValues[field.id] ??
                              selectedRuleValuesByFieldId.get(field.id)
                                ?.leftOperand.value ??
                              "";
                            return (
                              <div
                                key={field.id}
                                className="flex items-center gap-2 rounded border border-gray-100 bg-gray-50 px-2 py-1.5"
                              >
                                <span className="min-w-[120px] text-sm text-gray-700">
                                  {field.name}
                                </span>
                                <span className="text-sm text-gray-500">:</span>
                                <Input
                                  name={`field-input-${field.id}`}
                                  inputSize="sm"
                                  placeholder={field.path}
                                  value={currentValue}
                                  onChange={(event) =>
                                    setFieldDraftValues((prev) => ({
                                      ...prev,
                                      [field.id]: event.target.value,
                                    }))
                                  }
                                  onBlur={(event) =>
                                    upsertFieldValue(field, event.target.value)
                                  }
                                  onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                      event.preventDefault();
                                      upsertFieldValue(
                                        field,
                                        (event.target as HTMLInputElement).value,
                                      );
                                    }
                                  }}
                                />
                              </div>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-gray-200 p-3">
                  <h4 className="mb-3 text-sm font-semibold text-gray-800">
                    Output Fields
                  </h4>
                  <div className="space-y-3">
                    {outputFieldGroups.map((group) => (
                      <div key={group.id} className="space-y-2">
                        <p className="text-xs font-semibold text-gray-600">
                          {group.name}
                        </p>
                        {group.fields
                          .slice()
                          .sort((a, b) => a.order - b.order)
                          .map((field) => {
                            const currentValue =
                              fieldDraftValues[field.id] ??
                              selectedRuleValuesByFieldId.get(field.id)
                                ?.leftOperand.value ??
                              "";
                            return (
                              <div
                                key={field.id}
                                className="flex items-center gap-2 rounded border border-gray-100 bg-gray-50 px-2 py-1.5"
                              >
                                <span className="min-w-[120px] text-sm text-gray-700">
                                  {field.name}
                                </span>
                                <span className="text-sm text-gray-500">:</span>
                                <Input
                                  name={`field-output-${field.id}`}
                                  inputSize="sm"
                                  placeholder={field.path}
                                  value={currentValue}
                                  onChange={(event) =>
                                    setFieldDraftValues((prev) => ({
                                      ...prev,
                                      [field.id]: event.target.value,
                                    }))
                                  }
                                  onBlur={(event) =>
                                    upsertFieldValue(field, event.target.value)
                                  }
                                  onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                      event.preventDefault();
                                      upsertFieldValue(
                                        field,
                                        (event.target as HTMLInputElement).value,
                                      );
                                    }
                                  }}
                                />
                              </div>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="secondary-gray"
              onClick={() => setFieldDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(deactivateTagId)} onOpenChange={() => setDeactivateTagId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deactivate Tag</DialogTitle>
            <DialogDescription>
              This will mark all rules in this tag as INACTIVE.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary-gray" onClick={() => setDeactivateTagId(null)}>
              Cancel
            </Button>
            <Button variant="primary-destructive" onClick={deactivateTag}>
              Deactivate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LoungeEntryRuleEnginePage;
