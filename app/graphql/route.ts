import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;

function toGraphqlCompany(
  companyId: number,
  company?: {
    id: number;
    name: string;
    shortName: string | null;
    code: string;
    status: string;
    lightBackgroundLogoUrl: string | null;
    darkBackgroundLogoUrl: string | null;
    logomarkUrl: string | null;
    reentryWindowMinutes: number | null;
    reentryWindowType: string | null;
    egateReentryWindowMinutes: number | null;
    reportsDedupingWindowMinutes: number | null;
  },
) {
  return {
    __typename: "Company",
    id: companyId.toString(),
    name: company?.name ?? `Company ${companyId}`,
    shortName: company?.shortName ?? company?.name ?? `Company ${companyId}`,
    code: company?.code ?? `COMP-${companyId}`,
    lightBackgroundLogoUrl: company?.lightBackgroundLogoUrl ?? null,
    darkBackgroundLogoUrl: company?.darkBackgroundLogoUrl ?? null,
    logomarkUrl: company?.logomarkUrl ?? null,
    status: company?.status ?? "ACTIVE",
    partnerCompanyGroup: null,
    reentryWindowMinutes: company?.reentryWindowMinutes ?? null,
    reentryWindowType: company?.reentryWindowType ?? null,
    egateReentryWindowMinutes: company?.egateReentryWindowMinutes ?? null,
    reportsDedupingWindowMinutes:
      company?.reportsDedupingWindowMinutes ?? null,
  };
}

function parseRuleFieldValue(
  rawValue: string,
  fallbackFieldId: number,
  fallbackValueId: number,
) {
  try {
    const parsed = JSON.parse(rawValue || "{}");
    const leftOperand = parsed?.leftOperand ?? {
      type: "STRING",
      value: "",
    };
    return {
      __typename: "RuleValue",
      id: String(fallbackValueId),
      fieldId: String(parsed?.fieldId ?? fallbackFieldId),
      operator: parsed?.operator ?? "EQUALS",
      leftOperand: {
        __typename: "RuleOperand",
        type: String(leftOperand?.type ?? "STRING"),
        value: String(leftOperand?.value ?? ""),
      },
      rightOperand: parsed?.rightOperand
        ? {
            __typename: "RuleOperand",
            type: String(parsed.rightOperand.type ?? "STRING"),
            value: String(parsed.rightOperand.value ?? ""),
          }
        : null,
    };
  } catch {
    return {
      __typename: "RuleValue",
      id: String(fallbackValueId),
      fieldId: String(fallbackFieldId),
      operator: "EQUALS",
      leftOperand: {
        __typename: "RuleOperand",
        type: "STRING",
        value: rawValue ?? "",
      },
      rightOperand: null,
    };
  }
}

