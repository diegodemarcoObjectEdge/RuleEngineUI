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

      return NextResponse.json({
        data: {
          companies: {
            totalCount: uniqueCompanyIds.length,
            pagination: {
              limit: 10,
              offset: 0,
            },
            results: uniqueCompanyIds.map((companyId) => ({
              __typename: "Company",
              id: companyId.toString(),
              name: `Company ${companyId}`,
            })),
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