async function getConsolidatedTagRuleEngine(companyId: number) {
  const [fieldGroups, tagGroups] = await Promise.all([
    prisma.fieldGroup.findMany({
      where: { companyId },
      orderBy: { order: "asc" },
      include: {
        fields: {
          orderBy: { order: "asc" },
          include: {
            fieldType: true,
          },
        },
      },
    }),
    prisma.tagGroup.findMany({
      where: { companyId },
      orderBy: { order: "asc" },
      include: {
        tags: {
          orderBy: { order: "asc" },
          include: {
            rules: {
              orderBy: { order: "asc" },
              include: {
                ruleFieldValues: {
                  include: { field: true },
                },
              },
            },
          },
        },
      },
    }),
  ]);

  return {
    __typename: "ConsolidatedTagRuleEngine",
    fieldGroups: fieldGroups.map((group) => ({
      __typename: "RuleFieldGroup",
      id: String(group.id),
      name: group.name,
      order: group.order,
      type: group.type,
      fields: group.fields.map((field) => ({
        __typename: "RuleField",
        id: String(field.id),
        name: field.name,
        path: field.path,
        order: field.order,
        baseType: field.fieldType.baseType,
        typeConfig: field.fieldType.typeConfig,
        allowedOperators: JSON.parse(field.fieldType.allowedOperators || "[]"),
        isArray: field.fieldType.isArray,
      })),
    })),
    tagGroups: tagGroups.map((group) => ({
      __typename: "RuleEngineTagGroup",
      id: String(group.id),
      name: group.name,
      order: group.order,
      tags: group.tags.map((tag) => ({
        __typename: "RuleEngineTag",
        id: String(tag.id),
        name: tag.name,
        order: tag.order,
        greetingMessage: tag.greetingMessage,
        type: tag.type,
        subType: tag.subType,
        rules: tag.rules.map((rule) => ({
          __typename: "Rule",
          id: String(rule.id),
          description: rule.description,
          status: rule.status,
          startDate: rule.startDate.toISOString(),
          endDate: rule.endDate?.toISOString() ?? null,
          order: rule.order,
          values: rule.ruleFieldValues.map((value) =>
            parseRuleFieldValue(value.value, value.fieldId, value.id),
          ),
        })),
      })),
    })),
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, variables, operationName } = body;

    // Simple GraphQL handler for the most common queries
    if (
      query.includes("GetCompanyList") ||
      query.includes("query GetCompanyList")
    ) {
      const companies = await prisma.ruleEngine.findMany({
        distinct: ["companyId"],
        select: { companyId: true },
      });

      const uniqueCompanyIds = [
        ...new Set(companies.map((c) => c.companyId)),
      ];
      const companiesFromDb = await prisma.company.findMany({
        where: {
          id: { in: uniqueCompanyIds },
        },
        select: {
          id: true,
          name: true,
          shortName: true,
          code: true,
          status: true,
          lightBackgroundLogoUrl: true,
          darkBackgroundLogoUrl: true,
          logomarkUrl: true,
          reentryWindowMinutes: true,
          reentryWindowType: true,
          egateReentryWindowMinutes: true,
          reportsDedupingWindowMinutes: true,
        },
      });
      const companyById = new Map(
        companiesFromDb.map((company) => [company.id, company]),
      );

      return NextResponse.json({
        data: {
          companies: {
            totalCount: uniqueCompanyIds.length,
            pagination: {
              limit: 10,
              offset: 0,
            },
            results: uniqueCompanyIds.map((companyId) =>
              toGraphqlCompany(companyId, companyById.get(companyId)),
            ),
          },
        },
      });
    }

    if (
      query.includes("GetRuleEngineModels") ||
      query.includes("query GetRuleEngineModels")
    ) {
      const pagination = variables?.pagination || { offset: 0, limit: 10 };
      const sort = variables?.sort || { field: "CreatedAt", direction: "Desc" };

      const where: any = {};
      if (variables?.filter?.ruleEngineId) {
        where.ruleEngineId = parseInt(variables.filter.ruleEngineId);
      }

      const orderBy: any = {};
      const field =
        sort.field === "CreatedAt"
          ? "createdAt"
          : sort.field === "Name"
            ? "name"
            : "createdAt";
      orderBy[field] =
        sort.direction === "Asc" ? "asc" : sort.direction === "Desc" ? "desc" : "asc";

      const [results, totalCount] = await Promise.all([
        prisma.ruleEngineModel.findMany({
          where,
          skip: pagination.offset,
          take: pagination.limit,
          orderBy,
          include: {
            ruleEngine: true,
          },
        }),
        prisma.ruleEngineModel.count({ where }),
      ]);

      return NextResponse.json({
        data: {
          ruleEngineModels: {
            totalCount,
            pagination,
            results: results.map((model) => ({
              __typename: "RuleEngineModel",
              id: model.id.toString(),
              ruleEngine: {
                __typename: "RuleEngine",
                id: model.ruleEngine.id.toString(),
                company: {
                  __typename: "Company",
                  id: model.ruleEngine.companyId.toString(),
                  name: "Company",
                },
                name: model.ruleEngine.name,
                type: model.ruleEngine.type,
                activeModelId: model.ruleEngine.currentModelId?.toString(),
                createdAt: model.ruleEngine.createdAt.toISOString(),
              },
              createdAt: model.createdAt.toISOString(),
              isActive: model.id === model.ruleEngine.currentModelId,
              urlPath: `/rule-engine/${model.id}`,
              createdBy: { __typename: "User", id: "1", name: "System" },
              model: JSON.parse(model.model || "{}"),
            })),
          },
        },
      });
    }

    if (
      query.includes("CreateRuleEngine") ||
      query.includes("mutation CreateRuleEngine")
    ) {
      const { companyId, payload } = variables;

      const engine = await prisma.ruleEngine.create({
        data: {
          companyId: parseInt(companyId),
          name: payload.name,
          type: payload.type,
        },
      });

      return NextResponse.json({
        data: {
          createRuleEngine: {
            __typename: "RuleEngine",
            id: engine.id.toString(),
            company: {
              __typename: "Company",
              id: engine.companyId.toString(),
              name: "Company",
            },
            name: engine.name,
            type: engine.type,
            activeModelId: engine.currentModelId?.toString(),
            createdAt: engine.createdAt.toISOString(),
          },
        },
      });
    }

    if (
      query.includes("CreateRuleEngineModel") ||
      query.includes("mutation CreateRuleEngineModel")
    ) {
      const { companyId, payload } = variables;

      const model = await prisma.ruleEngineModel.create({
        data: {
          ruleEngineId: parseInt(payload.ruleEngineId),
          model: JSON.stringify(payload.model),
        },
        include: { ruleEngine: true },
      });

      return NextResponse.json({
        data: {
          createRuleEngineModel: {
            __typename: "RuleEngineModel",
            id: model.id.toString(),
            ruleEngine: {
              __typename: "RuleEngine",
              id: model.ruleEngine.id.toString(),
              company: {
                __typename: "Company",
                id: model.ruleEngine.companyId.toString(),
                name: "Company",
              },
              name: model.ruleEngine.name,
              type: model.ruleEngine.type,
              activeModelId: model.ruleEngine.currentModelId?.toString(),
              createdAt: model.ruleEngine.createdAt.toISOString(),
            },
            createdAt: model.createdAt.toISOString(),
            isActive: false,
            urlPath: `/rule-engine/${model.id}`,
          },
        },
      });
    }

    if (
      query.includes("GetRuleEngineModel") ||
      query.includes("query GetRuleEngineModel")
    ) {
      const { id } = variables;

      const model = await prisma.ruleEngineModel.findUnique({
        where: { id: parseInt(id) },
        include: { ruleEngine: true },
      });

      if (!model) {
        return NextResponse.json({
          data: {
            ruleEngineModel: null,
          },
        });
      }

      return NextResponse.json({
        data: {
          ruleEngineModel: {
            __typename: "RuleEngineModel",
            id: model.id.toString(),
            ruleEngine: {
              __typename: "RuleEngine",
              id: model.ruleEngine.id.toString(),
              company: {
                __typename: "Company",
                id: model.ruleEngine.companyId.toString(),
                name: "Company",
              },
              name: model.ruleEngine.name,
              type: model.ruleEngine.type,
              activeModelId: model.ruleEngine.currentModelId?.toString(),
              createdAt: model.ruleEngine.createdAt.toISOString(),
            },
            createdAt: model.createdAt.toISOString(),
            isActive: model.id === model.ruleEngine.currentModelId,
            urlPath: `/rule-engine/${model.id}`,
            createdBy: { __typename: "User", id: "1", name: "System" },
            model: JSON.parse(model.model || "{}"),
          },
        },
      });
    }

    if (
      query.includes("GetConsolidatedTagRuleEngine") ||
      query.includes("query GetConsolidatedTagRuleEngine")
    ) {
      const companyId = parseInt(variables?.companyId, 10);
      if (Number.isNaN(companyId)) {
        return NextResponse.json(
          {
            errors: [{ message: "Invalid companyId" }],
          },
          { status: 400 },
        );
      }

      const consolidated = await getConsolidatedTagRuleEngine(companyId);
      return NextResponse.json({
        data: {
          consolidatedTagRuleEngine: consolidated,
        },
      });
    }

    if (
      query.includes("UpdateConsolidatedTagRuleEngine") ||
      query.includes("mutation UpdateConsolidatedTagRuleEngine")
    ) {
      const companyId = parseInt(variables?.companyId, 10);
      const payload = variables?.payload;

      if (Number.isNaN(companyId) || !payload?.tagGroups) {
        return NextResponse.json(
          {
            errors: [{ message: "Invalid payload" }],
          },
          { status: 400 },
        );
      }

      await prisma.$transaction(async (tx) => {
        const existingTags = await tx.tag.findMany({
          where: { companyId },
          select: { id: true },
        });
        const tagIds = existingTags.map((tag) => tag.id);

        if (tagIds.length > 0) {
          const existingRules = await tx.rule.findMany({
            where: { tagId: { in: tagIds } },
            select: { id: true },
          });
          const ruleIds = existingRules.map((rule) => rule.id);

          if (ruleIds.length > 0) {
            await tx.ruleFieldValue.deleteMany({
              where: { ruleId: { in: ruleIds } },
            });
          }

          await tx.rule.deleteMany({ where: { tagId: { in: tagIds } } });
          await tx.tag.deleteMany({ where: { companyId } });
        }

        await tx.tagGroup.deleteMany({ where: { companyId } });

        for (const inputGroup of payload.tagGroups as any[]) {
          const createdGroup = await tx.tagGroup.create({
            data: {
              companyId,
              name: inputGroup.name,
              order: inputGroup.order ?? 0,
            },
          });

          for (const inputTag of inputGroup.tags ?? []) {
            const createdTag = await tx.tag.create({
              data: {
                companyId,
                tagGroupId: createdGroup.id,
                name: inputTag.name,
                greetingMessage: inputTag.greetingMessage ?? "",
                type: inputTag.type ?? "membership",
                subType: inputTag.subType ?? "",
                order: inputTag.order ?? 0,
                status: "ACTIVE",
              },
            });

            for (const inputRule of inputTag.rules ?? []) {
              const createdRule = await tx.rule.create({
                data: {
                  companyId,
                  tagId: createdTag.id,
                  description: inputRule.description ?? "",
                  status: inputRule.status ?? "ACTIVE",
                  startDate: inputRule.startDate
                    ? new Date(inputRule.startDate)
                    : new Date(),
                  endDate: inputRule.endDate ? new Date(inputRule.endDate) : null,
                  order: inputRule.order ?? 0,
                },
              });

              for (const inputValue of inputRule.values ?? []) {
                const fieldId = parseInt(inputValue.fieldId, 10);
                if (Number.isNaN(fieldId)) continue;

                await tx.ruleFieldValue.create({
                  data: {
                    ruleId: createdRule.id,
                    fieldId,
                    value: JSON.stringify({
                      fieldId: String(inputValue.fieldId),
                      operator: inputValue.operator ?? "EQUALS",
                      leftOperand: inputValue.leftOperand ?? {
                        type: "STRING",
                        value: "",
                      },
                      rightOperand: inputValue.rightOperand ?? null,
                    }),
                  },
                });
              }
            }
          }
        }
      });

      const consolidated = await getConsolidatedTagRuleEngine(companyId);
      return NextResponse.json({
        data: {
          updateConsolidatedTagRuleEngine: {
            __typename: "ConsolidatedTagRuleEngine",
            tagGroups: consolidated.tagGroups,
          },
        },
      });
    }

    // Default response for unknown queries
    return NextResponse.json(
      {
        errors: [
          {
            message: "Query not supported",
          },
        ],
      },
      { status: 400 },
    );
  } catch (error) {
    console.error("GraphQL Error:", error);
    return NextResponse.json(
      {
        errors: [
          {
            message: "Internal server error",
          },
        ],
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "This is a GraphQL endpoint. Use POST requests with a query.",
  });
}
